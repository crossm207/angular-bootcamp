import { Component, OnInit } from '@angular/core';
import { Video } from './dashboard.types'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  selectedVideo: Video | undefined;

  constructor() { }

  ngOnInit(): void {
  }

selectVideo(video: Video) {
  this.selectedVideo = video;
}

}
