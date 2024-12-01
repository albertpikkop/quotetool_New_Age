import { WeatherData } from '../../types/shipping';
import { AppError } from '../../utils/errorHandling';

export async function getWeatherForecast(
  latitude: number,
  longitude: number
): Promise<WeatherData> {
  try {
    const response = await fetch(
      `/api/weather/forecast?lat=${latitude}&lon=${longitude}`
    );

    if (!response.ok) {
      throw new AppError('Failed to fetch weather data', 'WEATHER_FETCH_ERROR');
    }

    return response.json();
  } catch (error) {
    throw new AppError(
      'Error fetching weather data',
      'WEATHER_FETCH_ERROR',
      { originalError: error }
    );
  }
}

export async function getAirQuality(
  latitude: number,
  longitude: number
): Promise<{
  aqi: number;
  pollutants: Record<string, number>;
}> {
  try {
    const response = await fetch(
      `/api/weather/air-quality?lat=${latitude}&lon=${longitude}`
    );

    if (!response.ok) {
      throw new AppError('Failed to fetch air quality data', 'AIR_QUALITY_ERROR');
    }

    return response.json();
  } catch (error) {
    throw new AppError(
      'Error fetching air quality data',
      'AIR_QUALITY_ERROR',
      { originalError: error }
    );
  }
}