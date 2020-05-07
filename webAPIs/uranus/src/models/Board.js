const { Model, DataTypes } = require("sequelize");

class Board extends Model {
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
    this.hasMany(models.Task, { foreignKey: "board_id", as: "tasks" });
  }
}

module.exports = Board;
