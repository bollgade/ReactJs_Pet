import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import { Navigate } from 'react-router-dom';
import Error from './../pages/Error';
import PostIdPage from './../pages/PostIdPage';
import { publicRoutes, privateRoutes } from './../router/routes';

const AppRouter = () => {
  const isAuth = false;
  return (
    isAuth
      ?
      <Routes>
        {privateRoutes.map(route =>
          <Route path={route.path} element={< route.element />} exact={route.exact} />
        )}
        <Route path="/*" element={<Navigate to="/posts" />} />
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route =>
          <Route path={route.path} element={< route.element />} exact={route.exact} />
        )}
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
  );
};

export default AppRouter;