/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-mapbox-gl',

  options: {
    nodeAssets: {
      'mapbox-gl': {
        srcDir: 'dist',
        import: ['mapbox-gl.js', 'mapbox-gl.css'],
      }
    }
  },

  isDevelopingAddon: function() {
    return true;
  }
};
