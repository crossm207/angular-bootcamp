import { Component, OnInit } from '@angular/core';
import { Video } from './dashboard.types'
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  selectedVideo: Observable<Video>;
  constructor(private router: Router, dashboardService: DashboardService) {
    this.selectedVideo = dashboardService.selectedVideo;
  }

  ngOnInit(): void {
  }

selectVideo(video: Video) {
  this.router.navigate([], { queryParams: { selectedId: video.id } });
}

}
