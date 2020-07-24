import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('../../calendar/calendar.module').then(m => m.CalendarsModule)
  },
 
   {
    path: 'forms',
    loadChildren: () => import('../../forms/forms.module').then(m => m.FormModule)
  },

  {
    path: 'tables',
    loadChildren: () => import('../../tables/tables.module').then(m => m.TablesModule)
  },

  

  {
    path: 'datatables',
    loadChildren: () => import('../../data-tables/data-tables.module').then(m => m.DataTablesModule)
  },

  {
    path: 'pages',
    loadChildren: () => import('../../pages/full-pages/full-pages.module').then(m => m.FullPagesModule)
  },
 
  {
    path: 'colorpalettes',
    loadChildren: () => import('../../color-palette/color-palette.module').then(m => m.ColorPaletteModule)
  },

  {
    path: 'projet',
    loadChildren: () => import('../../projet/projet.module').then(m => m.ProjetModule)
  },

  
  {
    path: 'tache',
    loadChildren: () => import('../../tache/tache.module').then(m => m.TacheModule)
  },

  {
    path: 'personnel',
    loadChildren: () => import('../../personnel/personnel.module').then(m => m.PersonnelModule)
  },
  
  {
    path: 'agenda',
    loadChildren: () => import('../../agenda/agenda.module').then(m => m.AgendaModule)
  },

  {
    path: 'materiel',
    loadChildren: () => import('../../materiel/materiel.module').then(m => m.MaterielModule)
  },

  {
    path: 'rendezVs',
    loadChildren: () => import('../../rendezVs/rendezVs.module').then(m => m.RendezVsModule)
  },

  {
    path: 'planification',
    loadChildren: () => import('../../planification/planification.module').then(m => m.PlanificationModule)
  },
 ];
