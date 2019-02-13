const recast = require("recast");
const babelParser = require("@babel/parser");

const parser = {
  parse(code) {
    return babelParser.parse(code, {
      sourceType: "module",
      plugins: ["jsx"]
    });
  }
};

const parse = contents => {
  const ast = recast.parse(contents, { parser });
  return ast;
};

function init() {
  const code = `import React from 'react'
const Component = () => (
  <div>Hello, World</div>
)
`;
  const result = parse(code);
  console.log(result);
}

init();
