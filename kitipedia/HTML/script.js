// Cat Data with Consistent Naming
const cats = [
  {
    id: 1,
    name: "Santra",
    image: "../Images/cats/santra.jpg",
    bgImage: "../Images/backgrounds/Santra-bg.svg",
    doodle: "../Images/doodles/santra-doodle.png",
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
    image: "../Images/cats/Jambo.jpg",
    bgImage: "../Images/backgrounds/Jambo-bg.jpg",
    doodle: "../Images/doodles/jambo-doodle.png",
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
    image: "../Images/cats/Gravy.jpg",
    bgImage: "../Images/backgrounds/gravy-bg.svg",
    doodle: "../Images/doodles/gravy-doodle.png",
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
    image: "../Images/cats/Calico.jpg", 
    bgImage: "../Images/backgrounds/calico-bg.jpg",
    doodle: "../Images/doodles/calico-doodle.png",
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
    name: "Chaya",
    image: "../Images/cats/chaya.jpg",
    bgImage: "../Images/backgrounds/chaya-bg.jpg",
    doodle: "../Images/doodles/chaya-doodle.png",
    age: "6 months",
    gender: "Female",
    vaccinated: false,
    sterilized: true,
    personality: "Curious and tiny. Always exploring.",
    behavior: ["timid", "playful"],
    petting: "Very gentle—she's still small!",
    location: "Hostel Backyard"
  },
  {
    id: 6,
    name: "Gate Guardian",
    image: "../Images/cats/Gate.jpg",
    bgImage: "../Images/backgrounds/gate-guardian-bg.jpg",
    doodle: "../Images/doodles/gate-doodle.png",
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
    image: "../Images/cats/IDK her name.jpg",
    bgImage: "../Images/backgrounds/mystery-cat-bg.jpg",
    doodle: "../Images/doodles/idk-doodle.png",
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
    image: "../Images/cats/Kitten 2.jpg",
    bgImage: "../Images/backgrounds/little-shadow-bg.jpg",
    doodle: "../Images/doodles/little-shadow-doodle.png",
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
    name: "Idli",
    image: "../Images/cats/idli.jpg",
    bgImage: "../Images/backgrounds/idli-bg.jpg",
    doodle: "../Images/doodles/Idli-doodle.svg",
    age: "4 year",
    gender: "Male",
    vaccinated: true,
    sterilized: true,
    personality: "Mini version of Gravy with the same playful energy.",
    behavior: ["energetic", "mischievous"],
    petting: "Loves playing with string toys.",
    location: "Parking Lot"
  },
  {
    id: 10,
    name: "Jambo's Twin",
    image: "../Images/cats/Fjambo.jpg",
    bgImage: "../Images/backgrounds/Fjambo-bg.jpg",
    doodle: "../Images/doodles/Fjambo-doodle.png",
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
    name: "Mumma cat",
    image: "../Images/cats/mumma cat.jpg",
    bgImage: "../Images/backgrounds/tiny-paws-bg.jpg",
    doodle: "../Images/doodles/mumma cat-doodle.png",
    age: "4 months",
    gender: "Male",
    vaccinated: false,
    sterilized: false,
    personality: "The baby of the group. Full of energy.",
    behavior: ["playful", "curious"],
    petting: "Very gentle pets only!",
    location: "Hostel Backyard"
  },
  {
    id: 12,
    name: "Toothless",
    image: "../Images/cats/Thoothless.jpg",
    bgImage: "../Images/backgrounds/toothless-bg.jpg",
    doodle: "../Images/doodles/toothless-doodle.png",
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

// Load Cat Cards with Personalized Doodles
cats.forEach((cat, index) => {
  const card = document.createElement('div');
  card.className = 'cat-card';
  card.setAttribute('data-cat', cat.name.toLowerCase().replace(' ', '-'));
  
  card.innerHTML = `
    <img src="${cat.image}" alt="${cat.name}" class="cat-main-img">
    <div class="cat-doodle">
      <img src="${cat.doodle}" alt="${cat.name} doodle" class="doodle-img">
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
  modalBody.innerHTML = `
    <div class="modal-bg-container" style="--cat-bg: url('${cat.bgImage}')">
      <div class="modal-bg-overlay"></div>
      <div class="modal-content-wrapper">
        <div class="cat-header">
          <div class="name-doodle-container">
            <img src="${cat.doodle}" alt="${cat.name} doodle" class="modal-doodle">
            <h2>${cat.name}</h2>
          </div>
          <img src="../Images/icons/${cat.gender.toLowerCase()}.svg" class="gender-icon" alt="${cat.gender}">
        </div>
        <img src="${cat.image}" alt="${cat.name}" class="modal-cat-img">
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
    </div>
  `;
  updateCounter();
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
