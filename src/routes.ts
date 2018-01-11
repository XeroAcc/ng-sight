import { Routes } from '@angular/router';
import { SectionServicesComponent } from './sections/section-services/section-services.component';
import { SectionHistoryComponent } from './sections/section-history/section-history.component';
import { SectionSystemComponent } from './sections/section-system/section-system.component';


export const appRoutes: Routes = [
  { path: 'services', component: SectionServicesComponent },
  { path: 'history', component: SectionHistoryComponent },
  { path: 'system', component: SectionSystemComponent },

  { path: '', redirectTo: '/services', pathMatch: 'full'},
];