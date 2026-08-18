import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-writing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './writing.component.html',
  styleUrl: './writing.component.css'
})
export class WritingComponent {}
