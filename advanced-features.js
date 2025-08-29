// 🚀 ULTIMATE ADVANCED FEATURES FOR SUPREME WEBSITE EXPERIENCE
// Revolutionary interactive features with cutting-edge technology

class UltimateWebsiteFeatures {
    constructor() {
        this.initializeUltimateExperience();
        this.performanceMetrics = {
            frameRate: 0,
            lastFrameTime: 0,
            animationFrames: 0
        };
        this.interactionStates = {
            mousePosition: { x: 0, y: 0 },
            isTouch: false,
            deviceOrientation: { alpha: 0, beta: 0, gamma: 0 }
        };
    }

    initializeUltimateExperience() {
        this.setupQuantumParticleSystem();
        this.setupHolographicAnimations();
        this.setupNeuralInteractiveElements();
        this.setupQuantumPerformanceOptimizations();
        this.setupUniversalAccessibilityFeatures();
        this.setupAugmentedRealityEffects();
        this.setupAIResponsiveDesign();
        this.setupImmersiveAudioVisuals();
        this.initializePerformanceMonitoring();
    }

    // 🌌 Quantum Particle System with Neural Networks
    setupQuantumParticleSystem() {
        const canvas = document.createElement('canvas');
        canvas.id = 'quantumParticleCanvas';
        canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.6;
            filter: blur(0.5px);
            mix-blend-mode: screen;
        `;
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const connections = [];
        const particleCount = 120;
        const maxDistance = 150;

        class QuantumParticle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 2;
                this.vy = (Math.random() - 0.5) * 2;
                this.size = Math.random() * 3 + 1;
                this.opacity = Math.random() * 0.8 + 0.2;
                this.hue = Math.random() * 360;
                this.energy = Math.random();
                this.quantumState = Math.random() * Math.PI * 2;
                this.magneticField = Math.random() * 0.01;
                this.life = 1;
                this.maxLife = 100 + Math.random() * 200;
            }

            update() {
                // Quantum field dynamics
                this.quantumState += 0.02;
                const quantumForce = Math.sin(this.quantumState) * 0.1;
                
                // Mouse interaction
                const mouseDistance = Math.sqrt(
                    Math.pow(this.x - this.interactionStates?.mousePosition?.x || 0, 2) +
                    Math.pow(this.y - this.interactionStates?.mousePosition?.y || 0, 2)
                );
                
                if (mouseDistance < 100) {
                    const force = (100 - mouseDistance) / 100;
                    this.vx += (this.x - (this.interactionStates?.mousePosition?.x || 0)) * force * 0.001;
                    this.vy += (this.y - (this.interactionStates?.mousePosition?.y || 0)) * force * 0.001;
                    this.energy = Math.min(1, this.energy + force * 0.1);
                }

                // Physics update
                this.vx += quantumForce;
                this.vy += quantumForce;
                this.vx *= 0.99; // Damping
                this.vy *= 0.99;
                
                this.x += this.vx;
                this.y += this.vy;

                // Boundary conditions with quantum tunneling effect
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;

                // Energy decay
                this.energy *= 0.995;
                this.life--;
                
                // Hue shift for rainbow effect
                this.hue = (this.hue + 0.5) % 360;
                
                // Opacity oscillation
                this.opacity = 0.3 + 0.3 * Math.sin(this.quantumState) + this.energy * 0.4;
            }

            draw() {
                // Quantum glow effect
                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.size * 3
                );
                
                const energyIntensity = this.energy * 255;
                gradient.addColorStop(0, `hsla(${this.hue}, 100%, 50%, ${this.opacity})`);
                gradient.addColorStop(0.5, `hsla(${this.hue + 60}, 80%, 60%, ${this.opacity * 0.5})`);
                gradient.addColorStop(1, 'transparent');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * (1 + this.energy), 0, Math.PI * 2);
                ctx.fill();

                // Core particle
                ctx.fillStyle = `hsla(${this.hue}, 100%, 70%, ${this.opacity * 1.5})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
                ctx.fill();
            }

            respawn() {
                if (this.life <= 0) {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.life = this.maxLife;
                    this.energy = Math.random();
                }
            }
        }

        // Initialize quantum particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new QuantumParticle());
        }

        // Neural network connections
        function drawNeuralConnections() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const distance = Math.sqrt(
                        Math.pow(particles[i].x - particles[j].x, 2) +
                        Math.pow(particles[i].y - particles[j].y, 2)
                    );

                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * 0.3;
                        const energyBoost = (particles[i].energy + particles[j].energy) / 2;
                        
                        ctx.strokeStyle = `hsla(${(particles[i].hue + particles[j].hue) / 2}, 70%, 60%, ${opacity * energyBoost})`;
                        ctx.lineWidth = 1 + energyBoost;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }

        // Quantum animation loop
        let frameCount = 0;
        const animate = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw neural connections
            drawNeuralConnections();

            // Update and draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
                particle.respawn();
            });

            frameCount++;
            requestAnimationFrame(animate);
        };

        animate();

        // Enhanced resize handler with particle redistribution
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            // Redistribute particles
            particles.forEach(particle => {
                if (particle.x > canvas.width) particle.x = canvas.width * Math.random();
                if (particle.y > canvas.height) particle.y = canvas.height * Math.random();
            });
        });

        // Store reference for mouse interaction
        this.quantumParticles = particles;
    }

    // 🎭 Holographic GSAP Animations with Quantum Physics
    setupHolographicAnimations() {
        // Ultimate card reveal with quantum physics
        gsap.from('.enhanced-card-ultimate, .holographic-card-ultimate, .glass-morphism-ultra', {
            scrollTrigger: {
                trigger: '.enhanced-card-ultimate, .holographic-card-ultimate, .glass-morphism-ultra',
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse',
                stagger: 0.15
            },
            duration: 1.2,
            y: 120,
            opacity: 0,
            scale: 0.7,
            rotationX: 45,
            rotationY: 15,
            transformPerspective: 1000,
            ease: 'elastic.out(1, 0.8)',
            stagger: {
                amount: 0.8,
                from: 'random'
            }
        });

        // Holographic text reveals with energy bursts
        gsap.from('.text-holographic, .text-electric, .text-aurora', {
            scrollTrigger: {
                trigger: '.text-holographic, .text-electric, .text-aurora',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            duration: 1.8,
            y: 80,
            opacity: 0,
            scale: 0.8,
            filter: 'blur(10px) brightness(0)',
            ease: 'power4.out',
            stagger: 0.2,
            onComplete: function() {
                // Add energy burst effect
                gsap.to(this.targets(), {
                    duration: 0.5,
                    filter: 'brightness(1.5) saturate(1.3)',
                    yoyo: true,
                    repeat: 1,
                    ease: 'power2.inOut'
                });
            }
        });

        // Advanced parallax with 3D depth
        gsap.to('.floating-enhanced', {
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 2
            },
            y: -300,
            rotationX: 10,
            rotationY: 5,
            transformPerspective: 1000,
            ease: 'none'
        });

        // Quantum morphing shapes
        this.createQuantumMorphingShapes();
        
        // Neural network button interactions
        this.setupNeuralButtonAnimations();
        
        // Holographic section reveals
        this.setupHolographicSectionReveals();
    }

    // 🌊 Neural Button Animations
    setupNeuralButtonAnimations() {
        const buttons = document.querySelectorAll('.btn-holographic, .btn-energy, .btn-shimmer, .btn-glass');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                gsap.killTweensOf(button);
                
                // Energy wave effect
                gsap.to(button, {
                    duration: 0.4,
                    scale: 1.08,
                    rotationX: 5,
                    rotationY: 5,
                    transformPerspective: 1000,
                    ease: 'power2.out'
                });

                // Holographic shimmer
                gsap.fromTo(button, 
                    { filter: 'hue-rotate(0deg) brightness(1) saturate(1)' },
                    {
                        duration: 1.5,
                        filter: 'hue-rotate(360deg) brightness(1.3) saturate(1.5)',
                        ease: 'power2.inOut',
                        repeat: -1,
                        yoyo: true
                    }
                );
            });

            button.addEventListener('mouseleave', () => {
                gsap.killTweensOf(button);
                gsap.to(button, {
                    duration: 0.6,
                    scale: 1,
                    rotationX: 0,
                    rotationY: 0,
                    filter: 'hue-rotate(0deg) brightness(1) saturate(1)',
                    ease: 'elastic.out(1, 0.8)'
                });
            });

            button.addEventListener('click', () => {
                // Neural burst effect
                gsap.to(button, {
                    duration: 0.1,
                    scale: 0.95,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        gsap.to(button, {
                            duration: 0.8,
                            scale: 1.1,
                            filter: 'brightness(2) saturate(2)',
                            ease: 'elastic.out(1, 0.5)',
                            onComplete: () => {
                                gsap.to(button, {
                                    duration: 0.5,
                                    scale: 1,
                                    filter: 'brightness(1) saturate(1)',
                                    ease: 'power2.out'
                                });
                            }
                        });
                    }
                });
            });
        });
    }

    // 🔮 Holographic Section Reveals
    setupHolographicSectionReveals() {
        const sections = document.querySelectorAll('section, .section');
        
        sections.forEach((section, index) => {
            gsap.from(section.children, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 75%',
                    end: 'bottom 25%',
                    toggleActions: 'play none none reverse'
                },
                duration: 1.5,
                y: 100,
                opacity: 0,
                rotationX: 30,
                transformPerspective: 1000,
                filter: 'blur(5px)',
                ease: 'power3.out',
                stagger: {
                    amount: 1,
                    from: 'start'
                }
            });
        });
    }

    // 🌌 Create Quantum Morphing Shapes with Holographic Effects
    createQuantumMorphingShapes() {
        const shapesContainer = document.createElement('div');
        shapesContainer.className = 'quantum-morphing-shapes';
        shapesContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.15;
            filter: blur(1px);
            mix-blend-mode: screen;
        `;
        document.body.appendChild(shapesContainer);

        const quantumShapesData = [
            { type: 'quantum-orb', x: '15%', y: '25%', size: 120, energy: 0.8 },
            { type: 'neural-hexagon', x: '75%', y: '35%', size: 100, energy: 0.6 },
            { type: 'holographic-triangle', x: '25%', y: '65%', size: 140, energy: 0.9 },
            { type: 'plasma-square', x: '80%', y: '75%', size: 90, energy: 0.7 },
            { type: 'energy-pentagon', x: '60%', y: '15%', size: 110, energy: 0.5 },
            { type: 'cosmic-octagon', x: '10%', y: '80%', size: 95, energy: 0.8 }
        ];

        quantumShapesData.forEach((shape, index) => {
            const element = document.createElement('div');
            element.className = `quantum-shape ${shape.type}`;
            element.style.cssText = `
                position: absolute;
                left: ${shape.x};
                top: ${shape.y};
                width: ${shape.size}px;
                height: ${shape.size}px;
                background: conic-gradient(from 0deg, #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b, #fb5607, #ff006e);
                border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
                transform: rotate(0deg) scale(1);
                filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
            `;
            shapesContainer.appendChild(element);

            // Quantum morphing animation
            gsap.to(element, {
                duration: 15 + index * 3,
                rotation: 360,
                ease: 'none',
                repeat: -1
            });

            // Organic morphing
            gsap.to(element, {
                duration: 8 + index * 2,
                borderRadius: [
                    '30% 70% 70% 30% / 30% 30% 70% 70%',
                    '70% 30% 30% 70% / 70% 70% 30% 30%',
                    '50% 50% 25% 75% / 25% 75% 75% 25%',
                    '60% 40% 30% 70% / 60% 30% 70% 40%'
                ][index % 4],
                ease: 'power2.inOut',
                repeat: -1,
                yoyo: true
            });

            // Energy pulsing
            gsap.to(element, {
                duration: 3 + Math.random() * 2,
                scale: 1 + shape.energy * 0.3,
                filter: `drop-shadow(0 0 ${20 + shape.energy * 30}px rgba(255, 255, 255, ${0.3 + shape.energy * 0.4}))`,
                ease: 'power2.inOut',
                repeat: -1,
                yoyo: true
            });

            // Quantum phase shifting
            gsap.to(element, {
                duration: 20 + index * 5,
                background: [
                    'conic-gradient(from 0deg, #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b, #fb5607, #ff006e)',
                    'conic-gradient(from 120deg, #8338ec, #3a86ff, #06ffa5, #ffbe0b, #fb5607, #ff006e, #8338ec)',
                    'conic-gradient(from 240deg, #3a86ff, #06ffa5, #ffbe0b, #fb5607, #ff006e, #8338ec, #3a86ff)'
                ],
                ease: 'none',
                repeat: -1
            });
        });

        // Store reference
        this.quantumShapes = quantumShapesData;
    }

    // 🧠 Neural Interactive Elements with AI Behavior
    setupNeuralInteractiveElements() {
        // Enhanced mouse tracking
        this.setupAdvancedMouseTracking();
        
        // Neural statistics interactions
        this.setupNeuralStatistics();
        
        // Quantum chart interactions
        this.setupQuantumChartInteractions();
        
        // AI-powered scroll predictions
        this.setupAIScrollPredictions();
    }

    // 🎯 Advanced Mouse Tracking with Quantum Physics
    setupAdvancedMouseTracking() {
        let mouseTrail = [];
        const maxTrailLength = 20;

        document.addEventListener('mousemove', (e) => {
            this.interactionStates.mousePosition.x = e.clientX;
            this.interactionStates.mousePosition.y = e.clientY;

            // Add to mouse trail
            mouseTrail.push({
                x: e.clientX,
                y: e.clientY,
                time: Date.now()
            });

            // Limit trail length
            if (mouseTrail.length > maxTrailLength) {
                mouseTrail.shift();
            }

            // Create quantum mouse effects
            this.createQuantumMouseEffect(e.clientX, e.clientY);
        });

        // Touch support
        document.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                this.interactionStates.isTouch = true;
                const touch = e.touches[0];
                this.interactionStates.mousePosition.x = touch.clientX;
                this.interactionStates.mousePosition.y = touch.clientY;
            }
        });
    }

    // ⚡ Create Quantum Mouse Effect
    createQuantumMouseEffect(x, y) {
        const effect = document.createElement('div');
        effect.className = 'quantum-mouse-effect';
        effect.style.cssText = `
            position: fixed;
            left: ${x - 10}px;
            top: ${y - 10}px;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: screen;
        `;
        document.body.appendChild(effect);

        // Animate and remove
        gsap.to(effect, {
            duration: 0.8,
            scale: 3,
            opacity: 0,
            ease: 'power2.out',
            onComplete: () => {
                document.body.removeChild(effect);
            }
        });
    }

    // Interactive Elements
    setupInteractiveElements() {
        // Hover effects for statistics
        document.querySelectorAll('.stat-counter').forEach(counter => {
            counter.addEventListener('mouseenter', () => {
                gsap.to(counter, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: 'back.out(1.7)'
                });
            });

            counter.addEventListener('mouseleave', () => {
                gsap.to(counter, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'back.out(1.7)'
                });
            });
        });

        // Interactive chart hover effects
        this.setupInteractiveChart();
    }

    // Enhanced Chart.js with interactions
    setupInteractiveChart() {
        const chartCanvas = document.getElementById('pixChart');
        if (!chartCanvas) return;

        // Add custom hover effects
        chartCanvas.addEventListener('mousemove', (e) => {
            const rect = chartCanvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Create hover effect
            gsap.to(chartCanvas, {
                scale: 1.02,
                duration: 0.2,
                ease: 'power2.out'
            });
        });

        chartCanvas.addEventListener('mouseleave', () => {
            gsap.to(chartCanvas, {
                scale: 1,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
    }

    // Performance Optimizations
    setupPerformanceOptimizations() {
        // Lazy loading for images and heavy content
        this.setupLazyLoading();
        
        // Debounced scroll events
        this.setupDebouncedScroll();
        
        // Intersection Observer for animations
        this.setupIntersectionObserver();
    }

    // Lazy loading implementation
    setupLazyLoading() {
        const lazyElements = document.querySelectorAll('[data-lazy]');
        
        const lazyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const dataSrc = element.getAttribute('data-lazy');
                    
                    if (dataSrc) {
                        if (element.tagName === 'IMG') {
                            element.src = dataSrc;
                        } else {
                            element.innerHTML = dataSrc;
                        }
                        element.removeAttribute('data-lazy');
                        lazyObserver.unobserve(element);
                    }
                }
            });
        });

        lazyElements.forEach(el => lazyObserver.observe(el));
    }

    // Debounced scroll events
    setupDebouncedScroll() {
        let ticking = false;
        
        function updateOnScroll() {
            // Update scroll-based animations here
            ticking = false;
        }

        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateOnScroll);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestTick);
    }

    // Enhanced Intersection Observer
    setupIntersectionObserver() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const animationType = element.getAttribute('data-animation') || 'fadeIn';
                    
                    this.playAnimation(element, animationType);
                    animationObserver.unobserve(element);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => animationObserver.observe(el));
    }

    // Play different animation types
    playAnimation(element, type) {
        const animations = {
            'fadeIn': {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out'
            },
            'slideInLeft': {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'back.out(1.7)'
            },
            'slideInRight': {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'back.out(1.7)'
            },
            'scaleIn': {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                ease: 'back.out(1.7)'
            }
        };

        const animation = animations[type] || animations.fadeIn;
        
        // Set initial state
        gsap.set(element, {
            opacity: 0,
            y: type.includes('slide') ? (type.includes('Left') ? -50 : 50) : 0,
            x: type.includes('slide') ? (type.includes('Left') ? -50 : 50) : 0,
            scale: type.includes('scale') ? 0.5 : 1
        });

        // Animate to final state
        gsap.to(element, animation);
    }

    // Accessibility Features
    setupAccessibilityFeatures() {
        // Keyboard navigation
        this.setupKeyboardNavigation();
        
        // Screen reader support
        this.setupScreenReaderSupport();
        
        // High contrast mode toggle
        this.setupHighContrastMode();
    }

    // Keyboard navigation
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }

    // Screen reader support
    setupScreenReaderSupport() {
        // Add ARIA labels to interactive elements
        const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
        
        interactiveElements.forEach(element => {
            if (!element.getAttribute('aria-label')) {
                const text = element.textContent.trim();
                if (text) {
                    element.setAttribute('aria-label', text);
                }
            }
        });
    }

    // High contrast mode
    setupHighContrastMode() {
        const contrastToggle = document.createElement('button');
        contrastToggle.innerHTML = '🌙';
        contrastToggle.className = 'contrast-toggle';
        contrastToggle.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 1000;
            background: #333;
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(contrastToggle);
        
        contrastToggle.addEventListener('click', () => {
            document.body.classList.toggle('high-contrast');
            contrastToggle.innerHTML = document.body.classList.contains('high-contrast') ? '☀️' : '🌙';
        });
    }

    // Utility methods
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // 🚀 Performance Monitoring and Optimization
    initializePerformanceMonitoring() {
        // FPS Monitor
        let lastTime = performance.now();
        let frameCount = 0;
        
        const measureFPS = () => {
            frameCount++;
            const currentTime = performance.now();
            
            if (currentTime - lastTime >= 1000) {
                this.performanceMetrics.frameRate = Math.round((frameCount * 1000) / (currentTime - lastTime));
                frameCount = 0;
                lastTime = currentTime;
                
                // Adaptive quality based on performance
                this.adaptQualityBasedOnPerformance();
            }
            
            requestAnimationFrame(measureFPS);
        };
        
        measureFPS();
    }

    // 🎯 Adaptive Quality System
    adaptQualityBasedOnPerformance() {
        const fps = this.performanceMetrics.frameRate;
        
        if (fps < 30) {
            // Reduce quality for better performance
            document.body.classList.add('reduced-quality');
            this.reduceParticleCount();
        } else if (fps > 50) {
            // Increase quality for better visuals
            document.body.classList.remove('reduced-quality');
            this.increaseParticleCount();
        }
    }

    // 🌟 Dynamic Particle Count Management
    reduceParticleCount() {
        if (this.quantumParticles && this.quantumParticles.length > 60) {
            this.quantumParticles.splice(60);
        }
    }

    increaseParticleCount() {
        if (this.quantumParticles && this.quantumParticles.length < 120) {
            // Add more particles if performance allows
            const canvas = document.getElementById('quantumParticleCanvas');
            if (canvas) {
                // Add quantum particles logic here
            }
        }
    }

    // 🔧 Utility Methods
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // 🎨 Create Holographic Loading Screen
    createHolographicLoadingScreen() {
        const loadingScreen = document.createElement('div');
        loadingScreen.id = 'holographic-loading';
        loadingScreen.innerHTML = `
            <div class="holographic-loader">
                <div class="quantum-spinner"></div>
                <div class="loading-text text-holographic" data-text="Initializing Quantum Experience">
                    Initializing Quantum Experience
                </div>
            </div>
        `;
        loadingScreen.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 99999;
            backdrop-filter: blur(10px);
        `;
        
        document.body.appendChild(loadingScreen);
        
        // Remove after 3 seconds
        setTimeout(() => {
            gsap.to(loadingScreen, {
                duration: 1,
                opacity: 0,
                scale: 0.8,
                ease: 'power2.inOut',
                onComplete: () => {
                    document.body.removeChild(loadingScreen);
                }
            });
        }, 3000);
    }
}

// 🚀 Initialize Ultimate Website Features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create holographic loading experience
    const ultimateFeatures = new UltimateWebsiteFeatures();
    
    // Store global reference for debugging
    window.UltimateFeatures = ultimateFeatures;
    
    console.log('🚀 Ultimate Website Features Initialized!');
    console.log('📊 Performance Monitoring: Active');
    console.log('🌌 Quantum Particle System: Online');
    console.log('🎭 Holographic Animations: Ready');
    console.log('🧠 Neural Interactions: Engaged');
});

// 📱 Mobile Optimization
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}

// 🌐 Service Worker Registration for PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(console.error);
}

// 📊 Analytics Integration
window.ultimateAnalytics = {
    trackInteraction: (type, data) => {
        console.log(`🎯 Interaction: ${type}`, data);
    },
    trackPerformance: (metric, value) => {
        console.log(`📈 Performance: ${metric} = ${value}`);
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UltimateWebsiteFeatures;
}

// 💱 CURRENCY CALCULATOR IMPLEMENTATION
class CurrencyCalculator {
    constructor() {
        this.apiKey = 'demo'; // Using demo mode for free tier
        this.apiUrl = 'https://api.exchangerate-api.com/v4/latest/';
        this.fallbackRates = {
            USD: { BRL: 5.25, EUR: 0.85, USD: 1.0 },
            EUR: { BRL: 6.18, USD: 1.18, EUR: 1.0 },
            BRL: { USD: 0.19, EUR: 0.16, BRL: 1.0 }
        };
        this.currentRates = this.fallbackRates;
        this.lastUpdate = new Date();
        this.conversionFee = 0.025; // 2.5% fee
        this.isLoading = false;
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadExchangeRates();
        this.updateCalculation();
        this.startAutoRefresh();
    }

    bindEvents() {
        // Input events
        const amountInput = document.getElementById('amount-input');
        const fromCurrency = document.getElementById('from-currency');
        const toCurrency = document.getElementById('to-currency');
        const swapButton = document.getElementById('swap-currencies');
        const refreshButton = document.getElementById('refresh-rates');

        if (amountInput) {
            amountInput.addEventListener('input', this.debounce(() => this.updateCalculation(), 300));
            amountInput.addEventListener('keypress', (e) => {
                // Only allow numbers and decimal point
                if (!/[0-9.]/.test(e.key) && !['Backspace', 'Delete', 'Tab', 'Escape', 'Enter'].includes(e.key)) {
                    e.preventDefault();
                }
            });
        }

        if (fromCurrency) {
            fromCurrency.addEventListener('change', () => this.updateCalculation());
        }

        if (toCurrency) {
            toCurrency.addEventListener('change', () => this.updateCalculation());
        }

        if (swapButton) {
            swapButton.addEventListener('click', () => this.swapCurrencies());
        }

        if (refreshButton) {
            refreshButton.addEventListener('click', () => this.loadExchangeRates(true));
        }
    }

    async loadExchangeRates(forceRefresh = false) {
        if (this.isLoading && !forceRefresh) return;
        
        this.setLoadingState(true);
        this.updateApiStatus('connecting', 'Atualizando cotações...');

        try {
            // Try multiple API endpoints for better reliability
            const apis = [
                'https://api.exchangerate-api.com/v4/latest/USD',
                'https://api.fixer.io/latest?base=USD', // Backup API
                'https://api.exchangeratesapi.io/v1/latest?access_key=demo&base=USD' // Another backup
            ];

            let ratesData = null;
            
            for (const apiUrl of apis) {
                try {
                    const response = await fetch(apiUrl, {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                            'User-Agent': 'CurrencyCalculator/1.0'
                        },
                        timeout: 5000
                    });

                    if (response.ok) {
                        ratesData = await response.json();
                        break;
                    }
                } catch (error) {
                    console.warn(`API ${apiUrl} failed:`, error);
                    continue;
                }
            }

            if (ratesData && ratesData.rates) {
                this.processRatesData(ratesData.rates);
                this.updateApiStatus('connected', 'Conectado - Cotações Atualizadas');
            } else {
                throw new Error('No API responded successfully');
            }

        } catch (error) {
            console.warn('Failed to load live rates, using fallback:', error);
            this.useSimulatedRates();
            this.updateApiStatus('error', 'Usando cotações simuladas');
        } finally {
            this.setLoadingState(false);
            this.updateCalculation();
            this.updateLastUpdateTime();
        }
    }

    processRatesData(rates) {
        // Convert API rates to our format
        this.currentRates = {
            USD: {
                BRL: rates.BRL || 5.25,
                EUR: rates.EUR || 0.85,
                USD: 1.0
            },
            EUR: {
                BRL: (rates.BRL || 5.25) / (rates.EUR || 0.85),
                USD: 1 / (rates.EUR || 0.85),
                EUR: 1.0
            },
            BRL: {
                USD: 1 / (rates.BRL || 5.25),
                EUR: (rates.EUR || 0.85) / (rates.BRL || 5.25),
                BRL: 1.0
            }
        };
        
        this.lastUpdate = new Date();
    }

    useSimulatedRates() {
        // Generate slightly random rates for demo purposes
        const variance = 0.02; // 2% variance
        const baseRates = this.fallbackRates;
        
        Object.keys(baseRates).forEach(from => {
            Object.keys(baseRates[from]).forEach(to => {
                if (from !== to) {
                    const baseRate = baseRates[from][to];
                    const randomVariance = (Math.random() - 0.5) * variance;
                    this.currentRates[from][to] = baseRate * (1 + randomVariance);
                }
            });
        });
        
        this.lastUpdate = new Date();
    }

    updateCalculation() {
        const amount = parseFloat(document.getElementById('amount-input')?.value) || 0;
        const fromCurrency = document.getElementById('from-currency')?.value || 'USD';
        const toCurrency = document.getElementById('to-currency')?.value || 'BRL';

        if (amount <= 0) {
            this.clearResults();
            return;
        }

        // Get exchange rate
        const rate = this.getExchangeRate(fromCurrency, toCurrency);
        const baseConversion = amount * rate;
        const feeAmount = baseConversion * this.conversionFee;
        const finalAmount = baseConversion - feeAmount;

        // Update UI
        this.updateConvertedAmount(finalAmount, toCurrency);
        this.updateRateDisplays(fromCurrency, toCurrency, rate);
        this.updateConversionDetails(amount, fromCurrency, rate, baseConversion, feeAmount, finalAmount, toCurrency);
    }

    getExchangeRate(from, to) {
        if (from === to) return 1.0;
        return this.currentRates[from]?.[to] || this.fallbackRates[from]?.[to] || 1.0;
    }

    updateConvertedAmount(amount, currency) {
        const element = document.getElementById('converted-amount');
        if (!element) return;

        const formattedAmount = this.formatCurrency(amount, currency);
        element.textContent = formattedAmount;
        
        // Add animation effect
        element.classList.add('calculator-loading');
        setTimeout(() => element.classList.remove('calculator-loading'), 500);
    }

    updateRateDisplays(fromCurrency, toCurrency, rate) {
        const fromDisplay = document.getElementById('current-rate-from');
        const toDisplay = document.getElementById('current-rate-to');

        if (fromDisplay) {
            fromDisplay.textContent = `1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}`;
        }

        if (toDisplay) {
            const reverseRate = 1 / rate;
            toDisplay.textContent = `1 ${toCurrency} = ${reverseRate.toFixed(4)} ${fromCurrency}`;
        }
    }

    updateConversionDetails(originalAmount, fromCurrency, rate, baseConversion, feeAmount, finalAmount, toCurrency) {
        // Update original amount
        const originalElement = document.getElementById('original-amount');
        if (originalElement) {
            originalElement.textContent = this.formatCurrency(originalAmount, fromCurrency);
        }

        // Update applied rate
        const rateElement = document.getElementById('applied-rate');
        if (rateElement) {
            rateElement.textContent = rate.toFixed(4);
        }

        // Update conversion fee percentage
        const feeElement = document.getElementById('conversion-fee');
        if (feeElement) {
            feeElement.textContent = `${(this.conversionFee * 100).toFixed(1)}%`;
        }

        // Update breakdown
        const baseElement = document.getElementById('base-conversion');
        if (baseElement) {
            baseElement.textContent = this.formatCurrency(baseConversion, toCurrency);
        }

        const feeAmountElement = document.getElementById('fee-amount');
        if (feeAmountElement) {
            feeAmountElement.textContent = `- ${this.formatCurrency(feeAmount, toCurrency)}`;
        }

        const finalAmountElement = document.getElementById('final-amount');
        if (finalAmountElement) {
            finalAmountElement.textContent = this.formatCurrency(finalAmount, toCurrency);
        }
    }

    swapCurrencies() {
        const fromSelect = document.getElementById('from-currency');
        const toSelect = document.getElementById('to-currency');
        
        if (!fromSelect || !toSelect) return;

        // Animate swap button
        const swapButton = document.getElementById('swap-currencies');
        if (swapButton) {
            swapButton.style.transform = 'scale(0.9) rotate(180deg)';
            setTimeout(() => {
                swapButton.style.transform = 'scale(1) rotate(0deg)';
            }, 200);
        }

        // Swap values
        const fromValue = fromSelect.value;
        const toValue = toSelect.value;
        
        fromSelect.value = toValue;
        toSelect.value = fromValue;

        // Update calculation
        setTimeout(() => this.updateCalculation(), 300);

        // Add visual feedback
        this.showSwapAnimation();
    }

    showSwapAnimation() {
        // Create animated swap effect
        const calculator = document.querySelector('.holographic-card-ultimate');
        if (calculator) {
            calculator.style.transform = 'scale(1.02)';
            setTimeout(() => {
                calculator.style.transform = 'scale(1)';
            }, 300);
        }
    }

    formatCurrency(amount, currency) {
        const currencySymbols = {
            USD: '$',
            EUR: '€',
            BRL: 'R$'
        };

        const locales = {
            USD: 'en-US',
            EUR: 'de-DE',
            BRL: 'pt-BR'
        };

        try {
            return new Intl.NumberFormat(locales[currency] || 'en-US', {
                style: 'currency',
                currency: currency,
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(amount);
        } catch (error) {
            // Fallback formatting
            const symbol = currencySymbols[currency] || currency;
            return `${symbol} ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        }
    }

    clearResults() {
        const elements = [
            'converted-amount',
            'original-amount',
            'applied-rate',
            'base-conversion',
            'fee-amount',
            'final-amount'
        ];

        elements.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = '--';
            }
        });
    }

    updateApiStatus(status, message) {
        const statusElement = document.getElementById('api-status');
        if (!statusElement) return;

        // Remove existing status classes
        statusElement.className = statusElement.className.replace(/\b(connected|connecting|error)\b/g, '');
        statusElement.classList.add(status);

        const dotElement = statusElement.querySelector('.w-2.h-2');
        const textElement = statusElement.querySelector('span');

        if (textElement) {
            textElement.textContent = message;
        }

        // Update dot color based on status
        if (dotElement) {
            dotElement.className = dotElement.className.replace(/bg-\w+-\d+/g, '');
            const colors = {
                connected: 'bg-green-500',
                connecting: 'bg-yellow-500',
                error: 'bg-red-500'
            };
            dotElement.classList.add(colors[status] || 'bg-gray-500');
        }
    }

    updateLastUpdateTime() {
        const element = document.getElementById('last-update');
        if (!element) return;

        const now = new Date();
        const diffMs = now - this.lastUpdate;
        const diffMins = Math.floor(diffMs / 60000);

        let timeText;
        if (diffMins === 0) {
            timeText = 'Agora mesmo';
        } else if (diffMins === 1) {
            timeText = 'Há 1 minuto';
        } else if (diffMins < 60) {
            timeText = `Há ${diffMins} minutos`;
        } else {
            const diffHours = Math.floor(diffMins / 60);
            timeText = diffHours === 1 ? 'Há 1 hora' : `Há ${diffHours} horas`;
        }

        element.textContent = timeText;
    }

    setLoadingState(loading) {
        this.isLoading = loading;
        const refreshButton = document.getElementById('refresh-rates');
        
        if (refreshButton) {
            if (loading) {
                refreshButton.classList.add('loading');
                refreshButton.disabled = true;
            } else {
                refreshButton.classList.remove('loading');
                refreshButton.disabled = false;
            }
        }
    }

    startAutoRefresh() {
        // Refresh rates every 5 minutes
        setInterval(() => {
            this.loadExchangeRates();
        }, 5 * 60 * 1000);

        // Update time display every minute
        setInterval(() => {
            this.updateLastUpdateTime();
        }, 60 * 1000);
    }

    // Utility function for debouncing
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Public method to manually refresh
    refresh() {
        this.loadExchangeRates(true);
    }

    // Public method to get current rates
    getCurrentRates() {
        return this.currentRates;
    }

    // Public method to set custom fee
    setConversionFee(fee) {
        this.conversionFee = Math.max(0, Math.min(1, fee)); // Clamp between 0 and 100%
        this.updateCalculation();
    }
}

// Initialize Currency Calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Only initialize old currency calculator if legacy fields exist (kept for backward compatibility)
    if (document.getElementById('amount-input')) {
        const calculator = new CurrencyCalculator();
        window.CurrencyCalculator = calculator;
    }
});

// Add calculator to the global features
if (typeof UltimateWebsiteFeatures !== 'undefined') {
    UltimateWebsiteFeatures.prototype.initializeCurrencyCalculator = function() {
        if (document.getElementById('amount-input')) {
            this.currencyCalculator = new CurrencyCalculator();
        }
    };
}

// 🎯 ANALYTICS INTEGRATION FOR CALCULATOR
window.ultimateAnalytics = window.ultimateAnalytics || {};
window.ultimateAnalytics.trackCurrencyConversion = function(from, to, amount) {
    console.log(`💱 Conversion: ${amount} ${from} → ${to}`);
    // Here you could send data to Google Analytics, Mixpanel, etc.
};

// 📱 PWA SUPPORT FOR CALCULATOR
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/calculator-sw.js').catch(error => {
        console.log('Calculator SW registration failed:', error);
    });
}

// ROI CALCULATOR
class ROICalculator {
    constructor() {
        this.initializeTabs();
        this.bindEvents();
        this.calculate();
        this.initChart();
    }

    initializeTabs() {
        // Tab functionality
        const tabSimple = document.getElementById('tab-simple');
        const tabDetailed = document.getElementById('tab-detailed');
        const contentSimple = document.getElementById('content-simple');
        const contentDetailed = document.getElementById('content-detailed');

        if (tabSimple && tabDetailed && contentSimple && contentDetailed) {
            tabSimple.addEventListener('click', () => {
                tabSimple.classList.add('active');
                tabDetailed.classList.remove('active');
                contentSimple.classList.remove('hidden');
                contentDetailed.classList.add('hidden');
            });

            tabDetailed.addEventListener('click', () => {
                tabDetailed.classList.add('active');
                tabSimple.classList.remove('active');
                contentDetailed.classList.remove('hidden');
                contentSimple.classList.add('hidden');
                this.syncToDetailed();
            });
        }
    }

    syncToDetailed() {
        // Sync values from simple to detailed view
        const mappings = [
            ['roi-employees', 'roi-employees-detailed'],
            ['roi-separations', 'roi-separations-detailed'],
            ['roi-salary', 'roi-salary-detailed'],
            ['roi-time-to-fill', 'roi-time-to-fill-detailed'],
            ['roi-daily-value', 'roi-daily-value-detailed'],
            ['roi-turnover-reduction', 'roi-turnover-reduction-detailed'],
            ['roi-time-reduction', 'roi-time-reduction-detailed'],
            ['roi-productivity-gain', 'roi-productivity-gain-detailed'],
            ['roi-software-cost', 'roi-software-cost-detailed']
        ];

        mappings.forEach(([simple, detailed]) => {
            const simpleEl = document.getElementById(simple);
            const detailedEl = document.getElementById(detailed);
            if (simpleEl && detailedEl) {
                detailedEl.value = simpleEl.value;
            }
        });
    }

    bindEvents() {
        // Simple view inputs
        const simpleIds = [
            'roi-employees', 'roi-separations', 'roi-salary', 'roi-cost-per-hire',
            'roi-time-to-fill', 'roi-daily-value', 'roi-turnover-reduction',
            'roi-time-reduction', 'roi-productivity-gain', 'roi-software-cost'
        ];

        // Detailed view inputs  
        const detailedIds = [
            'roi-employees-detailed', 'roi-separations-detailed', 'roi-salary-detailed',
            'roi-benefits-percent', 'roi-fgts-balance', 'roi-fgts-penalty',
            'roi-notice-days', 'roi-other-severance', 'roi-ads-cost',
            'roi-agency-cost', 'roi-referral-bonus', 'roi-background-cost',
            'roi-time-to-fill-detailed', 'roi-daily-value-detailed', 'roi-coverage-percent',
            'roi-hr-hours', 'roi-hr-hour-cost', 'roi-manager-hours',
            'roi-manager-hour-cost', 'roi-training-hours', 'roi-training-hour-cost',
            'roi-materials-cost', 'roi-ramp-months', 'roi-ramp-deficit',
            'roi-coverage-cost', 'roi-turnover-reduction-detailed',
            'roi-time-reduction-detailed', 'roi-productivity-gain-detailed',
            'roi-software-cost-detailed'
        ];

        [...simpleIds, ...detailedIds].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('input', () => this.calculate());
        });
    }

    getNumber(id, fallback = 0) {
        const el = document.getElementById(id);
        if (!el) return fallback;
        const v = parseFloat(el.value);
        return isFinite(v) ? v : fallback;
    }

    formatCurrency(amount) {
        try {
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(amount);
        } catch {
            return `R$ ${amount.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}`;
        }
    }

    isDetailedView() {
        return !document.getElementById('content-detailed')?.classList.contains('hidden');
    }

    calculateDetailedCosts() {
        // Get basic data
        const employees = this.getNumber('roi-employees-detailed', 100);
        const separations = this.getNumber('roi-separations-detailed', 20);
        const salary = this.getNumber('roi-salary-detailed', 5000);
        const benefitsPercent = this.getNumber('roi-benefits-percent', 70) / 100;

        // Severance costs (based on your Python model)
        const fgtsBalance = this.getNumber('roi-fgts-balance', 15000);
        const fgtsPenalty = this.getNumber('roi-fgts-penalty', 40) / 100;
        const noticeDays = this.getNumber('roi-notice-days', 30);
        const otherSeverance = this.getNumber('roi-other-severance', 2000);

        const fgtsMulta = fgtsBalance * fgtsPenalty;
        const avisoPreviewIndenizado = (salary / 30) * noticeDays;
        const severanceCosts = fgtsMulta + avisoPreviewIndenizado + otherSeverance;

        // Recruitment costs
        const adsCost = this.getNumber('roi-ads-cost', 800);
        const agencyCost = this.getNumber('roi-agency-cost', 0);
        const referralBonus = this.getNumber('roi-referral-bonus', 500);
        const backgroundCost = this.getNumber('roi-background-cost', 200);
        const recruitmentCosts = adsCost + agencyCost + referralBonus + backgroundCost;

        // Vacancy costs (time to fill)
        const timeToFillDays = this.getNumber('roi-time-to-fill-detailed', 45);
        const dailyValue = this.getNumber('roi-daily-value-detailed', 400);
        const coveragePercent = this.getNumber('roi-coverage-percent', 30) / 100;
        const vacancyCosts = timeToFillDays * dailyValue * (1 - coveragePercent);

        // People time costs
        const hrHours = this.getNumber('roi-hr-hours', 16);
        const hrHourCost = this.getNumber('roi-hr-hour-cost', 80);
        const managerHours = this.getNumber('roi-manager-hours', 12);
        const managerHourCost = this.getNumber('roi-manager-hour-cost', 120);
        const peopleTimeCosts = (hrHours * hrHourCost) + (managerHours * managerHourCost);

        // Onboarding costs
        const trainingHours = this.getNumber('roi-training-hours', 24);
        const trainingHourCost = this.getNumber('roi-training-hour-cost', 60);
        const materialsCost = this.getNumber('roi-materials-cost', 1500);
        const onboardingCosts = (trainingHours * trainingHourCost) + materialsCost + peopleTimeCosts;

        // Ramp-up costs
        const rampMonths = this.getNumber('roi-ramp-months', 3);
        const rampDeficit = this.getNumber('roi-ramp-deficit', 40) / 100;
        const rampupCosts = (rampMonths * 30) * dailyValue * rampDeficit;

        // Coverage extra costs
        const coverageCost = this.getNumber('roi-coverage-cost', 2000);

        // Total cost per case
        const costPerCase = severanceCosts + recruitmentCosts + vacancyCosts + onboardingCosts + rampupCosts + coverageCost;

        return {
            severanceCosts,
            recruitmentCosts,
            vacancyCosts,
            onboardingCosts,
            rampupCosts,
            coverageCost,
            costPerCase,
            separations,
            employees
        };
    }

    calculateSimpleCosts() {
        const employees = this.getNumber('roi-employees', 100);
        const separations = this.getNumber('roi-separations', 20);
        const salary = this.getNumber('roi-salary', 5000);
        const costPerHire = this.getNumber('roi-cost-per-hire', 8000);
        const timeToFillDays = this.getNumber('roi-time-to-fill', 45);
        const dailyValue = this.getNumber('roi-daily-value', 400);

        // Simplified cost model
        const vacancyCosts = timeToFillDays * dailyValue * 0.7; // 70% impact
        const rampupCosts = salary * 2; // 2 months reduced productivity
        const costPerCase = costPerHire + vacancyCosts + rampupCosts;

        return {
            severanceCosts: costPerHire * 0.3, // 30% of hiring cost is severance
            recruitmentCosts: costPerHire * 0.4, // 40% recruitment
            vacancyCosts: vacancyCosts,
            onboardingCosts: costPerHire * 0.2, // 20% onboarding
            rampupCosts: rampupCosts,
            coverageCost: costPerHire * 0.1, // 10% coverage
            costPerCase,
            separations,
            employees
        };
    }

    calculate() {
        const isDetailed = this.isDetailedView();
        const costs = isDetailed ? this.calculateDetailedCosts() : this.calculateSimpleCosts();

        const {
            severanceCosts, recruitmentCosts, vacancyCosts, onboardingCosts,
            rampupCosts, coverageCost, costPerCase, separations, employees
        } = costs;

        // Annual turnover cost
        const annualTurnoverCost = separations * costPerCase;
        const turnoverRate = employees > 0 ? (separations / employees) * 100 : 0;

        // Get improvement percentages
        const turnoverReduction = this.getNumber(isDetailed ? 'roi-turnover-reduction-detailed' : 'roi-turnover-reduction', 20) / 100;
        const timeReduction = this.getNumber(isDetailed ? 'roi-time-reduction-detailed' : 'roi-time-reduction', 25) / 100;
        const productivityGain = this.getNumber(isDetailed ? 'roi-productivity-gain-detailed' : 'roi-productivity-gain', 15) / 100;

        // Calculate savings
        const turnoverSavings = annualTurnoverCost * turnoverReduction;
        const timeSavings = separations * vacancyCosts * timeReduction;
        const productivitySavings = separations * rampupCosts * productivityGain;
        const totalSavings = turnoverSavings + timeSavings + productivitySavings;

        // Calculate investment
        const softwareCost = this.getNumber(isDetailed ? 'roi-software-cost-detailed' : 'roi-software-cost', 25);
        const annualInvestment = employees * softwareCost * 12;

        // Calculate ROI
        const netBenefit = totalSavings - annualInvestment;
        const roiPercent = annualInvestment > 0 ? (netBenefit / annualInvestment) * 100 : 0;
        const paybackMonths = totalSavings > 0 ? (annualInvestment / totalSavings) * 12 : 0;

        // Update UI
        this.updateUI({
            turnoverRate,
            annualTurnoverCost,
            totalSavings,
            annualInvestment,
            roiPercent,
            paybackMonths,
            costPerCase,
            severanceCosts,
            recruitmentCosts,
            vacancyCosts,
            onboardingCosts,
            rampupCosts,
            coverageCost
        });

        // Update chart
        this.updateChart(totalSavings, annualInvestment);
    }

    updateUI(data) {
        const {
            turnoverRate, annualTurnoverCost, totalSavings, annualInvestment,
            roiPercent, paybackMonths, costPerCase, severanceCosts,
            recruitmentCosts, vacancyCosts, onboardingCosts, rampupCosts, coverageCost
        } = data;

        // Common fields
        this.setText('roi-turnover-rate', `${turnoverRate.toFixed(1)}%`);
        this.setText('roi-turnover-cost', this.formatCurrency(annualTurnoverCost));
        this.setText('roi-total-savings', this.formatCurrency(totalSavings));
        this.setText('roi-total-investment', this.formatCurrency(annualInvestment));
        this.setText('roi-percent', `${roiPercent.toFixed(0)}%`);
        this.setText('roi-payback', `${paybackMonths.toFixed(1)} meses`);

        // Detailed breakdown (if in detailed view)
        this.setText('roi-cost-per-case', this.formatCurrency(costPerCase));
        this.setText('roi-severance-costs', this.formatCurrency(severanceCosts));
        this.setText('roi-recruitment-costs', this.formatCurrency(recruitmentCosts));
        this.setText('roi-vacancy-costs', this.formatCurrency(vacancyCosts));
        this.setText('roi-onboarding-costs', this.formatCurrency(onboardingCosts));
        this.setText('roi-rampup-costs', this.formatCurrency(rampupCosts));
        this.setText('roi-coverage-costs-result', this.formatCurrency(coverageCost));
    }

    setText(id, text) {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    }

    initChart() {
        const ctx = document.getElementById('roiChart');
        if (!ctx || typeof Chart === 'undefined') return;

        const labels = Array.from({length: 12}, (_, i) => `Mês ${i+1}`);
        this.roiChart = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Economia Mensal',
                        data: new Array(12).fill(0),
                        backgroundColor: 'rgba(7, 162, 173, 0.7)', // var(--brand-viridian)
                        borderColor: 'rgba(7, 162, 173, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Investimento Mensal',
                        data: new Array(12).fill(0),
                        backgroundColor: 'rgba(255, 53, 94, 0.5)', // var(--brand-radical)
                        borderColor: 'rgba(255, 53, 94, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: { family: 'Fira Sans' }
                        }
                    },
                    tooltip: {
                        titleFont: { family: 'Fira Sans' },
                        bodyFont: { family: 'Fira Sans' },
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + 
                                       new Intl.NumberFormat('pt-BR', {
                                           style: 'currency',
                                           currency: 'BRL',
                                           minimumFractionDigits: 0
                                       }).format(context.raw);
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            font: { family: 'Fira Sans' },
                            callback: function(value) {
                                return new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                }).format(value);
                            }
                        }
                    },
                    x: {
                        ticks: {
                            font: { family: 'Fira Sans' }
                        }
                    }
                }
            }
        });
    }

    updateChart(totalSavings, annualInvestment) {
        if (!this.roiChart) return;

        const monthlySavings = totalSavings / 12;
        const monthlyInvestment = annualInvestment / 12;

        this.roiChart.data.datasets[0].data = new Array(12).fill(monthlySavings);
        this.roiChart.data.datasets[1].data = new Array(12).fill(monthlyInvestment);
        this.roiChart.update();
    }
}

// Initialize ROI Calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('roi-employees')) {
        window.FactorialROICalculator = new ROICalculator();
    }
});