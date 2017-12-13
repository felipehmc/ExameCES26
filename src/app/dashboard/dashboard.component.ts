import { Component, OnInit } from '@angular/core';
import { Devedor } from '../devedor';
import { DevedorService } from '../devedor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
	
  devedores: Devedor[] = [];

  constructor(private devedorService: DevedorService) { }

  ngOnInit() {
    this.getDevedores();
  }

  getDevedores(): void {
    this.devedorService.getDevedores()
      .subscribe(devedores => this.devedores = devedores.slice(1, 5));
  }
}