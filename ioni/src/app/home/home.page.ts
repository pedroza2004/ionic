import { Component } from '@angular/core';

interface ComponentItem {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  platform: 'ios' | 'android' = 'ios';
  darkMode = false;

  readonly components: ComponentItem[] = [
    { name: 'Dark Mode', icon: 'moon-outline' },
    { name: 'Accordion', icon: 'albums-outline' },
    { name: 'Action Sheet', icon: 'create-outline' },
    { name: 'Alert', icon: 'alert-circle-outline' },
    { name: 'Avatar', icon: 'person-circle-outline' },
    { name: 'Badge', icon: 'pricetag-outline' },
    { name: 'Breadcrumbs', icon: 'trail-sign-outline' },
    { name: 'Button', icon: 'radio-button-on' },
    { name: 'Card', icon: 'reader-outline' },
    { name: 'Checkbox', icon: 'checkbox-outline' },
    { name: 'Chip', icon: 'sparkles-outline' },
    { name: 'Content', icon: 'document-outline' },
  ];

  constructor() {}

  onPlatformChange(event: CustomEvent): void {
    const value = event.detail?.value as 'ios' | 'android' | undefined;
    if (value === 'ios' || value === 'android') {
      this.platform = value;
    }
  }

  onDarkModeChange(event: CustomEvent): void {
    this.darkMode = Boolean(event.detail?.checked);
  }
}
