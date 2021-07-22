import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contacts-card',
  templateUrl: './contacts-card.component.html',
  styleUrls: ['./contacts-card.component.scss']
})
export class ContactsCardComponent implements OnInit {
  @Input() icon? : string = "";
  @Input() cardTitle? : string;
  @Input() cardNumber? : string;
  @Input() occupation? : string;
  @Input() email? : string;
  @Input() phoneNumber? : string;
  @Input() manager? : string;
  @Input() imgSource? : string;
  @Input() corporates? : string;
  constructor() { }

  ngOnInit(): void {
  }

}
