import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dynamic-schema',
    loadChildren: () => import('./feature/dynamic-schema/dynamic-schema.routes')
  },
  {
    path: 'dynamic-field-validation',
    loadChildren: () => import('./feature/dynamic-form-fields-validation/dynamic-form-fields-validation.routes')
  },
  {
    path: 'cross-field-validation',
    loadChildren: () => import('./feature/cross-field-validation/cross-field-validation.routes')
  },
  {
    path: 'form-submission',
    loadChildren: () => import('./feature/form-submission/form-submission.routes')
  }
];
