import {Routes} from '@angular/router';

export default <Routes>[
  {
    path: '',
    loadComponent: () => import('./dynamic-form-fields-validation').then((m) => m.DynamicFormFieldsValidation),
  }
]
