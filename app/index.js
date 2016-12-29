const Yeoman = require("yeoman-generator")
const yosay = require("yosay")
const slug = require("slug")
const camel = require("camelcase")
const normalize = require("normalize-url")
const humanize = require("humanize-url");

module.exports = Yeoman.Base.extend({
  init: function () {
    const done = this.async()

    this.prompt([
      {
        name: "moduleName",
        message: "What is the module name?",
        filter: function (s) { return slug(s) },
        default: require("path").basename(process.cwd()).replace(/\s/g, "-")
      },
      {
        name: "moduleDesc",
        message: "What is the module description?",
        default: function (props) { return props.name }
      },
      {
        name: "githubUsername",
        message: "What is your GitHub user name?",
        store: true,
        validate: function (value) {
          return value.length > 0 ? true : "github needed"
        }
      },
      {
        name: "moduleKeywords",
        message: "Keywords?",
        default: "node"
      },
      {
        name: "website",
        message: "What is your website URL?",
        store: true,
        filter: function (s) { return normalize(s) },
        default: function (props) {
          return "http://github.com/" + props.githubUsername
        }
      },
      {
        type: "confirm",
        name: "center",
        message: "Center title and badges in README?",
        store: true,
        default: false
      }
    ],
      function (props) {
        this.moduleName = props.moduleName
        this.moduleDesc = props.moduleDesc
        this.camelModuleName = camel(props.moduleName)
        this.moduleKeywords = props.moduleKeywords.trim().split(",")
          .map(function(s) { return (s || "").trim() })

        this.githubUsername = props.githubUsername
        this.name = this.user.git.name()
        this.email = this.user.git.email()
        this.website = props.website
        this.humanizedWebsite = humanize(props.website)

        this.template(props.center
          ? "README-2.md" : "README.md", "README.md")
        this.template("package.json")
        this.template("LICENSE")
        this.template("CHANGELOG.md")
        this.template("index.js",      "src/index.js")
        this.template("test.js",       "test/index.js")
        this.template("editorconfig",  ".editorconfig")
        this.template("gitignore",     ".gitignore")
        this.template("eslintrc",      ".eslintrc")

        done()
    }.bind(this))
  },
  writing: function () {
    [
      { name: 'travis', options: { config: { after_script: ['npm run coveralls'] }}},
      { name: 'babel',  options: { 'skip-install': this.options['skip-install'] }},
      { name: 'git-init' },
    ].forEach(function(generator) {
      this.composeWith(generator.name, { options: generator.options || {} }, {
        local: require.resolve('generator-' + generator.name + '/generators/app')
      });
    }.bind(this))
  },
  install: function () { this.installDependencies({ bower: false }) }
})
