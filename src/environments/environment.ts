// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBLVmpqDtunlFf-BsQp9WYE6tpbWs9sMYo",
    authDomain: "promobusque.firebaseapp.com",
    databaseURL: "https://promobusque.firebaseio.com",
    projectId: "promobusque",
    storageBucket: "promobusque.appspot.com",
    messagingSenderId: "1041150547735"
  },
  urlBase: 'http://localhost:8000/',
  urlViaCep: 'viacep.com.br/ws/'
};  
