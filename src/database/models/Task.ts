import { Model } from "sequelize";
import sequelize from "sequelize";
import db from '.';
import User from "./User";

class Task extends Model{
    declare id: number
    declare title: string
    declare description: string
    declare date: string
    declare priorityLevel: string
    declare userId: string
}

Task.init({
    id:{
        type: sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      title:{
        type: sequelize.STRING,
        allowNull: false,
      },
      description:{
        type: sequelize.STRING,
        allowNull: false,
      },
      date:{
        type: sequelize.STRING,
        allowNull: false,
      },
      priorityLevel:{
        type: sequelize.STRING,
        allowNull: false,
      },
      userId:{
        type: sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'user',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
},{
    sequelize: db,
    tableName: 'task',
    timestamps: false,
    underscored: true,
})

Task.belongsTo(User,{
    foreignKey: 'userId',
    as: 'user'
})

export default Task