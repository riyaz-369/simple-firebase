/**
 *            ------------------------
 *              INITIAL INSTALLATION
 *            ------------------------
 * 1. Visit: console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. Register app (create config)
 * 4. install firebase: npm install firebase
 * 5. add config file to your project
 * 6. DANGER: Do not publish or make firebase config to public by pushing those to github
 *              --------------------
 *                  INTEGRATION
 *              --------------------
 * 7. go to docs > Build > Authentication > Web > Get started
 * 8. export app from the firebase.config.js file: export default app
 * 9. Login.jsx: import getAuth from 'firebse/auth'
 * 10. create const auth = getAuth (app)
 *              --------------------
 *                  PROVIDER SETUP
 *              --------------------
 * 11. import GoogleAuthProvider and create a new provider
 * 12. use signInWithPopUp and pass auth and provider
 * 13. activate sign in method (google, facebook, github etc.)
 * 
 * 
 *    -------------------------------------------
 *              ACTIVATE MORE PROVIDER
 *            ------------------------
 * 1. Active the auth provider (create app, provide redirect url, client id, client secret)
 * 
 */