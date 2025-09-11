import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Job {
  _id?: string;
  jobTitle: string;
  company: string;
  link: string;
  dateApplied: string | Date;
}

@Injectable({ providedIn: 'root' })
export class JobsAppliedService {
  private apiUrl = 'http://localhost:3000/jobs';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }

  addJob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.apiUrl, job);
  }
}
