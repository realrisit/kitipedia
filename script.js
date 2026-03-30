console.log('🐱 Kitipedia Script Starting...');

// Firebase Configuration & Initialization
const firebaseConfig = {
  apiKey: "AIzaSyAVMaDAK86I9Gh8wVXkrqC7LRPyk4frzBtO",
  authDomain: "kitipidia-80573.firebaseapp.com",
  projectId: "kitipidia-80573",
  storageBucket: "kitipidia-80573.firebasestorage.app",
  messagingSenderId: "68236994639",
  appId: "1:68236994639:web:7ea9c75bded7b0618b962a"
};

let db = null;

// Try to initialize Firebase, but don't let it block the app
try {
  if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    console.log('Firebase initialized successfully');
  } else {
    console.warn('Firebase SDK not loaded yet');
  }
} catch (error) {
  console.error('Firebase initialization error:', error);
}

// Global variables for touch swipe support and modal handling
let startX = 0, currentX = 0, isDragging = false, isAnimating = false;
const threshold = 50;

// Cat Data with Consistent Naming
const cats = [
  {
    id: 1,
    name: "Santra",
    nicknames: ["Honey","Gotya"],
    image: "./Images/cats/Santra.jpg",
    bgImage: "./Images/backgrounds/Santra-bg.svg",
    doodle: "./Images/doodles/Santra-doodle.svg",
    age: "1 year",
    gender: "Male",
    vaccinated: true,
    sterilized: true,
    personality: "He's so possessive 😭. if I take care of another cat, he stops talking to me for days and won't let me pet him. But deep down, he's still a chill guy ;)",
    behavior: ["very friendly","possessive","quite lazy"],
    petting: " he likes base of tail (upper back) scratches.",
    location: "Hostel 2",
    shareUrl: "https://forms.gle/example1" // Replace with actual Google Form URL
  },
  {
    id: 2,
    name: "Jumbo",
    image: "./Images/cats/Jambo.jpg",
    bgImage: "./Images/backgrounds/Jambo-bg.svg",
    doodle: "./Images/doodles/jambo-doodle.png",
    age: "2.5 years",
    gender: "Male",
    vaccinated: true,
    sterilized: true,
    personality: "He's huge af ... super affectionate, rubbing himself against everyone who passes by and purring when you pet him. As a part-time job, he also hunts snake.",
    behavior: ["friendly", "affectionate", "cuddly", "follows-you", "purring"],
    petting: "Enjoys pets all over, especially loves head scratches.",
    location: "D-Quarters",
    shareUrl: "https://forms.gle/example2" // Replace with actual Google Form URL
  },
  {
    id: 3,
    name: "Gravy",
    nicknames: ["Pouncy"],
    image: "./Images/cats/Gravy.jpg",
    bgImage: "./Images/backgrounds/Gravy-bg.svg",
    doodle: "./Images/doodles/gravy-doodle.png",
    age: "1 year",
    gender: "Female",
    vaccinated: true,
    sterilized: true,
    personality: "She's a strong, independent lady. super playful, does silly things, and is too cute :3",
    behavior: ["playful", "independent", "bold"],
    petting: "Allows petting, but may scratch when annoyed.",
    location: "Hostel 2 2nd floor",
    shareUrl: "https://forms.gle/example3" // Replace with actual Google Form URL
  },
  {
    id: 4,
    name: "Calico",
    image: "./Images/cats/Calico.jpg", 
    bgImage: "./Images/backgrounds/Calico-bg.svg",
    doodle: "./Images/doodles/calico-doodle.png",
    age: "1 year",
    gender: "Female",
    vaccinated: true,
    sterilized: true,
    personality: "She's very shy and may be a bit anxious if you approach or might hiss, but once she's comfortable, you can attempt a covert cuddle mission. Also, her pattern is beautiful! :)",
    behavior: ["shy", "skittish", "cautious", "timid", "wary","hisses","quiet"],
    petting: "Trusts only a few people; avoid petting unless she comes to you.",
    location: "Hostel 2,Old Academic Building"
  },
  {
    id: 5,
    name: "Chaya",
    nicknames: ["Bluetooth"],
    image: "./Images/cats/chaya.jpg",
    bgImage: "./Images/backgrounds/chaya-bg.svg",
    doodle: "./Images/doodles/chaya-doodle.png",
    age: "1 year",
    gender: "Female",
    vaccinated: true,
    sterilized: true,
    personality: "You might confuse her with Toothless, but a major difference is the white stripe at the end of her tail. She doesn't let strangers touch her, but she's chill if you feed her ;)",
    behavior: ["selective", "attention-seeking","skittish", "moody","vocal"],
    petting: "Avoid if you want to avoid scratches. she startles easily.",
    location: "Hostel 2,Old Academic Building"
  },
  {
    id: 6,
    name: "Gate Guardian",
    image: "./Images/cats/Gate.jpg",
    bgImage: "./Images/backgrounds/Gate-bg.svg",
    doodle: "./Images/doodles/gate-doodle.png",
    age: "?year",
    gender: "Male",
    vaccinated: false,
    sterilized: false,
    personality: "If you wanna meet this gorgeous guy, just come to the main gate between 3-5 AM. He's got a beautiful tail, and the guards are total fans!",
    behavior: ["mysterious", "elusive","batman"],
    petting: "Don't know much yet, but he allows pets.",
    location: "Main Gate Area"
  },
  {
    id: 7,
    name: "Sasha",
    image: "./Images/cats/IDK her name.jpg",
    bgImage: "./Images/backgrounds/Idk-bg.svg",
    doodle: "./Images/doodles/idk-doodle.svg",
    age: "2.5year",
    gender: "Female",
    vaccinated: true,
    sterilized: true,
    personality: "She's very calm, loves humans, and might join you otw to the market ;). She birthed litter once in a quiet shed near the RS hostel.",
    behavior: ["chill", "friendly", "easygoing"],
    petting: "Comfortable with humans and enjoys gentle affection.",
    location: "PJ auditorium"
  },
  {
    id: 8,
    name: "Banku",
    nicknames: ["Paratha"],
    image: "./Images/cats/Kitten 2.jpg",
    bgImage: "./Images/backgrounds/Kitten-bg.svg",
    doodle: "./Images/doodles/Kitten-doodle.png",
    age: "5 Months",
    gender: "Male",
    vaccinated: true,
    sterilized: false,
    personality: "He's super energetic and playful.think twice before letting him into your room! 😭, His biological mom is Sasha, but Gravy adopted him ;)",
    behavior: ["energetic", "playful", "vocal", "clumsy", "curious"],
    petting: "Pet very gently. he is too smoll yet.",
    location: "Hostel 2 2nd floor"
  },
  {
    id: 9,
    name: "Sishu",
    nicknames: ["Idli"],
    image: "./Images/cats/idli.jpg",
    bgImage: "./Images/backgrounds/Idli-bg.svg",
    doodle: "./Images/doodles/Idli-doodle.png",
    age: "2.5 years",
    gender: "Male",
    vaccinated: true,
    sterilized: true,
    personality: "He's the chillest guy on campus.super friendly and fun to hang out with, and he's pretty popular with the ladies. Seems like he's been off on a mysterious mission lately :(",
    behavior: ["chill", "friendly", "gentle", "confident", "laid-back", "never-aggressive"],
    petting: "can be petted anytime, anywhere.",
    location: "Missing :("
  },
  {
    id: 10,
    name: "Grace",
    image: "./Images/cats/Fjambo.jpg",
    bgImage: "./Images/backgrounds/Fjambo-bg.svg",
    doodle: "./Images/doodles/Fjambo-doodle.png",
    age: "2.5 years",
    gender: "Female",
    vaccinated: false,
    sterilized: true,
    personality: "Super friendly and affectionate since day one, back when she and her sis Toothless were always together. You might mix her up with Patchy, but nah. Patchy's got a blacker back and a totally opposite vibe.",
    behavior: ["friendly", "affectionate", "social", "easy-going", "people-loving", "gentle"],
    petting: "She'll probably come to you first, so just give her all the love.",
    location: "Missing :("
  },
  {
    id: 11,
    name: "Patchy",
    image: "./Images/cats/F jambo 2.jpg",
    bgImage: "./Images/backgrounds/F jambo 2-bg.svg",
    doodle: "./Images/doodles/F jambo 2-doodle.svg",
    age: "2.5 years",
    gender: "Female",
    vaccinated: true,
    sterilized: false,
    personality: "Used to be shy with her two sons near B quarters. food had to be dropped and you'd step away. Now she's way friendlier, and if you're feeding her, you can probably pet her.",
    behavior: ["vocal", "food-driven", "moody", "sometimes-aggressive"],
    petting: "Food first, pets after.",
    location: "B-Quarter"
  },
  {
    id: 12,
    name: "Don",
    image: "./Images/cats/Don.jpg",
    bgImage: "./Images/backgrounds/Don-bg.svg",
    doodle: "./Images/doodles/Don-doodle.svg",
    age: "? year",
    gender: "Male",
    vaccinated: false,
    sterilized: false,
    personality: "Kinda the boss around here. Most male cats see him and bolt. and for good reason, he'll chase and bully them. Not really into humans or the food offered, totally does his own thing. Seen hanging out with Patchy sometimes.",
    behavior: ["dominant", "territorial", "independent", "not-social", "bold"],
    petting: "Don't. Just… don't.",
    location: "Rarely but near Hostel 1"
  },
  {
    id: 13,
    name: "Raanu",
    nicknames:["mumma-cat"],
    image: "./Images/cats/mumma cat.jpg",
    bgImage: "./Images/backgrounds/Mumma-bg.svg",
    doodle: "./Images/doodles/mumma cat-doodle.png",
    age: "? months",
    gender: "Female",
    vaccinated: true,
    sterilized: true,
    personality: "She's the mama of every cat on campus.the most nonchalant one around.and you'll find her attending every class in G26. ;)",
    behavior: ["chill", "independent", "laid-back", "aloof", "unbothered"],
    petting: "Allows petting, though she may rarely signal to stop.",
    location: "Old Academic Building"
  },
  {
    id: 14,
    name: "Toothless",
    image: "./Images/cats/Thoothless.jpg",
    bgImage: "./Images/backgrounds/Toothless-bg.svg",
    doodle: "./Images/doodles/Toothless-doodle.png",
    age: "2.5 years",
    gender: "Female",
    vaccinated: true,
    sterilized: true,
    personality: "She's a cute black ball... but can be a bit aggressive sometimes.",
    behavior: ["vocal", "sometimes-aggressive", "needs-patience", "possibly-traumatized"],
    petting: "Better to avoid petting if you don't want scratches or bites. she needs to be handled carefully",
    location: "Hostel 1"
  },
  {
    id: 15,
    name: "Meowesh",
    image: "./Images/cats/White.jpg",
    bgImage: "./Images/backgrounds/White-bg.svg",
    doodle: "./Images/doodles/White-doodle.svg",
    age: "1.5 year",
    gender: "Male",
    vaccinated: true,
    sterilized: true,
    personality: "Not seen too often, but a shy guy.",
    behavior: ["shy", "rarely-seen", "skittish"],
    petting: "He may be shy, but these days he allows pets",
    location: "Jungle near badminton court"
  },
  {
    id: 16,
    name: "Utpal",
    image: "./Images/cats/Utpal.jpg",
    bgImage: "./Images/backgrounds/Utpal-bg.svg",
    doodle: "./Images/doodles/Utpal-doodle.svg",
    age: "old af",
    gender: "Male",
    vaccinated: true,
    sterilized: false,
    personality: "He's an old guy who'll ask you for affection and might even join you in the mess.",
    behavior: ["affectionate", "very-chill", "people-loving", "friendly"],
    petting: "PLEASE PET AS MUCH AS YOU CAN",
    location: "PJ auditorium,Near Hostles"
  },
  {
    id: 17,
    name: "Coco",
    image: "./Images/cats/Coco.jpg",
    bgImage: "./Images/backgrounds/Coco-bg.svg",
    doodle: "./Images/doodles/Coco-doodle.svg",
    age: "? year",
    gender: "Female",
    vaccinated: false,
    sterilized: false,
    personality: "She'll follow you for pets, but the moment you turn to look, she gets shy and runs away 😭",
    behavior: ["affectionate", "a-little-shy", "gentle", "people-friendly"],
    petting: "PLEASE PET AS MUCH AS YOU CAN",
    location: "Near Hostles"
  },
  {
    id: 18,
    name: "Dogie",
    image: "./Images/cats/Dogie.jpg",
    bgImage: "./Images/backgrounds/Dogie-bg.svg",
    doodle: "./Images/doodles/Dogie-doodle.svg",
    age: "? year",
    gender: "Female",
    vaccinated: false,
    sterilized: false,
    personality: "She's a gorgeous girl.you'll usually find her at Rajubhiya's shop or chilling with a cup of tea.",
    behavior: ["extrovert", "food-driven", "friendly"],
    petting: "she won't bite (probably)",
    location: "Near shops"
  }
];

// ===== Swipeable Cat Modal =====

// Function to initialize cards
function initializeCards() {
  console.log('=== Starting initializeCards ===');
  
  catGrid = document.getElementById('catGrid');
  modal = document.getElementById('catModal');
  modalBody = document.getElementById('modalBody');
  closeBtn = document.querySelector('.close-btn');
  prevBtn = document.getElementById('prevCat');
  nextBtn = document.getElementById('nextCat');
  catCounter = document.getElementById('catCounter');

  console.log('DOM elements found:', {
    catGrid: !!catGrid,
    modal: !!modal,
    modalBody: !!modalBody,
    closeBtn: !!closeBtn,
    prevBtn: !!prevBtn,
    nextBtn: !!nextBtn,
    catCounter: !!catCounter,
    catsLength: cats.length
  });

  if (!catGrid) {
    console.error('❌ Cat grid element not found! DOM may not be ready.');
    return;
  }
  
  console.log('✓ Cat grid found, creating cards...');

  // ===== Render Cat Cards =====
  cats.forEach((cat, index) => {
    const card = document.createElement('div');
    card.className = 'cat-card';
    card.innerHTML = `
      <img src="${cat.image}" alt="${cat.name}" class="cat-main-img" loading="lazy">
      <div class="cat-doodle">
        <img src="${cat.doodle}" alt="${cat.name} doodle" class="doodle-img" loading="lazy">
      </div>
      <div class="cat-info">
        <h3>${cat.name}</h3>
        <p><img src="./Images/icons/${cat.gender.toLowerCase()}.svg" class="gender-icon-small" alt="${cat.gender}"> 
        <span class="cat-age">${cat.age}</span></p>
      </div>
    `;
    card.addEventListener('click', () => {
      currentCatIndex = index;
      openModal(currentCatIndex);
    });
    catGrid.appendChild(card);
  });
  
  console.log('✓ Created ' + cats.length + ' cat cards');
  console.log('✓ Cat grid now has', catGrid.children.length, 'children');
  
  // Attach all event listeners after DOM is ready
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  
  window.addEventListener('click', (e) => {
    if (modal && e.target === modal) closeModal();
  });
  
  window.addEventListener('keydown', (e) => {
    if (modal && modal.style.display === 'block') {
      if (e.key === 'Escape') {
        closeModal();
      }
    }
  });
  
  if (prevBtn) {
    prevBtn.addEventListener('click', showPrevCat);
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', showNextCat);
  }
  
  document.addEventListener('keydown', (e) => {
    if (modal && modal.style.display === 'block') {
      if (e.key === 'ArrowLeft') {
        if (!isAnimating) showPrevCat();
      } else if (e.key === 'ArrowRight') {
        if (!isAnimating) showNextCat();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    }
  });
  
  // Touch swipe support
  if (modalBody) {
    modalBody.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    }, false);

    modalBody.addEventListener('touchend', (e) => {
      if (!isDragging || isAnimating) return;
      isDragging = false;
      let diffX = e.changedTouches[0].clientX - startX;

      if (Math.abs(diffX) > threshold) {
        if (diffX < 0) {
          showNextCat();
        } else {
          showPrevCat();
        }
      }
    }, false);
  }
  
  // ===== Mobile Search Filter =====
  const searchInput = document.getElementById("catSearch");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase().trim();
      const cards = document.querySelectorAll(".cat-card");

      cards.forEach(card => {
        if (card.classList.contains("donation-card")) return; // skip donation

        const name = card.querySelector("h3")?.textContent.toLowerCase() || "";
        const extra = card.dataset.search || ""; // extra info

        if (name.includes(query) || extra.includes(query)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }
  
  // ===== Floating Donate Button =====
  donateBtn = document.getElementById("donate-float-btn");
  const donationSection = document.querySelector(".donation-section");

  // Show/Hide button depending on section visibility
  window.addEventListener("scroll", () => {
    if (!donationSection || !donateBtn) return;
    const rect = donationSection.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    donateBtn.style.display = inView ? "none" : "flex";
  });

  // Scroll smoothly to donation section
  if (donateBtn && donationSection) {
    donateBtn.addEventListener("click", () => {
      donationSection.scrollIntoView({ behavior: "smooth" });
    });
  }
}

// Initialize variables that will be used globally
let currentCatIndex = 0;
let catGrid, modal, modalBody, closeBtn, prevBtn, nextBtn, catCounter, donateBtn;

console.log('📄 Script loaded, document.readyState:', document.readyState);

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
  console.log('⏳ DOM still loading, waiting for DOMContentLoaded...');
  document.addEventListener('DOMContentLoaded', () => {
    console.log('✓ DOMContentLoaded fired');
    initializeCards();
  });
} else {
  // DOM is already loaded
  console.log('✓ DOM already loaded, initializing immediately');
  initializeCards();
}

// ===== Modal Functions =====
function openModal(index) {
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // hide support button
    if (donateBtn) donateBtn.style.display = "none";

    renderCat(index, true);
  }
}

function closeModal() {
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';

    // show support button again
    if (donateBtn) donateBtn.style.display = "flex";
  }
}

// ===== Navigation Functions =====
function showNextCat() {
  if (isAnimating) return;
  renderCat((currentCatIndex + 1) % cats.length, false, 'next');
}

function showPrevCat() {
  if (isAnimating) return;
  renderCat((currentCatIndex - 1 + cats.length) % cats.length, false, 'prev');
}

// ===== Render Cat in Modal with Slide Animation =====
function renderCat(index, instant = false, direction = null) {
  const cat = cats[index];
  const nicknamesDisplay = cat.nicknames?.length
    ? `<p class="aka">a.k.a <span>${cat.nicknames.join(", ")}</span></p>`
    : '';

  const newContainer = document.createElement('div');
  newContainer.className = 'modal-bg-container';
  newContainer.style.setProperty('--cat-bg', `url('${cat.bgImage}')`);
  newContainer.innerHTML = `
    <div class="modal-bg-overlay"></div>
    <div class="modal-content-wrapper">
      <div class="cat-header">
        <div class="name-doodle-container">
          <img src="${cat.doodle}" alt="${cat.name} doodle" class="modal-doodle" loading="lazy">
          <div class="name-container">
            <h2>${cat.name}</h2>
            ${nicknamesDisplay}
          </div>
        </div>
        <img src="./Images/icons/${cat.gender.toLowerCase()}.svg" class="gender-icon" alt="${cat.gender}">
      </div>
      <img src="${cat.image}" alt="${cat.name}" class="modal-cat-img" loading="lazy">
      <div class="details-grid">
        <div class="detail-item"><span class="detail-label">Age:</span><span class="detail-value">${cat.age}</span></div>
        <div class="detail-item"><span class="detail-label">Vaccinated:</span>
          <img src="./Images/icons/${cat.vaccinated ? 'yes' : 'no'}.svg" class="status-icon">
        </div>
        <div class="detail-item"><span class="detail-label">Sterilized:</span>
          <img src="./Images/icons/${cat.sterilized ? 'yes' : 'no'}.svg" class="status-icon">
        </div>
        <div class="detail-item full-width"><span class="detail-label">Detail:</span><p>${cat.personality}</p></div>
        <div class="detail-item full-width"><span class="detail-label">Behavior:</span>
          <div class="behavior-tags">${cat.behavior.map(b => `<span class="tag">${b}</span>`).join('')}</div>
        </div>
        <div class="detail-item full-width"><span class="detail-label">Petting Advice:</span><p>${cat.petting}</p></div>
        <div class="detail-item full-width"><span class="detail-label">Location:</span><p>${cat.location}</p></div>
      </div>
    </div>
  `;

  if (instant || !direction) {
    modalBody.innerHTML = '';
    modalBody.appendChild(newContainer);
  } else {
    isAnimating = true;
    const oldContainer = modalBody.querySelector('.modal-bg-container');

    // Prepare new container offscreen
    newContainer.style.position = 'absolute';
    newContainer.style.top = '0';
    newContainer.style.left = '0';
    newContainer.style.width = '100%';
    newContainer.style.height = '100%';
    newContainer.style.transform = direction === 'next' ? 'translateX(100%)' : 'translateX(-100%)';

    modalBody.appendChild(newContainer);

    // Animate both containers
    requestAnimationFrame(() => {
      oldContainer.style.transition = "transform 0.35s ease";
      newContainer.style.transition = "transform 0.35s ease";
      oldContainer.style.transform = direction === 'next' ? 'translateX(-100%)' : 'translateX(100%)';
      newContainer.style.transform = 'translateX(0)';
    });

    // Cleanup after animation
    setTimeout(() => {
      if (oldContainer) oldContainer.remove();
      newContainer.style.position = 'relative';
      isAnimating = false;
    }, 350);
  }

  currentCatIndex = index;
  updateCounter();
}

// Update counter display
function updateCounter() {
  catCounter.textContent = `${currentCatIndex + 1}/${cats.length}`;
}

// Load comments from Firestore for a specific cat
async function loadComments(catIndex) {
  const cat = cats[catIndex];
  const commentsDisplay = document.getElementById('commentsDisplay');
  if (!commentsDisplay) return;

  try {
    // Show loading state
    commentsDisplay.innerHTML = '<p class="loading-comments">Loading experiences...</p>';

    let comments = [];

    // Try to fetch from Firebase first
    if (db) {
      try {
        const snapshot = await db.collection('comments')
          .where('catId', '==', cat.id)
          .orderBy('timestamp', 'desc')
          .get();

        snapshot.forEach(doc => {
          comments.push({ id: doc.id, ...doc.data() });
        });
        console.log('✓ Loaded', comments.length, 'comments from Firebase');
      } catch (firebaseError) {
        console.warn('Firebase load failed:', firebaseError);
        // Fall back to localStorage
        const stored = JSON.parse(localStorage.getItem('kitipedia_comments') || '[]');
        comments = stored.filter(c => c.catId === cat.id);
        console.log('✓ Loaded', comments.length, 'comments from localStorage');
      }
    } else {
      // Firebase not available, use localStorage
      console.log('Firebase not available, loading from localStorage');
      const stored = JSON.parse(localStorage.getItem('kitipedia_comments') || '[]');
      comments = stored.filter(c => c.catId === cat.id);
    }

    commentsDisplay.innerHTML = '';

    if (comments.length === 0) {
      commentsDisplay.innerHTML = '<p class="no-comments">No experiences yet. Be the first to share! 🐾</p>';
      return;
    }

    // Sort by score (upvotes - downvotes), then by timestamp
    const sortedComments = comments.sort((a, b) => {
      const scoreA = (a.upvotes || 0) - (a.downvotes || 0);
      const scoreB = (b.upvotes || 0) - (b.downvotes || 0);
      if (scoreB !== scoreA) return scoreB - scoreA;
      return new Date(b.timestamp) - new Date(a.timestamp);
    });

    sortedComments.forEach(comment => {
      const commentEl = document.createElement('div');
      commentEl.className = 'comment-item';
      
      let photoHtml = '';
      if (comment.photo) {
        photoHtml = `<img src="${comment.photo}" class="comment-photo-display" alt="User photo">`;
      }

      const upvoteClass = (comment.upvotedBy?.includes(getCurrentUserId()) || false) ? 'voted' : '';
      const downvoteClass = (comment.downvotedBy?.includes(getCurrentUserId()) || false) ? 'voted' : '';

      commentEl.innerHTML = `
        <div class="comment-header">
          <strong class="comment-name">${escapeHtml(comment.name)}</strong>
          <span class="comment-date">${formatDate(comment.timestamp)}</span>
        </div>
        <p class="comment-text">${escapeHtml(comment.text).replace(/\n/g, '<br>')}</p>
        ${photoHtml}
        <div class="comment-votes">
          <button class="vote-btn upvote ${upvoteClass}" data-comment-id="${comment.id}" data-vote="up">
            <i class="fas fa-thumbs-up"></i> <span class="vote-count">${comment.upvotes || 0}</span>
          </button>
          <button class="vote-btn downvote ${downvoteClass}" data-comment-id="${comment.id}" data-vote="down">
            <i class="fas fa-thumbs-down"></i> <span class="vote-count">${comment.downvotes || 0}</span>
          </button>
          <span class="vote-score">${(comment.upvotes || 0) - (comment.downvotes || 0)}</span>
        </div>
      `;
      commentsDisplay.appendChild(commentEl);

      // Add vote button listeners
      commentEl.querySelector('.upvote').addEventListener('click', () => {
        if (!comment.id.startsWith('local_')) {
          handleCommentVote(cat.id, comment.id, 'up');
        } else {
          handleLocalCommentVote(comment.id, 'up');
        }
      });
      commentEl.querySelector('.downvote').addEventListener('click', () => {
        if (!comment.id.startsWith('local_')) {
          handleCommentVote(cat.id, comment.id, 'down');
        } else {
          handleLocalCommentVote(comment.id, 'down');
        }
      });
    });
  } catch (error) {
    console.error('Error loading comments:', error);
    commentsDisplay.innerHTML = '<p class="error-comments">Failed to load comments. Please refresh.</p>';
  }
}

// Handle voting for local storage comments
function handleLocalCommentVote(commentId, voteType) {
  try {
    const userId = getCurrentUserId();
    const allComments = JSON.parse(localStorage.getItem('kitipedia_comments') || '[]');
    const commentIndex = allComments.findIndex(c => c.id === commentId);
    
    if (commentIndex === -1) return;

    const comment = allComments[commentIndex];
    const upvotedBy = comment.upvotedBy || [];
    const downvotedBy = comment.downvotedBy || [];

    let upvotes = comment.upvotes || 0;
    let downvotes = comment.downvotes || 0;

    if (voteType === 'up') {
      if (upvotedBy.includes(userId)) {
        upvotedBy.splice(upvotedBy.indexOf(userId), 1);
        upvotes = Math.max(0, upvotes - 1);
      } else {
        upvotedBy.push(userId);
        upvotes++;
        if (downvotedBy.includes(userId)) {
          downvotedBy.splice(downvotedBy.indexOf(userId), 1);
          downvotes = Math.max(0, downvotes - 1);
        }
      }
    } else if (voteType === 'down') {
      if (downvotedBy.includes(userId)) {
        downvotedBy.splice(downvotedBy.indexOf(userId), 1);
        downvotes = Math.max(0, downvotes - 1);
      } else {
        downvotedBy.push(userId);
        downvotes++;
        if (upvotedBy.includes(userId)) {
          upvotedBy.splice(upvotedBy.indexOf(userId), 1);
          upvotes = Math.max(0, upvotes - 1);
        }
      }
    }

    allComments[commentIndex] = {
      ...comment,
      upvotes,
      downvotes,
      upvotedBy,
      downvotedBy
    };

    localStorage.setItem('kitipedia_comments', JSON.stringify(allComments));
    loadComments(currentCatIndex);
  } catch (error) {
    console.error('Error voting:', error);
  }
}

// Get unique user ID (stored in localStorage to identify user across sessions)
function getCurrentUserId() {
  let userId = localStorage.getItem('kitipidia_user_id');
  if (!userId) {
    userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('kitipidia_user_id', userId);
  }
  return userId;
}

// Save a new comment to Firestore
async function saveComment(catId, name, text, photo = null) {
  try {
    console.log('💾 Saving comment for catId:', catId);
    
    const newComment = {
      catId,
      name,
      text,
      photo,
      timestamp: new Date().toISOString(),
      upvotes: 0,
      downvotes: 0,
      upvotedBy: [],
      downvotedBy: []
    };

    // Try to save to Firebase if available
    if (db) {
      try {
        console.log('📤 Attempting Firebase save...');
        await db.collection('comments').add(newComment);
        console.log('✓ Comment saved to Firebase');
        return true;
      } catch (firebaseError) {
        console.warn('⚠️ Firebase save failed:', firebaseError.message);
        // Fall back to localStorage
        console.log('📝 Falling back to localStorage');
        saveCommentToLocalStorage(newComment);
        return true;
      }
    } else {
      // Firebase not available, use localStorage
      console.log('📝 Firebase not available, saving to localStorage');
      saveCommentToLocalStorage(newComment);
      return true;
    }
  } catch (error) {
    console.error('❌ Error saving comment:', error);
    throw error;
  }
}

// Save comment to localStorage as fallback
function saveCommentToLocalStorage(comment) {
  try {
    const allComments = JSON.parse(localStorage.getItem('kitipedia_comments') || '[]');
    comment.id = 'local_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    allComments.push(comment);
    localStorage.setItem('kitipedia_comments', JSON.stringify(allComments));
    console.log('✓ Comment saved to localStorage');
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    throw error;
  }
}

// Handle comment voting in Firestore
async function handleCommentVote(catId, commentId, voteType) {
  try {
    // Check if db is available
    if (!db) {
      console.warn('Firebase not available, using localStorage');
      handleLocalCommentVote(commentId, voteType);
      return;
    }

    const userId = getCurrentUserId();
    const commentRef = db.collection('comments').doc(commentId);
    const commentDoc = await commentRef.get();
    
    if (!commentDoc.exists) return;

    const comment = commentDoc.data();
    const upvotedBy = comment.upvotedBy || [];
    const downvotedBy = comment.downvotedBy || [];

    let upvotes = comment.upvotes || 0;
    let downvotes = comment.downvotes || 0;

    if (voteType === 'up') {
      if (upvotedBy.includes(userId)) {
        // Remove upvote
        upvotedBy.splice(upvotedBy.indexOf(userId), 1);
        upvotes = Math.max(0, upvotes - 1);
      } else {
        // Add upvote, remove downvote if exists
        upvotedBy.push(userId);
        upvotes++;
        if (downvotedBy.includes(userId)) {
          downvotedBy.splice(downvotedBy.indexOf(userId), 1);
          downvotes = Math.max(0, downvotes - 1);
        }
      }
    } else if (voteType === 'down') {
      if (downvotedBy.includes(userId)) {
        // Remove downvote
        downvotedBy.splice(downvotedBy.indexOf(userId), 1);
        downvotes = Math.max(0, downvotes - 1);
      } else {
        // Add downvote, remove upvote if exists
        downvotedBy.push(userId);
        downvotes++;
        if (upvotedBy.includes(userId)) {
          upvotedBy.splice(upvotedBy.indexOf(userId), 1);
          upvotes = Math.max(0, upvotes - 1);
        }
      }
    }

    // Update Firestore
    await commentRef.update({
      upvotes,
      downvotes,
      upvotedBy,
      downvotedBy
    });

    // Reload comments to show updated votes
    loadComments(currentCatIndex);
  } catch (error) {
    console.error('Error voting on comment:', error);
    // Try localStorage as fallback
    try {
      handleLocalCommentVote(commentId, voteType);
    } catch (localError) {
      alert('Failed to vote. Please try again.');
    }
  }
}

// Attach form submission listener
function attachCommentFormListener() {
  const form = document.getElementById('commentForm');
  if (!form) return;

  form.onsubmit = async (e) => {
    e.preventDefault();
    
    const nameInput = form.querySelector('.comment-name');
    const textInput = form.querySelector('.comment-text');
    const photoInput = form.querySelector('.comment-photo');
    
    const name = nameInput.value.trim();
    const text = textInput.value.trim();
    
    if (!name || !text) {
      alert('Please fill in name and experience');
      return;
    }

    try {
      const submitBtn = form.querySelector('.submit-comment');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Saving...';

      let photoData = null;
      if (photoInput.files && photoInput.files[0]) {
        photoData = await fileToDataUrl(photoInput.files[0]);
      }

      const cat = cats[currentCatIndex];
      console.log('Saving comment for cat:', cat.name);
      
      // Wait for saveComment to complete
      await saveComment(cat.id, name, text, photoData);
      
      console.log('✓ Comment saved successfully');
      
      // Clear form
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Add Experience ✨';
      
      // Reload comments display
      await loadComments(currentCatIndex);
      
    } catch (error) {
      console.error('Error in form submission:', error);
      const submitBtn = form.querySelector('.submit-comment');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Add Experience ✨';
      alert('Failed to save comment. Please try again.');
    }
  };
}

// Convert file to data URL
function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Format timestamp to readable date
function formatDate(isoString) {
  const date = new Date(isoString);
  const now = new Date();
  const diff = now - date;
  
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 30) return `${days}d ago`;
  
  return date.toLocaleDateString();
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}









