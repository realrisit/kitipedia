// Cat Data

const cats = [
  {
    id: 1,
    name: "Santra",
    image: "../Images/Santra.jpg",
    bgImage: "../Images/santra bg.avif",
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
    gender: "Female",
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
    images: ["../Images/Gravy.jpg", "../Images/Gravy 2.jpg"],
    age: "1.5 years",
    gender: "Male",
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
    bgImage: "../Images/calicobg.jpg",
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
    gender: "Female",
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
    gender: "Female",
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
    gender: "Male",
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

// Load Cat Cards
cats.forEach((cat, index) => {
  const card = document.createElement('div');
  card.className = 'cat-card';
  card.innerHTML = `
    <img src="${cat.image}" alt="${cat.name}">
    <div class="cat-info">
      <h3>${cat.name}</h3>
      <p>${cat.gender}, ${cat.age}</p>
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
  updateCounter();
}

let currentImageIndex = 0;

function updateModalContent(cat) {
  currentImageIndex = 0;

  const imagesHtml = `
    <div class="image-slider">
      <button id="prevImage" class="slider-btn">⟨</button>
      <img src="${cat.images[currentImageIndex]}" id="catImage" class="modal-cat-img" alt="${cat.name}">
      <button id="nextImage" class="slider-btn">⟩</button>
    </div>
    <p class="image-counter" id="imageCounter">${currentImageIndex + 1} / ${cat.images.length}</p>
  `;

  modalBody.innerHTML = `
    <div class="cat-details">
      <h2>${cat.name}</h2>
      ${imagesHtml}
      <div class="details">
        <p><strong>Age:</strong> ${cat.age}</p>
        <p><strong>Gender:</strong> ${cat.gender}</p>
        <p><strong>Vaccinated:</strong> ${cat.vaccinated ? '✅ Yes' : '❌ No'}</p>
        <p><strong>Sterilized:</strong> ${cat.sterilized ? '✅ Yes' : '❌ No'}</p>
        <p><strong>Personality:</strong> ${cat.personality}</p>
        <p><strong>Behavior:</strong> ${cat.behavior.join(', ')}</p>
        <p><strong>Petting Advice:</strong> ${cat.petting}</p>
        <p><strong>Usual Location:</strong> ${cat.location}</p>
      </div>
    </div>
  `;

  // Handle image navigation
  document.getElementById('prevImage').addEventListener('click', () => {
    if (currentImageIndex > 0) {
      currentImageIndex--;
      updateSliderImage(cat);
    }
  });

  document.getElementById('nextImage').addEventListener('click', () => {
    if (currentImageIndex < cat.images.length - 1) {
      currentImageIndex++;
      updateSliderImage(cat);
    }
  });
}

function updateSliderImage(cat) {
  const img = document.getElementById('catImage');
  const counter = document.getElementById('imageCounter');
  img.src = cat.images[currentImageIndex];
  counter.textContent = `${currentImageIndex + 1} / ${cat.images.length}`;
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