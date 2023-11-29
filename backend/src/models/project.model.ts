import { DataTypes, Model } from "sequelize";
import { connectDB } from "../config/dbConfig";
import { ProjectInterface } from "../interfaces/project.interface";
import Skill from "./skill.model";

interface ProjectModel extends Model, Omit<ProjectInterface, "id"> { }

const Project = connectDB.define<ProjectModel>('Project',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    projectName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    urlBackend: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    urlFrontend: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: false,
  }
)

Project.belongsToMany(Skill, { through: "ProjectSkill" })
Skill.belongsToMany(Project, { through: "ProjectSkill" })

export default Project