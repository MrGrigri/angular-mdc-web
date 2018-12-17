import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, flush } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import {
  dispatchTouchEvent,
  dispatchKeyboardEvent
} from '../testing/dispatch-events';

import {
  A,
  Platform,
  MdcTextField,
  MdcTextFieldModule,
  MdcIconModule
} from '@angular-mdc/web';

describe('MdcTextField', () => {
  let fixture: ComponentFixture<any>;
  let platform: { isBrowser: boolean };

  beforeEach(async(() => {
    // Set the default Platform override that can be updated before component creation.
    platform = { isBrowser: true };

    TestBed.configureTestingModule({
      imports: [MdcTextFieldModule, MdcIconModule, FormsModule],
      declarations: [SimpleTextfield, TextFieldTestWithValue],
      providers: [{ provide: Platform, useFactory: () => platform }]
    });
    TestBed.compileComponents();
  }));

  describe('basic behaviors', () => {
    let textFieldDebugElement: DebugElement;
    let textFieldNativeElement: HTMLElement;
    let textFieldInstance: MdcTextField;
    let testComponent: SimpleTextfield;

    beforeEach(() => {
      fixture = TestBed.createComponent(SimpleTextfield);
      fixture.detectChanges();

      textFieldDebugElement = fixture.debugElement.query(By.directive(MdcTextField));
      textFieldNativeElement = textFieldDebugElement.nativeElement;
      textFieldInstance = textFieldDebugElement.componentInstance;
      testComponent = fixture.debugElement.componentInstance;
    });

    it('#should have mdc-text-field by default', () => {
      expect(textFieldDebugElement.nativeElement.classList)
        .toContain('mdc-text-field', 'Expected to have mdc-text-field class');
    });

    it('#should apply class dense on property', fakeAsync(() => {
      testComponent.isDense = true;
      fixture.detectChanges();
      flush();
      expect(textFieldDebugElement.nativeElement.classList.contains('mdc-text-field--dense')).toBe(true);
    }));

    it('#should apply class fullwidth on property', fakeAsync(() => {
      testComponent.isFullwidth = true;
      fixture.detectChanges();
      flush();
      expect(textFieldDebugElement.nativeElement.classList.contains('mdc-text-field--fullwidth')).toBe(true);
    }));

    it('#should apply class outlined', fakeAsync(() => {
      testComponent.outlined = true;
      fixture.detectChanges();
      flush();
      expect(textFieldDebugElement.nativeElement.classList.contains('mdc-text-field--outlined')).toBe(true);
    }));

    it('#should apply class outlined and not set it again', fakeAsync(() => {
      testComponent.outlined = true;
      fixture.detectChanges();
      flush();
      expect(textFieldDebugElement.nativeElement.classList.contains('mdc-text-field--outlined')).toBe(true);

      testComponent.outlined = true;
      fixture.detectChanges();
      expect(textFieldDebugElement.nativeElement.classList.contains('mdc-text-field--outlined')).toBe(true);
    }));

    it('#should not be disabled', fakeAsync(() => {
      expect(textFieldInstance.disabled).toBeFalsy();
    }));

    it('#should be disabled', fakeAsync(() => {
      testComponent.disabled = true;
      fixture.detectChanges();
      flush();

      expect(textFieldInstance.disabled).toBe(true);
    }));

    it('#should not be read only', fakeAsync(() => {
      expect(textFieldInstance.readonly).toBeFalsy();
    }));

    it('#should be read only', fakeAsync(() => {
      testComponent.readonly = true;
      fixture.detectChanges();
      flush();

      expect(textFieldInstance.readonly).toBe(true);
    }));

    it('#should set validity based on input element validity', fakeAsync(() => {
      textFieldInstance.valid = true;
      fixture.detectChanges();
      flush();

      expect(textFieldInstance.valid).toBe(true);
    }));

    it('#should call onBlur', () => {
      expect(textFieldInstance.onBlur());
      fixture.detectChanges();
    });

    it('#should set required to true', fakeAsync(() => {
      testComponent.required = true;
      fixture.detectChanges();
      flush();

      expect(textFieldInstance.required).toBe(true);
    }));

    it('#should set useNativeValidation to true', fakeAsync(() => {
      testComponent.useNativeValidation = true;
      fixture.detectChanges();
      flush();

      expect(textFieldInstance.useNativeValidation).toBe(true);
      expect(textFieldInstance.isBadInput()).toBe(false);
    }));

    it('#should set style shake to true', fakeAsync(() => {
      expect(textFieldInstance._floatingLabel.shake(true));
      fixture.detectChanges();

      testComponent.validation = true;
      fixture.detectChanges();
      testComponent.persistent = true;
      fixture.detectChanges();
      expect(textFieldInstance.helperText.persistent).toBe(true);
    }));

    it('#should focus on underlying input element when focus() is called', fakeAsync(() => {
      expect(document.activeElement).not.toBe(textFieldInstance._input.nativeElement);
      textFieldInstance.focus();
      fixture.detectChanges();
      flush();

      expect(document.activeElement).toBe(textFieldInstance._input.nativeElement);
    }));

    it('change type', fakeAsync(() => {
      testComponent.myType = '';
      fixture.detectChanges();
      flush();

      expect(textFieldInstance.type).toBe('text');
    }));

    it('handles blur event', fakeAsync(() => {
      textFieldNativeElement.blur();
      fixture.detectChanges();
    }));

    it('handles focus event', fakeAsync(() => {
      textFieldNativeElement.focus();
      fixture.detectChanges();
    }));

    it('handles click event', fakeAsync(() => {
      textFieldNativeElement.click();
      fixture.detectChanges();
    }));

    it('expect trailing icon to be defined', fakeAsync(() => {
      expect(textFieldInstance.trailingIcon).toBeDefined();
    }));
  });

  describe('basic behaviors', () => {
    let textFieldDebugElement: DebugElement;
    let textFieldNativeElement: HTMLElement;
    let testInstance: MdcTextField;
    let testComponent: TextFieldTestWithValue;

    beforeEach(() => {
      fixture = TestBed.createComponent(TextFieldTestWithValue);
      fixture.detectChanges();

      textFieldDebugElement = fixture.debugElement.query(By.directive(MdcTextField));
      textFieldNativeElement = textFieldDebugElement.nativeElement;
      testInstance = textFieldDebugElement.componentInstance;
      testComponent = fixture.debugElement.componentInstance;
    });

    it('#should set value to foo', fakeAsync(() => {
      testInstance.value = 'foo';
      fixture.detectChanges();
      flush();

      expect(testInstance.value).toBe('foo');
    }));

    it('#should set helperText to null', fakeAsync(() => {
      testInstance.helperText = null;
      fixture.detectChanges();
      flush();

      expect(testInstance.helperText).toBeNull();
    }));

    it('#should check for browser', fakeAsync(() => {
      platform.isBrowser = false;
      expect(testInstance.focused).toBe(false);
    }));

    it('#should handle touch event', fakeAsync(() => {
      expect(testInstance.focused).toBe(false);
      testInstance._input.nativeElement.focus();
      fixture.detectChanges();

      dispatchKeyboardEvent(testInstance._input.nativeElement, 'keyup', A);
      fixture.detectChanges();

      dispatchTouchEvent(testInstance._input.nativeElement, 'touchstart');
      fixture.detectChanges();
      flush();

      expect(testInstance.focused).toBe(true);

      document.body.focus();
      fixture.detectChanges();
    }));
  });
});

@Component({
  template: `
  <mdc-form-field>
    <mdc-text-field
      [(ngModel)]="myModel"
      label="Username"
      [type]="myType"
      [tabIndex]="1"
      [dense]="isDense"
      [outlined]="outlined"
      [value]="value"
      [fullwidth]="isFullwidth"
      [required]="required"
      [readonly]="readonly"
      [disabled]="disabled"
      [useNativeValidation]="useNativeValidation"
      (blur)="onBlur($event)">
      <mdc-icon mdcTextFieldIcon leading>person</mdc-icon>
      <mdc-icon mdcTextFieldIcon trailing>person</mdc-icon>
    </mdc-text-field>
    <mdc-helper-text [validation]="validation" [persistent]="persistent">Username is required</mdc-helper-text>
  </mdc-form-field>
  `,
})
class SimpleTextfield {
  myModel: string = 'Test';
  myType: string = 'text';
  disabled: boolean;
  isDense: boolean;
  isFullwidth: boolean;
  outlined: boolean;
  required: boolean;
  readonly: boolean;
  useNativeValidation: boolean = false;
  validation: boolean;
  persistent: boolean = true;

  onBlur(event: any) { }
}

@Component({
  template: `
    <mdc-text-field
      label="Username"
      [helperText]="helper"
      [value]="value">
    </mdc-text-field>
    <mdc-helper-text #helper></mdc-helper-text>
  `,
})
class TextFieldTestWithValue {
  value: string = 'test';
}