export default class TimelineItem {
  /**
   * The class that represents an item from a timeline.
   *
   * @param label The main label.
   * @param date The date (in time) of the item.
   */
  constructor(label, date) {
    this.label = label;
    this.date = date;
  }
}
