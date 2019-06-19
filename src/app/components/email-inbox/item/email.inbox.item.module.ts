import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailInboxItemComponent } from './email.inbox.item.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        EmailInboxItemComponent
    ],
    exports: [
        EmailInboxItemComponent
    ],
    entryComponents : []
})
export class EmailInboxItemModule { }
