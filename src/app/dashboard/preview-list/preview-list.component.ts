import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Video } from '../dashboard.types';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-preview-list',
  templateUrl: './preview-list.component.html',
  styleUrls: ['./preview-list.component.scss']
})
export class PreviewListComponent implements OnInit {
  
  @Output() videoSelected = new EventEmitter<Video>();

  videoList: Video[] = [];
  selectedVideo: Video | undefined;

  constructor(http: HttpClient) {
    http
    .get<Video[]>("https://api.angularbootcamp.com/videos")
    .subscribe((videos) => (this.videoList = videos));
   }

selectVideo(video: Video) {
  this.selectedVideo = video;
  this.videoSelected.emit(video);
}

  ngOnInit(): void {
  }

}
