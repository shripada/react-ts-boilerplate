import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Counter from './Counter';

export default {
  title: 'Components/Counter',
  component: Counter,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args}></Counter>
);

export const ZeroOrPositive = Template.bind({});
ZeroOrPositive.args = {
  initialCount: 0,
};

export const NegativeCount = Template.bind({});
NegativeCount.args = {
  initialCount: -10,
};
