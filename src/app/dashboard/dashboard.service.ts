import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from './dashboard.types';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  videos = this.http.get<Video[]>('https://api.angularbootcamp.com/videos');
  filterVideos: Observable<Video[]>;
  searchTerm = new FormControl('');
  selectedVideo: Observable<Video>;
  selectedVideoId: Observable<string>;

  constructor(private http: HttpClient, activatedRoute: ActivatedRoute) {
    this.filterVideos = combineLatest([
      this.videos,
      this.searchTerm.valueChanges.pipe(startWith(this.searchTerm.value)),
    ]).pipe(
      map(([videos, searchTerm]) => {
        return videos.filter((video) => video.title.includes(searchTerm));
      })
    );

    this.selectedVideoId = activatedRoute.queryParamMap.pipe(
      map((qpm) => qpm.get('selectedId') || '')
    );

    this.selectedVideo = combineLatest([
      this.filterVideos,
      this.selectedVideoId,
    ]).pipe(
      map(([videos, id]) => {
        let video = videos.find((v) => v.id === id);
        if (!video) {
          video = videos[0];
        }
        return video;
      })
    );
  }
}