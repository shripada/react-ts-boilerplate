import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputField from './InputField';
import { ReactComponent as Dollar } from '../../assets/dollor.svg';
import { ReactComponent as ErrorIcon } from '../../assets/error.svg';

export default {
  title: 'Components/InputField',
  component: InputField,
  args: {
    onChange: undefined,
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label',
  placeholder: 'Placeholder Text',
};

export const UncontrolledComponent = Template.bind({});
UncontrolledComponent.args = {
  label: 'Enter Name',
  defaultValue: 'Test Name',
  placeholder: 'Mahesh',
};

export const ControlledComponent: ComponentStory<typeof InputField> = (
  args,
) => {
  const [value, setValue] = useState<string>(args?.value ?? '');

  useEffect(() => {
    setValue(args?.value ?? value);
  }, [args?.value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };
  return <InputField {...args} value={value} onChange={handleChange} />;
};

ControlledComponent.args = {
  label: 'Enter Name',
  placeholder: 'Mahesh',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Label',
  placeholder: 'Text',
  disabled: true,
};

export const Required = Template.bind({});
Required.args = {
  label: 'Label',
  placeholder: 'Text',
  disabled: false,
  required: true,
};

export const HelperText = Template.bind({});
HelperText.args = {
  label: 'Label',
  placeholder: 'Text',
  helperText: 'Helper Text',
  width: '50%',
};

export const Validation = Template.bind({});
Validation.args = {
  label: 'Label',
  placeholder: 'Text',
  disabled: false,
  required: true,
  error: true,
  helperText: 'Invalid Text!',
};

export const StartAdornment = Template.bind({});
StartAdornment.args = {
  label: 'Label',
  placeholder: 'Text',
  disabled: false,
  required: true,
  startAdornment: '$',
};

export const StartAdornmentIcon = Template.bind({});
StartAdornmentIcon.args = {
  label: 'Label',
  placeholder: 'Text',
  disabled: false,
  required: true,
  startAdornment: <Dollar />,
};

export const StartAdornmentIconButton = Template.bind({});
StartAdornmentIconButton.args = {
  label: 'Label',
  placeholder: 'Text',
  disabled: false,
  required: true,
  startAdornment: (
    <button
      style={{ cursor: 'pointer', border: 'none', background: 'none' }}
      onClick={() => console.log('Button clicked')}
    >
      <ErrorIcon />
    </button>
  ),
};

export const EndAdornment = Template.bind({});
EndAdornment.args = {
  label: 'Label',
  placeholder: 'Text',
  disabled: false,
  required: true,
  endAdornment: '$',
};

export const EndAdornmentIcon = Template.bind({});
EndAdornmentIcon.args = {
  label: 'Label',
  placeholder: 'Text',
  disabled: false,
  required: true,
  endAdornment: <Dollar />,
};

export const EndAdornmentIconButton = Template.bind({});
EndAdornmentIconButton.args = {
  label: 'Label',
  placeholder: 'Text',
  disabled: false,
  required: true,
  endAdornment: (
    <button
      style={{ cursor: 'pointer', border: 'none', background: 'none' }}
      onClick={() => console.log('Button clicked')}
    >
      <ErrorIcon />
    </button>
  ),
};

export const InputRef: ComponentStory<typeof InputField> = (args) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const getFocus = (): void => {
    inputRef.current?.focus();
  };
  return (
    <div
      style={{
        width: 500,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <button onClick={getFocus} style={{ width: '200px' }}>
        Click here to get focus
      </button>
      <InputField {...args} ref={inputRef} />
    </div>
  );
};
InputRef.args = {
  defaultValue: 'Default Text',
};

InputRef.parameters = {
  layout: 'centered',
};
