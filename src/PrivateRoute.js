import { Outlet, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { ROUTES } from './config';
import { getUserInfo } from './pages/DashboardPage/api';
import useAsync from './utils/useAsync';

function PrivateRoute() {
  const navigate = useNavigate();
  const getUserInfoCb = useCallback(() => getUserInfo(), []);
  const [, , error] = useAsync(getUserInfoCb);
  const loginRequired = error !== null && error.status === 401;

  if (loginRequired) {
    navigate(ROUTES.LOGIN, { replace: true });
  }
  return <Outlet />;
}

export default PrivateRoute;
