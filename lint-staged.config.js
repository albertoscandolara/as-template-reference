export default {
  '*.{ts,js}': filenames => {
    // only lint files outside docs
    const files = filenames.filter(f => !f.startsWith('docs/'));
    return files.length
      ? [`eslint --fix ${files.join(' ')}`, `prettier --write ${files.join(' ')}`]
      : [];
  },
  '*.{json,md,html,css,scss}': ['prettier --write'],
};
