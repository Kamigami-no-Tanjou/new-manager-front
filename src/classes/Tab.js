export default class Tab {
  /**
   * The class for tabs
   *
   * @param {string} label The text to display (can't be null).
   * @param {string} tabId The unique ID of the tab.
   */
  constructor(label, tabId) {
    this.label = label;
    this.tabId = tabId;
  }
}
