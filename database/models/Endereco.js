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

      usuario_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'Usuario',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    }, {
      tableName: 'endereco',
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
