import axios from 'axios';
import ApiClientService from './ApiClientService';
import MagicDto from '../dtos/MagicDto';

export default class MagicService extends ApiClientService {
  formatData(dataEntry) {
    return new MagicDto(dataEntry);
  }

  async getMagics() {
    return Promise.resolve([
      new MagicDto({ id: 1, name: "Magie des explosions", description: "Une magie permettant de créer spontanément des explosions. C'est une magie particulièrement dangereuse lorsqu'elle n'est pas maniée avec précaution, pour autant, la posséder n'est pas réellement mal vue, comme de nombreux héros ayant cette magie sont déjà entrés dans l'histoire. Il faut faire très attention aux jeunes enfants qui la possèdent, mais en général, les gens la perçoivent comme une bénédiction, d'autant plus si son possesseur révèle un potentiel magique élevé. C'est également une magie très pratique dans la vie courante, bien qu'à cause de sa dangerosité elle ait sa limite.", charactersCount: 1, elements: [5, 4] }),
      new MagicDto({ id: 2, name: "Magie de lévitation", description: "Une magie permettant de léviter. Elle n'est pas suffisante pour voler cependant, puisqu'elle n'a pour réel effet que d'amoindrir largement l'effet de la gravité sur la cible désirée.", charactersCount: 1, elements: [6, 4] }),
      new MagicDto({ id: 3, name: "Magie d'enchantement", description: "Une magie permettant d'enchanter n'importe quel objet, améliorant ainsi largement ses capacités. En général, les guerriers s'en servet sur leur arme pour la rendre plus tranchante, ou améliorer sa portée dans le cas d'un arc par exemple.", charactersCount: 1, elements: [6, 8] }),
      new MagicDto({ id: 4, name: "Magie de vitesse", description: "Une magie permettant momentanément d'atteindre une vitesse frénétique.", charactersCount: 1, elements: [6, 7] }),
      new MagicDto({ id: 5, name: "Magie de reforcement", description: "Une magie permettant d'augmenter considérablement les capacités d'une ou plusieurs personnes en fonction de la puissance du mage s'en servant.", charactersCount: 3, elements: [3] }),
      new MagicDto({ id: 6, name: "Magie des flammes", description: "Une magie redoutable qui permet de créer des flammes capables de calciner n'importe quoi. Comme la magie des explosions, elle est très pratique et prisée de la noblesse parce qu'elle facilite le chauffage des quartiers ou de l'eau du bain.", charactersCount: 1, elements: [5] }),
      new MagicDto({ id: 7, name: "Magie d'ahésion", description: "Elle permet de rendre collante n'importe quelle surface. Plutôt pratique puor stopper une armée entière.", charactersCount: 1, elements: [1] }),
      new MagicDto({ id: 8, name: "Magie de soin", description: "Comme son nom l'indique, elle permet de soigner n'importe quel mal. En réalité, elle n'est généralement capable d'apaiser uniquement les blessures physiques, mais si elle est utilisée par un mage puissant, elle peut soigner n'importe quel poison.", charactersCount: 3, elements: [3] }),
      new MagicDto({ id: 9, name: "Magie de rigidifaction de l'air", description: "Cette magie permet de rendre l'air solide par endroit. Cela permet notamment de créer es murs invisibles, qui peuvent s'avérer utiles dans de multiples situations.", charactersCount: 2, elements: [4, 7] }),
      new MagicDto({ id: 10, name: "Magie de congélation", description: "Une magie permettant de congeler n'importe quelle matière. On surnomme le premier mage à s'en être servi Azoli, un diminutif d'\"azote liquide\", tant il aurait gelé d'ennemis.", charactersCount: 2, elements: [5, 7] }),
    ]);

    // @todo Cache data within the client stores, or at least in the memory of the current view,
    // so that it isn't loaded from the server everytime.
    // return await axios.get("/api/magics", this.axiosConfig);
  }

  async getMagicsPerElement(elementService) {
    const elements = await elementService.getElements();
    const magics = await this.getMagics();

    const magicsPerElement = {};
    for (const element of elements) {
      magicsPerElement[element.name] = [];
    }

    for (const magic of magics) {
      for (const elementId of magic.elements) {
        magicsPerElement[elements.find(e => e.id === elementId).name].push(magic);
      }
    }

    return magicsPerElement;
  }
}
