import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dynamic-schema',
    loadChildren: () => import('./feature/dynamic-schema/dynamic-schema.routes')
  },
  {
    path: 'dynamic-field-validation',
    loadChildren: () => import('./feature/dynamic-form-fields-validation/dynamic-form-fields-validation.routes')
  }
];
