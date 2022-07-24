import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import { Navigate } from 'react-router-dom';
import Error from './../pages/Error';
import PostIdPage from './../pages/PostIdPage';
import { routes } from './../router/routes';

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(route =>
        <Route path={route.path} element={< route.element />} exact={route.exact} />
      )}
      <Route path="/*" element={<Navigate to="/posts" />} />
    </Routes>
  );
};

export default AppRouter;