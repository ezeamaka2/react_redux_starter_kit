import { useSelector, useDispatch } from 'react-redux'
import {counterActions} from '../store/index'
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter);
  const toggle = useSelector(state => state.showCounter)

  const incrementHandler = () => {
    console.log(+1)
    // dispatch({type: 'increment'})
    dispatch(counterActions.increment())
  }

  const increaseBy5 = (amt) => {
    console.log(amt);
    // dispatch({type: 'increase', amount: amt})
    dispatch(counterActions.increase(amt))
  }

  const decrementHandler = () => {
    // dispatch({ type: 'decrement'})
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    console.log(counter)
    // dispatch({type: 'toggle'})
    dispatch(counterActions.toggleCounter())

  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>-- {counter} --</div>}
      <div>
      <button onClick={incrementHandler}>increment (+)</button>
      <button onClick={() => {increaseBy5(5)}}>IncreaseBy5</button>
      <button onClick={decrementHandler}>decrement (-)</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
