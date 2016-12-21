'use strict'

exports.action = {
  name: 'interrupcionInicio',
  description: 'Inicio de una interrupción',
  blockedConnectionTypes: [],
  outputExample: {},
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  middleware: [],

  inputs: {
      longitud: { required: true },
      latitud: { required: true }
  },

  run: function (api, data, next) {
            api.interrupcionInit.createInterrupcion(data.params.longitud, data.params.latitud, function (interrupcion, error) {
              if (error) {
                  data.response = interrupcion + "\n" + "Algun error";
                  next(error, true);
              } else {
                  data.response.interrupcionId = interrupcion.id;
                  next();
              }
            });
  }
}
