import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent implements OnInit {
  title: string = 'hello world';

  constructor() {}

  ngOnInit(): void {}

  dummy() {
    console.log('hello world');
  }

  thirdMethod() {
    console.log('hello world');
  }
}
