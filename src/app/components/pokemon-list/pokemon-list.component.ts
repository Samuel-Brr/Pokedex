import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  @Input()
  pokemons!: Pokemon[];

  @Output()
  pokemonClick: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onPokemonClick(pokemon: Pokemon){
    this.pokemonClick.emit(pokemon)
  }

}
