export default class CalendarDto {
  /**
   * @param {{
   *  id: number,
   *  name: string,
   *  referenceDate: number,
   *  negativeYears: number
   * }} data
   */
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.referenceDate = new Date(data.referenceDate);
    this.negativeYears = data.negativeYears;
  }
}
