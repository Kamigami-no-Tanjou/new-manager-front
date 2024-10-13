export default class Breadcrumb {
  /**
   * The class for individual breadcrumbs
   *
   * @param {string} text The text to display (can't be null)
   * @param {string|null} link The link to redirect to when clicking on it. If null, the text will be rendered as a `span` instead of an `a`.
   */
  constructor(text, link) {
    this.text = text;
    this.link = link;
  }
}
