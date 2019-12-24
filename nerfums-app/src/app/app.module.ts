import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ContractListComponent } from './contract-list/contract-list.component';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContractItemComponent } from './contract-item/contract-item.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ContractCreateComponent } from './contract-create/contract-create.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import { ContractManagerComponent } from './contract-manager/contract-manager.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ContractActiveListComponent, ContractDeleteDialogComponent} from './contract-active-list/contract-active-list.component';
import {ContractDashboardComponent } from './contract-dashboard/contract-dashboard.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { ContractCompleteComponent } from './contract-complete/contract-complete.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    ContractListComponent,
    ContractItemComponent,
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
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatGridListModule,
    DragDropModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
