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
    this.hasMany(models.Notebook, {
      foreignKey: "user_id",
      as: "notebooks"
    });
    this.hasMany(models.Board, { foreignKey: "user_id", as: "boards" });
  }
}

module.exports = User;
