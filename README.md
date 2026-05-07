# iNoteBook ✦ Pure Luxury Digital Workspace

![iNoteBook Banner](https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)

> "Capture your brilliance in pure luxury."

iNoteBook is a state-of-the-art, secure, and beautiful digital workspace designed for focus, speed, and elegance. Built on the MERN stack with a custom "Dark Luxury" design system.

## ✨ Features
- **Dark Luxury UI/UX**: A breathtaking glassmorphism aesthetic that reduces eye strain and inspires creativity.
- **End-to-end Security**: Your notes are securely encrypted. Only you can access your thoughts.
- **Lightning Fast**: Built on React 18, Node.js, Express, and MongoDB.
- **Responsive Design**: Flawless experience across desktop, tablet, and mobile devices.
- **SEO Optimized**: Fully equipped with Open Graph and Twitter Card meta tags.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Database (Local or Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/inotebook.git
   cd inotebook
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd backend
   npm install
   cd ..
   ```

3. **Environment Setup**
   Create a `.env` file in the `backend` directory:
   ```env
   JWT_SECRET=your_super_secret_key
   MONGO_URI=mongodb://localhost:27017/inotebook
   ```

4. **Run the Application**
   ```bash
   npm run both
   ```
   *This uses concurrently to start both the React frontend and Node.js backend simultaneously.*

## 📸 Social Media Preview
This app is configured with Open Graph meta tags. To use the custom social preview image:
1. Ensure `social_preview.png` is placed inside the `public` directory.
2. Deploy the site, and platforms like Twitter, LinkedIn, and Discord will display your custom thumbnail!

## 🛠 Tech Stack
- **Frontend**: React, React Router, Bootstrap 5, Custom Vanilla CSS
- **Backend**: Node.js, Express, Mongoose
- **Security**: bcryptjs, jsonwebtoken
- **Fonts**: Google Fonts (Inter & Outfit)
- **Icons**: FontAwesome

## 🌐 Deployment Ready
To build for production:
```bash
npm run build
```
Deploy the `build` folder to your favorite hosting provider (Vercel, Netlify, etc.) and deploy the backend to a platform like Render or Heroku.

---
*Crafted with passion for creators, thinkers, and builders.*
