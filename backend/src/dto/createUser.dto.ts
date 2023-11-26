class CreateUserDTO {

  public firstName: string;
  public secondName: string;
  public lastName: string;
  public secondLastName: string;
  public birthdate: string;
  public aboutMe: string;
  public image: string;

  constructor(
    firstName: string,
    secondName: string,
    lastName: string,
    secondLastName: string,
    birthdate: string,
    aboutMe: string,
    image: string,
  ) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.lastName = lastName;
    this.secondLastName = secondLastName;
    this.birthdate = birthdate;
    this.aboutMe = aboutMe;
    this.image = image;
  }
}

export { CreateUserDTO }