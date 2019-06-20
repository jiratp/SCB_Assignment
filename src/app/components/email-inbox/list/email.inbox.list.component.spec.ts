import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailInboxListComponent } from './email.inbox.list.component';

describe('EmailInboxListComponent', () => {
  let component: EmailInboxListComponent;
  let fixture: ComponentFixture<EmailInboxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailInboxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailInboxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
