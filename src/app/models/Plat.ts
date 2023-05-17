import {Media} from "./Media";

export class Plat
{
  constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.titre = obj.titre;
      this.prix = obj.prix;
      this.media = obj.media;
      // Map other properties from the object
    }
  }

  id!: number;
  titre !: string ;
  prix !: string;
  media !: Media;

}
