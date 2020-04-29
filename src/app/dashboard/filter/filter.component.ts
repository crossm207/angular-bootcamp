import { Component, OnInit } from '@angular/core';
import {FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  searchTerm = new FormControl('');

  constructor() {
    this.searchTerm.valueChanges.subscribe(searchTermValue => console.log('search term', searchTermValue));
   }

  ngOnInit(): void {
  }

}
