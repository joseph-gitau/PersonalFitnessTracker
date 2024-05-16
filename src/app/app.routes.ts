// In app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkoutLogComponent } from './workout-log/workout-log.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'workout-log', component: WorkoutLogComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
