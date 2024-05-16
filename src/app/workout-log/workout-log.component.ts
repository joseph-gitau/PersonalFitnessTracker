import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-workout-log',
    templateUrl: './workout-log.component.html',
    styleUrls: ['./workout-log.component.css'],
    standalone: true,
    imports: [CommonModule, FormsModule],
})
export class WorkoutLogComponent {
    workoutLogs: any[] = [];
    newDate!: string;
    newType!: string;
    newDuration!: number;
    newCalories!: number;

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.fetchWorkoutLogs();
        console.log('Workout logs:', this.workoutLogs);
    }

    fetchWorkoutLogs(): void {
        this.http.get('/assets/data.json').subscribe(
            (data: any) => {
                const username = localStorage.getItem('username');
                console.log('Logged in user:', username);
                console.log(typeof username); // string eg admin
                console.log('Workout logs:', data.workoutLogs);
                console.log(typeof data.workoutLogs); // object
                // filter out the user data, from object data.workoutLogs
                /* this.workoutLogs = data.workoutLogs.filter(
                    (log: any) => log.user === username
                ); */
                // get workout logs from local storage
                const workoutLogs = localStorage.getItem('workoutLogs');
                if (workoutLogs) {
                    this.workoutLogs = JSON.parse(workoutLogs);
                    console.log('Workout logs:', this.workoutLogs);
                }
            },
            (error) => {
                console.error('Error fetching workout logs:', error);
            }
        );
    }

    addWorkoutLog(
        date: string,
        type: string,
        duration: number,
        calories: number
    ): void {
        const newLog = { date, type, duration, calories };
        this.workoutLogs.push(newLog);

        // save to local storage
        localStorage.setItem('workoutLogs', JSON.stringify(this.workoutLogs));

        // Save workout logs to data.json
        this.http
            .post('/assets/data.json', { workoutLogs: this.workoutLogs })
            .subscribe(
                () => {
                    console.log('Workout log added successfully');
                },
                (error) => {
                    console.error('Error saving workout log:', error);
                }
            );

        // Reset input fields
        this.newDate = '';
        this.newType = '';
        this.newDuration = 0;
        this.newCalories = 0;
    }
}
