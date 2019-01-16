import { IncluirCategoriaComponent } from './../../categoria/incluir-categoria/incluir-categoria.component';
import { CategoriasListComponent } from './../../categoria/categorias-list/categorias-list.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { IncluirPromocaoComponent } from 'app/promocoes/incluir-promocao/incluir-promocao.component';
import { PromocoesListComponent } from 'app/promocoes/promocoes-list/pomocoes-list.component';
import { AuthGuard } from 'app/guards/auth.guard';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    {   
        path: 'dashboard',      
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'user-profile',   
        component: UserProfileComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'promocoes-list',     
        component: PromocoesListComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'incluir-promocoes',     
        component: IncluirPromocaoComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'incluir-promocoes/:id',     
        component: IncluirPromocaoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'categorias-list',
        component: CategoriasListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'incluir-categoria',
        component: IncluirCategoriaComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'incluir-categoria/:id',
        component: IncluirCategoriaComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'typography',     
        component: TypographyComponent,
    },
    { 
        path: 'icons',          
        component: IconsComponent 
    },
    { 
        path: 'maps',           
        component: MapsComponent
    },
    { 
        path: 'notifications',  
        component: NotificationsComponent
    },
    { 
        path: 'upgrade',        
        component: UpgradeComponent
    }
];
