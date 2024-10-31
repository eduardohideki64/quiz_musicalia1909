import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'tab6',
    loadChildren: () => import('./tab6/tab6.module').then( m => m.Tab6PageModule)
  },
  {
    path: 'tab7',
    loadChildren: () => import('./tab7/tab7.module').then( m => m.Tab7PageModule)
  },
  {
    path: 'tab8',
    loadChildren: () => import('./tab8/tab8.module').then( m => m.Tab8PageModule)
  },
  {
    path: 'introacor',
    loadChildren: () => import('./introacor/introacor.module').then( m => m.IntroacorPageModule)
  },
  {
    path: 'introprog',
    loadChildren: () => import('./introprog/introprog.module').then( m => m.IntroprogPageModule)
  },
  {
    path: 'intronotas',
    loadChildren: () => import('./intronotas/intronotas.module').then( m => m.IntronotasPageModule)
  },
  {
    path: 'intromenor',
    loadChildren: () => import('./intromenor/intromenor.module').then( m => m.IntromenorPageModule)
  },
  {
    path: 'musicdodia',
    loadChildren: () => import('./musicdodia/musicdodia.module').then( m => m.MusicdodiaPageModule)
  },
  {
    path: 'tab9',
    loadChildren: () => import('./tab9/tab9.module').then( m => m.Tab9PageModule)
  },
  {
    path: 'tab10',
    loadChildren: () => import('./tab10/tab10.module').then( m => m.Tab10PageModule)
  },
  {
    path: 'introtria',
    loadChildren: () => import('./introtria/introtria.module').then( m => m.IntrotriaPageModule)
  },
  {
    path: 'tab11',
    loadChildren: () => import('./tab11/tab11.module').then( m => m.Tab11PageModule)
  },
  {
    path: 'introtrimenor',
    loadChildren: () => import('./introtrimenor/introtrimenor.module').then( m => m.IntrotrimenorPageModule)
  },
  {
    path: 'tab12',
    loadChildren: () => import('./tab12/tab12.module').then( m => m.Tab12PageModule)
  },
  {
    path: 'introdiminu',
    loadChildren: () => import('./introdiminu/introdiminu.module').then( m => m.IntrodiminuPageModule)
  },
  {
    path: 'tab13',
    loadChildren: () => import('./tab13/tab13.module').then( m => m.Tab13PageModule)
  },
  {
    path: 'intromeiodimi',
    loadChildren: () => import('./intromeiodimi/intromeiodimi.module').then( m => m.IntromeiodimiPageModule)
  },
  {
    path: 'tab14',
    loadChildren: () => import('./tab14/tab14.module').then( m => m.Tab14PageModule)
  },
  {
    path: 'introtetra',
    loadChildren: () => import('./introtetra/introtetra.module').then( m => m.IntrotetraPageModule)
  },
  {
    path: 'tab15',
    loadChildren: () => import('./tab15/tab15.module').then( m => m.Tab15PageModule)
  },
  {
    path: 'acorde7',
    loadChildren: () => import('./acorde7/acorde7.module').then( m => m.Acorde7PageModule)
  },
  {
    path: 'gtab16',
    loadChildren: () => import('./tab16/gtab16.module').then( m => m.Gtab16PageModule)
  },
  {
    path: 'introprog77',
    loadChildren: () => import('./introprog77/introprog77.module').then( m => m.Introprog77PageModule)
  },
  {
    path: 'tab17',
    loadChildren: () => import('./tab17/tab17.module').then( m => m.Tab17PageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
