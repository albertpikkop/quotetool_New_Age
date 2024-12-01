import { API } from '../../constants';
import { AppError } from '../../utils/errorHandling';
import type { ApiRequestConfig, ApiResponse } from '../../types/common/api';

class ApiClient {
  private baseURL: string;
  private defaultConfig: ApiRequestConfig;
  private cache = new Map<string, { data: any; timestamp: number }>();

  constructor(config: ApiRequestConfig = {}) {
    this.baseURL = config.baseURL || API.BASE_URL;
    this.defaultConfig = {
      timeout: API.CONFIG.TIMEOUT,
      retryAttempts: API.CONFIG.RETRY_ATTEMPTS,
      ...config
    };
  }

  private async getCachedData<T>(key: string): Promise<T | null> {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < API.CONFIG.CACHE_DURATION) {
      return cached.data;
    }
    return null;
  }

  private setCachedData(key: string, data: any): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    const cacheKey = `${options.method || 'GET'}-${url}`;

    // Check cache for GET requests
    if (options.method === 'GET') {
      const cachedData = await this.getCachedData<T>(cacheKey);
      if (cachedData) return { data: cachedData, success: true };
    }

    let attempts = 0;
    while (attempts < this.defaultConfig.retryAttempts!) {
      try {
        const csrfToken = await this.getCsrfToken();
        const config = {
          ...options,
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken,
            ...options.headers
          }
        };

        const response = await fetch(url, config);
        const data = await response.json();

        if (!response.ok) {
          throw new AppError(
            data.message || 'API request failed',
            data.code || 'API_ERROR',
            data.details
          );
        }

        // Cache successful GET responses
        if (options.method === 'GET') {
          this.setCachedData(cacheKey, data);
        }

        return data;
      } catch (error) {
        attempts++;
        if (attempts === this.defaultConfig.retryAttempts) throw error;
        await new Promise(resolve => setTimeout(resolve, 1000 * attempts));
      }
    }

    throw new AppError('Maximum retry attempts reached', 'MAX_RETRIES_ERROR');
  }

  private async getCsrfToken(): Promise<string> {
    // Implementation would depend on your backend setup
    return 'csrf-token';
  }

  public async get<T>(endpoint: string, config: RequestInit = {}): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'GET' });
  }

  public async post<T>(
    endpoint: string,
    data: any,
    config: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  public async put<T>(
    endpoint: string,
    data: any,
    config: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }

  public async delete<T>(endpoint: string, config: RequestInit = {}): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'DELETE' });
  }
}

export const apiClient = new ApiClient();