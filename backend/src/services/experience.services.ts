import { CreateExperienceDTO } from "../schemas/createExperience.dto"
import { ExperienceInterface } from "../interfaces/experience.interface"
import { ProjectInterface } from "../interfaces/project.interface"
import Experience from "../models/experience.model"

const insertExperience = async (experience: CreateExperienceDTO): Promise<ExperienceInterface> => {

  const {
    position,
    company,
    currently,
    description,
    startDate,
    endDate
  } = experience

  const newExperience = await Experience.create({
    position,
    company,
    currently,
    description,
    startDate,
    endDate
  })

  return newExperience

}

const findAllExperience = async (): Promise<ExperienceInterface[]> => {

  const experiences = await Experience.findAll();
  return experiences

}

export { insertExperience, findAllExperience }