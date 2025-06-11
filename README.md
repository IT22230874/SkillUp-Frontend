# SkillUp – Frontend (React)

SkillUp is an online learning platform that empowers students to browse and enroll in courses and allows instructors to create and manage their own. This is the **frontend** of the platform, built using **React.js** and connected to a Node.js/Express backend. It also integrates OpenAI GPT to provide intelligent course recommendations.

## 🌐 Live Preview

👉 [Visit SkillUp](https://www.skilluplearning.site)

---

## 🧑‍💻 Features

### Students

- Register and login
- View all available courses
- View course details
- Enroll in courses
- View enrolled courses
- ChatGPT-based course recommendation

### Instructors

- Register and login
- Create, edit, and delete courses
- View list of instructor’s own courses
- See enrolled students per course

---

## 🛠 Tech Stack

- **React.js** – Frontend framework
- **Axios** – API communication
- **React Router** – Client-side routing
- **JWT** – Token-based authentication
- **Tailwind CSS** – Styling
- **OpenAI API** – ChatGPT integration
- **Cloudinary** – Image upload and management
- **Deployed via NGINX on AWS EC2**

---

## 🚀 Getting Started

### Prerequisites

- Node.js & npm
- Backend API running
- Vite

### Clone & Setup

```
git clone https://github.com/IT22230874/SkillUp-Frontend.git

npm install

Environment Variables
Create a .env file in the root:

env

VITE_API_URL=backend_base_url

Run the App (Dev Mode)

npm run dev

```
