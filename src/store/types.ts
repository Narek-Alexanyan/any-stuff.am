import { Theme } from '@/application/enums/shared/Theme';

export interface RootState {
  app: AppState;
  theme: ThemeState;
}

export interface AppState {
  counter: number;
}
export interface ThemeState {
  value: Theme;
}
