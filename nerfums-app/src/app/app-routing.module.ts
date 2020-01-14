import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutPageComponent} from './about-page/about-page.component';
import {ContractManagerComponent} from './contract-manager/contract-manager.component';
import {ContractListComponent} from './contract-list/contract-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'about', component: AboutPageComponent},
  {path: 'contractManager', component: ContractManagerComponent},
  {path: 'contractList', component: ContractListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
