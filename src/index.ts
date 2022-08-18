import app from './app/app';
const port = process.env.APP_PORT || 3000;

// async function runApplication() {
//   await app.testDbConnection();
//   app.app.listen(port, () => console.log(`Meals backend app listening on port ${port}!`));
// }

// runApplication();

app.start();
