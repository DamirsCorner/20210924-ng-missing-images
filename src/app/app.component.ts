import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly images = [
    'https://loremflickr.com/320/240/dog',
    'https://loremflickr.co/320/240/broken',
    'https://loremflickr.com/320/240/cat',
  ];

  public handleMissingImage(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
