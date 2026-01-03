# Poultry Market - Premium Chicken Products Website

A professional, fully responsive React website for selling poultry products, built with React + Vite.

## Features

- 🏠 **Home Page** - Hero section, features, product preview, testimonials, and CTA
- 🛍️ **Products Page** - Grid layout with filtering (Fresh/Frozen categories)
- 📦 **Product Details Page** - Detailed product view with quantity selector and WhatsApp ordering
- 📖 **About Us Page** - Company story, quality commitments, and farm information
- 📞 **Contact Page** - Contact form, WhatsApp integration, and map placeholder

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Custom styling with CSS variables
- **No Backend** - Uses dummy JSON data

## Design

- Modern, clean food industry design
- Color palette: White, Green (#2d5016, #4a7c2a, #6ba347), Yellow (#f4d03f)
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and transitions
- Clean typography

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Images are already set up in the `public/image` directory.

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
poultry-market/
├── public/              # Static assets (images, etc.)
│   └── image/          # Product and hero images
├── src/
│   ├── components/     # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   └── ProductCard.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── data/           # JSON data files
│   │   └── products.json
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Update WhatsApp Number

Replace `1234567890` in the following files:
- `src/components/ProductCard.jsx`
- `src/pages/Home.jsx`
- `src/pages/ProductDetails.jsx`
- `src/pages/Contact.jsx`

### Update Product Data

Edit `src/data/products.json` to add, modify, or remove products.

### Update Contact Information

Edit contact details in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

### Update Colors

Modify CSS variables in `src/index.css`:
```css
--primary-green: #2d5016;
--light-green: #4a7c2a;
--lighter-green: #6ba347;
--yellow: #f4d03f;
```

## Features Details

### WhatsApp Integration
- All "Order via WhatsApp" buttons open WhatsApp with pre-filled messages
- Product details are automatically included in the message

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 968px
- Touch-friendly navigation and buttons

### Image Handling
- Images are loaded from the `public/image` directory
- Fallback placeholders for missing images
- Optimized loading with error handling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal or commercial use.

## Support

For issues or questions, please contact the development team.

