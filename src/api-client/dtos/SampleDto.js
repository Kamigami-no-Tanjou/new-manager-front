export default class SampleDto {
  /**
   * Creates an instance of SampleDto.
   * @param {{id: string, name: string, description: string}} data
   */
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
  }
}
