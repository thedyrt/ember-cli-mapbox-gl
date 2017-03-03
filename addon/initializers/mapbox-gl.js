import MapboxGl from 'ember-cli-mapbox-gl/services/mapbox-gl';

export default {
  name: 'mapbox-gl-service',

  initialize: function(application) {
    application.register('service:mapbox-gl', MapboxGl);
  }
};

