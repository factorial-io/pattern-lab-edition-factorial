module.exports = {
  use: [
    "@factorial/frontend-stack-core"
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
