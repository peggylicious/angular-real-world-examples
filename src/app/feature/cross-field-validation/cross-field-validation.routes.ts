import {Routes} from '@angular/router';

export default <Routes>[
  {
    path: '',
    loadComponent: () => import('./cross-field-validation').then((m) => m.CrossFieldValidation),
  }
]
