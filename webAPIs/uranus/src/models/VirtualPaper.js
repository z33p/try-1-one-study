const { Model, DataTypes } = require("sequelize");

class VirtualPaper extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        body: DataTypes.TEXT,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.Notebook, {
      foreignKey: "notebook_id",
      as: "notebook",
    });
  }
}

module.exports = VirtualPaper;
