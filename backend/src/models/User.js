const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.TEXT,
          primaryKey: true
        }
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.hasMany(models.VirtualDoc, {
      foreignKey: "user_id",
      as: "virtual_docs"
    });
    this.hasMany(models.Board, { foreignKey: "user_id", as: "boards" });
  }
}

module.exports = User;
