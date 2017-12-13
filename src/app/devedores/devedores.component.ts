import { Component, OnInit } from '@angular/core';
import { Devedor } from '../devedor';
import { DevedorService } from '../devedor.service';

@Component({
  selector: 'app-devedores',
  templateUrl: './devedores.component.html',
  styleUrls: ['./devedores.component.css']
})

export class DevedoresComponent implements OnInit {
	
  devedores: Devedor[];

  constructor(private devedorService: DevedorService) { }

  ngOnInit() {
    this.getDevedores();
  }

  getDevedores(): void {
    this.devedorService.getDevedores()
    .subscribe(devedores => this.devedores = devedores);
  }
}
