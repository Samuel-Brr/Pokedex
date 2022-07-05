import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PokedexService } from 'src/app/shared/pokedex.service';
import { Pokemon } from 'src/app/shared/pokemon.model';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.scss']
})
export class CreatePokemonComponent implements OnInit {

  createPokemonForm = this.fb.group({
    name: ['', Validators.required],
    imageUrl: ['', Validators.required],
    description: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private pokedexService: PokedexService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const newPokemon = this.createPokemon()
    // this.pokedexService.addPokemon(newPokemon)
  }

  createPokemon(){
    const name = this.getName.value!
    const imageUrl = this.getImageUrl.value!
    const description = this.getDescription.value!

    // const newPokemon = new Pokemon(name, imageUrl, description)

    // return newPokemon
  }

  get getName(){
    return this.createPokemonForm.controls.name
  }
  get getImageUrl(){
    return this.createPokemonForm.controls.imageUrl
  }
  get getDescription(){
    return this.createPokemonForm.controls.description
  }

}
