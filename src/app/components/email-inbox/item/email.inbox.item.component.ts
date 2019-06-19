import { Component, OnInit, ViewEncapsulation, EventEmitter, Output, Input } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'app-email-inbox-item-component',
  templateUrl: './email.inbox.item.component.html',
  styleUrls: ['./email.inbox.item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class EmailInboxItemComponent implements OnInit {
    @Input() public DataSourceByItem: any;
    @Output() action = new EventEmitter();
    
    ngOnInit() { }

    onSelectItem( itemObj: any ) {
      alert(1);
    }

    onTouchHandle() {

    }

    // onDeleteItem() { }

    // onMarkUsUnReadItem() { }

    // onPinItem() { }

    // onUnPinItem() { }

    // onFavoriteItem() { }

    // onUnFavoriteItem() { }
}