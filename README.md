SHE-CAN-FOUNDATION
The Intern Portal Dashboard is a dynamic, React-based web application designed to streamline the internship experience for both interns and coordinators. It provides a centralized hub where interns can track their performance, access account details, view achievements, and explore nearby resources like partnered stores or learning hubs.

Project Structure

intern-portal/
├── client/
│ ├── public/
│ └── src/
│ ├── components/
│ │ ├── Dashboard.js
│ │ ├── Dashboard.css
│ │ ├── Login.js
│ │ ├── Login.css
│ │ ├── Rewards.js
│ │ ├── Rewards.css
│ │ └── ...
│ ├── App.js
│ └── index.js
└── README.md


Tech Stack

| Tech           | Description                                 |
|----------------|---------------------------------------------|
| *React.js*   | Frontend JavaScript framework               |
| *React Router* | Page navigation                            |
| *Custom CSS* | Component-level styling                     |
| *Node.js (optional)* | Backend server (can be added later)     |
| *Axios (optional)* | For making HTTP API calls (e.g., login)   |
| *Vite/CRA*   | Project scaffolding (used: create-react-app) |


Features

- 🔐 *Login Authentication*
- 🏠 *Intern Dashboard Overview*
- 🎁 *Rewards Page with Achievement Cards*
- 👤 *Account/Profile Section*
- 📦 *Modular Codebase with Separate JS & CSS*
- 📱 *Responsive UI for Mobile and Desktop*

How to run:
# Clone the repository
git clone https://github.com/yourusername/intern-portal.git

# Navigate into the client folder
cd intern-portal/client

# Install dependencies
npm install

# Start the development server
npm start
