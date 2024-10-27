export default class RadioOption {
  /**
   * This class represents an option of a `radio` tag.
   *
   * @param {string} label The text to display.
   * @param {any} value The value to return when the option is selected.
   */
  constructor(label, value) {
    this.label = label;
    this.value = value;
  }
}
