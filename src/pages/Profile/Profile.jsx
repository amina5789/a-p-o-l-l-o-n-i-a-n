import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { Auth } from "../../component/Auth/Auth";
import { useEffect, useState } from "react";
import { setUser } from "../../redux/userSlice";
import stylle from './Profile.module.scss'
import { ROUTER_PATHS } from "../../routes/routesPath";

export const Profile = () => {
  // const user = useSelector((state) => state.auth.user);
  const status = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("user"));
    if (userToken) {
      dispatch(setUser(userToken));
      setUserData(userToken)
      setIsAuth(true);
      console.log(userToken);
    }
  }, []);




  const handleLogout = () => {
    dispatch(logout());
    navigate(ROUTER_PATHS.Auth);
  };

  if (!isAuth) {
    return <Auth />;
  }

  if (status === "loading") {
    return <p>Загрузка...</p>;
  }
  return (
    <div className={stylle.containerProfile}>
      <h1 className={stylle.profile}>Profile</h1>
      <p>
        <strong className={stylle.name}>Name:</strong> {userData.name || "Не указано"}
      </p>
      <p>
        <strong className={stylle.email}>Email:</strong> {userData.email}
      </p>
      <button onClick={handleLogout} className={stylle.btn}>Get out</button>
    </div>
  );
};
