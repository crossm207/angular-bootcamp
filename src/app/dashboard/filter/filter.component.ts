import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  searchTerm = this.dashboardService.searchTerm;
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {}
}