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
            },
          getInterrupciones: function (next) {
                api.sequelize.sequelize.query("SELECT DATE_FORMAT(fechaInicio,'%d/%m/%Y') AS fecha, COUNT(*) AS cantidad FROM Interrupciones GROUP BY fecha LIMIT 30;")
                    .then(function (interrupciones) {
                        next(interrupciones[0], false);
                    });
            },
          getTiemposInterrupciones: function (next) {
                api.sequelize.sequelize.query("SELECT DATE_FORMAT(fechaInicio,'%d/%m/%Y') AS fecha, SUM(TIMESTAMPDIFF(MINUTE,fechaFin,fechaInicio)) AS tiempo FROM Interrupciones GROUP BY fecha LIMIT 30;")
                    .then(function (interrupciones) {
                        next(interrupciones[0], false);
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
