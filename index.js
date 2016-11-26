/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-bourbon',
  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  treeForStyles: function() {
    var bourbonPath = path.join(this.project.bowerDirectory, 'bourbon', 'app');
    var bourbonTree = new Funnel(this.treeGenerator(bourbonPath), {
      srcDir: '/assets/stylesheets',
      destDir: '/app/styles'
    });
    var bourbonAddonTree = new Funnel(this.treeGenerator(bourbonPath), {
      srcDir: '/assets/stylesheets',
      destDir: '/addon/styles'
    });
    // return mergeTrees([bourbonTree, bourbonAddonTree], {
    //   annotation: 'cli-bourbon merged'
    // });
    return bourbonTree;
  },

  // treeForAddon: function() {
  //   console.log("EMBER-CLI-BOURBON");
  //   var tree = this._super.treeForAddon.apply(this, arguments);
  //   // var checker = new VersionChecker(this);
  //   // var isOldEmber = checker.for('ember', 'bower').lt('1.13.0');
  //   // if (isOldEmber) {
  //   //   tree = new Funnel(tree, { exclude: [ /instance-initializers/ ] });
  //   // }
  //   var bourbonPath = path.join(this.project.bowerDirectory, 'bourbon', 'app');
  //   var bourbonTree = new Funnel(this.treeGenerator(bourbonPath), {
  //     srcDir: '/assets/stylesheets',
  //     destDir: '/app/styles'
  //   });
  //   console.log(this.project.name());
  //   return bourbonTree;
  // }

};
