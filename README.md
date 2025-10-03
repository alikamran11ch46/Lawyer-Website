# 🏛️ District Bar Association TMK - Website

Official website for District Bar Association Tando Muhammad Khan with complete Content Management System.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

**Live Demo:** https://lawyer-web-ten.vercel.app/

---

## 🌟 Features

### For Website Visitors
- 🏠 Modern responsive homepage
- 👨‍⚖️ Find lawyers directory
- 💳 Generate E-Cards online
- 📄 Download circulars and notices
- 📚 Access law books library
- 👥 Meet the team
- 📞 Contact forms
- 🌐 Multi-language support (English/Urdu)

### For Administrators
- ✅ Manage contact form submissions
- ✅ Approve/Reject E-Card requests
- ✅ Upload/Delete circulars (PDF)
- ✅ Manage team members (photos & details)
- ✅ Edit news ticker text
- ✅ Upload/Delete law books
- ✅ Edit navigation menu
- ✅ **No coding knowledge required!**

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/dba-tmk-website.git

# Navigate to directory
cd dba-tmk-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit: **http://localhost:3000**

---

## 🎯 Admin Panel

### Access
- **URL:** `/admin`
- **Default Password:** `123456`
- **⚠️ Change password before deployment!**

### What Admin Can Edit
✅ Content (circulars, books, team)
✅ News ticker
✅ Navigation menu
✅ E-Card approvals
✅ Contact submissions

### What Admin CANNOT Edit (Developer Only)
❌ Logo & branding
❌ Theme colors
❌ Contact information
❌ Social media links
❌ Developer credits

See [`HOW_TO_CUSTOMIZE.md`](./HOW_TO_CUSTOMIZE.md) for details.

---

## 📂 Project Structure

```
dba-tmk-website/
├── app/                    # Next.js 15 app directory
│   ├── admin/             # Admin panel
│   ├── api/               # API routes
│   ├── about-bar/         # About pages
│   ├── e-cards/           # E-Card system
│   └── ...
├── components/            # React components
├── config/                # Site configuration
│   └── site.config.ts    # 🔧 Main config file
├── data/                  # JSON data files (managed by admin)
│   ├── circulars.json
│   ├── team-members.json
│   ├── law-books.json
│   └── ...
├── public/                # Static assets
│   ├── uploads/          # User uploaded files
│   └── ...
├── HOW_TO_CUSTOMIZE.md   # Customization guide
├── DEPLOYMENT.md         # Deployment guide
└── README.md             # This file
```

---

## 🛠️ Technology Stack

- **Framework:** Next.js 15.5.4 (App Router)
- **UI:** React 19.2.0
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **File Handling:** Base64 encoding
- **Deployment:** Vercel (recommended)

---

## 🔐 Security

### Before Going Live:

1. **Change Admin Password**
   ```typescript
   // /config/site.config.ts
   admin: { password: 'STRONG_PASSWORD' }
   ```

2. **Use Environment Variables**
   ```env
   ADMIN_PASSWORD=your_secure_password
   ```

3. **Enable HTTPS** (automatic with Vercel)

4. **Regular Backups** of `/data/` folder

---

## 📖 Documentation

- [Customization Guide](./HOW_TO_CUSTOMIZE.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

## 👨‍💻 Developer

**Developed by:** [SohMin](https://sohmin.com)

**Contact:** contact@sohmin.com

---

## 📄 License

© 2025 District Bar Association Tando Muhammad Khan. All rights reserved.

---

Made with ❤️ by [SohMin](https://sohmin.com)
