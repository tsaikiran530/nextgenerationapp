import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { StartingpageComponent } from './startingpage/index';
import { RegisterComponent } from './register/index';
import { CheckoutComponent } from './checkout/index';
import { ProduclistComponent } from './produclist/index';
import { CartComponent } from './cart/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'startingpage', component: StartingpageComponent },
    { path: 'productlist/:id', component: ProduclistComponent },
    {path : 'cart', component : CartComponent},
    { path: 'checkout', component: CheckoutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);