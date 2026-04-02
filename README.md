# 📝 Todo App — Django REST Framework + React JS

A simple full-stack CRUD application built with Django REST Framework as the backend API and React JS (Vite) as the frontend.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Python, Django, Django REST Framework |
| Frontend | React JS (Vite), Axios |
| Database | SQLite (default) |
| CORS | django-cors-headers |

---

## 📁 Project Structure

```
todo-app/
├── backend/
│   ├── backend/
│   │   ├── settings.py
│   │   └── urls.py
│   ├── todos/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── urls.py
│   └── manage.py
└── frontend/
    └── src/
        └── App.jsx
```

---

## ⚙️ Prerequisites

- Python 3.10+
- Node.js 18+
- npm

---

## 🛠️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### 2. Backend Setup

```bash
# Create and activate virtual environment
python -m venv venv

# Windows
venv\Scripts\activate

# Mac/Linux
source venv/bin/activate

# Install dependencies
pip install django djangorestframework django-cors-headers

# Navigate into backend
cd backend

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Start the server
python manage.py runserver
```

Backend runs at: `http://localhost:8000`

### 3. Frontend Setup

```bash
# From the project root, navigate to frontend
cd frontend

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Frontend runs at: `http://localhost:5173`

> ⚠️ Both servers must be running at the same time.

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos/` | List all todos |
| POST | `/api/todos/` | Create a new todo |
| PATCH | `/api/todos/{id}/` | Update a todo (e.g. toggle done) |
| DELETE | `/api/todos/{id}/` | Delete a todo |

### Example Request Body (POST / PATCH)

```json
{
  "title": "Buy groceries",
  "done": false
}
```

---

## ✨ Features

- ✅ Create a new to-do item
- ✅ View all to-do items
- ✅ Mark items as done / not done (toggle)
- ✅ Delete items
- ✅ RESTful API with Django REST Framework
- ✅ Minimal, clean React UI

---

## 📄 License

This project is for educational purposes. Free to use and modify.