import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function DashboardBody({ getUserInfo }) {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const inner = async () => {
      const response = await getUserInfo();
      setUserInfo(response);
    };
    inner();
  }, []);

  if (userInfo === null) return <div>Loading</div>;

  return <div>{JSON.stringify(userInfo)}</div>;
}

DashboardBody.propTypes = {
  getUserInfo: PropTypes.func.isRequired,
};

export default DashboardBody;
