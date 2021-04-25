import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   
  {path:"admin", loadChildren:()=>import('./admin/admin.module')
  .then(mod=>mod.AdminModule)
  },

  {path:"user", loadChildren:()=>import('./user/user.module')
  .then(mod=>mod.UserModule)
  },
  {
    path:"template",loadChildren:()=>import('./template/template.module')
    .then(mod=>mod.TemplateModule)
  },
  {
    path:"reactive", loadChildren:()=>import('./reactive/reactive.module')
    .then(mod=>mod.ReactiveModule)
  }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
