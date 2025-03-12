## Go-Zeal Task for adding certification details and display the added certificates using React, bootstrap, JavaScript & Redux

## Project Overview:

This project is a web-based certification management system that allows users to add, view, and store certifications. The application is built using React.js, Redux Toolkit, and Bootstrap for UI styling. The certifications are managed within Redux state and stored in sessionStorage to persist data across page refreshes.

## Features:

✔ Add certifications with name, issuer, and file upload (PDF/JPG)

✔ View up to five certifications

✔ Store certification data using Redux Toolkit

✔ Persist data using sessionStorage

✔ Form validation for required fields and file type restrictions

✔ Responsive UI with Bootstrap


## Technologies Used:

Frontend: React.js

State Management: Redux Toolkit

Storage: sessionStorage

UI Framework: Bootstrap, React Bootstrap

Routing: React Router


## File Descriptions:

Redux Files:-

certificationSlice.js - Handles Redux state for certifications

store.js - Configures Redux store

Components:-

CertificationForm.js - Form to add new certifications

CertificationView.js - Displays the added certifications


## How to Use:

Open the application.

Fill out the Certification Name and Issuer fields.

Upload a PDF or JPG certification file.

Click "Add Certification" to store it temporarily.

Click "Save Certifications" to store them in Redux state.

View added certifications on the Certifications View page.

## Deployment Link:

Netlify Link:- 