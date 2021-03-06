import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { ProfileComponent } from './components/profile.component';
import { PageRedirectComponent } from './components/page-redirect.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'perfil', component: ProfileComponent },
	{ path: 'page-redirect', component: PageRedirectComponent },
	{ path: '**', component: PageRedirectComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);