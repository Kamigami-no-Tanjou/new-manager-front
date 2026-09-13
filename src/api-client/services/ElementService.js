import axios from 'axios';
import ApiClientService from './ApiClientService';
import ElementDto from '../dtos/ElementDto';

export default class ElementService extends ApiClientService {
  formatData(dataEntry) {
    return new ElementDto(dataEntry);
  }

  async getElements() {
    return Promise.resolve([
      new ElementDto({ id: 1, name: "Aqueux", description: "Les magies auxquelles on attribue l'élément aqueux sont des magies qui permettent souvent de contrôler un ou plusieurs liquides, de différentes façons. Cela inclut la texture, la masse, l'élément, la forme, le volume etc... D'autres magies comme celle des lianes sont aussi classées comme aqueuses, simplement car on s'imagine que la manipulation d'un liquide est nécessaire à son fonctionnement.", iconUri: "http://localhost:8000/elems/1" }),
      new ElementDto({ id: 2, name: "Minéral", description: "Les magies auxquelles on attribue l'élément minéral sont des magies qui permettent souvent de contrôler un ou plusieurs matériaux solides, de différentes façons. Cela inclut la texture, la masse, l'élément, la forme, le volume etc... D'autres magies comme celle du marionnettiste sont aussi classées comme minérales, simplement car on s'imagine qu'il est nécessaire de s'imprégner de la matière à manipuler pour la faire fonctionner.", iconUri: "http://localhost:8000/elems/2" }),
      new ElementDto({ id: 3, name: "Vivant", description: "Les magies auxquelles on attribue l'élément vivant sont des magies qui permettent souvent d'avoir une influence sur les êtres vivants, de différentes façons. Cela inclut la croissance, la régénération, les sens etc... En réalité, les magies appartenant à cet élément ne concernent pas seulement la vie, mais aussi la mort. La magie de connexion en est un parfait exemple.", iconUri: "http://localhost:8000/elems/3" }),
      new ElementDto({ id: 4, name: "Aérien", description: "Les magies auxquelles on attribue l'élément aérien sont des magies qui permettent souvent de contrôler l'air, de différentes façons. Cela inclut la texture, la masse, l'élément, la forme, le volume etc... D'autres magies comme celle des explosions sont aussi classées comme aériennes, simplement car on s'imagine que la manipulation de l'air est nécessaire à son fonctionnement.", iconUri: "http://localhost:8000/elems/4" }),
      new ElementDto({ id: 5, name: "Thermique", description: "Les magies auxquelles on attribue l'élément thermique sont des magies qui concernent la température et le feu, entre autres. L'amalgame entre cette magie et le feu (ou la chaleur) est très souvent fait, mais il ne faut pas oublier que les magies créant du froid comme la magie de glace y sont également associées.", iconUri: "http://localhost:8000/elems/5" }),
      new ElementDto({ id: 6, name: "Énergétique", description: "Les magies auxquelles on attribue l'élément énergétique sont des magies qui concernent l'énergie et l'électricité, de différentes façons. Cela inclut la création d'énergie, comme son absorption etc... D'autres magies comme celle de gravité sont aussi classées comme énergétiques, simplement car les forces comme celle de la gravité sont considérées comme une forme d'énergie.", iconUri: "http://localhost:8000/elems/6" }),
      new ElementDto({ id: 7, name: "Temporel", description: "Les magies auxquelles on attribue l'élément temporel sont des magies qui permettent souvent de contrôler le temps, de différentes façons. Cela inclut la perception du temps, sa vitesse d'écoulement, etc... D'autres magies comme celle des lianes sont aussi classées comme temporelles, car la croissance des liannes implique une forme de manipulation du temps, au moins très localement.", iconUri: "http://localhost:8000/elems/7" }),
      new ElementDto({ id: 8, name: "Lumineux", description: "Les magies auxquelles on attribue l'élément lumineux sont des magies qui permettent souvent de contrôler la lumière, de différentes façons. À l'instar de l'élément thermique, cette magie concerne aussi bien la lumière en tant que tel, que son opposé : l'obscurité.", iconUri: "http://localhost:8000/elems/8" }),
    ]);

    // @todo Cache data within the client stores, or at least in the memory of the current view,
    // so that it isn't loaded from the server everytime.
    // return await axios.get("/api/elements", this.axiosConfig);
  }
}
