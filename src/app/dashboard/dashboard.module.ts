import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { PreviewListComponent } from './preview-list/preview-list.component';
import { SelectVideoComponent } from './select-video/select-video.component';
import { FilterComponent } from './filter/filter.component';
import { Routes, RouterModule } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  declarations: [
  DashboardComponent, 
  PreviewListComponent, 
  SelectVideoComponent, 
  FilterComponent,
  VideoComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
