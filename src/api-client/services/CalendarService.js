import axios from 'axios';
import ApiClientService from './ApiClientService';
import CalendarDto from '../dtos/CalendarDto';
import CalendarSelectOption from '@/classes/model/CalendarSelectOption';

export default class CalendarService extends ApiClientService {
  formatData(dataEntry) {
    return new CalendarDto(dataEntry);
  }

  /**
   * Fetches sample data from the API.
   * @returns {Promise<CalendarDto[]>} A promise that resolves to the calendar data.
   */
  async getCalendars() {
    return Promise.resolve([
      new CalendarDto({ id: 1, name: "Calendrier de l'Union", referenceDate: -62167219200000, negativeYears: 37 }),
      new CalendarDto({ id: 2, name: "Calendrier Friggeois (variante Bëranoise)", referenceDate: -44109705600000, negativeYears: 0 }),
      new CalendarDto({ id: 3, name: "Calendrier Friggeois (variante Övik)", referenceDate: -22903430400000, negativeYears: 0 }),
      new CalendarDto({ id: 4, name: "Calendrier Méthian", referenceDate: -35722425600000, negativeYears: 0 }),
      new CalendarDto({ id: 5, name: "Calendrier Aslimani", referenceDate: -16367961600000, negativeYears: 0 }),
      new CalendarDto({ id: 6, name: "Calendrier du Commencement", referenceDate: -8867404800000, negativeYears: 0 }),
      new CalendarDto({ id: 7, name: "Calendrier Zigate", referenceDate: -29947536000000, negativeYears: 0 })
    ]);

    // @todo Cache data within the client stores, or at least in the memory of the current view,
    // so that it isn't loaded from the server everytime.
    // return await axios.get("/api/calendars", this.axiosConfig);
  }

  /**
   * @returns {Promise<CalendarSelectOption[]>}
   */
  async getCalendarSelectOptions() {
    const calendars = await this.getCalendars();
    const calendarSelectOptions = [];

    for (const calendar of calendars) {
      calendarSelectOptions.push(new CalendarSelectOption(calendar));
    }

    return calendarSelectOptions;
  }
}
