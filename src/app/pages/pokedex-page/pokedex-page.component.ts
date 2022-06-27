import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/shared/pokedex.service';
import { Pokemon } from 'src/app/shared/pokemon.model';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.scss']
})
export class PokedexPageComponent implements OnInit {

  pokemons: Pokemon[] = []
  pokemonDetail!: Pokemon;

  constructor(private pokedexService: PokedexService) {
    this.pokemons = pokedexService.getPokemonArray
   }

  ngOnInit(): void {
  }

  onPokemonClick(pokemon: Pokemon){
    this.pokemonDetail = pokemon
  }

}
