# GrayxellaPortfolio

A responsive personal portfolio built with Flask, HTML, CSS, and JavaScript.

## Run locally

```bash
python -m venv venv
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate
pip install -r requirements.txt
python app.py
```

Open http://127.0.0.1:5000

## Before publishing

Your contact links are already configured in `templates/index.html`:

- Email: `graceellaha@gmail.com` (contact button and footer)
- GitHub: `https://github.com/Grayxella`
- Instagram: `https://www.instagram.com/gray_elah`

The first uploaded photo is used as the profile portrait. The other three are displayed in the photo album.

## Deploying to Render

- Build command: `pip install -r requirements.txt`
- Start command: `gunicorn app:app`
