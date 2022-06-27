import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { dataset } from './pokemons-mock';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  dataset: Pokemon[] = dataset

  constructor() { }

  get getPokemonArray(){
    return this.dataset
  }

  addPokemon(pokemon: Pokemon){
    console.log('TATA', this.dataset)
    const newDataset = [...this.dataset]
    newDataset.push(pokemon)
    this.dataset = newDataset
    console.log('TOTO', this.dataset)
  }
}
