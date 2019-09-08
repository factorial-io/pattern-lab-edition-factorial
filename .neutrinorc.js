module.exports = {
  use: [
    "@factorial/frontend-stack-core",
    "@factorial/frontend-stack-pattern-lab",
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
