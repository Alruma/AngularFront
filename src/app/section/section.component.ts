import { Component, ElementRef, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() shadowless: boolean = false;

  constructor(private hostElement: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    if(this.shadowless){
      this.hostElement.nativeElement.classList.add('no-shadow');
    }
  }


}
