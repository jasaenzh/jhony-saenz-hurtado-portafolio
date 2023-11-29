import { CreateSkillDTO } from "../dto/createSkill.dto"
import { UpdateSkillDTO } from "../dto/updateSkill.dto";
import { SkillInterface } from "../interfaces/skill.interface";
import Skill from "../models/skill.model";
import { ClientError } from "../utils/errorsResponse";


const insertSkill = async (skill: CreateSkillDTO): Promise<SkillInterface> => {
  const { nameSkill, description, image } = skill;

  if (!nameSkill || !description || !image) {
    throw new ClientError("Falta informacion")
  }

  const newSkill = await Skill.create({
    nameSkill,
    description,
    image
  })

  return newSkill;

}

const findAllSkills = async (): Promise<SkillInterface[]> => {
  const skills = await Skill.findAll();
  return skills;
}

const findByIdSkill = async (id: string): Promise<SkillInterface> => {
  if (id.length !== 36) {
    throw new ClientError("Faltan caracteres en el campo ID")
  }

  const findSkill = await Skill.findOne({ where: { id: id } })

  if (!findSkill) {
    throw new ClientError("No se ecnuentra el ID")
  }

  return findSkill

}

const findByIdAndUpdateSkill = async (id: string, skill: UpdateSkillDTO): Promise<SkillInterface> => {
  if (id.length !== 36) {
    throw new ClientError("Faltan caracteres en el campo ID")
  }
  const findSkill = await Skill.findOne({ where: { id: id } })

  if (!findSkill) {
    throw new ClientError("No se ecnuentra el ID")
  }

  const updateSkill = await Skill.update(skill, { where: { id: id } })

  if (!updateSkill) {
    throw new ClientError("No se pudo actualizar")
  }

  const skillUpdated = await Skill.findOne({ where: { id: id } })

  if (!skillUpdated) {
    throw new ClientError("Error al cargar el id actualizado")
  }

  return skillUpdated

}

const findByIdAndDeleteSkill = async (id: string): Promise<number> => {
  if (id.length !== 36) {
    throw new ClientError("Faltan caracteres en el campo ID")
  }

  // Buscar el skill antes de eliminarlo
  const skillToDelete = await Skill.findOne({ where: { id: id } });

  if (!skillToDelete) {
    throw new ClientError("No se encuentra el ID");
  }

  const removeSkill = await Skill.destroy({ where: { id: id } })

  if (!removeSkill) {
    throw new ClientError("No se pudo eliminar el registro");
  }

  return removeSkill

}

export { insertSkill, findAllSkills, findByIdSkill, findByIdAndUpdateSkill, findByIdAndDeleteSkill }