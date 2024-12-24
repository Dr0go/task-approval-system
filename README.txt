Task Approval System
This is a simple Task Approval System built with Express.js (backend), React.js (frontend), and JWT Authentication.

Features:
Task Creation and Listing:
-Users can create tasks with a title, description, and deadline.
-Tasks are displayed with a status (Pending/Approved).

Approval Mechanism:
-Admins can approve tasks.
-The time of approval and the approving user's name is logged.

Authentication:
-Admin: Can create and approve tasks.
-User: Can only view tasks.

Requirements
-Node.js (Backend and Frontend)
-npm or yarn
-JWT Authentication (for managing user authentication)

Setup Instructions
1. Clone the Repository
Clone the repository to your local machine:
git clone https://github.com/Dr0go/task-approval-system/tree/main
cd task-approval-system
2. Backend Setup (Express.js)
Go to the backend folder:
bash
cd backend

Install the backend dependencies:
bash
npm install

Run the backend server:
bash
npm start
The backend will run on http://localhost:5000.

3. Frontend Setup (React.js)

Go to the client folder:
bash
cd client
Install the frontend dependencies:

bash
npm install
Run the frontend development server:

bash
npm start
The frontend will run on http://localhost:3000.

4. Testing the Application
Open your browser and go to http://localhost:3000 for the frontend.
Use the login page to log in as an admin (with credentials like admin@example.com and password123).
Once logged in, you can create tasks and approve them.
The tasks will be displayed on the homepage, with status showing as "Pending" or "Approved."

THANK YOU