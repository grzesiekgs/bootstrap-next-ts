import express from 'express';
import { parse } from 'url';
import { nextApp } from './next-app';

const createRouter = () => {
  const nextHandler = nextApp.getRequestHandler();

  const router = express.Router();

  router.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    nextHandler(req, res, parsedUrl);
  });

  return router;
};

export { createRouter };
