import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios, { AxiosInstance } from 'axios';
import { Model } from 'mongoose';
import { FetchAdapter } from 'src/common/adapters/fetch.adapter';

import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: FetchAdapter
  ) {}

  async executeSeed() {

    await this.pokemonModel.deleteMany({}) // delete *from pokemons;

    const data = await this.http.get('https://pokeapi.co/api/v2/pokemon?limit=650');
    // const data: PokeResponse = await response.json();

    const pokemonsToInsert: { name; pokemonNumber }[] = [];

    data.results.forEach( ({ name, url }) => {
      const segments = url.split('/');
      const pokemonNumber: number = +segments[segments.length - 2];

      pokemonsToInsert.push({ name, pokemonNumber });
    });
    await this.pokemonModel.insertMany(pokemonsToInsert);

    return 'Seed executed';
  }
}
