module.exports = function(sequelize, DataTypes) {
    const Endereco = sequelize.define('Endereco', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
      },
       
      rua: {
        allowNull: true,
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

      usuario_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    }, {
      tableName: 'enderecos',
      timestamps: false
    });
    
    Endereco.associate = function (db) {
      Endereco.belongsTo(db.Usuario, {
        as: "usuario",
        foreignKey: "usuario_id"
      })
    }

    return Endereco;
}
