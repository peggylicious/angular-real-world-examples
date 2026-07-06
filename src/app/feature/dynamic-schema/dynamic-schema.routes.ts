import {Routes} from '@angular/router';

export default <Routes>[
  {
    path: '',
    loadComponent: () => import('./dynamic-schema').then((m) => m.DynamicSchema),
  }
]
