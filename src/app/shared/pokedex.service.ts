import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Pokemon } from './pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  dataset: Pokemon[] = []

  constructor(private http: HttpClient) {
    this.getPokemonsFromApi()
   }

  get getPokemonArray(){
    return this.dataset
  }

  getPokemonsFromApi(): Observable<Pokemon[]>{
    return this.http.get('assets/pokemonApi.json').pipe(map((payload:any)=>{return payload = payload.cards}))
  }

  addPokemon(pokemon: Pokemon){
    console.log('TATA', this.dataset)
    const newDataset = [...this.dataset]
    newDataset.push(pokemon)
    this.dataset = newDataset
    console.log('TOTO', this.dataset)
  }
}
