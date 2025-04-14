import express from 'express';
import authRoute from './auth';
import processorRoute from './processor';
import cpuCoolerRoute from './cpuCooler';
import motherboardRoute from './motherboard';
import gpuRoute from './gpu';
import psuRoute from './psu';
import ramRoute from './ram';
import storageRoute from './storage';
import componentsRoute from './components';

const router = express.Router();

const allRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/processor',
    route: processorRoute,
  },
  {
    path: '/cpu-cooler',
    route: cpuCoolerRoute,
  },
  {
    path: '/motherboard',
    route: motherboardRoute,
  },
  {
    path: '/gpu',
    route: gpuRoute,
  },
  {
    path: '/psu',
    route: psuRoute,
  },
  {
    path: '/ram',
    route: ramRoute,
  },
  {
    path: '/storage',
    route: storageRoute,
  },
  {
    path: '/',
    route: componentsRoute,
  },
];

allRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
