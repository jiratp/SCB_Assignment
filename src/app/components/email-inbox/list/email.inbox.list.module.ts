import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailInboxListComponent } from './email.inbox.list.component';

import { EmailInboxItemModule } from './../item/email.inbox.item.module';


@NgModule({
    imports: [
        CommonModule,
        EmailInboxItemModule,
    ],
    declarations: [
        EmailInboxListComponent
    ],
    exports: [
        EmailInboxListComponent
    ],
    entryComponents : []
})
export class EmailInboxListModule { }