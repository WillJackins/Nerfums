import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ContractListComponent } from './contract-list/contract-list.component';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContractItemComponent } from './contract-item/contract-item.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { UserLoginComponent } from './user-login/user-login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ContractCreateComponent } from './contract-create/contract-create.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { ContractManagerComponent } from './contract-manager/contract-manager.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ContractActiveListComponent, ContractDeleteDialogComponent} from './contract-active-list/contract-active-list.component';
import {ContractDashboardComponent } from './contract-dashboard/contract-dashboard.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ContractCompleteComponent } from './contract-complete/contract-complete.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    ContractListComponent,
    ContractItemComponent,
    UserLoginComponent,
    RegisterUserComponent,
    ContractCreateComponent,
    ContractManagerComponent,
    ContractActiveListComponent,
    ContractDashboardComponent,
    ContractDeleteDialogComponent,
    ContractCompleteComponent
  ],
  entryComponents: [
    ContractCreateComponent,
    ContractCompleteComponent,
    ContractDeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
