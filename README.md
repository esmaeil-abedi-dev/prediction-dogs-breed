# Online Priview

You can see an online preivew of this app.
Open [prediction dogs breed](https://prediction-dogs-breed.vercel.app/) to view it in the browser

## Design Choices:

1) As all of other AI apps that they need to learn, I simulated this feature with showing the pictures of predicted breed to user to select a breed and show a gallery.

2) I try to write everything that I need from scratch, like lazy loading component and infinit-scroll, to show my skills.

3) In my opinion, this app do not need any external state manager, so I handle states with just useState Hook.

4) To prevent hadcoding text in the app I use a simple function instead of using libraries like i18n. To preventing magic numbers I use config files with enums.

5) Because this app need just a simple gallery I handle responsive part with just flex and no need to write different layouts.

6) I have 2 types of components in the app structure:

       * common: includes pure components that do not need any other components
      
       * pages: needs some common componets to make a bigger part for the app


## Available Scripts

In the project directory, you can run:

### `npm install`

Install dependencies for this app

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### Test coverage

If you want to see the test coverage, follow this instruction:

1. open package.json
2. in the script part, change test script to bellew script

         "test": "jest --coverage"

3. run "npm test" again

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).`
