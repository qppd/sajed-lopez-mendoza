// ========== External Libraries Initialization ==========
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Content Loaded - Starting initialization...");
    
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true });
        console.log("AOS initialized");
    } else {
        console.error("AOS library not loaded");
    }

    // Create floating particles
    createFloatingParticles();
    console.log("Floating particles created");
    
    // Initialize parallax effect
    initializeParallax();
    console.log("Parallax initialized");
    
    // Initialize GitHub repositories
    loadGitHubRepositories();
    console.log("GitHub repos loading...");
    
    // Initialize gallery
    initializeGallery();
    console.log("Gallery initialized");
    
    // Initialize typewriter effect
    initializeTypewriter();
    console.log("Typewriter initialized");
    
    // Initialize baffle text effect
    initializeBaffleEffect();
    console.log("Baffle effect initialized");
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    console.log("Smooth scrolling initialized");
    
    // Initialize back to top button
    initializeBackToTop();
    console.log("Back to top initialized");
    
    // Initialize map
    initializeMap();
    console.log("Map initialization attempted");
});

// ========== Particles System ==========
function createFloatingParticles() {
    for (let i = 0; i < 50; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        p.style.left = Math.random() * 100 + "vw";
        p.style.top = Math.random() * 100 + "vh";
        p.style.animationDuration = 5 + Math.random() * 10 + "s";
        document.body.appendChild(p);
    }
}

// ========== Parallax Effect ==========
function initializeParallax() {
    document.addEventListener("mousemove", (e) => {
        const layers = document.querySelectorAll(".layer");
        const x = (window.innerWidth / 2 - e.pageX) / 40;
        const y = (window.innerHeight / 2 - e.pageY) / 40;
        layers.forEach((layer) => {
            const depth = layer.getAttribute("data-depth");
            layer.style.transform = `translateX(${x * depth}px) translateY(${y * depth}px)`;
        });
    });
}

// ========== GitHub Repositories ==========
function loadGitHubRepositories() {
    fetch("https://api.github.com/users/qppd/repos")
        .then(res => res.json())
        .then(repos => {
            const featured = [
                "FiFo", "Dataset-Fixer", "Soil-Tester", "Peso-Exchanger", "Educational-Assessment",
                "Laong-Laan", "Creative-Gallery", "Child-Presence-Detection-Alert",
                "Ammonia-Auto-Control", "Smart-Water-Guard", "I-Buy-It", "Baby-Cradle"
            ];
            const container = document.getElementById("projects-grid");

            featured.forEach(name => {
                const repo = repos.find(r => r.name === name);
                if (!repo) return;

                const card = document.createElement("div");
                card.className = "bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-2xl shadow-xl relative";
                card.innerHTML = `
                    <h3 class="text-xl font-semibold text-white">${repo.name.replace(/-/g, " ")}</h3>
                    <p class="text-white mt-2 text-sm">${repo.description || "No description"}</p>
                    <a href="${repo.html_url}" target="_blank" class="text-blue-300 hover:underline mt-2 block">View on GitHub</a>
                `;
                container.appendChild(card);
            });
        })
        .catch(err => console.error("GitHub API error", err));
}

// ========== Gallery System ==========
const galleryImages = [
    // Project directories and their images
    {
        name: "Blood Reserve",
        folder: "blood_reserve",
        images: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png"]
    },
    {
        name: "Creative Gallery",
        folder: "creative_gallery", 
        images: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "9.png", "10.png"]
    },
    {
        name: "Finance Fusion Android Budgeting App",
        folder: "finance_fusion_android_budgeting_app",
        images: ["1.png", "2.png", "3.png", "4.png", "5.png"]
    },
    {
        name: "I Buy It",
        folder: "i_buy_it",
        images: ["1.png", "2.png", "3.png", "stores_active.png", "stores_request.png", "store_location.png", "store_products.png"]
    },
    {
        name: "Ammonia Auto Control",
        folder: "ammonia_auto_control",
        images: ["1.jpg", "2.png", "3.png", "4.png"]
    },
    {
        name: "Mindblessed Online Clothing Store",
        folder: "mindblessed_online_clothing_store",
        images: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png"]
    },
    {
        name: "Baby Cradle",
        folder: "baby_cradle",
        images: ["1.png", "2.png", "3.png", "4.png"]
    }
];

let currentImages = [];
let currentIndex = 0;

function initializeGallery() {
    const galleryGrid = document.getElementById("gallery-grid");
    console.log("Gallery grid element:", galleryGrid);
    
    if (!galleryGrid) {
        console.error("Gallery grid element not found!");
        return;
    }
    
    console.log("Number of gallery projects:", galleryImages.length);
    
    galleryImages.forEach((project, index) => {
        if (project.images.length === 0) return;
        
        console.log(`Creating gallery card for: ${project.name}`);
        
        const mainImage = `images/${project.folder}/${project.images[0]}`;
        
        const galleryCard = document.createElement("div");
        galleryCard.className = "relative group overflow-hidden rounded mb-4 shadow-lg";
        galleryCard.innerHTML = `
            <img src="${mainImage}" alt="${project.name}"
                class="transform group-hover:scale-105 transition duration-500 ease-in-out w-full h-64 object-cover">
            <div
                class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center px-2">
                <h4 class="text-white font-semibold text-lg mb-2">${project.name}</h4>
                <p class="text-white text-sm cursor-pointer hover:underline" onclick="openModal(${index})">
                    View Screenshots
                </p>
                <p class="text-white text-sm cursor-pointer hover:underline" onclick="openModal(${index})">
                    Project Details
                </p>
            </div>
        `;
        
        galleryGrid.appendChild(galleryCard);
    });
    
    console.log("Gallery cards added to grid");
}

function openModal(projectIndex) {
    currentImages = galleryImages[projectIndex].images.map(img => 
        `images/${galleryImages[projectIndex].folder}/${img}`
    );
    currentIndex = 0;
    showImage();
    document.getElementById("imageModal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("imageModal").classList.add("hidden");
}

function showImage() {
    if (!currentImages.length) return;
    document.getElementById("modalImage").src = currentImages[currentIndex];
}

function nextImage() {
    if (!currentImages.length) return;
    currentIndex = (currentIndex + 1) % currentImages.length;
    showImage();
}

function prevImage() {
    if (!currentImages.length) return;
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    showImage();
}

// ========== Typewriter Effect ==========
const phrases = [
    "Building intelligent solutions",
    "Machine Learning", "Computer Vision",
    "Internet of Things(IoT)", "Web Development",
    "Mobile Development", "Electronics & Fabrication", "Solar Setup"
];

let typewriterState = {
    i: 0,
    j: 0,
    currentPhrase: "",
    isDeleting: false
};

function initializeTypewriter() {
    const typeEl = document.querySelector(".typewriter-text");
    console.log("Typewriter element found:", typeEl);
    if (!typeEl) {
        console.error("Typewriter element not found!");
        return;
    }
    setTimeout(() => typewriterEffect(), 4000); // Start typewriter after baffle
}

function typewriterEffect() {
    const typeEl = document.querySelector(".typewriter-text");
    if (!typeEl) return;
    
    const fullText = phrases[typewriterState.i];
    
    if (typewriterState.isDeleting) {
        typewriterState.currentPhrase = fullText.substring(0, typewriterState.j--);
    } else {
        typewriterState.currentPhrase = fullText.substring(0, typewriterState.j++);
    }

    typeEl.innerHTML = typewriterState.currentPhrase || "&nbsp;";

    if (!typewriterState.isDeleting && typewriterState.j === fullText.length + 1) {
        typewriterState.isDeleting = true;
        setTimeout(typewriterEffect, 1500);
        return;
    }

    if (typewriterState.isDeleting && typewriterState.j === 0) {
        typewriterState.isDeleting = false;
        typewriterState.i = (typewriterState.i + 1) % phrases.length;
    }

    setTimeout(typewriterEffect, typewriterState.isDeleting ? 40 : 100);
}

// ========== Baffle Text Effect ==========
let baffleInstance;

function initializeBaffleEffect() {
    const hero = document.getElementById("hero");
    const name = document.querySelector(".baffle-text");
    const typewriter = document.querySelector(".typewriter-text");

    console.log("Baffle elements:", { hero, name, typewriter });
    console.log("Baffle library available:", typeof baffle !== 'undefined');

    if (!name || typeof baffle === 'undefined') {
        console.error("Baffle element or library not found!");
        return;
    }

    // Initialize baffle effect
    baffleInstance = baffle(".baffle-text");
    baffleInstance.set({
        characters: '░▒░ ░██░> ████▓ >█> ░/█>█ ██░░ █<▒ ▓██░ ░/░▒',
        speed: 120
    });
    baffleInstance.start();
    baffleInstance.reveal(4000);

    // Intersection observer for re-animation
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                name.classList.remove("hero-animate-enter", "neon-pulse");
                typewriter.classList.remove("hero-animate-enter");
                name.classList.add("hero-animate-exit");
                typewriter.classList.add("hero-animate-exit");
            } else {
                name.classList.remove("hero-animate-exit");
                typewriter.classList.remove("hero-animate-exit");

                // Restart baffle and pulse
                if (baffleInstance) {
                    baffleInstance.start();
                    baffleInstance.reveal(4000);
                }

                void name.offsetWidth; // force reflow
                name.classList.add("neon-pulse", "hero-animate-enter");
                typewriter.classList.add("hero-animate-enter");
            }
        });
    }, {
        threshold: 0.5,
    });

    observer.observe(hero);
}

// ========== Leaflet Map ==========
function initializeMap() {
    const lat = 13.887778;
    const lng = 121.978778;

    const map = L.map('map').setView([lat, lng], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    const marker = L.marker([lat, lng])
        .addTo(map)
        .bindPopup(`<strong>Sajed Lopez Mendoza's Residence</strong><br>
        <a href="https://www.google.com/maps/search/?api=1&query=${lat},${lng}" target="_blank" style="color:#00f;text-decoration:underline;">Open in Google Maps</a>`)
        .openPopup();

    marker.on('click', () => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
    });
}

// ========== Smooth Scrolling ==========
function initializeSmoothScrolling() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                const yOffset = -80;
                const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        });
    });

    // Logo click scroll to top
    const logo = document.querySelector(".logo-wrapper");
    if (logo) {
        logo.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
}

// ========== Back to Top Button ==========
function initializeBackToTop() {
    const backToTopBtn = document.getElementById("backToTopBtn");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// ========== Global Modal Functions (needed for onclick handlers) ==========
window.openModal = openModal;
window.closeModal = closeModal;
window.nextImage = nextImage;
window.prevImage = prevImage;