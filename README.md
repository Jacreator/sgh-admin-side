<h1 align="center">Admin Service</h1>


Set the environment variables:
(You can see all enviroment key at **src/config/config**)
```bash
cp .env.example .env
```

## Feature
-  **NoSQL database**:  [MongoDB](https://www.mongodb.com/)  object data modeling using  [Mongoose](https://mongoosejs.com/)
-   **Authentication and authorization**: using  [passport](http://www.passportjs.org/)
-   **Logging**: using  [winston](https://github.com/winstonjs/winston)  and  [morgan](https://github.com/expressjs/morgan)
-   **Testing**: unit and integration tests using  [Jest](https://jestjs.io/)
-   **Error handling**: centralized error handling mechanism
-   **Dependency management**: with  [Yarn](https://yarnpkg.com/)
-   **Environment variables**: using  [dotenv](https://github.com/motdotla/dotenv)
-   **Security**: set security HTTP headers using  [helmet](https://helmetjs.github.io/)
-   **Compression**: gzip compression with  [compression](https://github.com/expressjs/compression)
-   **Git hooks**: with  [husky](https://github.com/typicode/husky)  and  [lint-staged](https://github.com/okonet/lint-staged)
-   **Linting**: with  [ESLint](https://eslint.org/)  and  [Prettier](https://prettier.io/) (fixing)
-   **Editor config**: consistent editor configuration using  [EditorConfig](https://editorconfig.org/)

## Commands
Running locally:
```bash
yarn dev
```
building:
```bash
yarn build
```
Running production (build before use):
```bash
yarn start
```

Testing:
```bash
# run all unit tests
yarn test

# run all unit tests in watch mode
yarn test:watch

# run unit tests coverage
yarn test:coverage

# run all e2e tests
yarn test:e2e

# run all e2e tests in watch mode
yarn test:e2e:watch
```

## Enviroment Variable
The environment variables can be found and modified in the  `.env`  file. They come with these default values:

```bash
# Port number
APP_PORT=9000

# Prefix app path
APP_PREFIX_PATH=/api


# Database config

# If you want to use database URI with DB_URI
DB_URI=mongodb://localhost:27017/Mocks

# If you want to use seperate database URI
DB_USER=root
DB_USER_PWD=secret
DB_HOST=localhost
DB_NAME=conduit
DB_PORT=27017
```

## Project Structure
This project don't have **controllers** and **services** folders because we want to minimalized. If you want them, you can create it
```bash
src\
 |--config\         # Environment variables and configuration related things
 |--middlewares\    # Custom express middlewares
 |--models\         # Mongoose models (data layer)
 |--routes\         # Routes
 |--utils\          # Utility classes and functions
 |--app.js          # Express app
 |--index.js        # App entry point
```

## Error handling
The app has a centralized error handling mechanism.

Routes should try to catch the errors and forward them to the error handling middleware (by calling `next(e)`).

## Logging
Import the logger from  `src/config/logger.ts`. It is using the  [Winston](https://github.com/winstonjs/winston)  logging library.

Logging should be done according to the following severity levels (ascending order from most important to least important):
```ts
import logger from '@/config/logger'

logger.error('message'); // level 0
logger.warn('message'); // level 1
logger.info('message'); // level 2
logger.http('message'); // level 3
logger.verbose('message'); // level 4
logger.debug('message'); // level 5
```
In production mode, only `info`, `warn`, and `error` logs will be printed to the console.

## Linting
Linting is done using  [ESLint](https://eslint.org/)  and  [Prettier](https://prettier.io/).

In this app, ESLint is configured to follow the  [Airbnb JavaScript style guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)  with some modifications. It also extends  [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)  to turn off all rules that are unnecessary or might conflict with Prettier.

To modify the ESLint configuration, update the  `.eslintrc.json`  file. To modify the Prettier configuration, update the  `.prettierrc.json`  file.

To prevent a certain file or directory from being linted, add it to  `.eslintignore`  and  `.prettierignore`.

To maintain a consistent coding style across different IDEs, the project contains  `.editorconfig`
