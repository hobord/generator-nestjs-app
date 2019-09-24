// const path = require('path')
// const os = require('os')
// const chalk = require('chalk')
const Generator = require('yeoman-generator');
const yosay = require('yosay')
const walkDir = require('../../utils/walk-dir')
const moduleTypes = require('./module-types')
const kebabToPascal = require('../../utils/case-change').kebabToPascal
const kebabToCamel = require('../../utils/case-change').kebabToCamel
const toLower = require('../../utils/case-change').toLower

module.exports = class extends Generator {
  constructor(args, opt) {
    super(args, opt)
    this.option('graphql-entity-module')
    this.argument('name', {
      required: true,
      description: "The name of the module to create",
      type: String
    })
    this.myConfig = {}
  }

  prompting() {
    // Removes plural 's' from module names
    let name = this.options['name']
    this.myConfig.name = name.endsWith('s') ? name.substr(0, name.length - 1) : name
    // Checks if user added a module option
    if (this.options['graphql-entity-module']) {
      this.myConfig.moduleType = "graphql-entity-module"
      return Promise.resolve()
    }
    return this.prompt([{
      type: 'list',
      name: 'type',
      message: 'What type of NESTJS module do you want to create?',
      choices: moduleTypes
    }]).then(res => {
      this.myConfig.moduleType = res.type
    })
  }

  writing() {
    let {
      moduleType,
      name
    } = this.myConfig
    let templateOptions = {
      kebabToCamel,
      kebabToPascal,
      config: this.myConfig
    }
    switch (moduleType) {
      case "graphql-entity-module": {
        this.fs.copyTpl(this.templatePath(moduleType + '/dto/example.dto.ts'),
          this.destinationPath(`src/modules/${name}/dto/${name}.dto.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/dto/input-example.input.ts'),
          this.destinationPath(`src/modules/${name}/dto/input-${name}.input.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/interfaces/example.interface.ts'),
          this.destinationPath(`src/modules/${name}/interfaces/${name}.interface.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/interfaces/example-repository.interface.ts'),
          this.destinationPath(`src/modules/${name}/interfaces/${name}-repository.interface.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/model/example-model.factory.ts'),
          this.destinationPath(`src/modules/${name}/model/${name}-model.factory.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/model/example.entity.ts'),
          this.destinationPath(`src/modules/${name}/model/${name}.entity.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/model/example.repository.ts'),
          this.destinationPath(`src/modules/${name}/model/${name}.repository.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/example.module.ts'),
          this.destinationPath(`src/modules/${name}/${name}.module.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/example.resolver.ts'),
          this.destinationPath(`src/modules/${name}/${name}.resolver.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/example.service.ts'),
          this.destinationPath(`src/modules/${name}/${name}.service.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/example.service.spec.ts'),
          this.destinationPath(`src/modules/${name}/${name}.service.spec.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/README.md'),
          this.destinationPath(`src/modules/${name}/README.md`), templateOptions)

        return
      }
    }
  }

  start() {
    this.log('Do something...');
  }
};