import { Routes, Route } from 'react-router-dom';
import DashBoardPage from './pages/DashboardPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './PrivateRoute';
import CustomAppShell from './components/AppShell';

function App() {
  return (
    <CustomAppShell>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="" element={<DashBoardPage />} />
          <Route path="user" element={<DashBoardPage />} />
        </Route>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </CustomAppShell>
  );
}

export default App;
