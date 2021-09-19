module.exports = function (sequelize, DataTypes) {
  const Produto = sequelize.define(
    "Produto",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.BIGINT.UNSIGNED
      },

      preco: {
        allowNull: false,
        type: DataTypes.DOUBLE
      },

      descricao: {
        allowNull: false,
        type: DataTypes.STRING(1000)
      },

      categoria: {
        allowNull: false,
        type: DataTypes.STRING(100)
      },

      faixa_etaria: {
        allowNull: false,
        type: DataTypes.STRING(5)
      },
    },
    {
      tableName: "produtos",
      timestamps: false
    }
  );

  return Produto;
};
