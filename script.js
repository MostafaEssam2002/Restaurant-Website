        // ===== SLIDER FUNCTIONALITY =====
        let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const indicators = document.querySelectorAll('.indicator');
        const totalSlides = slides.length;
        let autoSlideInterval;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(indicator => indicator.classList.remove('active'));
            slides[index].classList.add('active');
            indicators[index].classList.add('active');
        }

        function changeSlide(direction) {
            currentSlideIndex += direction;
            if (currentSlideIndex >= totalSlides) {
                currentSlideIndex = 0;
            } else if (currentSlideIndex < 0) {
                currentSlideIndex = totalSlides - 1;
            }
            showSlide(currentSlideIndex);
            resetAutoSlide();
        }

        function currentSlide(index) {
            currentSlideIndex = index - 1;
            showSlide(currentSlideIndex);
            resetAutoSlide();
        }

        function startAutoSlide() {
            autoSlideInterval = setInterval(() => {
                changeSlide(1);
            }, 5000);
        }

        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        }

        // ===== MENU FUNCTIONALITY =====
        let productsData = null;
        let cart = [];
        let currentCategory = 'All';

        async function loadProductsData() {
            try {
                const response = await fetch('products.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                productsData = await response.json();
                console.log('Products data loaded successfully:', productsData);
                return productsData;
            } catch (error) {
                console.error('Error loading products data:', error);
                console.log('Using default data');
                return productsData;
            }
        }
        // async function loadProductsData() {
        //     try {
        //         const response = await fetch('http://localhost/task6-9/get_products.php') // بدل products.json
        //         if (!response.ok) {
        //             throw new Error(`HTTP error! status: ${response.status}`);
        //         }
        //         productsData = await response.json();
        //         console.log('Products data loaded from MySQL:', productsData);
        //         return productsData;
        //     } catch (error) {
        //         console.error('Error loading products data:', error);
        //         return productsData;
        //     }
        // }

        async function initMenu() {
            showLoadingState();
            await loadProductsData();
            hideLoadingState();
            createFilterButtons();
            displayProducts(productsData.products);
            updateCartCounter();
        }

        function showLoadingState() {
            const productsGrid = document.getElementById('productsGrid');
            productsGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 50px; font-size: 18px; color: #666;">
                    <div style="margin-bottom: 20px;">🍕</div>
                    Loading delicious menu...
                </div>
            `;
        }

        function hideLoadingState() {
            // Will be replaced by actual products in displayProducts
        }

        function createFilterButtons() {
            const filterContainer = document.getElementById('filterButtons');
            filterContainer.innerHTML = '';
            
            productsData.categories.forEach((category, index) => {
                const button = document.createElement('button');
                button.className = `filter-btn ${index === 0 ? 'active' : ''}`;
                button.textContent = category;
                button.onclick = () => filterProducts(category, button);
                filterContainer.appendChild(button);
            });
        }

        function filterProducts(category, clickedButton) {
            currentCategory = category;
            
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            clickedButton.classList.add('active');

            const filteredProducts = category === 'All' 
                ? productsData.products 
                : productsData.products.filter(product => product.category === category);
            
            displayProducts(filteredProducts);
        }

        function displayProducts(products) {
            const productsGrid = document.getElementById('productsGrid');
            const noProducts = document.getElementById('noProducts');

            if (products.length === 0) {
                productsGrid.style.display = 'none';
                noProducts.style.display = 'block';
                return;
            }

            productsGrid.style.display = 'grid';
            noProducts.style.display = 'none';
            productsGrid.innerHTML = '';

            products.forEach((product, index) => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.style.animationDelay = `${index * 0.1}s`;
                
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image" 
                            onerror="this.src='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop'">
                    <div class="product-info">
                        <h2 class="product-name">${product.name}</h2>
                        <button class="add-to-cart-btn" onclick="addToCart(${product.id}, this)">
                            Add to Cart
                        </button>
                    </div>
                `;
                
                productsGrid.appendChild(productCard);
            });
        }

        function addToCart(productId, buttonElement) {
            const product = productsData.products.find(p => p.id === productId);
            if (product) {
                cart.push(product);
                updateCartCounter();
                
                buttonElement.style.background = '#4CAF50';
                buttonElement.textContent = 'Added!';
                
                setTimeout(() => {
                    buttonElement.style.background = '';
                    buttonElement.textContent = 'Add to Cart';
                }, 1000);
            }
        }

        function updateCartCounter() {
            const cartCountElement = document.getElementById('count');
            cartCountElement.textContent = cart.length;
        }

        // ===== SCROLL TO TOP FUNCTIONALITY =====
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        function handleScrollToTopButton() {
            const scrollToTopBtn = document.getElementById('scrollToTop');
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        }

        // ===== GENERAL FUNCTIONALITY =====

        // Keyboard navigation for slider
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                changeSlide(-1);
            } else if (e.key === 'ArrowRight') {
                changeSlide(1);
            }
        });

        // Touch/swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeThreshold = 50;
            const swipeDistance = touchEndX - touchStartX;

            if (Math.abs(swipeDistance) > swipeThreshold) {
                if (swipeDistance > 0) {
                    changeSlide(-1);
                } else {
                    changeSlide(1);
                }
            }
        }

        // Pause auto-slide on hover
        const heroSection = document.querySelector('.hero-section');
        heroSection.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });

        heroSection.addEventListener('mouseleave', () => {
            startAutoSlide();
        });

        // Smooth navbar background on scroll and scroll to top button
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(15, 23, 43, 0.98)';
            } else {
                navbar.style.background = '#0f172b';
            }
            
            handleScrollToTopButton();
        });

        // Scroll animation for sections
        function animateOnScroll() {
            const elements = document.querySelectorAll('.fade-in-on-scroll');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        }

        window.addEventListener('scroll', animateOnScroll);

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // ===== INITIALIZATION =====
        async function initApp() {
            startAutoSlide();
            await initMenu();
            animateOnScroll();
        }

        document.addEventListener('DOMContentLoaded', initApp);
