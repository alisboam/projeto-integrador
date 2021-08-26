module.exports = function(sequelize, DataTypes) {
    const Endereco = sequelize.define('Endereco', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
      },
       
      logradouro: {
          allowNull: false,
          type: DataTypes.STRING
      },

      numero: {
        allowNull: false,
        type: DataTypes.STRING
      },

      numero_documento: {
        allowNull: false,
        type: DataTypes.STRING
      },

      complemento: {
        allowNull: false,
        type: DataTypes.STRING
      },

      municipio: {
        allowNull: false,
        type: DataTypes.STRING
      },

      estado: {
        allowNull: false,
        type: DataTypes.STRING
      },

      cep: {
        allowNull: false,
        type: DataTypes.STRING
      },

      
    });
    
    Endereco.associate = function (db) {
      Endereco.belongsTo(db.Usuario)
    }

    return Endereco;
}
