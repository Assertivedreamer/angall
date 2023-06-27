import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { NfComponent } from './component/nf/nf.component';

const routes: Routes = [

{
  path:'',
  redirectTo:'contact',
  pathMatch: 'full'
},
{
  path:'home',
  component: HomeComponent,
  
},
{
  path:'contact',
  component: ContactComponent,
  
},
{
  path:'**',
  component: NfComponent,
  
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
