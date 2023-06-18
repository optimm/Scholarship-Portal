import { Navigate, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import ProtectedRoutes from './protected.route';
import LandingPage from 'pages/landing';

const HomeRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeRoutes />
  },
  {
    path: '/*',
    element: <ProtectedRoutes />
  }
]);

const AllRoutes = () => {
  return <RouterProvider router={routes} />;
};

export default AllRoutes;
