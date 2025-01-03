import { HighlightDirective } from './highlight.directive';
import { ElementRef } from '@angular/core';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    // Crée un mock de ElementRef
    const mockElementRef = { nativeElement: {} } as ElementRef;

    // Passe ElementRef au constructeur de la directive
    const directive = new HighlightDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
