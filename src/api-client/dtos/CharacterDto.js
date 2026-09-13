export default class CharacterDto {
  /**
   * @param {{
   *  id: number,
   *  firstName: string,
   *  lastName: string,
   *  magicalClass: ?string,
   *  magics: {
   *    id: number,
   *    name: string,
   *  }[],
   *  origin: {
   *    id: number,
   *    name: string,
   *  }
   * }} data
   */
  constructor(data) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.magicalClass = data.magicalClass;
    this.magics = data.magics;
    this.origin = data.origin;
  }
}
