// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAvOxqkFhmGbe0ewKniYcyfWm37DRxUVVE',
    authDomain: 'fir-chat-app-ce84d.firebaseapp.com',
    databaseURL: 'https://fir-chat-app-ce84d.firebaseio.com',
    projectId: 'fir-chat-app-ce84d',
    storageBucket: 'fir-chat-app-ce84d.appspot.com',
    messagingSenderId: '144270405529'
  }
};
