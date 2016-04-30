'use strict';

var generateRuleTests = require('../../helpers/rule-test-harness');

generateRuleTests({
  name: 'lint-self-closing-void-elements',

  config: true,

  good: [
    '<area>',
    '<base>',
    '<br>',
    '<col>',
    '<command>',
    '<embed>',
    '<hr>',
    '<img>',
    '<input>',
    '<keygen>',
    '<link>',
    '<meta>',
    '<param>',
    '<source>',
    '<track>',
    '<wbr>'
  ],

  bad: [
    {
      template: '<area/>',
      message: 'Self-closing void element as <area> is redundant (\'layout.hbs\'@ L1:C0)',

      result: {
        rule: 'lint-self-closing-void-elements',
        message: 'Self-closing a void element is redundant',
        moduleId: 'layout.hbs',
        source: '<area/>',
        line: 1,
        column: 0
      }
    },
    {
      template: '<base/>',

      result: {
        rule: 'lint-self-closing-void-elements',
        message: 'Self-closing a void element is redundant',
        moduleId: 'layout.hbs',
        source: '<base/>',
        line: 1,
        column: 0
      }
    },
    {
      template: '<br/>',

      result: {
        rule: 'lint-self-closing-void-elements',
        message: 'Self-closing a void element is redundant',
        moduleId: 'layout.hbs',
        source: '<br/>',
        line: 1,
        column: 0
      }
    },
    {
      template: '<col/>',

      result: {
        rule: 'lint-self-closing-void-elements',
        message: 'Self-closing a void element is redundant',
        moduleId: 'layout.hbs',
        source: '<col/>',
        line: 1,
        column: 0
      }
    },
    {
      template: '<command/>',

      result: {
        rule: 'lint-self-closing-void-elements',
        message: 'Self-closing a void element is redundant',
        moduleId: 'layout.hbs',
        source: '<command/>',
        line: 1,
        column: 0
      }
    },
    {
      template: '<embed/>',

      result: {
        rule: 'lint-self-closing-void-elements',
        message: 'Self-closing a void element is redundant',
        moduleId: 'layout.hbs',
        source: '<embed/>',
        line: 1,
        column: 0
      }
    },
    {
      template: '<hr/>',

      result: {
        rule: 'lint-self-closing-void-elements',
        message: 'Self-closing a void element is redundant',
        moduleId: 'layout.hbs',
        source: '<hr/>',
        line: 1,
        column: 0
      }
    },
    {
      template: '<img/>',

      result: {
        rule: 'lint-self-closing-void-elements',
        message: 'Self-closing a void element is redundant',
        moduleId: 'layout.hbs',
        source: '<img/>',
        line: 1,
        column: 0
      }
    },
    {
      template: '<input/>',

      result: {
        rule: 'lint-self-closing-void-elements',
        message: 'Self-closing a void element is redundant',
        moduleId: 'layout.hbs',
        source: '<input/>',
        line: 1,
        column: 0
      }
    },
    {
      template: '<keygen/>',

      result: {
        rule: 'lint-self-closing-void-elements',
        message: 'Self-closing a void element is redundant',
        moduleId: 'layout.hbs',
        source: '<keygen/>',
        line: 1,
        column: 0
      }
    },
    {
      template: '<link/>',

      result: {
        rule: 'lint-self-closing-void-elements',
        message: 'Self-closing a void element is redundant',
        moduleId: 'layout.hbs',
        source: '<link/>',
        line: 1,
        column: 0
      }
    },
    {
      template: '<meta/>',

      result: {
        rule: 'lint-self-closing-void-elements',
        message: 'Self-closing a void element is redundant',
        moduleId: 'layout.hbs',
        source: '<meta/>',
        line: 1,
        column: 0
      }
    },
    {
      template: '<param/>',

      result: {
        rule: 'lint-self-closing-void-elements',
        message: 'Self-closing a void element is redundant',
        moduleId: 'layout.hbs',
        source: '<param/>',
        line: 1,
        column: 0
      }
    },
    {
      template: '<source/>',

      result: {
        rule: 'lint-self-closing-void-elements',
        message: 'Self-closing a void element is redundant',
        moduleId: 'layout.hbs',
        source: '<source/>',
        line: 1,
        column: 0
      }
    },
    {
      template: '<track/>',

      result: {
        rule: 'lint-self-closing-void-elements',
        message: 'Self-closing a void element is redundant',
        moduleId: 'layout.hbs',
        source: '<track/>',
        line: 1,
        column: 0
      }
    },
    {
      template: '<wbr/>',
      config: true,

      result: {
        rule: 'lint-self-closing-void-elements',
        message: 'Self-closing a void element is redundant',
        moduleId: 'layout.hbs',
        source: '<wbr/>',
        line: 1,
        column: 0
      }
    }
  ]
});
