import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { ItProfileComponent } from './components/it-profile/it-profile.component';
import { PeerSupportComponent } from './components/peer-support/peer-support.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'portfolio', redirectTo: 'work', pathMatch: 'full'
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: 'it', component: ItProfileComponent
    },
    {
        path: 'social-service', component: PeerSupportComponent
    },
    {
        path: 'social-services', redirectTo: 'social-service', pathMatch: 'full'
    },
    {
        path: 'peer-support', redirectTo: 'social-service', pathMatch: 'full'
    },
    {
        path: 'work', component: PortfolioComponent
    },
    {
        path: 'writing', redirectTo: 'social-service', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: ''
    }
];
