
module.exports = function (sequelize, DataTypes) {
    const Usuario = sequelize.define('Usuario', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
      },
       
      nome_completo: {
          allowNull: false,
          type: DataTypes.STRING
      },

      data_nascimento: {
          allowNull: false,
          type: DataTypes.DATE
      },

      telefone: {
        allowNull: false,
        type: DataTypes.STRING
      },

      senha: {
        allowNull: false,
        type: DataTypes.STRING(60)
      },

      numero_documento: {
        allowNull: false,
        type: DataTypes.STRING
      },

      email: {
        allowNull: false,
        type: DataTypes.STRING
      }
    }, {
      tableName: 'usuario',
      timestamps: false
    });

    return Usuario;

}
