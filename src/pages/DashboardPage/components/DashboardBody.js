import PropTypes from 'prop-types';
import useAsync from '../../../utils/useAsync';

function DashboardBody({ getUserInfo }) {
  const [userInfo, userInfoLoading] = useAsync(getUserInfo);
  if (userInfoLoading) return <div>Loading</div>;

  return <div>{JSON.stringify(userInfo)}</div>;
}

DashboardBody.propTypes = {
  getUserInfo: PropTypes.func.isRequired,
};

export default DashboardBody;
