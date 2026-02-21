import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/theme';

type ThemeColors = {
  light?: string;
  dark?: string;
};

type ThemeColorName = 'text' | 'background';

const themePalette = {
  light: {
    text: Colors.textPrimary,
    background: Colors.white,
  },
  dark: {
    text: Colors.white,
    background: '#111111',
  },
} as const;

export function useThemeColor(props: ThemeColors, colorName: ThemeColorName) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  }

  return themePalette[theme][colorName];
}
