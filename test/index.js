import { join } from "path"
import { assert } from "yeoman-generator"
import { test as helpers } from "yeoman-generator"
import test from "tape"

helpers.run(join(__dirname, "../app"))
  .withOptions({ skipInstall: true })
  .withPrompts({ someOption: true })
  .on("end", () => {
    assert.file([
      "package.json",
      "src/index.js",
      "test/index.js",
      "LICENSE",
      "README.md",
      "CHANGELOG.md",
      ".eslintrc",
      ".gitignore",
      ".travis.yml",
      ".editorconfig",
      ".git",
      ".babelrc"
    ])
    test("generator-new-node-module:app", (t) => {
      t.ok(true, "generate template files")
      t.end()
    })
  })
