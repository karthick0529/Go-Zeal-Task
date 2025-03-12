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

1. Open the GitHub link and copy the code to your local machine.

2. Add the certification name and issuer of the certificate. ( Note: Maximum of 5 Certificates can be added. )

3. Select the files that need to be uploaded. (Note: The file must be in PDF or JPG format.)

4. Click the "Add Certification" button to upload the certificate.

5. If any required fields are not filled out correctly, an error message will be displayed, stating that the details are required and that the uploaded file must be in PDF or JPG format.

6. After adding the file and clicking the "Add Certification" button, click the "Save Certification" button to proceed.

7. If you click the " Save Certification " button without entering the required details such as the Certification name, Issuer, and uploading a file, an error will appear stating, "Please add at least one certification before saving."

8. After clicking the " Save Certification " button, you will see the added certification on this page under "View Certification", displaying the Certification name, Issuer, and uploaded file.

9. By clicking "View Certification", the Certification will open in a new tab.

## Deployment Link:

Netlify Link:-  https://clinquant-dolphin-d8d87b.netlify.app/
