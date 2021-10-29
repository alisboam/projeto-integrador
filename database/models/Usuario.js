
module.exports = function (sequelize, DataTypes) {
    const Usuario = sequelize.define('Usuario', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
      },
       
      nome: {
          allowNull: false,
          type: DataTypes.STRING(150)
      },

      telefone: {
        allowNull: false,
        type: DataTypes.STRING(11)
      },

      senha: {
        allowNull: false,
        type: DataTypes.STRING(60)
      },

      numero_documento: {
        allowNull: false,
        type: DataTypes.STRING(14)
      },

      email: {
        allowNull: false,
        type: DataTypes.STRING
      }
    }, {
      tableName: 'usuarios',
      timestamps: false
    });

    Usuario.associate = function (db) {
      Usuario.hasOne(db.Endereco, {
        as: "enderecos",
        foreignKey: "usuario_id"
      })
      Usuario.belongsToMany(db.Produto, {
        through: 'favoritos',
        as: 'produtos'
      });
    }

    // Usuario.associate = function (db) {
    //   Usuario.hasMany(db.Pedido, {
    //     as: "pedido",
    //     foreignKey: "pedido_id"
    //   })
    // }

    return Usuario;
}
