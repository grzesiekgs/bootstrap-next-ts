import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { PORT } from './config';
import { nextApp } from './next-app';
import { createRouter } from './routes';

async function run() {
  try {
    const app = express();
    const router = createRouter();

    app.disable('x-powered-by');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());

    app.use('/', router);
    await nextApp.prepare();

    app.listen(PORT);

    console.log(`Server listening on port ${PORT}`);
  } catch (err) {
    console.error(err.message);
  }
}

run().catch((error) => {
  console.error('Log error and exit', error);

  process.exit(1);
});
