import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProps {
  label?: string;
  width?: string | number;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  helperText?: string;
  error?: boolean;
  startAdornment?: string | React.ReactNode;
  endAdornment?: string | React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IHelperText {
  error: boolean;
}

export interface IStartAdornment {
  isString: boolean;
  startAdornment?: boolean;
}
