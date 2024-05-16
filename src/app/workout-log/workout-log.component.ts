import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-workout-log',
  templateUrl: './workout-log.component.html',
  styleUrls: ['./workout-log.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class WorkoutLogComponent {
  // Example workout logs, this could be dynamic based on selected user in a real app
  workoutLogs = [
    { date: '2024-05-17', type: 'Running', duration: 30, calories: 300 },
    { date: '2024-05-18', type: 'Cycling', duration: 45, calories: 450 },
  ];
newDate!: string;
newType!: string;
newDuration!: number;
newCalories!: number;

  // Method to add a new workout log
  addWorkoutLog(
    date: string,
    type: string,
    duration: number,
    calories: number
  ) {
    this.workoutLogs.push({ date, type, duration, calories });
  }
}
