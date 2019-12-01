const { Model, DataTypes } = require("sequelize");

class Deck extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    this.hasMany(models.Card, { foreignKey: "deck_id", as: "cards" });
  }
}

module.exports = Deck;
