import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



// MAIN
import { PagesComponent } from './pages.component';

// PAGE MODULE
import { PageEmailInboxModule } from './email-inbox/email.inbox.page.module';

// SERVICE
import { ReqeustService } from './../providers/request.service';


const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '',
                redirectTo: 'email',
                pathMatch: 'full'
            },
            {
                path: 'email',
                loadChildren: './email-inbox/email.inbox.page.module#PageEmailInboxModule'
            }
        ]
    }
];

@NgModule({
    declarations: [
        PagesComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        PageEmailInboxModule,
        RouterModule.forRoot(routes),
    ],
    providers: [
        ReqeustService,
    ],
    exports: [
        PagesComponent
    ],
    entryComponents: [

    ]
})


export class PagesModule { }
