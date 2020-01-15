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
    this.belongsTo(models.Book, { foreignKey: "book_id", as: "book" });
  }
}

module.exports = VirtualDoc;
