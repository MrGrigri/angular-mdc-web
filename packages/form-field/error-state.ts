import { FormControl, FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

import { ErrorStateMatcher } from './error-state-matcher';

export type Constructor<T> = new (...args: any[]) => T;

export interface CanUpdateErrorState {
  updateErrorState(): void;
  readonly stateChanges: Subject<void>;
  errorState: boolean;
  errorStateMatcher?: ErrorStateMatcher;
}

export type CanUpdateErrorStateCtor = Constructor<CanUpdateErrorState>;

export interface HasErrorState {
  _parentFormGroup: FormGroupDirective;
  _parentForm: NgForm;
  _defaultErrorStateMatcher: ErrorStateMatcher;
  ngControl: NgControl;
}

/**
 * Mixin to augment a directive with updateErrorState method.
 * For component with `errorState` and need to update `errorState`.
 */
export function mixinErrorState<T extends Constructor<HasErrorState>>(base: T)
  : CanUpdateErrorStateCtor & T {
  return class extends base {
    /** Whether the component is in an error state. */
    errorState: boolean = false;

    /**
     * Stream that emits whenever the state of the input changes such that the wrapping
     * `MdcFormField` needs to run change detection.
     */
    readonly stateChanges = new Subject<void>();

    errorStateMatcher?: ErrorStateMatcher;

    updateErrorState() {
      const oldState = this.errorState;
      const parent = this._parentFormGroup || this._parentForm;
      const matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
      const control = this.ngControl ? this.ngControl.control as FormControl : null;
      const newState = matcher.isErrorState(control, parent);

      if (newState !== oldState) {
        this.errorState = newState;
        this.stateChanges.next();
      }
    }

    constructor(...args: any[]) {
      super(...args);
    }
  };
}
