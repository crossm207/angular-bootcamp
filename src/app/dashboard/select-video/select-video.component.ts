import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../dashboard.types';

@Component({
  selector: 'app-select-video',
  templateUrl: './select-video.component.html',
  styleUrls: ['./select-video.component.scss']
})
export class SelectVideoComponent implements OnInit {

  @Input() selectedVideo: Video | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
