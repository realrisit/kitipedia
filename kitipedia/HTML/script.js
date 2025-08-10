// Cat Data with Consistent Naming
const cats = [
  {
    id: 1,
    name: "Santra",
    nicknames: ["Honey","Gotya"],
    image: "../Images/cats/Santra.jpg",
    bgImage: "../Images/backgrounds/Santra-bg.svg",
    doodle: "../Images/doodles/santra-doodle.svg",
    age: "1.5 years",
    gender: "Male",
    vaccinated: false,
    sterilized: true,
    personality: "",
    behavior: ["very friendly","possessive","quite lazy"],
    petting: " he likes base of tail (upper back) scratches.",
    location: "Hostel 2"
  },
  {
    id: 2,
    name: "Jumbo",
    image: "../Images/cats/Jambo.jpg",
    bgImage: "../Images/backgrounds/Jambo-bg.svg",
    doodle: "../Images/doodles/jambo-doodle.png",
    age: "2.5 years",
    gender: "Male",
    vaccinated: false,
    sterilized: true,
    personality: "",
    behavior: ["friendly", "affectionate", "cuddly", "follows-you", "purring"],
    petting: "Enjoys pets all over, especially loves head scratches.",
    location: "D-Quarters"
  },
  {
    id: 3,
    name: "Gravy",
    nicknames: ["Pouncy"],
    image: "../Images/cats/Gravy.jpg",
    bgImage: "../Images/backgrounds/Gravy-bg.svg",
    doodle: "../Images/doodles/gravy-doodle.png",
    age: "1.5 years",
    gender: "female",
    vaccinated: false,
    sterilized: true,
    personality: "",
    behavior: ["playful", "independent", "bold"],
    petting: "Allows petting, but may scratch when annoyed.",
    location: "Hostel 2 2nd floor"
  },
  {
    id: 4,
    name: "Calico",
    image: "../Images/cats/Calico.jpg", 
    bgImage: "../Images/backgrounds/Calico-bg.svg",
    doodle: "../Images/doodles/calico-doodle.png",
    age: "1.5 years",
    gender: "Female",
    vaccinated: false,
    sterilized: true,
    personality: "",
    behavior: ["shy", "skittish", "cautious", "timid", "wary","hisses","quiet"],
    petting: "Trusts only a few people; avoid petting unless she comes to you.",
    location: "Hostel 2,Old Academic Building"
  },
 {
    id: 5,
    name: "Chaya",
    nicknames: ["Bluetooth"],
    image: "../Images/cats/chaya.jpg",
    bgImage: "../Images/backgrounds/Chaya-bg.svg",
    doodle: "../Images/doodles/chaya-doodle.png",
    age: "1.5 years",
    gender: "Female",
    vaccinated: false,
    sterilized: true,
    personality: "",
    behavior: ["selective", "attention-seeking","skittish", "moody","vocal"],
    petting: "Avoid if you want to avoid scratches — she startles easily.",
    location: "Hostel 2,Old Academic Building"
  },
  {
    id: 6,
    name: "Gate Guardian",
    image: "../Images/cats/Gate.jpg",
    bgImage: "../Images/backgrounds/Gate-bg.svg",
    doodle: "../Images/doodles/gate-doodle.png",
    age: "? years",
    gender: "Male",
    vaccinated: true,
    sterilized: true,
    personality: "",
    behavior: ["mysterious", "elusive","batman"],
    petting: "Don't know much yet, but he allows pets.",
    location: "Main Gate Area"
  },
  {
    id: 7,
    name: "Sasha",
    image: "../Images/cats/IDK her name.jpg",
    bgImage: "../Images/backgrounds/Idk-bg.svg",
    doodle: "../Images/doodles/idk-doodle.svg",
    age: "2.5 years",
    gender: "Female",
    vaccinated: false,
    sterilized: true,
    personality: "",
    behavior: ["chill", "friendly", "easygoing"],
    petting: "Comfortable with humans and enjoys gentle affection.",
    location: "PJ auditorium"
  },
  {
    id: 8,
    name: "Banku",
    nicknames: ["Paratha"],
    image: "../Images/cats/Kitten 2.jpg",
    bgImage: "../Images/backgrounds/Kitten-bg.svg",
    doodle: "../Images/doodles/Kitten-doodle.png",
    age: "5 Months",
    gender: "Male",
    vaccinated: false,
    sterilized: false,
    personality: "",
    behavior: ["energetic", "playful", "vocal", "clumsy", "curious"],
    petting: "Pet very gentelly — he is too smoll yet.",
    location: "Hostel 2 2nd floor"
  },
  {
    id: 9,
    name: "Sishu",
    nicknames: ["Idli"],
    image: "../Images/cats/idli.jpg",
    bgImage: "../Images/backgrounds/Idli-bg.svg",
    doodle: "../Images/doodles/Idli-doodle.png",
    age: "2.5 year",
    gender: "Male",
    vaccinated: false,
    sterilized: true,
    personality: "",
    behavior: ["chill", "friendly", "gentle", "confident", "laid-back", "never-aggressive"],
    petting: "can be petted anytime, anywhere.",
    location: "Missing :("
  },
  {
    id: 10,
    name: "I foreget her name ;(",
    image: "../Images/cats/Fjambo.jpg",
    bgImage: "../Images/backgrounds/Fjambo-bg.svg",
    doodle: "../Images/doodles/Fjambo-doodle.png",
    age: "2.5 years",
    gender: "Female",
    vaccinated: false,
    sterilized: false,
    personality: "",
    behavior: ["vocal", "food-driven", "moody", "sometimes-aggressive"],
    petting: "Avoid petting — may be aggressive or scared, and doesn't generally like humans.",
    location: "B-Quarter"
  },
  {
    id: 11,
    name: "Raanu",
    nicknames:["mumma-cat"],
    image: "../Images/cats/mumma cat.jpg",
    bgImage: "../Images/backgrounds/Mumma-bg.svg",
    doodle: "../Images/doodles/mumma cat-doodle.png",
    age: "? months",
    gender: "Female",
    vaccinated: false,
    sterilized: true,
    personality: "",
    behavior: ["chill", "independent", "laid-back", "aloof", "unbothered"],
    petting: "Allows petting, though she may rarely signal to stop.",
    location: "Old Academic Building"
  },
  {
    id: 12,
    name: "Toothless",
    image: "../Images/cats/Thoothless.jpg",
    bgImage: "../Images/backgrounds/Toothless-bg.svg",
    doodle: "../Images/doodles/toothless-doodle.png",
    age: "2.5 months",
    gender: "Female",
    vaccinated: false,
    sterilized: true,
    personality: "",
    behavior: ["vocal", "sometimes-aggressive", "needs-patience", "possibly-traumatized"],
    petting: "Better to avoid petting if you don't want scratches or bites — she needs to be handled carefully",
    location: "Hostel 1"
  },
  {
    id: 13,
    name: "White Cat",
    image: "../Images/cats/White.jpg",
    bgImage: "../Images/backgrounds/White-bg.svg",
    doodle: "../Images/doodles/White-doodle.svg",
    age: "? years",
    gender: "Male",
    vaccinated: false,
    sterilized: false,
    personality: "",
    behavior: ["very-shy", "rarely-seen", "not-adapted-to-humans", "skittish"],
    petting: "You won't be able to — he runs away before you can pet.",
    location: "Jungle near badminton court"
  },
  {
    id: 14,
    name: "Utpal",
    image: "../Images/cats/Utpal.jpg",
    bgImage: "../Images/backgrounds/Utpal-bg.svg",
    doodle: "../Images/doodles/Utpal-doodle.svg",
    age: "old af",
    gender: "Male",
    vaccinated: false,
    sterilized: false,
    personality: "",
    behavior: ["affectionate", "very-chill", "people-loving", "friendly"],
    petting: "PLEASE PET AS MUCH AS YOU CAN",
    location: "PJ auditorium,Near Hostles"
  },
  {
    id: 15,
    name: "Coco",
    image: "../Images/cats/Coco.jpg",
    bgImage: "../Images/backgrounds/Coco-bg.svg",
    doodle: "../Images/doodles/Coco-doodle.svg",
    age: "? Year",
    gender: "Female",
    vaccinated: false,
    sterilized: false,
    personality: "",
    behavior: ["affectionate", "a-little-shy", "gentle", "people-friendly"],
    petting: "PLEASE PET AS MUCH AS YOU CAN",
    location: "Near Hostles"
  },
  {
    id: 16,
    name: "Dogie",
    image: "../Images/cats/Dogie.jpg",
    bgImage: "../Images/backgrounds/Dogie-bg.svg",
    doodle: "../Images/doodles/Dogie-doodle.svg",
    age: "? years",
    gender: "Male",
    vaccinated: false,
    sterilized: false,
    personality: "",
    behavior: ["extrovert", "food-driven", "friendly"],
    petting: "He won't bit (probably)",
    location: "Near shops"
  }
];

// DOM Elements
const catGrid = document.getElementById('catGrid');
const modal = document.getElementById('catModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.getElementById('prevCat');
const nextBtn = document.getElementById('nextCat');
const catCounter = document.getElementById('catCounter');

// State Variables
let currentCatIndex = 0;

// Load Cat Cards with Personalized Doodles
cats.forEach((cat, index) => {
  const card = document.createElement('div');
  card.className = 'cat-card';
  card.setAttribute('data-cat', cat.name.toLowerCase().replace(' ', '-'));
  
  card.innerHTML = `
    <img src="${cat.image}" alt="${cat.name}" class="cat-main-img" loading="lazy">
    <div class="cat-doodle">
      <img src="${cat.doodle}" alt="${cat.name} doodle" class="doodle-img" loading="lazy">
    </div>
    <div class="cat-info">
      <h3>${cat.name}</h3>
      <p><img src="../Images/icons/${cat.gender.toLowerCase()}.svg" class="gender-icon-small" alt="${cat.gender}"> <span class="cat-age">${cat.age}</span></p>
    </div>
  `;
  
  card.addEventListener('click', () => {
    currentCatIndex = index;
    openModal(cats[currentCatIndex]);
  });
  catGrid.appendChild(card);
});

// Modal Functions
function openModal(cat) {
  updateModalContent(cat);
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function updateModalContent(cat) {
  const nicknamesDisplay = cat.nicknames && cat.nicknames.length > 0 
    ? `<p class="aka">a.k.a <span>${cat.nicknames.join(", ")}</span></p>`
    : '';

  // Lazy load background image
  const bgImg = new Image();
  bgImg.src = cat.bgImage;
  bgImg.onload = () => {
    modalBody.innerHTML = `
    <div class="modal-bg-container" style="--cat-bg: url('${cat.bgImage}')">
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
          <img src="../Images/icons/${cat.gender.toLowerCase()}.svg" class="gender-icon" alt="${cat.gender}">
        </div>
        <img src="${cat.image}" alt="${cat.name}" class="modal-cat-img" loading="lazy">
        <div class="details-grid">
          <div class="detail-item">
            <span class="detail-label">Age:</span>
            <span class="detail-value">${cat.age}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Vaccinated:</span>
            <img src="../Images/icons/${cat.vaccinated ? 'yes' : 'no'}.svg" class="status-icon" alt="${cat.vaccinated ? 'Yes' : 'No'}">
          </div>
          <div class="detail-item">
            <span class="detail-label">Sterilized:</span>
            <img src="../Images/icons/${cat.sterilized ? 'yes' : 'no'}.svg" class="status-icon" alt="${cat.sterilized ? 'Yes' : 'No'}">
          </div>
          <div class="detail-item full-width">
            <span class="detail-label">Detail:</span>
            <p>${cat.personality}</p>
          </div>
          <div class="detail-item full-width">
            <span class="detail-label">Behavior:</span>
            <div class="behavior-tags">
              ${cat.behavior.map(b => `<span class="tag">${b}</span>`).join('')}
            </div>
          </div>
          <div class="detail-item full-width">
            <span class="detail-label">Petting Advice:</span>
            <p>${cat.petting}</p>
          </div>
          <div class="detail-item full-width">
            <span class="detail-label">Location:</span>
            <p>${cat.location}</p>
          </div>
        </div>
      </div>
    </div>
    `;
    preloadCatImages(currentCatIndex);
    updateCounter();
  };
}

function preloadCatImages(index) {
  let prevIndex = (index - 1 + cats.length) % cats.length;
  let nextIndex = (index + 1) % cats.length;

  [prevIndex, nextIndex].forEach(i => {
    let img = new Image();
    img.src = cats[i].image;
    let bg = new Image();
    bg.src = cats[i].bgImage;
  });
}

function updateCounter() {
  catCounter.textContent = `${currentCatIndex + 1}/${cats.length}`;
}

// Navigation Functions
function showNextCat() {
  currentCatIndex = (currentCatIndex + 1) % cats.length;
  updateModalContent(cats[currentCatIndex]);
}

function showPrevCat() {
  currentCatIndex = (currentCatIndex - 1 + cats.length) % cats.length;
  updateModalContent(cats[currentCatIndex]);
}

// Event Listeners
function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeModal);
prevBtn.addEventListener('click', showPrevCat);
nextBtn.addEventListener('click', showNextCat);

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
  if (modal.style.display === 'block') {
    switch(e.key) {
      case 'ArrowLeft':
        showPrevCat();
        break;
      case 'ArrowRight':
        showNextCat();
        break;
      case 'Escape':
        closeModal();
        break;
    }
  }
});

// ===== Swipe Support for Mobile =====
let touchStartX = 0;
let touchEndX = 0;

modal.addEventListener('touchstart', function (e) {
  touchStartX = e.changedTouches[0].screenX;
}, false);

modal.addEventListener('touchend', function (e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipeGesture();
}, false);

function handleSwipeGesture() {
  let swipeDistance = touchEndX - touchStartX;
  if (Math.abs(swipeDistance) > 50) {
    if (swipeDistance < 0) {
      showNextCat();
    } else {
      showPrevCat();
    }
  }
}
