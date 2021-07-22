import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-oportunities',
  templateUrl: './oportunities.component.html',
  styleUrls: ['./oportunities.component.scss']
})
export class OportunitiesComponent implements OnInit {
  @Input() oportunities? : string;
  constructor() { }

  ngOnInit(): void {
  }

}
