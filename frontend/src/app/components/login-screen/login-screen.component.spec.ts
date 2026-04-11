import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginScreenComponent } from './login-screen.component';
import {Router} from '@angular/router';

describe('LoginScreenComponent', () => {
  let component: LoginScreenComponent;
  let fixture: ComponentFixture<LoginScreenComponent>;
  let routerSpy: jasmine.SpyObj<Router>

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [LoginScreenComponent],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginScreenComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should show error message if credentials are wrong', () => {
    const component = fixture.componentInstance;

    component.user.username = 'Gundam';
    component.user.password = 'wrongpassword';

    component.checkLogin();

    expect(component.errorMessage).toBe('Incorrect username or password.');
  });

  it('Should navigate to /gundams when credentials are correct', () => {
    const component = fixture.componentInstance;

    component.user.username = 'Gundam';
    component.user.password = 'GundamPassword';

    component.checkLogin();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/gundams']);
    expect(component.errorMessage).toBe('');
  });

});

