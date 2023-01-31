import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CustomButton from './CustomButton';

export default {
  title: 'Components/CustomButton',
  component: CustomButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = (args) => (
  <CustomButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // any args add here..
};
