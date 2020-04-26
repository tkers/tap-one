#!/usr/bin/env node

const Parser = require("tap-parser");

process.stdin.pipe(
  new Parser(results => {
    console.log(results.pass, "Passed /", results.fail, "Failed");
    process.exit(results.ok ? 0 : 1);
  })
);
