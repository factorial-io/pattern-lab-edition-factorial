module.exports = {
  use: [
    "@factorial/frontend-stack-core",
    "@factorial/frontend-stack-pattern-lab",
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
