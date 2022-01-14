const inquirer = require('inquirer');
const KeyManager = require('../lib/KeyManager');
const { isRequired } = require('../utils/validation');

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: 'input',
        name: 'key',
        message: 'Enter API key ' + 'https://coinmarketcap.com/api/',
        validate: isRequired,
      },
    ]);
    const key = keyManager.setKey(input.key);
    if (key) {
      console.log('API Key Set');
    }
  },
  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      console.log('Current API Key: ', key);

      return key;
    } catch (err) {
      console.error(err.message);
    }
  },
  remove() {
    try {
      const keyManager = new KeyManager();
      keyManager.deleteKey();

      console.log('Key Removed');

      return;
    } catch (err) {
      console.error(err.message);
    }
  },
};

module.exports = key;
