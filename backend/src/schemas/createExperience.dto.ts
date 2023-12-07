class CreateExperienceDTO {
  public position: string
  public company: string
  public currently: boolean
  public description: string
  public startDate: string
  public endDate: string
  constructor(position: string, company: string, currently: boolean, description: string, startDate: string, endDate: string) {

    this.position = position
    this.company = company
    this.currently = currently
    this.description = description
    this.startDate = startDate
    this.endDate = endDate

  }
}

export { CreateExperienceDTO }