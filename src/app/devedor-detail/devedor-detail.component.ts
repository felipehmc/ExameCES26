import { Component, OnInit, Input } from '@angular/core';
import { Devedor } from '../devedor';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DevedorService }  from '../devedor.service';

@Component({
  selector: 'app-devedor-detail',
  templateUrl: './devedor-detail.component.html',
  styleUrls: ['./devedor-detail.component.css']
})

export class DevedorDetailComponent implements OnInit {
	
  @Input() devedor: Devedor;

  constructor(
    private route: ActivatedRoute,
    private devedorService: DevedorService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDevedor();
  }
  
  goBack(): void {
    this.location.back();
  }

  getDevedor(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.devedorService.getDevedor(id)
      .subscribe(devedor => this.devedor = devedor);
  }

}
