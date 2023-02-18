import { createBrowserRouter, redirect } from 'react-router-dom';
import AddCategories from '../pages/AddCategories';
import AddProduct from '../pages/AddProduct';
import Categories from '../pages/Categories';
import Dashboard from '../pages/Dashboard';
import EditCategories from '../pages/EditCategories';
import EditProduct from '../pages/EditProduct';
import FormUser from '../pages/FormUser';
import Products from '../pages/Products';
import SharedLayout from '../pages/SharedLayout';
// import SharedLayout from '../pages/SharedLayout';
const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/categories',
        element: <Categories />,
      },
      {
        path: '/add-product',
        element: <AddProduct />,
      },
      {
        path: '/edit-product/:id',
        element: <EditProduct />,
      },
      {
        path: '/add-category',
        element: <AddCategories />,
      },
      {
        path: '/edit-category/:id',
        element: <EditCategories />,
      },
      {
        path: 'register',
        element: <FormUser registerPage />,
      },
    ],
    loader: () => {
      const isLogin = localStorage.getItem('access_token');
      if (!isLogin) {
        throw redirect('/login');
      }
      return null;
    },
  },

  {
    path: '/',
    children: [
      {
        path: 'login',
        element: <FormUser />,
      },
    ],
    loader: () => {
      const isLogin = localStorage.getItem('access_token');
      if (isLogin) {
        throw redirect('/');
      }
      return null;
    },
  },
]);

export default router;
