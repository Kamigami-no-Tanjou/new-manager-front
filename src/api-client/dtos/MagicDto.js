export default class MagicDto {
  /**
   *
   * @param {{
   *   id: number,
   *   name: string,
   *   description: string,
   *   charactersCount: number,
   *   elements: number[]
   * }} data
   */
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.charactersCount = data.charactersCount;
    this.elements = data.elements;
  }
}
