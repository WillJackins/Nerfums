import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ContractListComponent} from './contract-list/contract-list.component';

import {MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContractItemComponent} from './contract-item/contract-item.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {ContractCreateComponent} from './contract-create/contract-create.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {ContractManagerComponent} from './contract-manager/contract-manager.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ContractActiveListComponent, ContractDeleteDialogComponent} from './contract-active-list/contract-active-list.component';
import {ContractDashboardComponent} from './contract-dashboard/contract-dashboard.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {ContractCompleteComponent} from './contract-complete/contract-complete.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {AboutPageComponent} from './about-page/about-page.component';
import {MatTabsModule} from '@angular/material/tabs';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import {JwtInterceptor} from "./JwtInterceptor";

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
    ContractCompleteComponent,
    AboutPageComponent
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
    MatExpansionModule,
    MatDialogModule,
    MatIconModule,
    MatCheckboxModule,
    MatTabsModule,
    _MatMenuDirectivesModule,
    MatMenuModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
