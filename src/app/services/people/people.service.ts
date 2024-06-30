import { Injectable } from '@angular/core';
import { Person } from './person.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {
  private API_URL = 'http://localhost:3000/people';

  constructor(private http: HttpClient) { }

  async getPeople(): Promise<Person[]> {
    const data = await this.http.get<Person[]>(this.API_URL).toPromise();
    return data ?? [];
  }	  
}