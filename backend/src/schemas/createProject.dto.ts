class CreateProjectDTO {

  public projectName: string;
  public description: string;
  public images?: string[];
  public urlBackend: string;
  public urlFrontend: string;

  constructor(projectName: string, description: string, images: string[], urlBackend: string, urlFrontend: string) {
    this.projectName = projectName;
    this.description = description;
    this.images = images;
    this.urlBackend = urlBackend;
    this.urlFrontend = urlFrontend;
    return this;
  }

}


export { CreateProjectDTO }