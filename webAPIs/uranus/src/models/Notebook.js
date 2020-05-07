const { Model, DataTypes } = require("sequelize");

class Notebook extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        detail: DataTypes.TEXT,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    this.hasMany(models.VirtualPaper, {
      foreignKey: "notebook_id",
      as: "virtual_papers",
    });
  }
}

module.exports = Notebook;
