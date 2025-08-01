
# Shaik Bisma Alisha | Portfolio Website

> A responsive, full-stack portfolio website that showcases projects and allows visitors to get in touch. Built with HTML/CSS/JS on the frontend and Node.js + Express + PostgreSQL on the backend.

## 🚀 Features

- Responsive portfolio layout with sections: About Me, Skills, Projects, Contact
- Contact form that saves submissions to PostgreSQL
- Animated skill bars and smooth navigation
- Clean UI with purple/lavender theme and hover effects
- Project cards with GitHub and live demo links

## 🧰 Tech Stack

- **Frontend:** HTML, CSS (Tailored gradient + animation), JavaScript
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Extras:** Font Awesome icons, Google Fonts

## 📦 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- PostgreSQL
- `npm` (comes with Node.js)

## 🔧 Setup Instructions

1. **Clone or copy the project into a folder (already in root):**
   ```bash
   git clone <your-repo-url>  # if you push to GitHub
   cd portfolio


2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create the PostgreSQL database and table:**

   Connect to PostgreSQL (e.g., via `psql`) and run:

   ```sql
   CREATE DATABASE portfolio;

   \c portfolio

   CREATE TABLE contacts (
     id SERIAL PRIMARY KEY,
     name TEXT NOT NULL,
     email TEXT NOT NULL,
     message TEXT NOT NULL,
     submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

4. **Environment variables:**

   **Important:** Do NOT keep credentials in source code. Create a file named `.env` in the root with:

   ```env
   PGUSER=your_postgres_username
   PGPASSWORD=your_postgres_password
   PGHOST=localhost
   PGDATABASE=portfolio
   PGPORT=5432
   PORT=3000
   ```

   Then update `db.js` to use environment variables via `dotenv`:

   ```bash
   npm install dotenv
   ```

   Example updated `db.js`:

   ```js
   require('dotenv').config();
   const { Pool } = require('pg');

   const pool = new Pool({
     user: process.env.PGUSER,
     host: process.env.PGHOST,
     database: process.env.PGDATABASE,
     password: process.env.PGPASSWORD,
     port: process.env.PGPORT,
   });

   module.exports = pool;
   ```

5. **Start the server:**

   ```bash
   node index.js
   ```

   or if your entry file is `server.js`:

   ```bash
   node server.js
   ```

6. **Open in browser:**

   Go to `http://localhost:3000` to view the portfolio. The contact form will submit to `/contact` and store data in PostgreSQL.

## 🏗️ Project Structure

```
/portfolio
  ├── index.html           # Main frontend page
  ├── style.css           # Styles
  ├── script.js           # Frontend interactivity
  ├── db.js               # PostgreSQL pool (should use .env)
  ├── server.js / index.js # Express server
  ├── package.json        # Node project config
  ├── images/             # Profile and project images
  └── .env.example        # Example environment file
```

## 📬 Contact Form Flow

1. User fills name, email, message.
2. Form submits POST to `/contact`.
3. Express handler inserts the data into `contacts` table.
4. Success or error is returned to the browser.

## 🛡️ Security & Improvements (recommended)

* **Hide credentials:** Move all DB credentials to `.env` and add `.env` to `.gitignore`.
* **Add `.gitignore`:** Example:

  ```
  node_modules/
  .env
  ```
* **Validate input on server side** before inserting into DB to avoid malformed entries.
* **Deploy:** You can deploy backend to Render / Vercel (with a Node backend) and database to Supabase or Railway for a live hosted version.
* **Footer:** Replace hardcoded “Jane Doe” with your name and consider dynamic year.

## 📦 Scripts

Currently:

```json
"scripts": {
  "start": "node server.js"
}
```

You can update `package.json` to:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

(Install `nodemon` globally or as a dev dependency for auto-reload.)

## 🤝 Contribution

This is a personal portfolio. If you want to extend or refactor:

* Use feature branches
* Sanitize and validate all user input
* Add README badges (build status, license, etc.) when hosted or versioned

## 📦 Future Enhancements

* Add backend API to dynamically load projects instead of hardcoding HTML
* Integrate email service (e.g., SendGrid) as fallback for contact form
* Add a CMS or admin panel to manage submitted messages
* Dark/light mode toggle with persisted preference

## 📝 License

Add your preferred license, e.g., MIT:

```markdown
MIT License
```

## 📞 Author

**Shaik Bisma Alisha**
Passionate learner & software developer

* GitHub: [https://github.com/sba-0406](https://github.com/sba-0406)
* LinkedIn: [https://www.linkedin.com/in/bisma-alisha-shaik-1b136b294/](https://www.linkedin.com/in/bisma-alisha-shaik-1b136b294/)

````
