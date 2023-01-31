export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  gray: {
    100: 'hsl(185deg 5% 95%)',
    300: 'hsl(190deg 5% 80%)',
    500: 'hsl(196deg 4% 60%)',
    700: 'hsl(220deg 5% 40%)',
    900: 'hsl(220deg 3% 20%)',
  },
  primary: 'hsl(340deg 65% 47%)',
  secondary: 'hsl(240deg 60% 63%)',
} as const;

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
} as const;

// Desktop first approach
export const BREAKPOINTS = {
  lapTopMax: 1300,
  tabletMax: 950,
  mobileMax: 600,
} as const;

export const QUERIES = {
  lapTopAndBelow: `(max-width: ${BREAKPOINTS.lapTopMax}px)`,
  tabletAndBelow: `(max-width: ${BREAKPOINTS.tabletMax}px)`,
  mobileAndBelow: `(max-width: ${BREAKPOINTS.mobileMax}px)`,
} as const;
