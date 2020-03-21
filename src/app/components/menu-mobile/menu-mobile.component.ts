import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})

export class MenuMobileComponent implements OnInit {

  @Output() menuClose = new EventEmitter();

  closeMenu(): void {
    this.menuClose.emit();
  }

  constructor() { }

  ngOnInit() {
  }



}
