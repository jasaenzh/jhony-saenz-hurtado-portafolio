class UpdateSkillDTO {
  public nameSkill?: string;
  public description?: string;
  public image?: string;

  constructor(nameSkill: string, description: string, image: string) {
    this.nameSkill = nameSkill;
    this.description = description;
    this.image = image;
  }
}

export { UpdateSkillDTO }