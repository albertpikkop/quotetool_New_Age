export interface MenuItem {
  path: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface LoadingState {
  isLoading: boolean;
  error?: string | null;
}

export interface ValidationError {
  field: string;
  message: string;
}