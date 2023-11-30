import { DataTypes, Model } from "sequelize";
import { connectDB } from "../config/dbConfig";
import { UserInterface, UserRole } from "../interfaces/user.interface";
import Skill from "./skill.model";
import Project from "./project.model";
import Experience from "./experience.model";

interface UserModel extends Model, Omit<UserInterface, "id"> {
  addSkills(skills: any): unknown;
}

const User = connectDB.define<UserModel>('User',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    secondName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    secondLastName: {
      type: DataTypes.STRING,
    },
    birthdate: {
      type: DataTypes.STRING,
    },
    aboutMe: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    role: {
      type: DataTypes.ENUM(...Object.values(UserRole)),
      allowNull: false,
      defaultValue: UserRole.USER
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: false
  }
)

User.belongsToMany(Skill, { through: "UserSkill" })
Skill.belongsToMany(User, { through: "UserSkill" })

User.hasMany(Project)
Project.belongsTo(User)

User.hasMany(Experience)
Experience.belongsTo(User)

export default User;