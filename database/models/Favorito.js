module.exports = (sequelize, DataTypes) => {
    const Fav = sequelize.define('Fav', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
        }
    });
  
    Fav.associate = models => {
      Fav.belongsToMany(models.Usuario, {
        through: 'favoritos',
        as: 'usuarios'
      });
      Fav.belongsToMany(models.Produto, {
        through: 'favoritos',
        as: 'produtos'
      })

    }
  
    return Fav;
  };