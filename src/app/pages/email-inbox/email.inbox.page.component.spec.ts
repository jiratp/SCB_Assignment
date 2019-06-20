import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEmailInboxComponent } from './email.inbox.page.component';

describe('PageEmailInboxComponent', () => {
  let component: PageEmailInboxComponent;
  let fixture: ComponentFixture<PageEmailInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEmailInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEmailInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
