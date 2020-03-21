import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(1000)
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  @Output() menuOpen = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openMenu(): void {
    this.menuOpen.emit();
  }

}

