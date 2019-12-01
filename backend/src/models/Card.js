const { Model, DataTypes } = require("sequelize");

class Card extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        detail: DataTypes.STRING
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.Deck, { foreignKey: "deck_id", as: "deck" });
  }
}

module.exports = Card;
