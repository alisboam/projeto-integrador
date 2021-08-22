module.exports = function(sequelize, DataTypes) {
    const Produto = sequelize.define('Produto', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.BIGINT.UNSIGNED
      },
       
      PRECO: {
          allowNull: false,
          type: DataTypes.FLOAT
      },

      descricao: {
          allowNull: false,
          type: DataTypes.DATE
      },

      categoria: {
        allowNull: false,
        type: DataTypes.STRING
      },

      faixa_etaria: {
        allowNull: false,
        type: DataTypes.STRING
      },

    });

    return Produto;

}
