import { WeatherData } from '../../types/shipping';
import { AppError } from '../../utils/errorHandling';
import { API, EXTERNAL_APIS } from '../../constants';

export async function getWeatherForecast(lat: number, lon: number): Promise<WeatherData> {
  try {
    const response = await fetch(
      `${EXTERNAL_APIS.WEATHER.METEOBLUE.BASE_URL}/${EXTERNAL_APIS.WEATHER.METEOBLUE.VERSION}/forecast?lat=${lat}&lon=${lon}`
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

export async function getAirQuality(lat: number, lon: number): Promise<{
  aqi: number;
  pollutants: Record<string, number>;
}> {
  try {
    const response = await fetch(
      `${API.BASE_URL}/weather/air-quality?lat=${lat}&lon=${lon}`
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