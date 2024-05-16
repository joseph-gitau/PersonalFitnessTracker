import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ChartDataset, ChartOptions, ChartType, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    standalone: true,
    imports: [CommonModule, HttpClientModule, BaseChartDirective],
})
export class DashboardComponent implements OnInit {
    users: any[] = [];
    userWorkouts: any[] = [];
    // Ensure chartData is of the correct type
    chartData: ChartData<'bar', (number | [number, number] | null)[], string> =
        {
            datasets: [],
        };
    chartLabels: string[] = [];
    chartOptions: ChartOptions = {
        responsive: true,
    };
    chartType: ChartType = 'bar';

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.http.get('/assets/data.json').subscribe(
            (data: any) => {
                this.users = data.workoutLogs;
                console.log('Users:', this.users);
                // get logged in username
                const username = localStorage.getItem('username');
                console.log('Logged in user:', username);
                // filter out the user data
                /* this.userWorkouts = this.users.filter((user) => user.user === username);
                console.log('Filtered Users:', this.users);
                this.generateChartData(); */
                // get workout logs from local storage
                const workoutLogs = localStorage.getItem('workoutLogs');
                if (workoutLogs) {
                    this.userWorkouts = JSON.parse(workoutLogs);
                    console.log('Workout logs:', this.userWorkouts);
                    this.generateChartData();
                }
                /* 
                examlple workouts
                [
    {
        "user": "admin",
        "workoutLogs": [
            {
                "date": "2024-05-17",
                "type": "Running",
                "duration": 30,
                "calories": 300
            },
            {
                "date": "2024-05-18",
                "type": "Cycling",
                "duration": 45,
                "calories": 450
            }
        ]
    },
    {
        "date": "2024-05-23",
        "type": "wer",
        "duration": 3,
        "calories": 43
    },
    {
        "date": "2024-05-17",
        "type": "test",
        "duration": 34,
        "calories": 600
    }
]
                */
            },
            (error) => {
                console.error('Error fetching data:', error);
            }
        );
    }

    generateChartData(): void {
        const totalCaloriesData: number[] = [];
        this.userWorkouts.forEach((user) => {
            const totalCalories = user.workoutLogs.reduce(
                (acc: number, log: any) => acc + log.calories,
                0
            );
            totalCaloriesData.push(totalCalories);
        });

        // Update the ChartData object with datasets and potentially labels
        this.chartData = {
            datasets: [
                { data: totalCaloriesData, label: 'Total Calories Burned' },
            ],
            labels: this.users.map((user) => user.name),
        };
    }
}
