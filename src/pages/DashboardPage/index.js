import DashboardBody from './components/DashboardBody';
import { getUserInfo } from './api';

function DashboardPage() {
  return <DashboardBody getUserInfo={getUserInfo} />;
}

export default DashboardPage;
