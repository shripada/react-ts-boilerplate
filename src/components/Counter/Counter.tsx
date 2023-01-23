import React from 'react';
import cn from 'classnames';
import { IProps } from './types';
import styles from './Counter.module.css';

const Counter = ({ initialCount = 0 }: IProps) => {
  const [count, setCount] = React.useState<number>(initialCount);
  const classes = cn(styles.counter, { [styles.negative]: count < 0 });

  return (
    <div className={classes}>
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
      <button onClick={() => setCount(count - 1)}>-</button>
      {count > 10 ? (
        <div className={styles.lucky}>{'Vow, you are lucky!'}</div>
      ) : (
        <div className={styles.waitForLuck}>Wait for your luck!</div>
      )}
    </div>
  );
};

export default Counter;
