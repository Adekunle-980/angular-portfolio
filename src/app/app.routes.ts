import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { JobsAppliedComponent } from './components/jobs-applied/jobs-applied.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'portfolio', component: PortfolioComponent
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: 'jobs-applied', component: JobsAppliedComponent
    }
    // {
    //     path: 'users', component: UsersComponent
    // }
    // {
    //     path: 'register', component: RegisterComponent
    // }
];
