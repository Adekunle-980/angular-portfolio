import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UsersComponent } from './components/users/users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from "./components/footer/footer.component";
import { JobsAppliedComponent } from './components/jobs-applied/jobs-applied.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, ReactiveFormsModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Portfolio';
}
