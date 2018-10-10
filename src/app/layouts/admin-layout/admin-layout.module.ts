import { IncluirPromocaoComponent } from './../../incluir-promocao/incluir-promocao.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { PromocoesListComponent } from '../../table-list/pomocoes-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatDatepickerToggle,
  MatCheckbox,
  MatCheckboxModule,
  MAT_DATE_LOCALE,
  MatSelectModule,
} from '@angular/material';
import { CategoriasListComponent } from '../../categoria/categorias-list/categorias-list.component';
import { IncluirCategoriaComponent } from '../../categoria/incluir-categoria/incluir-categoria.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    PromocoesListComponent,
    IncluirPromocaoComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    CategoriasListComponent,
    IncluirCategoriaComponent
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'pt-br'}]
})

export class AdminLayoutModule {}
