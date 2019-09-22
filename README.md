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
3. Create `.env.development.local` file in the root directory of this project ([see example](#envdevelopmentlocal-example))
4. Install dependencies `yarn install`
5. Run project `yarn start`

### .env.development.local example:

`REACT_APP_API_URL=http://localhost:8080`

## Running the tests

-   `yarn test` - run tests in watch mode
-   `yarn testOnce`: run tests only once

## Built With

-   [Create React App](https://create-react-app.dev/) - an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.
-   [React Redux](https://react-redux.js.org) - predictable state container for JavaScript apps.
-   [styled-components](https://www.styled-components.com/) - enhanced CSS for styling React component systems.


