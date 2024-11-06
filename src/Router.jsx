import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Homepage from './pages/Homepage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "*",
    element: <div>404 - Sayfa Bulunamadı</div>
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}