import { PokeResponse } from './interfaces/poke-response.interface';
import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=650');
    const data: PokeResponse = await response.json();

    data.results.forEach(({name, url}) => {

      const segments = url.split('/');
      const pokeNumber: number = +segments[ segments.length - 2 ];

      console.log( { name, pokeNumber});
    })
    
    return data.results;
  }
}
