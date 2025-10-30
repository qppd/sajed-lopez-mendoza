## 🧪 Testing Guide for Vercel Portfolio

### Pre-Deployment Testing

1. **Local Testing**:
   ```bash
   cd sajed-mendoza-vercel
   npx serve .
   ```
   Visit `http://localhost:3000`

2. **Key Features to Test**:

   ✅ **Navigation**:
   - [ ] Smooth scrolling between sections
   - [ ] Mobile hamburger menu functionality
   - [ ] Logo click scrolls to top

   ✅ **Animations**:
   - [ ] Particle background effects
   - [ ] Baffle.js text scramble on hero section
   - [ ] Typewriter effect with rotating phrases
   - [ ] AOS (Animate On Scroll) effects throughout
   - [ ] Neon pulse effect on main heading

   ✅ **Interactive Elements**:
   - [ ] Back to top button appears/disappears
   - [ ] Tech cards hover effects
   - [ ] Gallery modal opens/closes
   - [ ] Gallery navigation (prev/next buttons)
   - [ ] Parallax mouse movement effects

   ✅ **Dynamic Content**:
   - [ ] GitHub repositories load correctly
   - [ ] Project gallery displays all images
   - [ ] Modal image viewer functions
   - [ ] Contact map loads (Leaflet)

   ✅ **Responsive Design**:
   - [ ] Mobile layout (< 768px)
   - [ ] Tablet layout (768px - 1024px)
   - [ ] Desktop layout (> 1024px)

   ✅ **External Resources**:
   - [ ] FontAwesome icons display
   - [ ] Google Fonts load
   - [ ] Tailwind CSS styling
   - [ ] All images load correctly

### Deployment Testing

1. **Vercel Deployment**:
   - [ ] No build errors
   - [ ] All static assets serve correctly
   - [ ] HTTPS certificate works
   - [ ] Custom domain (if configured)

2. **Performance Testing**:
   - [ ] Page load speed < 3 seconds
   - [ ] Images optimized and loading
   - [ ] No console errors
   - [ ] Lighthouse score > 90

### Known Differences from PHP Version

1. **Static vs Dynamic**: Gallery images are now hardcoded in JavaScript instead of PHP glob()
2. **Single File**: All content combined into index.html instead of separate PHP includes
3. **Client-side Only**: No server-side processing, everything runs in the browser

### Troubleshooting

- **GitHub API Rate Limit**: If repos don't load, check browser console for API errors
- **FontAwesome Icons**: Ensure CDN is accessible
- **Map Not Loading**: Check Leaflet CDN availability
- **Animations Not Working**: Verify AOS and Baffle.js CDN links

### Files Overview
- `index.html` - Main portfolio page
- `css/styles.css` - Custom styles and animations
- `js/main.js` - All JavaScript functionality
- `images/` - Project screenshots and assets
- `vercel.json` - Deployment configuration
- `package.json` - Project metadata