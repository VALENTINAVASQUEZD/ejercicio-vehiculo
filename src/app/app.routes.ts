import { Routes } from '@angular/router';
import { VehiculosCreateComponent } from './vehiculos/vehiculos-create/vehiculos-create.component';
import { VehiculosListComponent } from './vehiculos/vehiculos-list/vehiculos-list.component';

export const routes: Routes = [{
    path:'',
    component:VehiculosListComponent
    },
    {
        path:'newVehiculo',
    component:VehiculosCreateComponent
    }
];
