# Breezoria - Premium Suncare E-Commerce Website

A modern, elegant e-commerce website for **Breezoria**, a premium luxury suncare brand. Built with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## ✨ Features

- **Hero Section**: Stunning premium hero with animated background and CTA
- **About Breezoria**: Brand mission and value proposition
- **Product Highlight**: Featured product with benefits and pricing
- **Benefits Section**: 6 key product benefits with elegant card design
- **Testimonials**: Customer reviews with star ratings
- **Contact Form**: Functional contact section with validation
- **Product Details Page**: 
  - Professional product gallery with image switching
  - Product specifications and ingredients
  - How to use instructions
  - Quantity selector and Add to Cart
  - Sticky product summary
- **Shopping Cart System**:
  - Add/remove items
  - Quantity management
  - Persistent cart state
  - Cart badge on navbar
  - Slide-over drawer interface
- **Checkout Flow**:
  - Customer information form
  - Order validation modal
  - Success confirmation
- **Responsive Design**: Mobile-first design that works perfectly on all devices
- **Smooth Animations**: Elegant Framer Motion animations throughout
- **Luxury Aesthetic**: Premium design with warm color palette (orange, warm yellow, soft cream)

## 🎨 Design System

**Color Palette:**
- **Primary (Orange)**: `oklch(0.65 0.25 55)` - Main brand color
- **Secondary (Warm Yellow)**: `oklch(0.85 0.18 65)` - Accent color
- **Background (Cream)**: `oklch(0.99 0.005 60)` - Warm off-white background
- **Foreground (Dark)**: `oklch(0.2 0.01 30)` - Text color

## 📁 Project Structure

```
breezoria/
├── app/
│   ├── layout.tsx           # Root layout with CartProvider
│   ├── page.tsx             # Home page
│   ├── product/
│   │   └── page.tsx         # Product details page
│   └── globals.css          # Global styles with design tokens
├── components/
│   ├── Navbar.tsx           # Sticky navigation
│   ├── Footer.tsx           # Footer with links
│   ├── CartDrawer.tsx       # Cart slide-over drawer
│   ├── CheckoutModal.tsx    # Checkout modal form
│   ├── ProductGallery.tsx   # Product image gallery
│   ├── ProductInfo.tsx      # Product details and add to cart
│   └── sections/
│       ├── HeroSection.tsx          # Hero with animation
│       ├── AboutSection.tsx         # Brand about section
│       ├── ProductHighlightSection.tsx # Featured product
│       ├── BenefitsSection.tsx      # 6 benefits cards
│       ├── TestimonialsSection.tsx  # Customer reviews
│       └── ContactSection.tsx       # Contact form
├── context/
│   └── CartContext.tsx      # Cart state management
├── public/
│   └── images/
│       ├── hero-suncare.jpg        # Hero image
│       ├── product-1.jpeg           # Product main view
│       ├── product-2.jpeg           # Product side view
│       ├── product-3.jpeg           # Product texture detail
│       └── product-4.jpeg           # Lifestyle shot
└── package.json
```

## 🚀 Getting Started

### Installation

1. Clone or download the repository
2. Install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
```

### Development

Start the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📸 Product Images

The project includes 4 product image placeholders:

**Location:** `public/images/product/`

**Files:**
- `product-1.jpeg` - Main product view (featured in gallery)
- `product-2.jpeg` - Side/alternate view
- `product-3.jpeg` - Texture/detail close-up
- `product-4.jpeg` - Lifestyle shot with beach setting

**How to Replace:**
1. Generate or prepare your product images (recommended: 1000x1000px JPG)
2. Replace the corresponding files in the `public/images/` directory
3. Images will automatically update throughout the site

## 🛒 Shopping Cart Features

The cart system uses React Context API for state management:

- **Add to Cart**: Add products with custom quantities
- **Cart Badge**: Shows number of items in cart
- **Cart Drawer**: Slide-over interface with item management
- **Quantity Control**: Increase/decrease items or remove
- **Checkout**: Modal form with customer information
- **Order Confirmation**: Success message after submission

### Cart Context Usage

```typescript
import { useCart } from '@/context/CartContext';

function MyComponent() {
  const { items, addToCart, total, itemCount } = useCart();
  // Use cart methods...
}
```

## 🎯 Routing

**Pages:**
- `/` - Home page (all sections + hero)
- `/product` - Single product details page

**Navigation:**
- Sticky navbar with smooth scroll links
- Home, Product, Contact links
- Cart icon with item count badge

## 🎬 Animations

Uses **Framer Motion** for smooth, elegant animations:
- Fade-in and slide-up on scroll
- Hover effects on cards and buttons
- Cart drawer slide animation
- Modal animations
- Button scale feedback
- Staggered list animations

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.2
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Context API

## 📝 Customization

### Colors

Edit the color tokens in `app/globals.css`:

```css
:root {
  --primary: oklch(0.65 0.25 55);      /* Primary orange */
  --secondary: oklch(0.85 0.18 65);    /* Warm yellow */
  --background: oklch(0.99 0.005 60);  /* Cream background */
  --foreground: oklch(0.2 0.01 30);    /* Dark text */
}
```

### Product Information

Edit `components/ProductInfo.tsx` and `app/product/page.tsx` to update:
- Product name and description
- Price and specifications
- Benefits and features
- Ingredients list
- How to use instructions

### Homepage Content

Edit sections in `components/sections/` to customize:
- Hero headline and description
- About mission statement
- Benefits text
- Testimonials
- Contact form fields

## 🚀 Deployment

Ready to deploy with Vercel:

```bash
npm run build
npm start
```

Or deploy directly to Vercel:

```bash
vercel deploy
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (optimized layout)
- **Tablet**: 768px - 1024px (2-column grids)
- **Desktop**: > 1024px (full 3-column layouts)

## ✅ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎓 Academic Presentation

This project is suitable for:
- E-commerce portfolio showcase
- Module validation project
- Case study presentation
- Design and development demonstration

The clean architecture, responsive design, and premium aesthetics make it ideal for academic and professional presentations.

## 📄 License

Created for educational and portfolio purposes.

---

**Built with ❤️ for Breezoria**

For questions or customizations, refer to the component files and configuration options in the codebase.
