import { Component, Input, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon : PokemonData;

  constructor(private service:PokemonService){
    this.pokemon = {
      id: '0',
      name: '',
      sprites: {
        front_default: '',
      },
      types: [{
        type: {
            name: ''
        }
      }]
    }
  }

  ngOnInit(): void {
    this.getPokemon('1') 
  }

  getPokemon( pokemonIdOrName: string){
    this.service.getPokemon(pokemonIdOrName).subscribe(
      {
        next: (res) => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }          
          
        },
        error: (e) => console.error('not found')
      }
    )
    ;
  }
}
