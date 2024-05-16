import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
    NgApexchartsModule,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexDataLabels,
    ApexTitleSubtitle,
    ApexTooltip,
} from 'ng-apexcharts';

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    tooltip: ApexTooltip;
    title: ApexTitleSubtitle;
};

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    standalone: true,
    imports: [CommonModule, HttpClientModule, NgApexchartsModule],
})
export class DashboardComponent implements OnInit {
    userWorkouts: any[] = [];
    public chartOptions: ChartOptions;

    constructor(private http: HttpClient) {
        this.chartOptions = {
            series: [
                {
                    name: 'Calories Burned',
                    data: [], // Initialize with empty data array
                },
            ],
            chart: {
                type: 'bar',
                height: 350,
            },
            title: {
                text: 'Calories Burned per Workout',
            },
            xaxis: {
                categories: [], // Initialize with empty categories array
            },
            dataLabels: {
                enabled: false,
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: function (value) {
                        return value + ' calories'; // Format tooltip to show calories
                    },
                },
                x: {
                    formatter: function (
                        value,
                        { series, seriesIndex, dataPointIndex, w }
                    ) {
                        // Provide additional date information in the tooltip
                        return (
                            'Date: ' + w.config.xaxis.categories[dataPointIndex]
                        );
                    },
                },
            },
        };
    }

    ngOnInit(): void {
        // Load data, possibly from local storage or a service
        this.userWorkouts = JSON.parse(
            localStorage.getItem('workoutLogs') || '[]'
        );
        console.log('Workout logs:', this.userWorkouts);
        this.generateChartData();
    }

    generateChartData(): void {
        if (!this.userWorkouts || this.userWorkouts.length === 0) {
            console.log('No workout logs available to generate chart data.');
            return; // Exit if no workouts to process
        }

        const totalCaloriesData: number[] = this.userWorkouts.map(
            (workout) => workout.calories
        );
        const workoutDates: string[] = this.userWorkouts.map(
            (workout) => workout.date
        );

        this.chartOptions.series = [
            {
                name: 'Total Calories Burned',
                data: totalCaloriesData,
            },
        ];
        this.chartOptions.xaxis.categories = workoutDates;
    }
}
