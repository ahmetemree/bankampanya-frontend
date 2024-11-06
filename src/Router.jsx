import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import Kampanyalar from './pages/Kampanlayar/Kampanyalar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/kampanyalar",
    element: <Kampanyalar />,
  },
  {
    path: "*",
    element: <div>404 - Sayfa Bulunamadı</div>
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}