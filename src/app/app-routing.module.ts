import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin/admin.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home/home.component";
import {TmpComponent} from "./tmp/tmp.component";
import {UpdateComponent} from "./update/update.component";
import {AddComponent} from "./add/add.component";

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: '', component: HomeComponent },
  { path: 'tmp', component: TmpComponent},
  { path: 'update/:id', component: UpdateComponent},
  { path: 'add', component: AddComponent},



];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
