import { Component, OnInit, Output, Input, EventEmitter, ViewEncapsulation, HostListener } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'app-email-inbox-list-component',
  templateUrl: './email.inbox.list.component.html',
  styleUrls: ['./email.inbox.list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ ],
})

export class EmailInboxListComponent implements OnInit {
    @Input() public DataSource: any;
    @Output() EmailInboxListCallback = new EventEmitter();


    constructor( ) {

    }

    ngOnInit() { }

    EmailInboxItemCallback (event: any) {
      this.EmailInboxListCallback.emit(event);
    }

}
