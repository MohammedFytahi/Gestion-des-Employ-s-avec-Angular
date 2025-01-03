import 'zone.js/testing'; // Importe Zone.js pour les tests Angular
import { getTestBed } from '@angular/core/testing'; // Importe les utilitaires de test Angular
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing'; // Importe les modules de test Angular

// Initialise l'environnement de test Angular
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule, // Utilise le module de test dynamique
  platformBrowserDynamicTesting() // Configure la plateforme de test
);
