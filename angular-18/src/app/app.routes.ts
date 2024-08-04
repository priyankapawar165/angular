import { Routes } from '@angular/router';
import { ParentComponent } from './data-binding/parent/parent.component';
import { ChildComponent } from './data-binding/child/child.component';
import { HomeComponent } from './home/home.component';
import { ReactiveComponent } from './form/reactive/reactive.component';
import { TemplateComponent } from './form/template/template.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {   path: 'parent', component:ParentComponent},
  {path: 'reactive',component:ReactiveComponent},
  {path:'template',component:TemplateComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];
