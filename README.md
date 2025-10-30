# Sajed Lopez Mendoza - Portfolio (Vercel Version)

This is the Vercel-compatible version of Sajed Lopez Mendoza's portfolio website, converted from the original PHP implementation.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Animations**: Smooth scrolling, particle effects, and CSS animations
- **Dynamic Content**: GitHub repositories integration and project gallery
- **Modern UI**: Glass morphism effects, neon styling, and parallax animations
- **Performance Optimized**: Static assets with proper caching strategies

## 🛠 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS, Custom CSS animations
- **Libraries**: 
  - AOS (Animate On Scroll)
  - Baffle.js (Text scramble effect)
  - Leaflet (Interactive maps)
  - Alpine.js (Reactive components)
- **Deployment**: Vercel

## 📁 Project Structure

```
sajed-mendoza-vercel/
├── index.html          # Main HTML file (converted from PHP)
├── css/
│   └── styles.css      # Custom CSS styles
├── js/
│   └── main.js         # Main JavaScript functionality
├── images/             # Project screenshots and assets
├── assets/             # Resume and documents
├── vercel.json         # Vercel deployment configuration
├── package.json        # NPM dependencies and scripts
└── README.md          # This file
```

## 🔧 Local Development

1. Clone or download this repository
2. Install dependencies (optional, for local serving):
   ```bash
   npm install
   ```
3. Start local development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser

## 🚀 Deployment to Vercel

1. Connect your GitHub repository to Vercel
2. Import the project in Vercel dashboard
3. Deploy automatically - no build step required!

### Manual Deployment
```bash
npm install -g vercel
vercel
```

## 📋 Conversion Notes

This version was converted from the original PHP implementation with the following changes:

- **PHP to HTML**: All PHP includes merged into single HTML file
- **Dynamic Gallery**: PHP-generated gallery converted to JavaScript
- **GitHub API**: Maintained client-side GitHub repository fetching
- **Static Assets**: All images and resources copied over
- **Animations**: All CSS animations and JavaScript effects preserved
- **Responsive Design**: Mobile responsiveness maintained

## 🎨 Sections

- **Hero**: Animated name with typewriter effect
- **Technologies**: Scrolling tech stack showcase
- **Projects**: Dynamic GitHub repositories
- **Gallery**: Interactive project screenshots
- **About**: Personal information and resume
- **Experience**: Work history timeline
- **Contact**: Interactive map and social links

## 📱 Mobile Responsive

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔗 Live Demo

Visit the live portfolio: [Your Vercel URL Here]

## 👨‍💻 Developer

**Sajed Lopez Mendoza**
- Email: quezon.province.pd@gmail.com
- GitHub: [@qppd](https://github.com/qppd)
- Location: Unisan, Quezon Province, Philippines

## 📄 License

This project is open source and available under the [MIT License](LICENSE).