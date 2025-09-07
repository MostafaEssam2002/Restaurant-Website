# Restaurant Website - Day 8 Task

## ITI PHP Summer Internship Project

A modern, responsive restaurant website featuring an interactive hero slider, dynamic menu system, and elegant design. Built with HTML5, CSS3, and vanilla JavaScript.

## 🌟 Features

### Hero Section
- **Image Slider**: Automatic slideshow with 4 restaurant images
- **Navigation Controls**: Arrow buttons and dot indicators
- **Touch Support**: Swipe gestures for mobile devices
- **Keyboard Navigation**: Arrow keys support
- **Auto-play**: 5-second intervals with pause on hover

### Dynamic Menu System
- **Category Filtering**: Filter menu items by Pizza, Pasta, Steak, Drinks, or view All
- **Animated Cards**: Smooth animations and hover effects
- **Add to Cart**: Interactive cart system with counter
- **Responsive Grid**: Adapts to different screen sizes
- **Loading States**: User-friendly loading indicators

### Modern Design
- **Responsive Layout**: Mobile-first approach
- **Smooth Animations**: CSS transitions and keyframe animations
- **Typography**: Custom Google Fonts (Poppins, Merriweather, Nunito)
- **Color Scheme**: Professional dark theme with golden accents
- **Interactive Elements**: Hover effects and micro-animations

### Additional Features
- **Scroll to Top**: Floating button for easy navigation
- **Smooth Scrolling**: Enhanced user experience
- **Fixed Navigation**: Sticky header with background blur
- **Footer**: Comprehensive contact and service information

## 🛠 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Dynamic functionality and interactions
- **Google Fonts**: Typography enhancement
- **Responsive Design**: Mobile-friendly layout

## 📁 Project Structure

```
restaurant-website/
├── index.html              # Main HTML file
├── style.css               # Stylesheet
├── script.js               # JavaScript functionality
├── products.json           # Menu data (JSON format)
├── images/                 # Image assets
│   ├── logo.png
│   ├── slide_1.jpg
│   ├── slide_2.jpg
│   ├── slide_3.jpg
│   ├── res_img_5.jpg
│   ├── pizza-1.jpg
│   ├── pizza-2.jpg
│   ├── pizza-7.jpg
│   ├── pizza8.jpg
│   ├── pasta1.jpg
│   ├── pasta2.jpg
│   ├── pasta5.jpg
│   ├── pasta6.jpg
│   ├── res_img_4.jpg
│   ├── res_img_6.jpg
│   ├── res_img_7.jpg
│   ├── res_img_8.jpg
│   ├── blog-img-3.jpg
│   ├── blog-img-4.jpg
│   └── blog-bg.jpg
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server (optional, for local development)

### Installation & Setup

1. **Clone or Download** the project files
2. **Ensure all files** are in the same directory structure as shown above
3. **Add Images**: Place your restaurant images in the `images/` folder
4. **Open** `index.html` in a web browser

### Local Development (Optional)

For better development experience, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 📋 Menu Data Structure

The menu system uses `products.json` with the following structure:

```json
{
  "categories": ["All", "Steak", "Pasta", "Pizza", "Drinks"],
  "products": [
    {
      "id": 1,
      "name": "pizza 15$",
      "price": 15,
      "category": "Pizza",
      "image": "images/pizza-1.jpg"
    }
  ]
}
```

### Adding New Menu Items

1. Edit `products.json`
2. Add new product objects with unique IDs
3. Ensure image files exist in the `images/` folder
4. Add new categories to the categories array if needed

## 🎨 Customization

### Colors
Main color variables can be modified in `style.css`:
- Primary: `#d4af37` (Gold)
- Background: `#0f172b` (Dark Blue)
- Accent: `#ff9500` (Orange)
- Text: `#938464` (Muted Gold)

### Fonts
Current fonts used:
- **Merriweather**: Body text
- **Nunito**: Hero titles
- **Poppins**: Navigation and buttons

### Images
- **Hero Slides**: 1920x1080px recommended
- **Menu Items**: 400x300px recommended
- **Logo**: SVG or PNG format

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## ⚡ Performance Features

- **Lazy Loading**: Images load as needed
- **Optimized Animations**: Hardware-accelerated CSS transforms
- **Efficient DOM**: Minimal reflows and repaints
- **Event Delegation**: Optimized event handling

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Key Learning Points (ITI Internship)

This project demonstrates:

1. **Modern CSS**: Grid, Flexbox, animations, and responsive design
2. **JavaScript ES6+**: Async/await, arrow functions, destructuring
3. **DOM Manipulation**: Dynamic content creation and event handling
4. **User Experience**: Loading states, error handling, accessibility
5. **Code Organization**: Modular functions and clean architecture
6. **Performance**: Optimized animations and efficient rendering

## 🐛 Troubleshooting

### Images Not Loading
- Check file paths in `products.json`
- Ensure images exist in the `images/` folder
- Verify image file extensions match

### Menu Not Displaying
- Check browser console for JavaScript errors
- Ensure `products.json` is valid JSON
- Verify web server is serving JSON files correctly

### Animations Not Working
- Check if `prefers-reduced-motion` is enabled in browser
- Ensure CSS transitions are supported
- Verify JavaScript is enabled

## 🚧 Future Enhancements

Potential improvements for advanced learning:

- **Backend Integration**: PHP/MySQL for dynamic content
- **User Authentication**: Login and user profiles
- **Order System**: Complete ordering workflow
- **Payment Integration**: Stripe or PayPal
- **Admin Panel**: Menu management interface
- **SEO Optimization**: Meta tags and structured data

## 📄 License

This project is created for educational purposes as part of the ITI PHP Summer Internship program.

---

**Day 8 Task Completion**: ✅ Modern Restaurant Website with Interactive Features

*Developed during ITI PHP Summer Internship - Demonstrating HTML5, CSS3, and JavaScript proficiency*
