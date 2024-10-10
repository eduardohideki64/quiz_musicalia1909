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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
