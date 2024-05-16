# PersonalFitnessTracker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


Below is a sample README that outlines the implementation and goals of your project, based on the details of your course and the specifics of what you've implemented in the dashboard component with the workout logs chart.

---



## Overview

The Personal Fitness Tracker is a web application developed as part of the "Mobile Web-Based Application Development"  focusing on responsive design and user interaction.

The primary goal of this project is to demonstrate the ability to create a dynamic and interactive mobile web application using Angular and ApexCharts. The application allows users to log and visualize their workout data, specifically focusing on the calories burned during each session.

## Features

- **User Login**: Simple login functionality to authenticate users 
- **User Registration**: Simple Register functionality to add users 
- **Dashboard**: A central view where users can see an overview of their workout activities.
- **Workout Log Visualization**: Utilizes ApexCharts to display a bar chart showing the total calories burned in each workout session, with detailed tooltips providing additional information.
- **Responsive Design**: Ensures the application is usable on a variety of devices, emphasizing mobile-first design principles.

## Technical Implementation

### Technologies Used

- **Angular**: The core framework used for building the single-page application, ensuring a modular and responsive design.
- **ApexCharts with ng-apexcharts**: For rendering interactive charts, providing a clear visual representation of workout data.
- **Local Storage**: Used for simulating data storage and retrieval, allowing persistent workout logs across sessions.
- **JS/HTML/CSS** for web scripting

### Components

- **Login Component**: Handles user authentication in a simplified manner for demonstration purposes.
- **Dashboard Component**: Acts as the central hub for user activities, displaying the workout chart and a list of workout logs.
- **Nav Component**: Provides navigation across the application, ensuring users can easily switch between different views.

### Data Flow

1. **Fetching Data**: The application retrieves workout logs from local storage
2. **Chart Generation**: The `DashboardComponent` processes the workout logs to extract relevant information for charting, specifically the calories burned and the dates of workouts.
3. **Visualization**: Utilizes ApexCharts to plot the data, with the x-axis representing the date of each workout and tooltips providing additional details like calories burned.

## Goals Achieved

- **Mobile Web Application Development**: Showcased through the responsive design and use of mobile-friendly technologies like Angular.
- **Interactive Data Visualization**: Demonstrated by integrating ApexCharts to create informative and interactive charts.
- **Practical Application of Learning**: Applied the theoretical knowledge from prior courses to a real-world-like scenario, emphasizing user interaction and data presentation.
