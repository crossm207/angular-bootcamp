import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../dashboard.types';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

const URL_PREFIX = 'https://www.youtube.com/embed';

@Component({
  selector: 'app-select-video',
  templateUrl: './select-video.component.html',
  styleUrls: ['./select-video.component.scss']
})
export class SelectVideoComponent implements OnInit {

  @Input() set selectedVideo(video: Video | undefined) {
    if (video) {
    this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      URL_PREFIX + '/' + video.id
    );
  }
    
  }

    videoUrl: SafeUrl | undefined;
    constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
  }

}
