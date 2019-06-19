import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollEventModule } from 'ngx-scroll-event';

// MAIN
import { PageEmailInboxComponent } from './email.inbox.page.component';

import { EmailInboxListModule } from './../../components/email-inbox/list/email.inbox.list.module';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: PageEmailInboxComponent
    }
];

@NgModule({
    declarations: [
        PageEmailInboxComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        ScrollEventModule,
        // COMPONENT
        EmailInboxListModule,
    ],
    providers: [

    ],
    exports: [

    ],
    entryComponents: [

    ]
})
export class PageEmailInboxModule { }
