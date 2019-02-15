module.exports = {
  linters: {
    '**/*.+(js|json|less|css|ts|tsx|md)': [
      'prettier --write',
      'yarn test --coverage --findRelatedTests',
      'madge src --image docs/arch.png --noDependencyColor "#ef6437" --backgroundColor "#fafafa" --nodeColor "#4d4afc"',
      'git add',
    ],
  },
}
