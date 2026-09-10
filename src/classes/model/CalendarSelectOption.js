import CalendarDto from "@/api-client/dtos/CalendarDto";
import SelectOption from "../SelectOption";

export default class CalendarSelectOption extends SelectOption {
  /**
   * @param {CalendarDto} calendar
   */
  constructor(calendar) {
    super(calendar.name, calendar.id);
    this.object = calendar;
  }
}
