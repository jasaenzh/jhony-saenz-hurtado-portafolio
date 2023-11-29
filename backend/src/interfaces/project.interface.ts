export interface ProjectInterface {
  addSkills(skills: any): unknown;
  id?: string;
  projectName: string;
  description: string;
  images: string[]
}