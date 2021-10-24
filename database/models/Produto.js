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

      nome: {
        allowNull: false,
        type: DataTypes.STRING
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

      imagem: {
        allowNull: false,
        type: DataTypes.STRING
      },

      estoque: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
    },
    {
      tableName: "produtos",
      timestamps: false
    }
  );

  return Produto;
};
