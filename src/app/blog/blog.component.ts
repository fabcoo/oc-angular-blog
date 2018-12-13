import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() postTitle : string;
  @Input() postContent : string;
  @Input() postLoveITs: number;
  @Input() postDate : string;

  constructor() { }

  addLove(){
    this.postLoveITs++
  }

  subLove(){
    this.postLoveITs--;
  }

  ngOnInit() {
  }

}
