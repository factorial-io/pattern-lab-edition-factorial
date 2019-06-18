module.exports = {
  use: [
    // "@factorial/frontend-stack-core",
    // This must point to the frontend-stack on branch 'feature/dev-server-with-linting'
    "../factorial-frontend-stack/packages/core",
    "@factorial/frontend-stack-postcss-export-custom-variables"
  ],
  options: {
    source: "source",
    output: "source/build",
    mains: {
      index: "index",
      styleguide: "styleguide"
    }
  }
};
