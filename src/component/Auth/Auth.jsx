import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/userSlice'; 

import { ROUTER_PATHS } from './../../routes/routesPath';

import styles from './Auth.module.scss';
import { SignIn } from './companent/SignIn';
import { SignUp } from './companent/SignUp';

export function Auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hasAccount, setHasAccount] = useState(false);

  const user = useSelector((state) => state.user.user);



  return (
    <div className={styles.authPage}>
      {hasAccount ? (
        <SignIn setHasAccount={setHasAccount} />
      ) : (
        <SignUp setHasAccount={setHasAccount} />
      )}
    </div>
  );
}
