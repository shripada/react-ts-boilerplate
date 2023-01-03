# React+TypeScript project with all modern tooling

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Additionally the following tools are configured:

<ol>
    <li><a href="https://storybook.js.org/" >Storybook for enticing component driven development</a></li>
    <li>ESLint configured with all necessary React specific configs</li>
    <li>Prettier for formatting the code</li>
    <li>Husky for the pre commit hook requirements</li>
    <li>lint-staged to run lint/formatting etc only on staged files during a commit via a pre commit hook</li>
    <li><a href="https://github.com/plopjs/plop">Plop js for enabling hassle free component files for a new component</a></li>
</ol>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run create-component`

When you run this it will ask the name of your component. It will then create the component boiler plate files inside `./src/components` folder.

### `npm run storybook`

Run this to build and open the storybook page in your default browser.
