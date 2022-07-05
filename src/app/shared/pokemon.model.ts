import { Ability } from "./ability.model";
import { Attack } from "./attack.model";
import { Resistance } from "./resistance.model";
import { Weakness } from "./weakness.model";

export class Pokemon {

  constructor(
      public id: string,
       public name: string,
       public nationalPokedexNumber: number,
       public imageUrl: string,
       public imageUrlHiRes: string,
       public types: string[],
       public supertype: string,
       public subtype: string,
       public evolvesFrom: string,
       public hp: string,
       public number: string,
       public artist: string,
       public rarity: string,
       public series: string,
       public set: string,
       public setCode: string,
       public attacks: Attack[],
       public weaknesses: Weakness[],
       public retreatCost: string[],
       public convertedRetreatCost: number,
       public resistances: Resistance[],
       public text: string[],
       public ability: Ability,
  ){}
}
