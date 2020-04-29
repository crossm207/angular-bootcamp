import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Video } from '../dashboard.types';
import { DashboardService } from '../dashboard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-preview-list',
  templateUrl: './preview-list.component.html',
  styleUrls: ['./preview-list.component.scss'],
})
export class PreviewListComponent implements OnInit {
  @Input() selectedVideo: Video | undefined;
  @Output() videoSelected = new EventEmitter<Video>();

  videoList: Observable<Video[]>;
  constructor(dashboardService: DashboardService) {
    this.videoList = dashboardService.filterVideos;
  }

  selectVideo(video: Video) {
    this.videoSelected.emit(video);
  }

  ngOnInit(): void {}
}