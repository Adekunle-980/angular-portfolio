import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  isNavOpen = false;

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
    const navLinks = document.getElementById('nav-links')
    if (navLinks) {
      navLinks.classList.toggle('active', this.isNavOpen);

    }
  }

}
