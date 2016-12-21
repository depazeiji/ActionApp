'use strict'

module.exports = {
  loadPriority:  1000,
  startPriority: 1000,
  stopPriority:  1000,
  initialize: function (api, next) {
    api.interrupcionInit = {
      updateInterrupcion: function (id, next) {
              api.models.interrupciones.update({
                        fechaFin: new Date()
                    }, {
                        where: {
                            id: id
                        }
                    })
                    .then(function (interrupcion) {
                        next(interrupcion, false);
                    })
                    .catch(function (error) {
                        next(JSON.stringify(error), true);
                    });
            },
          createInterrupcion: function (longitud, latitud, next) {
                api.models.interrupciones.create({
                        fechaInicio: new Date(),
                        longitud: longitud,
                        latitud: latitud
                    })
                    .then(function (interrupcion) {
                        next(interrupcion, false);
                    })
                    .catch(function (error) {
                        next(JSON.stringify(error), true);
                    });
            }

    };

    next()
  },
  start: function (api, next) {
    next()
  },
  stop: function (api, next) {
    next()
  }
}
