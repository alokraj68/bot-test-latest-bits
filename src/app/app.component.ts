import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { App } from 'botframework-webchat';
import { DirectLine, Activity } from 'botframework-directlinejs';

const _token = '';
const _domain = window.location.href;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  @ViewChild('botWindow') botWindowElement: ElementRef;

  ngOnInit(): void {
    App({
      directLine: {secret: 'secret goes here'},
      user: {id: 'user'},
      bot: {id: 'bot'},
    }, this.botWindowElement.nativeElement)
  }

  constructor() {

  }
 
}
