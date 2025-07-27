// Navegación móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Header con efecto de scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'var(--bg-white)';
        header.style.backdropFilter = 'none';
    }
});

// Animación de elementos al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animación
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.pillar-card, .reflection-card, .story-challenges, .quote');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Contador animado para estadísticas
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Efecto parallax suave para el hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Botones interactivos
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Efecto de ripple
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Efecto de escritura para el título principal
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Aplicar efecto de escritura al título cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 500);
    }
});

// Tooltip para elementos interactivos
function createTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: absolute;
        background: var(--text-dark);
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 14px;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
        z-index: 1000;
    `;
    
    element.style.position = 'relative';
    element.appendChild(tooltip);
    
    element.addEventListener('mouseenter', () => {
        tooltip.style.opacity = '1';
    });
    
    element.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
    });
}

// Aplicar tooltips a elementos específicos
document.addEventListener('DOMContentLoaded', () => {
    const pillarCards = document.querySelectorAll('.pillar-card');
    const tooltipTexts = [
        'Estrategias para desarrollar el conocimiento',
        'Actividades para el desarrollo motriz',
        'Enseñanza de valores sociales',
        'Desarrollo de la identidad personal'
    ];
    
    pillarCards.forEach((card, index) => {
        if (tooltipTexts[index]) {
            createTooltip(card, tooltipTexts[index]);
        }
    });
});

// Efecto de carga progresiva para imágenes (cuando se agreguen)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Event listeners para botones de acción
document.addEventListener('DOMContentLoaded', () => {
    const actionButtons = document.querySelectorAll('.action-buttons button');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;
            
            switch(buttonText) {
                case 'Donar Materiales':
                    showNotification('¡Gracias por tu interés en donar! Pronto nos pondremos en contacto contigo.', 'success');
                    break;
                case 'Compartir Historia':
                    if (navigator.share) {
                        navigator.share({
                            title: 'Aprendiendo entre techos de lámina y pupitres rotos',
                            text: 'Conoce la historia inspiradora de la profesora Daysi',
                            url: window.location.href
                        });
                    } else {
                        showNotification('¡Historia compartida! Gracias por difundir este mensaje.', 'success');
                    }
                    break;
                case 'Voluntariado':
                    showNotification('¡Excelente decisión! Te contactaremos para coordinar tu participación.', 'success');
                    break;
            }
        });
    });
});

// Efecto de partículas flotantes en el hero
function createFloatingParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            animation: float-particle ${3 + Math.random() * 4}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        
        hero.appendChild(particle);
    }
}

// CSS para partículas flotantes
const style = document.createElement('style');
style.textContent = `
    @keyframes float-particle {
        0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
        }
        50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
        }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Inicializar efectos cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    createFloatingParticles();
    lazyLoadImages();
    
    // Efecto de aparición gradual para el contenido
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Función para detectar el tema del sistema
function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-theme');
    }
}

// Aplicar tema del sistema
detectSystemTheme();

// Escuchar cambios en el tema del sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectSystemTheme);

// Función para mejorar la accesibilidad
function enhanceAccessibility() {
    // Agregar atributos ARIA a elementos interactivos
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(element => {
        if (!element.getAttribute('aria-label')) {
            element.setAttribute('aria-label', element.textContent.trim());
        }
    });
    
    // Agregar skip links para navegación por teclado
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Saltar al contenido principal';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10001;
    `;
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// Aplicar mejoras de accesibilidad
document.addEventListener('DOMContentLoaded', enhanceAccessibility);

// Funcionalidades para la sección de comentarios
document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('commentForm');
    const commentsList = document.getElementById('commentsList');

    // Manejo del formulario de comentarios
    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(commentForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const category = formData.get('category');
            const comment = formData.get('comment');
            const newsletter = formData.get('newsletter');

            // Crear nuevo comentario
            const newComment = createCommentElement(name, category, comment);
            
            // Agregar al inicio de la lista
            commentsList.insertBefore(newComment, commentsList.firstChild);
            
            // Mostrar notificación
            showNotification('¡Comentario publicado exitosamente!', 'success');
            
            // Limpiar formulario
            commentForm.reset();
        });
    }

    // Función para crear elemento de comentario
    function createCommentElement(name, category, comment) {
        const commentItem = document.createElement('div');
        commentItem.className = 'comment-item';
        commentItem.style.opacity = '0';
        commentItem.style.transform = 'translateY(20px)';
        
        const categoryText = getCategoryText(category);
        
        commentItem.innerHTML = `
            <div class="comment-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="comment-content">
                <div class="comment-header">
                    <h4>${name}</h4>
                    <span class="comment-category">${categoryText}</span>
                    <span class="comment-date">Ahora mismo</span>
                </div>
                <p>${comment}</p>
                <div class="comment-actions">
                    <button class="btn-like"><i class="fas fa-heart"></i> <span>0</span></button>
                    <button class="btn-reply"><i class="fas fa-reply"></i> Responder</button>
                </div>
            </div>
        `;

        // Animación de entrada
        setTimeout(() => {
            commentItem.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            commentItem.style.opacity = '1';
            commentItem.style.transform = 'translateY(0)';
        }, 100);

        return commentItem;
    }

    // Función para obtener texto de categoría
    function getCategoryText(category) {
        const categories = {
            'reflexion': 'Reflexión Personal',
            'experiencia': 'Experiencia Profesional',
            'sugerencia': 'Sugerencia',
            'pregunta': 'Pregunta',
            'otro': 'Otro'
        };
        return categories[category] || 'Otro';
    }

    // Funcionalidad de likes
    document.addEventListener('click', (e) => {
        if (e.target.closest('.btn-like')) {
            const likeBtn = e.target.closest('.btn-like');
            const likeCount = likeBtn.querySelector('span');
            const currentLikes = parseInt(likeCount.textContent);
            
            if (likeBtn.classList.contains('liked')) {
                likeBtn.classList.remove('liked');
                likeCount.textContent = currentLikes - 1;
            } else {
                likeBtn.classList.add('liked');
                likeCount.textContent = currentLikes + 1;
            }
        }
    });

    // Funcionalidad de paginación
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-pagination')) {
            // Remover clase active de todos los botones
            document.querySelectorAll('.btn-pagination').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Agregar clase active al botón clickeado
            e.target.classList.add('active');
            
            // Aquí se podría implementar la lógica de paginación real
            showNotification('Navegando a la página seleccionada...', 'info');
        }
    });
});

// Funcionalidades para la sección de bibliografía
document.addEventListener('DOMContentLoaded', () => {
    // Efecto hover para libros
    const bibliographyItems = document.querySelectorAll('.bibliography-item');
    bibliographyItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const bookCover = item.querySelector('.book-cover');
            bookCover.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        item.addEventListener('mouseleave', () => {
            const bookCover = item.querySelector('.book-cover');
            bookCover.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Efecto hover para artículos
    const articleItems = document.querySelectorAll('.article-item');
    articleItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const articleIcon = item.querySelector('.article-icon');
            articleIcon.style.transform = 'scale(1.2)';
        });
        
        item.addEventListener('mouseleave', () => {
            const articleIcon = item.querySelector('.article-icon');
            articleIcon.style.transform = 'scale(1)';
        });
    });

    // Funcionalidad para enlaces de recursos
    const resourceCards = document.querySelectorAll('.resource-card');
    resourceCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const title = card.querySelector('h4').textContent;
            showNotification(`Accediendo a ${title}...`, 'info');
        });
    });

    // Funcionalidad para botones "Leer más"
    const readMoreButtons = document.querySelectorAll('.btn-outline-small');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const bookTitle = button.closest('.bibliography-item').querySelector('h4').textContent;
            showNotification(`Abriendo ${bookTitle}...`, 'info');
        });
    });
});

// Animaciones adicionales para las nuevas secciones
document.addEventListener('DOMContentLoaded', () => {
    // Observar elementos de bibliografía para animaciones
    const bibliographyElements = document.querySelectorAll('.bibliography-item, .article-item, .resource-card');
    
    bibliographyElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Efecto de escritura para títulos de sección
    const sectionTitles = document.querySelectorAll('.bibliography-section h3, .comments h2');
    sectionTitles.forEach(title => {
        title.style.opacity = '0';
        title.style.transform = 'translateX(-30px)';
        title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(title);
    });
});

// Validación de formulario mejorada
document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('commentForm');
    if (commentForm) {
        const inputs = commentForm.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                validateField(input);
            });
            
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    validateField(input);
                }
            });
        });
    }
});

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    // Remover mensajes de error previos
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    field.classList.remove('error');

    // Validaciones específicas
    switch (field.type) {
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Por favor ingresa un email válido';
            }
            break;
        case 'text':
            if (field.name === 'name' && value.length < 2) {
                isValid = false;
                errorMessage = 'El nombre debe tener al menos 2 caracteres';
            }
            break;
        case 'textarea':
            if (value.length < 10) {
                isValid = false;
                errorMessage = 'El comentario debe tener al menos 10 caracteres';
            }
            break;
    }

    // Mostrar error si es necesario
    if (!isValid) {
        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = errorMessage;
        errorDiv.style.cssText = `
            color: var(--accent-color);
            font-size: 0.85rem;
            margin-top: 0.5rem;
        `;
        field.parentNode.appendChild(errorDiv);
    }

    return isValid;
}

// Funcionalidad del Slider Multimedia
document.addEventListener('DOMContentLoaded', () => {
    const sliderTrack = document.getElementById('sliderTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const sliderDots = document.getElementById('sliderDots');
    
    if (!sliderTrack || !prevBtn || !nextBtn || !sliderDots) return;
    
    const slides = sliderTrack.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentSlide = 0;
    
    // Crear dots de navegación
    function createDots() {
        sliderDots.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            sliderDots.appendChild(dot);
        }
    }
    
    // Función para ir a un slide específico
    function goToSlide(slideIndex) {
        if (slideIndex < 0 || slideIndex >= totalSlides) return;
        
        currentSlide = slideIndex;
        const translateX = -currentSlide * 100;
        sliderTrack.style.transform = `translateX(${translateX}%)`;
        
        // Actualizar dots
        updateDots();
        
        // Actualizar botones
        updateButtons();
        
        // Pausar todos los videos
        pauseAllVideos();
    }
    
    // Función para actualizar dots
    function updateDots() {
        const dots = sliderDots.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Función para actualizar botones
    function updateButtons() {
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;
    }
    
    // Función para pausar todos los videos
    function pauseAllVideos() {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.pause();
        });
    }
    
    // Event listeners para botones
    prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });
    
    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            goToSlide(currentSlide - 1);
        } else if (e.key === 'ArrowRight') {
            goToSlide(currentSlide + 1);
        }
    });
    
    // Navegación con swipe (para dispositivos táctiles)
    let startX = 0;
    let endX = 0;
    
    sliderTrack.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    sliderTrack.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe izquierda - siguiente slide
                goToSlide(currentSlide + 1);
            } else {
                // Swipe derecha - slide anterior
                goToSlide(currentSlide - 1);
            }
        }
    }
    
    // Auto-play para videos cuando están visibles
    function handleVideoVisibility() {
        const currentVideo = slides[currentSlide].querySelector('video');
        if (currentVideo) {
            // Pausar todos los videos primero
            pauseAllVideos();
            
            // Precargar el video actual para mejor rendimiento
            if (currentVideo.readyState < 2) { // HAVE_CURRENT_DATA
                currentVideo.load();
            }
            
            // Reproducir el video actual después de un pequeño delay
            setTimeout(() => {
                if (currentSlide === currentSlide) { // Verificar que no haya cambiado
                    currentVideo.play().catch(e => {
                        // Manejar error si el navegador no permite autoplay
                        console.log('Autoplay no permitido:', e);
                    });
                }
            }, 500);
        }
    }
    
    // Observar cambios en el slider para manejar videos
    const sliderObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                handleVideoVisibility();
            } else {
                pauseAllVideos();
            }
        });
    }, { threshold: 0.5 });
    
    sliderObserver.observe(sliderTrack);
    
    // Función para precargar videos de manera inteligente
    function preloadVideos() {
        const videos = document.querySelectorAll('video');
        videos.forEach((video, index) => {
            // Precargar solo los primeros 2 videos para mejorar rendimiento
            if (index < 2) {
                video.preload = 'metadata';
            } else {
                video.preload = 'none';
            }
            
            // Agregar atributos para mejor rendimiento
            video.setAttribute('playsinline', '');
            video.setAttribute('webkit-playsinline', '');
        });
    }
    
    // Inicializar slider
    createDots();
    updateButtons();
    preloadVideos();
    
    // Efecto de carga mejorado para imágenes
    const images = document.querySelectorAll('.image-container img');
    images.forEach(img => {
        const container = img.closest('.image-container');
        
        // Preload de imágenes para mejorar rendimiento
        const preloadImage = new Image();
        preloadImage.onload = () => {
            img.classList.add('loaded');
            container.classList.add('loaded');
            img.style.opacity = '1';
        };
        
        preloadImage.onerror = () => {
            img.style.opacity = '0.5';
            img.style.filter = 'grayscale(100%)';
            container.classList.add('loaded');
            const loadingElement = container.querySelector('.image-loading');
            if (loadingElement) {
                loadingElement.innerHTML = '<i class="fas fa-exclamation-triangle"></i><span>Error al cargar imagen</span>';
            }
        };
        
        preloadImage.src = img.src;
    });
    
    // Efecto de hover para slides
    slides.forEach(slide => {
        slide.addEventListener('mouseenter', () => {
            const video = slide.querySelector('video');
            if (video && video.paused) {
                video.play().catch(e => {
                    console.log('No se pudo reproducir el video:', e);
                });
            }
        });
        
        slide.addEventListener('mouseleave', () => {
            const video = slide.querySelector('video');
            if (video && !video.paused) {
                video.pause();
            }
        });
    });
    
    // Indicador de progreso
    function updateProgressIndicator() {
        const progress = ((currentSlide + 1) / totalSlides) * 100;
        const progressBar = document.createElement('div');
        progressBar.className = 'slider-progress';
        progressBar.style.cssText = `
            position: absolute;
            bottom: 0;
            left: 0;
            height: 3px;
            background: var(--primary-color);
            width: ${progress}%;
            transition: width 0.3s ease;
            z-index: 10;
        `;
        
        // Remover barra de progreso anterior
        const existingProgress = document.querySelector('.slider-progress');
        if (existingProgress) {
            existingProgress.remove();
        }
        
        sliderTrack.appendChild(progressBar);
    }
    
    // Actualizar indicador de progreso cuando cambia el slide
    const originalGoToSlide = goToSlide;
    goToSlide = function(slideIndex) {
        if (slideIndex < 0 || slideIndex >= totalSlides) return;
        
        currentSlide = slideIndex;
        const translateX = -currentSlide * 100;
        sliderTrack.style.transform = `translateX(${translateX}%)`;
        
        // Actualizar dots
        updateDots();
        
        // Actualizar botones
        updateButtons();
        
        // Pausar todos los videos
        pauseAllVideos();
        
        // Actualizar indicador de progreso
        updateProgressIndicator();
    };
    
    // Inicializar indicador de progreso
    updateProgressIndicator();
});

// Funcionalidades para la sección de Integrantes
document.addEventListener('DOMContentLoaded', () => {
    // Efecto de aparición para miembros del equipo
    const teamMembers = document.querySelectorAll('.team-member');
    const descriptionCards = document.querySelectorAll('.description-card');
    
    const teamObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.3 });
    
    // Aplicar animaciones iniciales
    teamMembers.forEach(member => {
        member.style.opacity = '0';
        member.style.transform = 'translateY(30px)';
        member.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        teamObserver.observe(member);
    });
    
    descriptionCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        teamObserver.observe(card);
    });
    
    // Efecto de hover mejorado para skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Efecto de contador para números de identificación
    function animateMemberId(element) {
        const id = element.textContent;
        const numbers = id.replace(/\D/g, '');
        let current = '';
        let index = 0;
        
        const timer = setInterval(() => {
            if (index < numbers.length) {
                current += numbers[index];
                element.textContent = id.replace(/\d+/, current);
                index++;
            } else {
                clearInterval(timer);
                element.textContent = id;
            }
        }, 100);
    }
    
    // Aplicar animación de contador cuando los miembros del equipo son visibles
    teamMembers.forEach(member => {
        const memberId = member.querySelector('.member-id');
        if (memberId) {
            const idObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateMemberId(memberId);
                        idObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            idObserver.observe(memberId);
        }
    });
    
    // Efecto de partículas flotantes para la sección de equipo
    function createTeamParticles() {
        const teamSection = document.querySelector('.team');
        if (!teamSection) return;
        
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'team-particle';
            particle.style.cssText = `
                position: absolute;
                width: 3px;
                height: 3px;
                background: rgba(255, 255, 255, 0.4);
                border-radius: 50%;
                pointer-events: none;
                animation: team-particle-float ${4 + Math.random() * 3}s ease-in-out infinite;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
            `;
            
            teamSection.appendChild(particle);
        }
    }
    
    // Agregar CSS para partículas del equipo
    const teamStyle = document.createElement('style');
    teamStyle.textContent = `
        @keyframes team-particle-float {
            0%, 100% {
                transform: translateY(0px) translateX(0px);
                opacity: 0.4;
            }
            50% {
                transform: translateY(-15px) translateX(10px);
                opacity: 0.8;
            }
        }
    `;
    document.head.appendChild(teamStyle);
    
    // Inicializar partículas del equipo
    createTeamParticles();
    
    // Función para mostrar progreso de carga
    function showLoadingProgress() {
        const totalAssets = document.querySelectorAll('img, video').length;
        let loadedAssets = 0;
        
        const progressBar = document.createElement('div');
        progressBar.className = 'loading-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: #f0f0f0;
            z-index: 10000;
        `;
        
        const progressFill = document.createElement('div');
        progressFill.style.cssText = `
            height: 100%;
            background: var(--primary-color);
            width: 0%;
            transition: width 0.3s ease;
        `;
        
        progressBar.appendChild(progressFill);
        document.body.appendChild(progressBar);
        
        function updateProgress() {
            loadedAssets++;
            const progress = (loadedAssets / totalAssets) * 100;
            progressFill.style.width = progress + '%';
            
            if (loadedAssets >= totalAssets) {
                setTimeout(() => {
                    progressBar.style.opacity = '0';
                    setTimeout(() => {
                        document.body.removeChild(progressBar);
                    }, 300);
                }, 500);
            }
        }
        
        // Monitorear carga de imágenes
        document.querySelectorAll('img').forEach(img => {
            if (img.complete) {
                updateProgress();
            } else {
                img.addEventListener('load', updateProgress);
                img.addEventListener('error', updateProgress);
            }
        });
        
        // Monitorear carga de videos
        document.querySelectorAll('video').forEach(video => {
            video.addEventListener('loadedmetadata', updateProgress);
            video.addEventListener('error', updateProgress);
        });
    }
    
    // Mostrar progreso de carga
    showLoadingProgress();
}); 