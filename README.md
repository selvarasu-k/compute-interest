# Compute Interest

## Description
A simple dashboard application built with React.js to be managed for personal use. Listed borrow table data calculate the total borrow, calculate interest with daily, monthly, and yearly.

For example, we will create the borrow data list with the date of issue, it automatically computes the total borrow, interest, per day interest, monthly, and yearly.

So, we can see the awesome table with different charts listed borrow data.

Once you create and list the borrowed data details with the date of issue, there is no need to calculate total borrow, and interest like per day interest, monthly, and yearly. We can save the time. We can see the pretty borrow data chart list.

We can select one row and create, read, update, and delete the borrowed data list.

**Note**: This project UI referral link is added below 
link 1 - https://www.behance.net/gallery/65608331/Expense-Tracker-Dashboard-%28With-live-demo%29

link 2 - https://ej2.syncfusion.com/showcase/typescript/expensetracker/#/dashboard

## Table of Contents
- [Features](#features)
- [Tools and Technologies Used](#tools-and-technologies-used)
- [Deploying a React App* to GitHub Pages](#deploying-a-react-app*-to-github-pages)
- [Installation and Setup](#installation-and-setup)
- [Connect with backend API via JSON server](#connect-with-backend-api-via-json-server)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact Information](#contact-information)

## Features
- Compute total borrow, interest, percentage, per day, monthly and yearly.

- We can add, edit, view, and delete borrow data list operations.

- Listed borrow data details. It's shown in the table data and different chart lists.

- We can see the pretty borrowed data details with different chart lists. We can save the time.

- **Highcharts** - The Highcharts link are - https://www.highcharts.com/demo#highcharts-demo-pie-charts

- Highcharts usage steps and followed along with this link - https://www.npmjs.com/package/highcharts-react-official

## Tools and Technologies Used
- **React.js**: JavaScript library for building user interfaces
- **React Redux**: State management tool
- **Highcharts React Official**: You can integrate Highcharts with React.js. You can customize the Highcharts options to fit your needs
- **JSON Server**: RESTful API using a JSON file as the database
- **Prettier**: Code formatter

## Deploying a React App* to GitHub Pages
    We have followed along with this [link](https://github.com/gitname/react-gh-pages) tutorial - we'll end up with a new React app—hosted on GitHub Pages.

## Installation and Setup

### Prerequisites
- Node.js (v20 or higher)
- npm (v10 or higher)

### Steps
1. **Clone the repository:**
    ```bash
    git clone https://github.com/selvarasu-k/compute-interest.git
    cd compute-interest
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the development server:**
    ```bash
    npm start
    ```

4. **Open the application in your browser:**
    ```bash
    local: http://localhost:3000/compute-interest
    remote: https://selvarasu-k.github.io/compute-interest/
    ```

## Connect with backend API via JSON server

### Steps
1. **Set up the JSON Server:**
    ```bash
    npm install json-server
    ```

2. **Create a db.json file:**
    ```
    Create a file named db.json in your project directory. 
    This file will contain your mock database
    ```

3. **Start the development server:**
    ```bash
    json-server --watch db.json --port 5000
    ```

4. **Open the application in your browser (localhost):**
    ```bash
    local: http://localhost:5000/borrowed
    ```

5. **Open the application in your browser (remote via onrender.com):**
    
    - **OnRender (Render.com)**: is a cloud platform that provides various hosting and deployment services for web applications, APIs, and other server-side applications.

    - **Automatic Deployments**: Render can automatically deploy your applications whenever you push changes to your Git repository (GitHub, GitLab, or Bitbucket).

    - **Connect Your Repository**: Connect your GitHub, GitLab, or Bitbucket repository to Render.

    - **Connect Localhost Server**: Your local development environment can interact with the deployed API by using the provided URL. Update any necessary configuration in your local server to point to the remote API endpoint on Render.

    ```bash
    remote: https://json-server-deployment-uepg.onrender.com/
    ```

## Usage
Here explained how to use the project after setting it up.

- In the sidebar, We have listed three tabs. They are,

### Dashboard
### Credits
### About

### Dashboard

In the dashboard, we see the use of four rows,

- The **first row** shows the listed total borrow, interest, monthly interest, and daily interest.

- The **second row** shows the listed borrow chart people's names and shows borrow up-to-date yearly interest with percentages.

- The **third row** shows two charts that are 

**Borrowed interest to date - Amount**
The third-row first chart shows every person's borrow of interest till date.

**Borrowed interest to date - Days**
The third-row second chart shows every person's, count of the days that have been borrowed.

- The **fourth row** shows the listed total borrow table data details with Creditor name, Amount, Interest, Date of issue, Description, Due date

### Credits

The credits tab shows the total list of borrowed table data details with CRUD actions.

- It shows the listed total borrow table data details with row checkboxes, Creditor name, Amount, Interest, Date of issue, Description, and Due date.

- We can do CRUD operations like add, edit, view, and delete actions.

- These operations are sent and fetched by JSON API with POST, GET, PUT or PATCH, and DELETE requests.

- In the credits table data above shows the "ADD CREDIT" button. Click the button to show the model. then fill in the form details and click the add button. you can see the new row in the table data list.

- In the table data, shows two buttons edit and delete.

- The "Edit" button is always disabled. when we select a particular (one row) row in the table, then it has enabled the "Edit" button.

So, select one row and click the edit button. It shows the model. and then updates the borrow form details and Save.

- The "Delete" button is also always disabled. when we select a one-row or one or more rows or all rows in the table, then it has enabled the "Delete" button.

So, select a row, or one or more rows, or all rows and click the delete button to deleted.

- We have used the **pagination**. It shows five rows for every borrowed data list per record. then the sixth row went to gone second page of pagination. We have added every new row record in the table, and it shows the recent row on top of the table.

### About

We have added brief notes on user-borrowed information.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

## Contact Information
- **Email**: selvanewversion@gmail.com
- **GitHub**: [your-github-username](https://github.com/selvarasu-k)
- **LinkedIn**: [your-linkedin-profile](https://www.linkedin.com/in/selvarasu-k-9408a112a/)