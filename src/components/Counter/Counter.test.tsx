import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

/*
 For a comprehensive tutorial on unit testing with RTL
 refer: https://www.robinwieruch.de/react-testing-library/
*/

describe('Counter tests', () => {
  test('renders Counter', async () => {
    render(<Counter />);
    // We should have the value of count as 0
    screen.getByText('0');

    // + and - buttons should be rendered
    screen.getByText('+');
    screen.getByText('-');

    // Simulate a click on +
    await userEvent.click(screen.getByText('+'));
    screen.getByText('1');

    // Click on +
    await userEvent.click(screen.getByText('+'));
    screen.getByText('2');

    // click -, thrice
    await userEvent.click(screen.getByText('-'));
    await userEvent.click(screen.getByText('-'));
    await userEvent.click(screen.getByText('-'));

    // Now the negative number -1 should be displayed and in red color
    const text = screen.getByText('-1');
    expect(text).toHaveClass('negative');

    let clicks = [];
    for (let i = 0; i < 12; i++) {
      clicks.push(userEvent.click(screen.getByText('+')));
    }

    await Promise.all(clicks);

    // Use find... methods for checking if something
    // should be present in DOM after an action and especially
    // as a result of an asynchronous action.
    await screen.findByText('Vow, you are lucky!');

    // queryByText will not throw if the asked element is missing.
    expect(screen.queryByText('Wait for your luck!')).not.toBeInTheDocument();

    clicks = [];
    for (let i = 0; i < 12; i++) {
      clicks.push(userEvent.click(screen.getByText('-')));
    }
    await Promise.all(clicks);
    await screen.findByText('Wait for your luck!');
    expect(screen.queryByText('Vow, you are lucky!')).not.toBeInTheDocument();
  });
});
