import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardGuard } from  './guards/guard.guard';
const routes: Routes = [
  {       //this define below
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule',canActivate: [GuardGuard] },
  {path: 'home',loadChildren: './home/home.module#HomePageModule',canActivate: [GuardGuard]
    // loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'list',loadChildren: './list/list.module#ListPageModule',canActivate: [GuardGuard]
   // loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule',canActivate: [GuardGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
