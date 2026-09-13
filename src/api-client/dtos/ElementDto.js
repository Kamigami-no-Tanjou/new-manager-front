export default class ElementDto {
  /**
   * Creates an instance of ElementDto.
   * @param {{
   *  id: number,
   *  name: string,
   *  description: string,
   *  iconUri: string
   * }} data
   */
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.icon = data.iconUri;
  }
}
