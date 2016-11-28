const yargs = require('yargs');

const init = require('./db/initAdmin');

//node setup.js --user "magsras@gmail.com" --pass "-----"

const argv = yargs
  .options({
    user: {
      demand: true,
      alias: 'mail',
      describe: 'Usuario Administrador',
      string: true
    },
    pass: {
      demand: true,
      alias: 'password',
      describe: 'Clave Administrador',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

init.initAdmin(argv.user,argv.pass, (errorMessage, results) => {

  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results);
  }

});