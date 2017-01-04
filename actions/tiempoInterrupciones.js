'use strict'

exports.action = {
  name: 'tiempoInterrupciones',
  description: 'Indicador de tiempos de interrupciones',
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
                //res["dataset"] = new Object();

                var dias = [];
                var values = [];
                for(var i=0; i<interrupciones.length; i++){
                  dias.push({"label": interrupciones[i].fecha});
                  values.push({"value": interrupciones[i].tiempo});

                }
                 var dataset = [
		                {
              		     "seriesname" : "Interrupciones",
              		     "data" : values
                     }
              		 ];
                  res["dataset"] = dataset;
                  res["categories"] = dias;
                  data.response = res;
                  next();
              }
            });
  }
}
