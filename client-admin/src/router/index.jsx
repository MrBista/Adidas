import { createBrowserRouter, redirect } from 'react-router-dom';
import AddCategories from '../pages/AddCategories';
import AddProduct from '../pages/AddProduct';
import Categories from '../pages/Categories';
import Dashboard from '../pages/Dashboard';
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
        path: '/add-category',
        element: <AddCategories />,
      },
      {
        path: 'register',
        element: <FormUser />,
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
        element: <FormUser login />,
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
