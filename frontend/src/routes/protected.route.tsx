import HomePage from 'pages/home';
import { Navigate, Route, Routes } from 'react-router-dom';

const ProtectedRoutes: React.FC = () => {
  const isAuthenticated = true;

  if (!isAuthenticated) return <Navigate to={'/'} replace />;

  return (
    <Routes>
      <Route path='/home' element={<HomePage />} />
    </Routes>
  );
};

export default ProtectedRoutes;
