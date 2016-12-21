'use strict'

exports.action = {
  name: 'interrupcionFin',
  description: 'My Action',
  blockedConnectionTypes: [],
  outputExample: {},
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  middleware: [],

  inputs: {
    id: { required: true }
  },

  run: function (api, data, next) {
    api.interrupcionInit.updateInterrupcion(data.params.id, function (interrupcion, error) {
      if (error) {
          data.response = interrupcion + "\n" + "Algun error";
          next(error, true);
      } else {
          data.response.interrupcionId = interrupcion;
          next();
      }
    });
  }
}
