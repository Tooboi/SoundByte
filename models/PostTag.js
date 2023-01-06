const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PostTag extends Model {}

PostTag.init(
  {
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tag',
        key: 'id',
        unique: 'false',
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'post',
        key: 'id',
        unique: 'false',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post_tag',
  }
);

module.exports = PostTag;
