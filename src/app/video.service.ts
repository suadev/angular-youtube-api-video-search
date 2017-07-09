import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs/add/operator/map"

@Injectable()
export class VideoService {

  constructor(private http: Http) {
  }

  SearchVideo(searchKey: string) {

  return  this.http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: "AIzaSyBHoI60UsU-DyZ1xgcxXiQPn1NOImUiNBU",
        type: 'video',
        maxResults: '50',
        part: 'id,snippet',
        fields: 'items/id,items/snippet/title, items/snippet/description,items/snippet/thumbnails/default',
        q:searchKey
      }
      }).map(result => result.json());
    }
  }