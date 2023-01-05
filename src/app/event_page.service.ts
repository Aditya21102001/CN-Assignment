import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const URLTags = 'https://api.codingninjas.com/api/v3/event_tags';
const URLEvent = 'https://api.codingninjas.com/api/v3/events';
@Injectable({
  providedIn: 'root',
})
export class MyService {
  private apiUrl = 'https://api.codingninjas.com/api/v3/event_tags';

  constructor(private http: HttpClient) {}
  getTags() {
    return this.http.get(URLTags);
  }
  getEvents(
    eventCategory: string,
    eventSubCategory: string,
    eventTags: string[],
    offset: number
  ) {
    let parms = `?event_category=${eventCategory}&event_sub_category=${eventSubCategory}&tag_list=`;
    for (let i = 0; i < eventTags.length; i++) {
      if (i == eventTags[i].length - 1) parms += eventTags[i];
      else parms += eventTags + ',';
    }
    parms += `&offset=${offset}`;
    return this.http.get(URLEvent + parms);
  }
}
