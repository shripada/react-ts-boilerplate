import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NewRe from './NewRe';

export default {
  title: 'Components/NewRe',
  component: NewRe,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof NewRe>;

const Template: ComponentStory<typeof NewRe> = (args) => <NewRe {...args} />;

export const Default = Template.bind({});
Default.args = {
  // any args add here..
};
