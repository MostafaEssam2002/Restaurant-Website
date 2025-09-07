# Restaurant Website - Dynamic Menu System

## 🍽️ Project Overview

A modern, full-stack restaurant website featuring an interactive hero slider, dynamic menu system with database integration, and elegant responsive design. Built with HTML5, CSS3, JavaScript, and PHP with MySQL database connectivity.

## ✨ Key Features

### 🎠 Hero Section & Image Slider
- **Automatic Slideshow**: 4 restaurant images with smooth transitions
- **Interactive Controls**: Arrow navigation and dot indicators
- **Touch Support**: Swipe gestures for mobile devices
- **Keyboard Navigation**: Arrow keys support for accessibility
- **Auto-play**: 5-second intervals with pause on hover
- **Responsive Design**: Adapts to all screen sizes

### 🍕 Dynamic Menu System
- **Database Integration**: Real-time data from MySQL database via PHP
- **Category Filtering**: Filter by Pizza, Pasta, Steak, Drinks, or view All
- **Live Cart System**: Add items with real-time counter updates
- **Smooth Animations**: Card hover effects and loading states
- **Error Handling**: Fallback images and graceful error handling
- **Responsive Grid**: Adapts to different screen sizes

### 🎨 Modern Design & UX
- **Professional Styling**: Dark theme with golden accents
- **Smooth Animations**: CSS transitions and keyframe animations
- **Typography**: Google Fonts integration (Poppins, Merriweather, Nunito)
- **Interactive Elements**: Hover effects and micro-animations
- **Loading States**: User-friendly loading indicators
- **Accessibility**: Keyboard navigation and semantic HTML

### 🔧 Additional Features
- **Fixed Navigation**: Sticky header with blur background effect
- **Scroll to Top**: Animated floating button
- **Smooth Scrolling**: Enhanced navigation experience
- **Responsive Footer**: Comprehensive contact information
- **Cross-browser Support**: Works across modern browsers

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript (ES6+)**: Async/await, DOM manipulation, event handling
- **Google Fonts**: Professional typography

### Backend
- **PHP**: Server-side scripting for database connectivity
- **MySQL**: Relational database for menu items and categories
- **JSON**: Data exchange format between frontend and backend

### Development Tools
- **CORS Headers**: Cross-origin resource sharing configuration
- **PDO**: PHP Data Objects for secure database connections
- **Error Handling**: Comprehensive error management

## 📁 Project Structure

```
restaurant-website/
├── index.html              # Main HTML file
├── style.css               # Complete stylesheet
├── script.js               # Frontend JavaScript functionality
├── get_products.php        # Backend API for menu data
├── README.md               # Project documentation
├── images/                 # Image assets directory
│   ├── logo.png           # Restaurant logo
│   ├── slide_1.jpg        # Hero slider images
│   ├── slide_2.jpg
│   ├── slide_3.jpg
│   ├── res_img_5.jpg
│   ├── pizza-1.jpg        # Menu item images
│   ├── pizza-2.jpg
│   ├── pizza-7.jpg
│   ├── pizza8.jpg
│   ├── pasta1.jpg
│   ├── pasta2.jpg
│   ├── pasta5.jpg
│   ├── pasta6.jpg
│   ├── res_img_4.jpg      # Steak images
│   ├── res_img_6.jpg
│   ├── res_img_7.jpg
│   ├── res_img_8.jpg
│   ├── blog-img-3.jpg     # Drinks images
│   ├── blog-img-4.jpg
│   └── blog-bg.jpg
└── database/
    └── schema.sql          # Database structure
```

## 🗄️ Database Schema

### MySQL Database Setup

```sql
-- Create database
CREATE DATABASE test CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE test;

-- Categories table
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

-- Products table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(8,2) NOT NULL,
    image VARCHAR(255) NOT NULL,
    category_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Insert sample categories
INSERT INTO categories (name) VALUES 
('Pizza'), ('Pasta'), ('Steak'), ('Drinks');

-- Insert sample products
INSERT INTO products (name, price, image, category_id) VALUES 
('Margherita Pizza', 15.00, 'images/pizza-1.jpg', 1),
('Pepperoni Pizza', 18.00, 'images/pizza-2.jpg', 1),
('Supreme Pizza', 22.00, 'images/pizza-7.jpg', 1),
('Vegetarian Pizza', 20.00, 'images/pizza8.jpg', 1),
('Spaghetti Carbonara', 16.00, 'images/pasta1.jpg', 2),
('Penne Arrabiata', 14.00, 'images/pasta2.jpg', 2),
('Fettuccine Alfredo', 18.00, 'images/pasta5.jpg', 2),
('Lasagna', 20.00, 'images/pasta6.jpg', 2),
('Ribeye Steak', 35.00, 'images/res_img_4.jpg', 3),
('Filet Mignon', 45.00, 'images/res_img_6.jpg', 3),
('T-Bone Steak', 40.00, 'images/res_img_7.jpg', 3),
('Sirloin Steak', 30.00, 'images/res_img_8.jpg', 3),
('Fresh Orange Juice', 8.00, 'images/blog-img-3.jpg', 4),
('Iced Coffee', 6.00, 'images/blog-img-4.jpg', 4),
('Smoothie Bowl', 12.00, 'images/blog-bg.jpg', 4);
```

## 🚀 Installation & Setup

### Prerequisites
- **Web Server**: Apache, Nginx, or XAMPP/WAMP
- **PHP**: Version 7.4 or higher
- **MySQL**: Version 5.7 or higher
- **Modern Browser**: Chrome, Firefox, Safari, or Edge

### Step-by-Step Installation

1. **Download/Clone Project**
   ```bash
   git clone https://github.com/MostafaEssam2002/Restaurant-Website.git
   cd restaurant-website
   ```

2. **Database Setup**
   - Create MySQL database named `test`
   - Import the database schema (see Database Schema section)
   - Update database credentials in `get_products.php` if needed

3. **Web Server Configuration**
   - Place files in web server directory (e.g., `htdocs` for XAMPP)
   - Ensure PHP and MySQL services are running

4. **File Permissions**
   - Ensure web server has read access to all files
   - Verify image directory is accessible

5. **Testing**
   - Open `http://localhost/restaurant-website/index.html`
   - Verify menu items load from database
   - Test all interactive features

### Local Development with XAMPP

1. Install XAMPP from https://www.apachefriends.org/
2. Start Apache and MySQL services
3. Place project files in `C:\xampp\htdocs\restaurant-website\`
4. Access via `http://localhost/restaurant-website/`

## 🔧 Configuration

### Database Connection
Update `get_products.php` with your database credentials:

```php
$pdo = new PDO("mysql:host=localhost;dbname=test;charset=utf8", "username", "password");
```

### CORS Configuration
For local development, CORS headers are already configured in `get_products.php`:

```php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
```

### Image Configuration
- Place menu item images in the `images/` directory
- Update database records with correct image paths
- Supported formats: JPG, PNG, WebP

## 🎨 Customization Guide

### Color Scheme
Main colors defined in CSS custom properties:

```css
:root {
    --primary-gold: #d4af37;
    --dark-blue: #0f172b;
    --accent-orange: #ff9500;
    --muted-gold: #938464;
    --card-background: #fea116;
}
```

### Typography
Current font stack:
- **Headers**: Nunito (Google Fonts)
- **Body Text**: Merriweather (serif)
- **Navigation**: Poppins (sans-serif)

### Adding New Menu Items
1. Add image to `images/` directory
2. Insert into database:
   ```sql
   INSERT INTO products (name, price, image, category_id) 
   VALUES ('New Item', 25.00, 'images/new-item.jpg', 1);
   ```

### Creating New Categories
1. Add to categories table:
   ```sql
   INSERT INTO categories (name) VALUES ('Desserts');
   ```
2. Add corresponding products with new category_id

## 📱 Responsive Breakpoints

- **Large Desktop**: 1400px+
- **Desktop**: 1200px - 1399px
- **Laptop**: 992px - 1199px
- **Tablet**: 768px - 991px
- **Mobile Large**: 576px - 767px
- **Mobile**: Below 576px

## 🔍 API Endpoints

### GET /get_products.php
Returns menu data in JSON format:

```json
{
  "categories": ["Pizza", "Pasta", "Steak", "Drinks"],
  "products": [
    {
      "id": 1,
      "name": "Margherita Pizza",
      "price": "15.00",
      "image": "images/pizza-1.jpg",
      "category": "Pizza"
    }
  ]
}
```

## 🚨 Troubleshooting

### Common Issues

**Menu not loading:**
- Check browser console for JavaScript errors
- Verify PHP server is running
- Ensure database connection is working
- Check CORS headers in browser network tab

**Images not displaying:**
- Verify image files exist in correct directory
- Check file paths in database
- Ensure web server has read permissions

**Database connection failed:**
- Verify MySQL service is running
- Check database credentials in `get_products.php`
- Ensure database and tables exist

**Slider not working:**
- Check JavaScript console for errors
- Verify all slide images exist
- Ensure proper HTML structure

### Debug Mode
Add to `get_products.php` for debugging:

```php
// Enable error reporting
ini_set('display_errors', 1);
error_reporting(E_ALL);
```

## 🔒 Security Considerations

### Current Implementation
- **PDO**: Protects against SQL injection
- **Input Validation**: Basic validation in place
- **Error Handling**: Prevents information disclosure

### Recommended Enhancements
- Input sanitization for user data
- Authentication system
- Rate limiting for API endpoints
- HTTPS implementation
- File upload validation

## 📊 Performance Optimization

### Current Features
- **Lazy Loading**: Images load as needed
- **Optimized CSS**: Hardware-accelerated animations
- **Efficient DOM**: Minimal reflows and repaints
- **Compressed Assets**: Minified where possible

### Future Improvements
- Image compression and WebP format
- CSS and JavaScript minification
- CDN integration
- Database query optimization
- Caching implementation

## 🧪 Browser Compatibility

### Fully Supported
- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

### Mobile Support
- iOS Safari 12+
- Chrome Mobile 70+
- Samsung Internet 8+

## 🚀 Deployment

### Production Checklist
- [ ] Update database credentials
- [ ] Configure proper CORS headers
- [ ] Enable HTTPS
- [ ] Optimize images
- [ ] Minify CSS/JavaScript
- [ ] Set up error logging
- [ ] Configure backup system

### Server Requirements
- **PHP**: 7.4+ with PDO MySQL extension
- **MySQL**: 5.7+ or MariaDB 10.2+
- **Web Server**: Apache 2.4+ or Nginx 1.16+
- **SSL Certificate**: For production deployment

## 🔄 Future Enhancements

### Phase 1: Core Features
- [ ] User authentication system
- [ ] Order management
- [ ] Payment integration
- [ ] Email notifications

### Phase 2: Advanced Features
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Customer reviews
- [ ] Reservation system

### Phase 3: Optimization
- [ ] Progressive Web App (PWA)
- [ ] Advanced caching
- [ ] Real-time updates
- [ ] Mobile app integration

## 📝 Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Code Standards
- Use semantic HTML5 elements
- Follow CSS BEM methodology
- Write ES6+ JavaScript
- Include comments for complex logic
- Test across browsers

## 📄 License

This project is developed for educational purposes. Feel free to use and modify for learning and commercial purposes.

## 👨‍💻 Author

**Restaurant Website Project**
- Educational demonstration of full-stack web development
- Showcasing HTML5, CSS3, JavaScript, PHP, and MySQL integration
- Modern responsive design principles

## 🙏 Acknowledgments

- Google Fonts for typography
- Unsplash for placeholder images
- Modern CSS Grid and Flexbox techniques
- PHP PDO for secure database connections

---

**🚀 Ready to serve delicious web experiences!**

*For support or questions, please check the troubleshooting section or create an issue in the repository.*
