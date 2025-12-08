export default {
  '*.{ts,js}': ['eslint --fix', 'prettier --write'],
  '*.{json,md,html,css,scss}': ['prettier --write'],
};
