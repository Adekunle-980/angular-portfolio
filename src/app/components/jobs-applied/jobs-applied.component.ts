import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsAppliedService, Job } from '../../services/jobs-applied.service';

@Component({
  selector: 'app-jobs-applied',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs-applied.component.html',
  styleUrls: ['./jobs-applied.component.css']
})
export class JobsAppliedComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobsAppliedService: JobsAppliedService) {}

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.jobsAppliedService.getJobs().subscribe(data => {
      this.jobs = data.map(j => ({ ...j, dateApplied: new Date(j.dateApplied) }));
    });
  }

  addJob() {
    const newJob: Job = {
      jobTitle: 'Backend Developer',
      company: 'Dev Co.',
      link: 'https://jobsite.com/job/456',
      dateApplied: new Date().toISOString()
    };
    this.jobsAppliedService.addJob(newJob).subscribe(() => this.loadJobs());
  }
}
