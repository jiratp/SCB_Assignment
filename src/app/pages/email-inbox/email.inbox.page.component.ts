import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { ScrollEvent } from 'ngx-scroll-event';

import { ReqeustService } from '../../providers/request.service';

import * as moment from 'moment';
import * as _ from 'underscore';

// // COMPONENT
// import { EmailInboxListComponent } from './../../components/email-inbox/list/email.inbox.list.component';


@Component({
// tslint:disable-next-line: component-selector
  selector: 'app-email.inbox.page',
  templateUrl: './email.inbox.page.component.html',
  styleUrls: ['./email.inbox.page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    ReqeustService,
  ],
})

export class PageEmailInboxComponent implements OnInit {
    public filterStatus: any = 'asc';
    public currentDate: any = moment();
    public lastDate: any = moment().subtract( 2 , 'month');
    public pageNumber: any = 1;
    public isFilter: any = false;
    public emailList: any = [];

    constructor(
      private Api: ReqeustService,
    ) { }

    ngOnInit() {
      this.LoadEmailList( this.pageNumber , this.filterStatus);
    }

    public handleScroll(event: ScrollEvent) {
      event.originalEvent.preventDefault();

      if (event.isReachingBottom) {
        if (!this.isFilter) {
          this.pageNumber = this.pageNumber + 1;
          this.LoadEmailList(this.pageNumber , this.filterStatus);
        }
      }

      if (event.isReachingTop) {
        this.isFilter = false;
      }
    }

    filterEmail(status: any) {
      if ( status === 'asc') {
        this.filterStatus = 'desc';
      } else {
        this.filterStatus = 'asc';
      }

      this.isFilter = true;
      this.pageNumber = 1;
      this.emailList = [];

      this.LoadEmailList(this.pageNumber , this.filterStatus);
    }

    LoadEmailList( page: any, sort: any) {
      const self = this;
      let useDate: any = null;

      if (sort === 'asc') {
        useDate = this.lastDate;
      } else {
        useDate = this.currentDate;
      }

      const tempEmailList: any = this.emailList;
      this.Api._call('./assets/data-storage/data.json').then((response) => {
        if (response.length > 0) {
          response.forEach(element => {
            const emailObj: any = element;
            emailObj.id = element.id * page;
            emailObj.create_date = moment(useDate).subtract( (emailObj.id - 3) , 'hours');
            if ( moment().format('L') === emailObj.create_date.format('L')) {
                emailObj.dateDisplay = emailObj.create_date.format('HH:mm');
            } else {
                if (moment().format('YYYY') ===  emailObj.create_date.format('YYYY')) {
                  emailObj.dateDisplay = emailObj.create_date.format('DD MMM');
                } else {
                  emailObj.dateDisplay = emailObj.create_date.format('DD MMM YYYY, HH:mm');
                }
            }
            tempEmailList.push(emailObj);
          });
        }
      }).then(() => {
        this.emailList = [];
        if ( sort === 'desc') {
          const contentList: any = _.sortBy(tempEmailList, 'create_date');
          this.emailList = contentList.reverse();
        }
        if ( sort === 'asc') {
          const contentList: any = _.sortBy(tempEmailList, 'id');
          this.emailList = contentList;
        }
      }).catch((error) => {
        this.emailList = [];
      });
    }


    EmailInboxListCallback(event: any) {
      let index;
      if (event !== undefined) {
        switch (event.component) {
          case 'choose':
              index = _.indexOf(this.emailList, event.content);
              this.emailList[index].isChoose = !event.content.isChoose;
              break;

          case 'read':
              index = _.indexOf(this.emailList, event.content);
              this.emailList[index].isRead = true;
              break;

          default:
            break;
        }
      }
    }
}
