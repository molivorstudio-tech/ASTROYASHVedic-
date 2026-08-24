# Astroyash Web Platform (`Astra-master`)

A responsive astrology and horoscope consultation web application.

---

## 🚀 Features

- **Horoscope Forecasts**: Daily/weekly forecasts across all 12 zodiac signs.
- **Dynamic Zodiac Sign Finder**: Interactive JavaScript calculator to determine zodiac sign by birth day and month.
- **Consultation Call Booking**: Audio & Video consultation booking popups linked to WhatsApp direct chat.
- **Contact & Inquiry Form**: Server-side contact form sending emails via PHPMailer & SMTP integration.

---

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6 / Vanilla JS), Bootstrap CSS Framework
- **UI Libraries**: jQuery, Slick Carousel, Select2, Air Datepicker, CountTo
- **Backend**: Native PHP (7.4+)
- **Email Delivery**: PHPMailer 6.x via SMTP over TLS/SSL

---

## 📁 Directory Structure

```
Astra-master/
├── index.html               # Main landing page
├── about.html               # About page detailing company legacy & astrologers
├── pricing.html             # Consultation call pricing packages (Yash Singh)
├── pricing2.html            # Variant pricing page (Sachien Lohiia)
├── contact.html             # Contact page with submission form
├── contact_success.html     # Submission success confirmation page
├── send_email.php           # Backend script handling contact form emails via PHPMailer
├── zodiacfinder.js          # Client-side Zodiac Sign calculation logic
├── popup.js                 # Modal popup logic for package booking & WhatsApp redirection
├── popup.css                # Styling for package selection modals
├── .env.example             # Template for environment configuration
├── .env                     # Local environment file (git-ignored)
├── .gitignore               # Excludes secrets, logs, and vendor dependencies
├── PHPMailer/               # Embedded PHPMailer core files
└── assets/
    ├── css/                 # Bootstrap & Custom Stylesheet (style.css)
    ├── js/                  # jQuery, Bootstrap JS, Slick, Select2, Air Datepicker
    └── images/              # Logos, banners, zodiac icons, and graphics
```

---

## ⚙️ Setup & Local Running Instructions

### 1. Requirements
- Web Server with **PHP 7.4 or higher** (e.g., Apache, Nginx, or PHP CLI).

### 2. Environment Configuration
Copy the `.env.example` template to `.env` and fill in your SMTP credentials:

```bash
cp .env.example .env
```

Edit `.env`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USERNAME=your_email@gmail.com
SMTP_PASSWORD=your_app_password
SMTP_RECIPIENT_EMAIL=ajeetsingh@astroyash.com
```

> ⚠️ **Important Security Note**: Never commit `.env` to version control.

### 3. Run Locally with PHP Development Server

Start a local server in the project directory:

```bash
php -S localhost:8000
```

Open your browser and navigate to:
- Homepage: `http://localhost:8000/index.html`
- Contact Form: `http://localhost:8000/contact.html`
- Pricing Packages: `http://localhost:8000/pricing.html`

---

## 🔧 Form & Mailer Logic

- Submitting the form on `contact.html` posts data to `send_email.php`.
- `send_email.php` loads credentials dynamically from `.env`, constructs an HTML mail body with sanitized inputs (`htmlspecialchars`), sends the email via PHPMailer, and redirects to `contact_success.html`.
- Errors are logged to `error_log.txt`.
