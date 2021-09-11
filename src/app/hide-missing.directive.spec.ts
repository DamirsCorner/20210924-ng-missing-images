import { ElementRef } from '@angular/core';
import { HideMissingDirective } from './hide-missing.directive';

describe('HideMissingDirective', () => {
  it('should create an instance', () => {
    const directive = new HideMissingDirective(
      jasmine.createSpyObj<ElementRef>([], ['nativeElement'])
    );
    expect(directive).toBeTruthy();
  });
});
