import React, { ChangeEvent, isValidElement, useEffect, useState } from 'react';
import { IHelperText, IProps, IStartAdornment } from './types';
import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import styled from 'styled-components/macro';
import styles from './InputField.module.css';
import classNames from 'classnames';
import { ReactComponent as ErrorIcon } from '../../assets/error.svg';

const InputField = React.forwardRef<HTMLInputElement, IProps>(
  (props: IProps, inputRef: React.ForwardedRef<HTMLInputElement>) => {
    const {
      label,
      value,
      onChange,
      defaultValue,
      placeholder,
      disabled = false,
      required = false,
      error = false,
      helperText,
      startAdornment,
      endAdornment,
      width = 250,
    } = props;
    const [inputValue, setInput] = useState<string>(defaultValue ?? '');
    const [startIconWidth, setStartIconWidth] = useState<number>(0);
    const [endIconWidth, setEndIconWidth] = useState<number>(0);
    const isStartAdornment = Boolean(startAdornment);
    const isEndAdornment = Boolean(endAdornment);

    const getIconWidth = (str: string): number => {
      const iconSpan = document.createElement('span');
      iconSpan.style.opacity = '0';
      iconSpan.style.position = 'absolute';
      iconSpan.style.top = '-9999px';
      iconSpan.style.left = '-9999px';
      iconSpan.style.fontSize = '14px';
      iconSpan.style.fontWeight = '400';
      iconSpan.style.maxWidth = '100px';
      iconSpan.innerHTML = str;
      document.body.appendChild(iconSpan);
      const widthNeeded = iconSpan.offsetWidth + 20;
      document.body.removeChild(iconSpan);
      return widthNeeded;
    };

    useEffect(() => {
      if (isStartAdornment) {
        if (typeof startAdornment === 'string') {
          setStartIconWidth(getIconWidth(startAdornment));
        } else if (isValidElement(startAdornment)) {
          setStartIconWidth(40);
        }
      }
    }, [startAdornment]);

    useEffect(() => {
      if (isEndAdornment) {
        if (typeof endAdornment === 'string') {
          setEndIconWidth(getIconWidth(endAdornment));
        } else if (isValidElement(endAdornment)) {
          setEndIconWidth(40);
        }
      }
    }, [endAdornment]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      if (typeof onChange === 'function') {
        onChange(event);
      } else {
        setInput(event.target.value);
      }
    };

    return (
      <Wrapper>
        {Boolean(label) && (
          <div>
            <label
              className={classNames(styles.inputFieldLabel, {
                [styles.inputFieldLabelRequired]: required,
              })}
            >
              {label}
            </label>
          </div>
        )}
        <InputWrapper
          style={{
            width:
              typeof width === 'string'
                ? width
                : typeof width === 'number'
                ? `${width}px`
                : 'auto',
          }}
        >
          {isStartAdornment && (
            <Adornment
              isString={typeof startAdornment === 'string'}
              startAdornment
            >
              {typeof startAdornment === 'string' ? (
                <AdornmentText>{startAdornment}</AdornmentText>
              ) : (
                startAdornment
              )}
            </Adornment>
          )}
          <input
            type="text"
            className={classNames(styles.inputField, {
              [styles.errorInputField]: error,
            })}
            value={value ?? inputValue}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            style={{
              paddingLeft: `${isStartAdornment ? startIconWidth : 12}px`,
              paddingRight: `${isEndAdornment ? endIconWidth : 12}px`,
            }}
            {...{ ref: inputRef }}
          />
          {isEndAdornment && (
            <Adornment isString={typeof endAdornment === 'string'}>
              {typeof endAdornment === 'string' ? (
                <AdornmentText>{endAdornment}</AdornmentText>
              ) : (
                endAdornment
              )}
            </Adornment>
          )}
        </InputWrapper>
        {typeof helperText === 'string' && (
          <HelperContainer>
            {error && (
              <ErrorIconContainer>
                <ErrorIcon className="errorIcon" />
              </ErrorIconContainer>
            )}
            <HelperText error={error}>{helperText}</HelperText>
          </HelperContainer>
        )}
      </Wrapper>
    );
  },
);

const Wrapper = styled.div`
  display: block;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  padding: 10px;
  @media ${QUERIES.lapTopAndBelow} {
    padding: 8px;
  }
`;
const HelperContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 400;
  text-align: left;
  margin: 4px 14px 0px 0px;
  font-size: 14px;
  line-height: 20px;
`;

const ErrorIconContainer = styled.div`
  width: 20px;
  margin-right: 8px;
`;

const HelperText = styled.label<IHelperText>`
  color: ${({ error }) => (error ? COLORS.red : COLORS.gray[500])};
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  position: relative;
`;

const AdornmentText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Adornment = styled.div<IStartAdornment>`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  max-width: 100px;
  position: absolute;
  top: 50%;
  right: ${({ startAdornment }) =>
    typeof startAdornment === 'boolean' && startAdornment ? 'auto' : '0'};
  transform: translate(0, -50%);
  padding-left: 5px;
  padding-right: 5px;
  font-weight: 400;
  overflow: hidden;
  margin-left: 5px;
  margin-right: 5px;
  width: ${({ isString }) => (isString ? 'auto' : '30px')};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
`;

InputField.displayName = 'InputField';

export default InputField;
