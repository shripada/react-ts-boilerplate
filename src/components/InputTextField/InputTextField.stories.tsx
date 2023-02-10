import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputTextField from './InputTextField';

export default {
  title: 'Components/InputTextField',
  component: InputTextField,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof InputTextField>;

const Template: ComponentStory<typeof InputTextField> = (args) => (
  <InputTextField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // any args add here..
  text: 'hi',
  label: 'User name',
  error: undefined,
  handleChange: () => {},
};
