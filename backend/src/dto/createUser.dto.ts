class CreateUserDTO {

  public firstName: string;
  public secondName: string;
  public lastName: string;
  public secondLastName: string;
  public birthdate: string;
  public aboutMe: string;

  constructor(
    firstName: string,
    secondName: string,
    lastName: string,
    secondLastName: string,
    birthdate: string,
    aboutMe: string,
  ) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.lastName = lastName;
    this.secondLastName = secondLastName;
    this.birthdate = birthdate;
    this.aboutMe = aboutMe;
  }
}

export { CreateUserDTO }