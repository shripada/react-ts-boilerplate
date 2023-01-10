import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TipButton from './TipButton';

export default {
  title: 'Components/TipButton',
  component: TipButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TipButton>;

const Template: ComponentStory<typeof TipButton> = (args) => (
  <TipButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // any args add here..
};
