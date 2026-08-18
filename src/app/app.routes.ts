import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ItProfileComponent } from './components/it-profile/it-profile.component';
import { PeerSupportComponent } from './components/peer-support/peer-support.component';
import { WritingComponent } from './components/writing/writing.component';
import { FireOnTheMountainComponent } from './components/fire-on-the-mountain/fire-on-the-mountain.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'portfolio', redirectTo: 'it', pathMatch: 'full'
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
        path: 'work', redirectTo: 'it', pathMatch: 'full'
    },
    {
        path: 'writing', component: WritingComponent
    },
    {
        path: 'writing/fire-on-the-mountain', component: FireOnTheMountainComponent
    },
    {
        path: '**', redirectTo: ''
    }
];
