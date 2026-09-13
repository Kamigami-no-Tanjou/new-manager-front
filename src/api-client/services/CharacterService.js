import axios from 'axios';
import ApiClientService from './ApiClientService';
import CharacterDto from '../dtos/CharacterDto';

export default class CharacterService extends ApiClientService {
  formatData(dataEntry) {
    return new CharacterDto(dataEntry);
  }

  /**
   * Fetches sample data from the API.
   * @returns {Promise<CharacterDto[]>} A promise that resolves to the character data.
   */
  async getCharacters() {
    return Promise.resolve([
      new CharacterDto({ id: 1, firstName: "Mi", lastName: "Vulca", magicalClass: "assassin", magics: [{ id: 1, name: "Magie des explosions" }, { id: 2, name: "Magie de lévitation" }], origin: { id: 1, name: "Vulcain" }}),
      new CharacterDto({ id: 2, firstName: "Friedrich", lastName: "Vulca", magicalClass: "warrior", magics: [{ id: 3, name: "Magie d'enchantement" }, { id: 4, name: "Magie de vitesse" }], origin: { id: 1, name: "Vulcain" }}),
      new CharacterDto({ id: 3, firstName: "Anya", lastName: "Vulca Somvisar", magicalClass: "support", magics: [{ id: 5, name: "Magie de renforcement" }], origin: { id: 1, name: "Vulcain" }}),
      new CharacterDto({ id: 4, firstName: "Allet", lastName: "Somvisar", magicalClass: "warrior", magics: [{ id: 6, name: "Magie des flammes" }, { id: 7, name: "Magie d'ahésion" }], origin: { id: 1, name: "Vulcain" }}),
      new CharacterDto({ id: 5, firstName: "Norcy", lastName: "Vulca", magicalClass: "support", magics: [{ id: 8, name: "Magie de soin" }, { id: 5, name: "Magie de renforcement" }], origin: { id: 1, name: "Vulcain" }}),
      new CharacterDto({ id: 6, firstName: "Pristi Pristine", lastName: "Vulca Mary", magicalClass: "assassin", magics: [{ id: 9, name: "Magie de rigidification de l'air" }, { id: 10, name: "Magie de congélation" }], origin: { id: 1, name: "Vulcain" }}),
      new CharacterDto({ id: 7, firstName: "Merak", lastName: "Vulca", magicalClass: null, magics: [], origin: { id: 1, name: "Vulcain" }}),
      new CharacterDto({ id: 8, firstName: "Orige", lastName: "Vulca", magicalClass: "assassin", magics: [{ id: 11, name: "Magie électrique" }], origin: { id: 1, name: "Vulcain" }}),
      new CharacterDto({ id: 9, firstName: "Gisvod", lastName: "Vulca", magicalClass: "fortress", magics: [{ id: 12, name: "Magie d'emprisonnement" }, { id: 13, name: "Magie d'assoupissement" }], origin: { id: 1, name: "Vulcain" }}),
      new CharacterDto({ id: 10, firstName: "Saar", lastName: "Targonis", magicalClass: "warrior", magics: [{ id: 14, name: "Magie du contrôle de l'âme" }, { id: 15, name: "Magie du renforcement musculaire" }], origin: { id: 22, name: "Karlst" }})
    ]);

    // @todo Cache data within the client stores, or at least in the memory of the current view,
    // so that it isn't loaded from the server everytime.
    // return await axios.get("/api/calendars", this.axiosConfig);
  }

  /**
   * Fetches sample data from the API, and groups them by magical class. This skips characters that don't have a magical class.
   * @returns {Promise<CharacterDto[]>} A promise that resolves to the character data grouped by magical class.
   */
  async getCharactersPerClass() {
    const characters = await this.getCharacters();
    const charactersPerClass = {
      assassin: [],
      warrior: [],
      support: [],
      fortress: []
    };

    for (const character of characters) {
      const magicalClass = character.magicalClass;

      if (magicalClass === null) {
        continue; // Skip characters without a magical class
      }

      charactersPerClass[magicalClass].push(character);
    }

    return charactersPerClass;
  }
}
