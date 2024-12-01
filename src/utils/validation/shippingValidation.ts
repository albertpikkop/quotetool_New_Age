import { z } from 'zod';
import { Package, Location } from '../../types/shipping';
import { ValidationError } from '../../types/common';

const packageSchema = z.object({
  width: z.number().min(0, 'Width must be greater than 0'),
  height: z.number().min(0, 'Height must be greater than 0'),
  length: z.number().min(0, 'Length must be greater than 0'),
  weight: z.number().min(0, 'Weight must be greater than 0'),
  isFragile: z.boolean(),
  isOversized: z.boolean()
});

const locationSchema = z.object({
  zipCode: z.string().min(5, 'Invalid ZIP code'),
  country: z.string().min(2, 'Invalid country code')
});

export function validatePackage(pkg: Package): ValidationError[] {
  try {
    packageSchema.parse(pkg);
    return [];
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }));
    }
    return [{ field: 'package', message: 'Invalid package data' }];
  }
}

export function validateLocation(location: Location): ValidationError[] {
  try {
    locationSchema.parse(location);
    return [];
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }));
    }
    return [{ field: 'location', message: 'Invalid location data' }];
  }
}