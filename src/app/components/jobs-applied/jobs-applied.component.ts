import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsAppliedService, Job } from '../../services/jobs-applied.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jobs-applied',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './jobs-applied.component.html',
  styleUrls: ['./jobs-applied.component.css'],
})
export class JobsAppliedComponent implements OnInit {
  jobs: Job[] = [];
  newJob: Job = {
    jobTitle: '',
    company: '',
    link: '',
    dateApplied: new Date().toISOString(),
  };

  constructor(private jobsAppliedService: JobsAppliedService) {}

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.jobsAppliedService.getJobs().subscribe((data) => {
      this.jobs = data.map((j) => ({
        ...j,
        dateApplied: new Date(j.dateApplied),
      }));
    });
  }

  submitJob() {
    if (!this.newJob.jobTitle || !this.newJob.company || !this.newJob.link) {
      alert('Please fill all required fields!');
      return;
    }

    this.jobsAppliedService.addJob(this.newJob).subscribe(() => {
      this.loadJobs();
      this.newJob = {
        jobTitle: '',
        company: '',
        link: '',
        dateApplied: new Date().toISOString(),
      };
    });
  }
}
