import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from './dashboard.types';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  videos = this.http.get<Video[]>('https://api.angularbootcamp.com/videos');

  constructor(private http: HttpClient) {}
}