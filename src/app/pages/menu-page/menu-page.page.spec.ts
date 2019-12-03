import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuPagePage } from './menu-page.page';

describe('MenuPagePage', () => {
  let component: MenuPagePage;
  let fixture: ComponentFixture<MenuPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
