import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoetryService {

  constructor(private http: HttpClient) { }

  getAllPoetas( ) {

    const url = 'https://poetrydb.org/author';

    return this.http.get(url);
  }

  getObras( nameAuthor: string) {

    const url = `https://poetrydb.org/author/${nameAuthor}`;

    return this.http.get(url);
  }

  getFragmento( nameObra: string) {

    const url = `https://poetrydb.org/title/${nameObra}`;

    return this.http.get(url);
  }

}
