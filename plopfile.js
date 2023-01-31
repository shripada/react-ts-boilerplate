/* eslint-disable */
const requireField = (fieldName) => {
  return (value) => {
    if (String(value).length === 0) {
      return fieldName + ' is required';
    }
    return true;
  };
};

module.exports = (plop) => {
  plop.setActionType('runFormat', function (answers) {
    const exec = require('child_process').exec;
    const command = 'npm run format';
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Failed to run format: ${error}`);
        return;
      }
    });
  });

  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
        validate: requireField('name'),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/Component/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/Component/Component.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/types.ts',
        templateFile: 'plop-templates/Component/Types.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/Component/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'plop-templates/Component/Component.test.tsx.hbs',
      },
      {
        type: 'runFormat',
      },
    ],
  });
};
