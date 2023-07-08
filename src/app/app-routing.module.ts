import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'moviedetails/:id',component:MovieDetailsComponent},
  {path:'settings',loadChildren:()=>import('./settings/settings.module').then((m)=>m.SettingsModule)},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:NotFoundComponent},
  // {path:'',redirectTo:'home',pathMatch:'full'},
  // {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  // {path:'about',canActivate:[AuthGuard],component:AboutComponent},
  // {path:'contacts',canActivate:[AuthGuard],component:ContactsComponent},
  // {path:'login',component:LoginComponent},
  // {path:'register',component:RegisterComponent},
  // {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
