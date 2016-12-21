'use strict';
module.exports = function(sequelize, DataTypes) {
  var Interrupciones = sequelize.define('Interrupciones', {
    fechaInicio: DataTypes.DATE,
    fechaFin: DataTypes.DATE,
    latitud: DataTypes.DOUBLE,
    longitud: DataTypes.DOUBLE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Interrupciones;
};