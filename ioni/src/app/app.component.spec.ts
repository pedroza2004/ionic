import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { HomePage } from './home/home.page';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, HomePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

describe('HomePage', () => {
  it('should toggle dark mode and platform values', () => {
    const page = new HomePage();

    page.onPlatformChange({ detail: { value: 'android' } } as CustomEvent);
    page.onDarkModeChange({ detail: { checked: true } } as CustomEvent);

    expect(page.platform).toBe('android');
    expect(page.darkMode).toBe(true);
  });

  it('should update the selected component when a user clicks one', () => {
    const page = new HomePage();
    const item = page.components[2];

    page.onComponentClick(item);

    expect(page.selectedComponent).toBe(item);
    expect(page.isSelectedComponent(item)).toBe(true);
  });
});
