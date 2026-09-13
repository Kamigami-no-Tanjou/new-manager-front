export default class Tab {
  /**
   * The class for tabs
   *
   * @param {string} label The text to display (can't be null).
   * @param {string} tabId The unique ID of the tab.
   * @param {string} iconUri The URI of the icon to display (can be null).
   */
  constructor(label, tabId, iconUri = null) {
    this.label = label;
    this.tabId = tabId;
    this.iconUri = iconUri;
  }
}
