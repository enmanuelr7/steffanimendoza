import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(200)
      ]), transition('* => void',
        animate(200, style({ opacity: 0 })))
    ])
  ]
})
export class AppComponent implements OnInit {

  showMenu = false;
  body = document.querySelector('body');

  constructor(
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Bienestar, Comida saludable, Ejercicio, Belleza, Autoconocimiento' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Steffani Mendoza' },
      { name: 'date', content: '2020-03-15', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
  }


  openMenu(): void {
    this.body.style.overflow = 'hidden';
    this.showMenu = true;
  }
  closeMenu(): void {
    this.body.style.overflow = 'auto';
    this.showMenu = false;
  }


}
