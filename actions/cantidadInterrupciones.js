'use strict'

exports.action = {
  name: 'cantidadInterrupciones',
  description: 'Indicador de cantidad de interrupciones',
  blockedConnectionTypes: [],
  outputExample: {},
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  middleware: [],

  inputs: {

  },

  run: function (api, data, next) {
            api.interrupcionInit.getInterrupciones(function (interrupciones, error) {
              if (error) {
                  data.response = interrupciones + "\n" + "Algun error";
                  next(error, true);
              } else {
                var res = new Object();
                res["dataset"] = [];
                for(var i=0; i<interrupciones.length; i++){
                  var info = new Object();
                  info.seriesname = "Interrupciones";
                  info.data = interrupciones[i].cantidad;
                  res["dataset"].push(info);
                }
                  data.response = res;
                  next();
              }
            });
  }
}
