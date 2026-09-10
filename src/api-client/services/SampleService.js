import axios from 'axios';
import SampleDto from '../dtos/SampleDto';
import ApiClientService from './ApiClientService';

export default class SampleService extends ApiClientService {
  formatData(dataEntry) {
    return new SampleDto(dataEntry);
  }

  /**
   * Fetches sample data from the API.
   * @returns {Promise{SampleDto}} A promise that resolves to the sample data.
   */
  async getSampleData() {
    return await axios.get("/api/sample-data", this.axiosConfig);
  }
}
