/*jshint node:true*/
'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    sassOptions: {
      includePaths: ['bower_components/bourbon/app/assets/stylesheets']
    }
  };
};
