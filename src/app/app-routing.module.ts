import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ImageuploadComponent } from './imageupload/imageupload.component';
import { ResultComponent } from './result/result.component';
import { HelpCComponent } from './help-c/help-c.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"upload", component:ImageuploadComponent},
  {path:"result", component:ResultComponent},
  {path:"help", component:HelpCComponent},
  {path:"**", component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
