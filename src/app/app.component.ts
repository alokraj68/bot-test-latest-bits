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

  constructor(
    private Bot: App
  ) {
    console.log(this.Bot);
  }

  ngOnInit() {
    console.log('commited');
    // this.Bot({
    //   directLine: 
    //   {
    //     token: '68pkTD5fsD8.dAA.SABvAFMAVAB1AHoAOABhADcAZwBSAEsAVgBwAHkAVgBSAE8ARwBNADYAYQAtAG0A.bPGhKh8d1QE.CHgZx2TK8R4.Ga2DI2ZW-1rIrdP3Iv0TM65pqhw2FCCrXvbLPxyB43w'
    //   },
    //   user: {
    //     id: 'dl_0572e5c2-8bfc-433b-94b7-6875c2fdaff0',
    //     name: 'jameson'
    //   },
    //   bot: {
    //     id: 'gandalfbot',
    //     name: 'Gandalf Bot'
    //   },
    // }, this.botWindowElement.nativeElement)
  }
 
}
