export class PersonModel {

  public firstName: string;
  public lastName: string;
  public age: number;
  public workTitle: string;

  constructor(dataIn: any) {
    
    if (dataIn) {
      this.firstName = dataIn.firstName || '';
      this.lastName = dataIn.lastName || '';
      this.age = dataIn.age || 0;
      this.workTitle = dataIn.workTitle || '';
    }
  }
}
