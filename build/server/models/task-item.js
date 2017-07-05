"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = require("sequelize");

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "TaskItem",
  define: {
    name: {
      type: _sequelize2.default.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 50],
          msg: "Your task item entry must be between 8 and 50 characters"
        }
      }
    }
  },
  // relationships: [{
  //   type: "belongsTo",
  //   model: "Task",
  //   name: "task",
  // }],
  options: {
    tableName: "task-items",
    classMethods: {},
    hooks: {
      beforeFind(options) {
        return undefined;
      },
      beforeCreate(instance, options, cb) {
        return undefined;
      },
      beforeUpdate(instance, options, cb) {
        return undefined;
      },
      beforeDestroy(instance, options, cb) {
        return undefined;
      }
    },
    indexes: [{ unique: true, fields: ["name"] }],
    instanceMethods: {} //TODO: figure out a way to expose this on graphql
  }
};
//# sourceMappingURL=task-item.js.map
