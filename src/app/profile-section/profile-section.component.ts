import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.scss']
})
export class ProfileSectionComponent implements OnInit {
  @Input() title? : string;
  @Input() FormTitle? : string;
  @Input() img? : string;
  @Input() ProfileEmail? : string;
  @Input() ProfilePhone1? : string;
  @Input() ProfilePhone2? : string;

  constructor() { }

  ngOnInit(): void {

  }

}
