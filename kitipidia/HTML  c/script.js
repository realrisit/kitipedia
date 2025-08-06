// Cat Data
const cats = [
  {
    id: 1,
    name: "Santra",
    image: "../Images/Santra.jpg",
    bgImage: "../Images/santra bg.avif",
    doodle: "../Images/santra doodle.svg",
    age: "2 years",
    gender: "Male",
    vaccinated: true,
    sterilized: true,
    personality: "Friendly but shy. Loves sunbathing near the hostel gate.",
    behavior: ["friendly", "lazy"],
    petting: "Pet gently; he likes head scratches.",
    location: "Hostel Gate"
  },
  {
    id: 2,
    name: "Jambo",
    image: "../Images/Jambo.jpg",
    age: "3 years",
    gender: "Male",
    vaccinated: false,
    sterilized: true,
    personality: "Independent. Hates sudden movements.",
    behavior: ["shy", "hisses if provoked"],
    petting: "Do not pet unless she approaches you.",
    location: "Garden behind Cafeteria"
  },
  {
    id: 3,
    name: "Gravy",
    image: "../Images/Gravy.jpg",
    age: "1.5 years",
    gender: "female",
    vaccinated: true,
    sterilized: false,
    personality: "Playful and energetic. Loves chasing leaves.",
    behavior: ["playful", "attention-seeker"],
    petting: "Great with kids! Loves belly rubs.",
    location: "Parking Lot"
  },
  {
    id: 4,
    name: "Calico",
    image: "../Images/Calico.jpg",
    age: "4 years",
    gender: "Female",
    vaccinated: true,
    sterilized: true,
    personality: "Queen of the campus. Demands treats.",
    behavior: ["bold", "food-motivated"],
    petting: "Only if you have snacks.",
    location: "Near Library"
  },
  {
    id: 5,
    name: "Unnamed Kitten",
    image: "../Images/Kitten.jpg",
    age: "6 months",
    gender: "Male",
    vaccinated: false,
    sterilized: false,
    personality: "Curious and tiny. Always exploring.",
    behavior: ["timid", "playful"],
    petting: "Very gentle—she's still small!",
    location: "Hostel Backyard"
  },
  {
    id: 6,
    name: "Gate Guardian",
    image: "../Images/Gate.jpg",
    age: "5 years",
    gender: "Male",
    vaccinated: true,
    sterilized: true,
    personality: "Watchful and protective of his territory.",
    behavior: ["alert", "territorial"],
    petting: "Approach slowly, he's cautious with strangers.",
    location: "Main Gate Area"
  },
  {
    id: 7,
    name: "Mystery Cat",
    image: "../Images/IDK her name.jpg",
    age: "Unknown",
    gender: "Female",
    vaccinated: false,
    sterilized: false,
    personality: "Elusive and mysterious. Rarely seen.",
    behavior: ["shy", "independent"],
    petting: "Best admired from a distance.",
    location: "Behind Science Building"
  },
  {
    id: 8,
    name: "Little Shadow",
    image: "../Images/IDK her name 2.jpg",
    age: "1 year",
    gender: "Male",
    vaccinated: false,
    sterilized: true,
    personality: "Quiet but affectionate once she knows you.",
    behavior: ["reserved", "gentle"],
    petting: "Let her come to you first.",
    location: "Near Cafeteria"
  },
  {
    id: 9,
    name: "Gravy Jr.",
    image: "../Images/Gravy 2.jpg",
    age: "1 year",
    gender: "Female",
    vaccinated: true,
    sterilized: false,
    personality: "Mini version of Gravy with the same playful energy.",
    behavior: ["energetic", "mischievous"],
    petting: "Loves playing with string toys.",
    location: "Parking Lot"
  },
  {
    id: 10,
    name: "Jambo's Twin",
    image: "../Images/Female Jambo.jpg",
    age: "3 years",
    gender: "Female",
    vaccinated: false,
    sterilized: true,
    personality: "Looks like Jambo but much friendlier.",
    behavior: ["social", "vocal"],
    petting: "Will meow for attention and pets.",
    location: "Garden Area"
  },
  {
    id: 11,
    name: "Tiny Paws",
    image: "../Images/Kitten 2.jpg",
    age: "4 months",
    gender: "Male",
    vaccinated: false,
    sterilized: false,
    personality: "The baby of the group. Full of energy.",
    behavior: ["playful", "curious"],
    petting: "Very gentle pets only!",
    location: "Hostel Backyard"
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

// Doodle Templates
const doodleTemplates = [
  // Cat face
  `<svg viewBox="0 0 100 100"><path d="M30,50 Q50,20 70,50 Q80,65 70,80 Q50,95 30,80 Q20,65 30,50" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="40" cy="45" r="3" fill="currentColor"/><circle cx="60" cy="45" r="3" fill="currentColor"/><path d="M45,60 Q50,65 55,60" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
  // Sleeping cat
  `<svg viewBox="0 0 100 100"><path d="M30,50 Q50,30 70,50" fill="none" stroke="currentColor" stroke-width="2"/><path d="M35,50 Q40,55 45,50" fill="none" stroke="currentColor" stroke-width="1"/><path d="M55,50 Q60,55 65,50" fill="none" stroke="currentColor" stroke-width="1"/></svg>`,
  // Paw print
  `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="15" fill="currentColor"/><circle cx="30" cy="30" r="8" fill="currentColor"/><circle cx="70" cy="30" r="8" fill="currentColor"/><circle cx="30" cy="70" r="8" fill="currentColor"/><circle cx="70" cy="70" r="8" fill="currentColor"/></svg>`,
  // Sitting cat
  `<svg viewBox="0 0 100 100"><path d="M40,60 L40,80 Q40,90 50,90 Q60,90 60,80 L60,60 Q60,40 50,30 Q40,20 30,30 Q20,40 20,60 L20,80 Q20,90 30,90 Q40,90 40,80" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="35" cy="45" r="3" fill="currentColor"/><circle cx="65" cy="45" r="3" fill="currentColor"/></svg>`
];

// Load Cat Cards with Doodles
cats.forEach((cat, index) => {
  const card = document.createElement('div');
  card.className = 'cat-card';
  const randomDoodle = doodleTemplates[Math.floor(Math.random() * doodleTemplates.length)];
  
  card.innerHTML = `
    <img src="${cat.image}" alt="${cat.name}" class="cat-main-img">
    <div class="cat-doodle">
      ${randomDoodle}
    </div>
    <div class="cat-info">
      <h3>${cat.name}</h3>
      <p><img src="../Images/${cat.gender.toLowerCase()}.svg" class="gender-icon-small" alt="${cat.gender}"> <span class="cat-age">${cat.age}</span></p>
    </div>
  `;
  
  // Set random position for each doodle
  const randomX = Math.floor(Math.random() * 20) - 10;
  const randomY = Math.floor(Math.random() * 20) - 10;
  card.querySelector('.cat-doodle').style.transform = `translate(${randomX}px, ${randomY}px)`;
  
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
  updateCounter();
}

function updateModalContent(cat) {
  modalBody.innerHTML = `
    <div class="cat-details">
      <div class="cat-header">
        <h2>${cat.name}</h2>
        <img src="../Images/${cat.gender}.svg" class="gender-icon" alt="${cat.gender}">
      </div>
      <img src="${cat.image}" alt="${cat.name}" class="modal-cat-img">
      <div class="details-grid">
        <div class="detail-item">
          <span class="detail-label">Age:</span>
          <span class="detail-value">${cat.age}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Vaccinated:</span>
          <img src="../Images/${cat.vaccinated ? 'yes' : 'no'}.svg" class="status-icon" alt="${cat.vaccinated ? 'Yes' : 'No'}">
        </div>
        <div class="detail-item">
          <span class="detail-label">Sterilized:</span>
          <img src="../Images/${cat.sterilized ? 'yes' : 'no'}.svg" class="status-icon" alt="${cat.sterilized ? 'Yes' : 'No'}">
        </div>
        <div class="detail-item full-width">
          <span class="detail-label">Personality:</span>
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
  `;
}

function updateCounter() {
  catCounter.textContent = `${currentCatIndex + 1}/${cats.length}`;
}

// Navigation Functions
function showNextCat() {
  currentCatIndex = (currentCatIndex + 1) % cats.length;
  updateModalContent(cats[currentCatIndex]);
  updateCounter();
}

function showPrevCat() {
  currentCatIndex = (currentCatIndex - 1 + cats.length) % cats.length;
  updateModalContent(cats[currentCatIndex]);
  updateCounter();
}

// Event Listeners
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

prevBtn.addEventListener('click', showPrevCat);
nextBtn.addEventListener('click', showNextCat);

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
  if (modal.style.display === 'block') {
    if (e.key === 'ArrowLeft') {
      showPrevCat();
    } else if (e.key === 'ArrowRight') {
      showNextCat();
    } else if (e.key === 'Escape') {
      modal.style.display = 'none';
    }
  }
});