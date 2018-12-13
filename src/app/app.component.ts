import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title : 'Mon premier article',
      content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      loveIts : 1,
      date: new Date()
    },
    {
      title : 'Mon deuxième article',
      content : 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      loveIts : -1,
      date: new Date()
    },
    {
      title : 'Mon troisième article',
      content : 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      loveIts : 0,
      date: new Date()
    }
  ]
}
