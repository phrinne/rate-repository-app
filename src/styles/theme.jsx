import { Platform } from 'react-native';
import { StyleSheet } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textInverted: '#fff',
    primary: '#0366d6',
    background: '#e1e4e8',
    backgroundActive: 'white',
    error: '#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    tabItem: 20,
    stat: 32
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  spacing: {
    medium: 16,
    small: 8,
    large: 32,
    xlarge: 64,
    xsmall: 4,
    componentHeight: 56
  }
};

export const componentStyles = StyleSheet.create({
  container: {
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.backgroundActive,
  },
  component: {
    height: theme.spacing.componentHeight,
    borderRadius: theme.spacing.xsmall,
    paddingHorizontal: theme.spacing.medium
  },
  buttonContainer: {
    height: theme.spacing.componentHeight,
    borderRadius: theme.spacing.xsmall,
    paddingHorizontal: theme.spacing.medium,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.textInverted,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.bold,
  },
});

export default theme;