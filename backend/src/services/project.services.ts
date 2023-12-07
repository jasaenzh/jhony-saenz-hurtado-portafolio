import { Request } from "express";
import { CreateProjectDTO } from "../schemas/createProject.dto"
import { ProjectInterface } from "../interfaces/project.interface";
import Project from "../models/project.model";
import { uploadFilesCloudinary } from "./uploadFileCloudinary.services";


const insertProject = async (project: CreateProjectDTO, req: Request): Promise<ProjectInterface> => {

  const { projectName, description, urlBackend, urlFrontend, } = project;

  if (!projectName || !description || !urlBackend || !urlFrontend) {
    throw new Error("Falta informacion")
  }

  const pathsCloudinary = await uploadFilesCloudinary(req)

  const newProject = await Project.create({
    projectName,
    description,
    images: pathsCloudinary,
    urlBackend,
    urlFrontend
  })

  return newProject

}

const findAllProject = async (): Promise<ProjectInterface[]> => {
  const projects = await Project.findAll();
  return projects;
}

const findByIdProject = async () => {


}

const findByIdProjectAndUpdate = async () => {

}

const findByIdProjectAndDelete = async () => {

}

export { insertProject, findAllProject, findByIdProject, findByIdProjectAndUpdate, findByIdProjectAndDelete }