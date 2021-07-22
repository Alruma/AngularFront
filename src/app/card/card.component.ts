import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() status?: string;
  @Input() gaugeValue?: string;
  @Input() cardTitle?: string;
  @Input() priority?: string;

  ngOnInit(): void {
  }

}
