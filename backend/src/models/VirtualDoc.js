const { Model, DataTypes } = require("sequelize");

class VirtualDoc extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        body: DataTypes.TEXT
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }
}

module.exports = VirtualDoc;
