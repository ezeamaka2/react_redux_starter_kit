import { useDispatch } from 'react-redux';
import { authActions } from '../store/index';

import classes from './Auth.module.css';

const Auth = ({loginBtnClick}) => {
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(333333333)
    dispatch(authActions.login())
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
