import express from 'express';

const app = express();

const startApp = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get('/', (req, res) => {
    res.send('Server Deployed!');
  });

  app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });

  const port = process.env.PORT || 4000;

  app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
  });
};

const run = () => {
  return startApp();
};

run();
