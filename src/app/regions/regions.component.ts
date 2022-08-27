import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  regions : Region[] = [];
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.regions = [
      new Region('1', 'Linz'),
      new Region('2', 'Wien'),
      new Region('3', 'Riga')
    ];
  }

  selectRegion(region: Region){
    this.router.navigate([region.name + '/restaurants']);
  }

}

class Region{
  constructor(public id: string, public name: string){}
}
