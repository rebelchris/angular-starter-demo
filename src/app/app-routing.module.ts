import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChildComponent } from './child/child.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent, children: [
    { path: 'about', component: AboutComponent }
  ] },
  { path: 'second', children: [
    { path: '', component: SecondComponent, },
    { path: 'child', component: ChildComponent }
  ] },
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
