# Project-Chalcanthite

## Prerequisites

-   [installed yarn](https://yarnpkg.com/lang/en/docs/install/)
-   [installed node.js](https://nodejs.org/en/download/)
-   running [Project-Amethyst](https://github.com/MHekert/Project-Amethyst)

## How to run

These instructions will get you a copy of the project up and running on your local machine.

1. Download and run Project-Amethyst ([follow installation guide](https://github.com/MHekert/Project-Amethyst/blob/development/README.md))
2. Clone or download Project-Chalcanthite 
    `git clone https://github.com/JBudny/Project-Chalcanthite-Front.git`
3. Create `.env.development.local` file in the root directory of the Project-Chalcanthite ([see example](#env-file-example))
4. Install dependencies `yarn install`
5. Run project `yarn start`

## Running the tests

1. Create `.env.test.local` file in the root directory of the Project-Chalcanthite ([see example](#env-file-example))
2. Run tests in watch mode `yarn test`
3. Run tests only once `yarn testOnce`

### .env file example:

```
REACT_APP_API_URL=http://localhost:8080

REACT_APP_MODE_TOP=${REACT_APP_API_URL}/mode/top

REACT_APP_AUTH_ME=${REACT_APP_API_URL}/auth/me
REACT_APP_AUTH_FACEBOOK=${REACT_APP_API_URL}/auth/facebook
REACT_APP_AUTH_LOGOUT=${REACT_APP_API_URL}/auth/logout
```

## Built With

-   [Create React App](https://create-react-app.dev/) - an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.
-   [React Redux](https://react-redux.js.org/) - predictable state container for JavaScript apps.
-   [Styled-components](https://www.styled-components.com/) - enhanced CSS for styling React component systems.
-   [React-intl](https://github.com/formatjs/react-intl) - this library provides React components and an API to format dates, numbers, and strings, including pluralization and handling translations.
-   [Flow](https://flow.org/) - static typechecker for JavaScript.
-   [Testing Library](https://testing-library.com/) - simple and complete testing utilities that encourage good testing practices.