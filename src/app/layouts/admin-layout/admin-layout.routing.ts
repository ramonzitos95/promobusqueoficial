import { IncluirCategoriaComponent } from './../../categoria/incluir-categoria/incluir-categoria.component';
import { CategoriasListComponent } from './../../categoria/categorias-list/categorias-list.component';
import { IncluirPromocaoComponent } from './../../incluir-promocao/incluir-promocao.component';
import { AuthService } from './../../login/auth.service';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { PromocoesListComponent } from '../../table-list/pomocoes-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

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
        component: DashboardComponent
    },
    { 
        path: 'user-profile',   
        component: UserProfileComponent
    },
    { 
        path: 'promocoes-list',     
        component: PromocoesListComponent
    },
    { 
        path: 'incluir-promocoes',     
        component: IncluirPromocaoComponent
    },
    { 
        path: 'incluir-promocoes/:id',     
        component: IncluirPromocaoComponent
    },
    {
        path: 'categorias-list',
        component: CategoriasListComponent
    },
    {
        path: 'incluir-categoria',
        component: IncluirCategoriaComponent
    },
    {
        path: 'incluir-categoria/:id',
        component: IncluirCategoriaComponent
    },
    { 
        path: 'typography',     
        component: TypographyComponent 
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
