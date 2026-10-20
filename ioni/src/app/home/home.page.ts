import { Component } from '@angular/core';

interface ComponentItem {
  name: string;
  icon: string;
  description: string;
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
  selectedComponent: ComponentItem | null = null;

  readonly components: ComponentItem[] = [
    { name: 'Dark Mode', icon: 'moon-outline', description: 'Activa el tema oscuro y ajusta la apariencia de la interfaz.' },
    { name: 'Accordion', icon: 'albums-outline', description: 'Muestra contenido agrupado y desplegable para ahorrar espacio.' },
    { name: 'Action Sheet', icon: 'create-outline', description: 'Presenta acciones rápidas en una vista modal tipo hoja.' },
    { name: 'Alert', icon: 'alert-circle-outline', description: 'Notifica eventos importantes con mensajes y botones de acción.' },
    { name: 'Avatar', icon: 'person-circle-outline', description: 'Representa usuarios o perfiles con imágenes o iniciales.' },
    { name: 'Badge', icon: 'pricetag-outline', description: 'Resalta estados, contadores o etiquetas con un indicador visual.' },
    { name: 'Breadcrumbs', icon: 'trail-sign-outline', description: 'Muestra la ubicación actual dentro de una estructura jerárquica.' },
    { name: 'Button', icon: 'radio-button-on', description: 'Dispara acciones rápidas con diseño consistente y accesible.' },
    { name: 'Card', icon: 'reader-outline', description: 'Agrupa contenido relacionado con un estilo claro y modular.' },
    { name: 'Checkbox', icon: 'checkbox-outline', description: 'Permite opciones múltiples con selección simple y visible.' },
    { name: 'Chip', icon: 'sparkles-outline', description: 'Destaca etiquetas filtrables o información breve en un espacio compacto.' },
    { name: 'Content', icon: 'document-outline', description: 'Organiza información textual y visual de forma ordenada.' },
  ];

  constructor() {
    this.selectedComponent = this.components[0];
  }

  onPlatformChange(event: CustomEvent): void {
    const value = event.detail?.value as 'ios' | 'android' | undefined;
    if (value === 'ios' || value === 'android') {
      this.platform = value;
    }
  }

  onDarkModeChange(event: CustomEvent): void {
    this.darkMode = Boolean(event.detail?.checked);
  }

  onComponentClick(item: ComponentItem): void {
    this.selectedComponent = item;
  }

  isSelectedComponent(item: ComponentItem): boolean {
    return this.selectedComponent?.name === item.name;
  }
}
