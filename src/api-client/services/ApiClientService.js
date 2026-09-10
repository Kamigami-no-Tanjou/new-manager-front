import { axiosConfig } from "../axios-config";

export default class ApiClientService {
  constructor() {
    this.axiosConfig = axiosConfig;
    this.axiosConfig.transformResponse = [this.mapDataFromApi];
  }

  formatData(dataEntry) {
    throw new Error("Unimplemented method in ApiClientService sub-class!");
  }

  mapDataFromApi(dataFromApi) {
    const arrayData = dataFromApi.constructor === Array
      ? dataFromApi
      : [dataFromApi];

    const mappedData = [];
    for (const dataEntry of arrayData) {
      mappedData.push(this.formatData(dataEntry));
    }

    return mappedData;
  }
}
