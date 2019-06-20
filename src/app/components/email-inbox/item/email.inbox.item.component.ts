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
  @Output() EmailInboxItemCallback = new EventEmitter();

  public itemFocus = 0;
  public tapCount: any = 0;

  public pressProgress: any = 0;
  protected interval: any;

  ngOnInit() { }

  onTapItem( event: any, itemObj: any ) {
    this.itemFocus = 2;
    const self = this;
    this.tapCount = this.tapCount + 1;
    this.interval = setInterval(function () {
      if (self.tapCount === 1) {
        self.tapCount = 0;
        self.itemFocus = (itemObj.isChoose) ? 1 : (self.itemFocus === 1) ? self.itemFocus : 0;
        clearInterval(self.interval);
      }if ( self.tapCount > 1) {
        self.tapCount = 0;
        clearInterval(self.interval);
        self.itemFocus = (itemObj.isChoose) ? 1 : (self.itemFocus === 1) ? self.itemFocus : 0;
        if ( self.itemFocus !== 1) {
          self.EmailInboxItemCallback.emit({ 'component' : 'read', 'content': itemObj });
        }
      }
    }, 250);
  }

  onPressDownItem ( event: any, itemObj: any) {
    this.itemFocus = 2;
    const self = this;
    this.interval = setInterval(function () {
      self.pressProgress = self.pressProgress + 1;
      if (self.pressProgress > 1) {
        self.pressProgress = 0;
        clearInterval(self.interval);
        self.itemFocus = (!itemObj.isChoose) ? 1 : 0;
        self.EmailInboxItemCallback.emit({ 'component' : 'choose', 'content': itemObj });
      }
    }, 200);
  }

  onPressUpItem(event: any, itemObj: any) {
    this.pressProgress = 0;
    this.itemFocus = (this.itemFocus === 1) ? this.itemFocus : 0;
    clearInterval(this.interval);
  }
}
