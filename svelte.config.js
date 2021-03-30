const sveltePreprocess = require('svelte-preprocess');

const mode = process.env.NODE_ENV;
const prod = mode === 'production';

module.exports = {
  preprocess: sveltePreprocess({ sourceMap: !prod })
};