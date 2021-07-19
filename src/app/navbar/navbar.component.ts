import { EventEmitter } from '@angular/core';
import { Component, ElementRef, HostListener, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  
  @Output() changeSection = new EventEmitter<number>();

  buttons: Array<HTMLButtonElement> = [];
  selected: HTMLButtonElement;
  constructor(private hostElement: ElementRef<HTMLElement>) {
    this.selected = this.buttons[0];
  }
  
  ngOnInit(): void {
    const primaryButtons = this.hostElement.nativeElement.querySelectorAll('app-primary-button');
    console.log(primaryButtons);
    const elementList = this.hostElement.nativeElement.querySelectorAll('button');
    for (let i = 0; i < elementList.length; i++) {
      this.buttons.push(elementList[i]);
      this.buttons[i].dataset.navbarId = `${i}`;
    }
    this.buttons[0].classList.add('clicked');
    this.selected = this.buttons[0];
  }
  @HostListener('click', ['$event.target'])
  onClick(target: HTMLButtonElement) {
    this.selected.classList.remove('clicked');
    this.selected = this.buttons[parseInt(target.dataset.navbarId!)];
    this.selected.classList.add('clicked');
  }
}
