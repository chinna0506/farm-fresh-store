# 🌿 Farm Fresh Products Store

A complete modern e-commerce web application built with **Next.js 14 (App Router)**, **React**, and **TypeScript**.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation & Running

```bash
# 1. Navigate to the project folder
cd farm-fresh

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
/src
  /app
    /dashboard          → Dashboard with stats & quick actions
    /products           → Product listing with filters & search
    /cart               → Cart with quantity controls
    /checkout           → Checkout form with validation
    /payment            → Payment page with 4 methods
    /orders             → Order history
    /services           → Services page
    /about              → About us page
    /contact            → Contact form
    layout.tsx          → Root layout
    ClientLayout.tsx    → Header + Sidebar wrapper
    page.tsx            → Home page
  /components
    Header.tsx          → Top navigation with cart count
    Sidebar.tsx         → Collapsible sidebar menu
    ProductCard.tsx     → Reusable product card
    CartItem.tsx        → Cart item with qty controls
    SuccessModal.tsx    → Payment success modal
  /context
    CartContext.tsx      → Global cart state with useReducer
  /data
    products.ts         → Product data + categories
  /styles
    globals.css         → Global styles + CSS variables
  /types
    index.ts            → TypeScript interfaces
```

---

## ✨ Features

- **🛒 Cart Management** — Add, remove, update quantities
- **📦 Checkout Flow** — Form validation with error messages
- **💳 Payment Page** — Credit/Debit Card, UPI, Cash on Delivery
- **✅ Success Modal** — Animated order confirmation popup
- **🔍 Product Search** — Live search with category filters
- **📱 Responsive Design** — Works on mobile, tablet, desktop
- **⚡ Collapsible Sidebar** — Space-efficient navigation
- **🌿 Modern UI** — Playfair Display + DM Sans typography

---

## 🗂️ Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Banner, categories, featured products |
| `/products` | All products with search & filter |
| `/cart` | Cart with totals & checkout button |
| `/checkout` | Delivery details form |
| `/payment` | Payment method selection & processing |
| `/dashboard` | Stats & quick actions overview |
| `/orders` | Order history |
| `/services` | Services offered |
| `/about` | About us |
| `/contact` | Contact form |

---

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **CSS Modules** for scoped styling
- **Context API + useReducer** for cart state
- **Google Fonts** — Playfair Display + DM Sans

---

## 🎨 Design System

CSS variables defined in `globals.css`:
- `--green-dark / --green-mid / --green-light` — Brand greens
- `--amber` — CTA highlight color
- `--cream` — Background warmth
- `--radius-sm/md/lg/xl` — Border radius scale
- `--shadow-sm/md/lg/green` — Shadow levels

---

## 📦 Build for Production

```bash
npm run build
npm start
```
