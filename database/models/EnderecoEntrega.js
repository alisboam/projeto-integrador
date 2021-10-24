module.exports = function(sequelize, DataTypes) {
  const EnderecoEntrega = sequelize.define('EnderecoEntrega', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED
    },
     
    rua: {
      allowNull: false,
      type: DataTypes.STRING(200)
    },

    numero: {
      allowNull: false,
      type: DataTypes.STRING(10)
    },

    complemento: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },

    municipio: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },

    estado: {
      allowNull: false,
      type: DataTypes.STRING(2)
    },

    cep: {
      allowNull: false,
      type: DataTypes.STRING(9)
    },
  }, {
    tableName: 'endereco_entrega',
    timestamps: false
  });

  return EnderecoEntrega;
}
