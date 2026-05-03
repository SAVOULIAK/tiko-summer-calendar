const summerData = [
  {
    week: 1,
    start: "2026-05-18",
    end: "2026-05-24",
    title: "Picnic in Kaivopuisto",
    title_fi: "Piknik Kaivopuistossa",
    nickname: "Recommended by Semion Chukhno",
    nickname_fi: "Suosittelija Semion Chukhno",
    description:
      "Start summer with a relaxing picnic near the sea. Bring snacks, a blanket and enjoy Helsinki’s early summer atmosphere.",
    description_fi:
      "Aloita kesä rentouttavalla piknikillä meren rannalla. Tuo eväitä, peitto ja nauti Helsingin alkukesän tunnelmasta.",
    icon: "🧺",
    image: "images/Kaivopuisto_picnic.jpg",
    map: "https://www.google.com/maps?q=Kaivopuisto+Helsinki"
  },
  {
    week: 2,
    start: "2026-05-25",
    end: "2026-05-31",
    title: "Trip to Suomenlinna",
    title_fi: "Retki Suomenlinnaan",
    nickname: "Recommended by Anastasia Savouliak",
    nickname_fi: "Suosittelija Anastasia Savouliak",
    description:
      "Take the ferry and explore the sea fortress. Great views, walking routes and perfect photo spots for a summer day.",
    description_fi:
      "Hyppää lautalle ja tutustu merilinnoitukseen. Hienot näkymät, kävelyreitit ja täydelliset kuvauspaikat kesäpäivään.",
    icon: "⛴️",
    image: "images/Suomenlinna.jpg",
    map: "https://www.google.com/maps?q=Suomenlinna+Helsinki"
  },
  {
    week: 3,
    start: "2026-06-01",
    end: "2026-06-07",
    title: "Bike Ride in Central Park",
    title_fi: "Pyöräretki Keskuspuistossa",
    nickname: "Recommended by Semion Chukhno",
    nickname_fi: "Suosittelija Semion Chukhno",
    description:
      "Enjoy a cycling day through Helsinki Central Park. A calm green route with lots of fresh air and easy movement.",
    description_fi:
      "Nauti pyöräilypäivästä Helsingin Keskuspuistossa. Rauhallinen vihreä reitti, raitis ilma ja helppoa liikuntaa.",
    icon: "🚲",
    image: "images/Keskuspuisto.jpg",
    map: "https://www.google.com/maps?q=Helsinki+Central+Park"
  },
  {
    week: 4,
    start: "2026-06-08",
    end: "2026-06-14",
    title: "Music Night at Linnanmäki Area",
    title_fi: "Musiikki-ilta Linnanmäen alueella",
    nickname: "Recommended by Anastasia Savouliak",
    nickname_fi: "Suosittelija Anastasia Savouliak",
    description:
      "Visit the amusement park area and enjoy a lively summer evening with lights, rides and fun atmosphere.",
    description_fi:
      "Vieraile huvipuiston alueella ja nauti vilkkaasta kesäillasta valoineen, laitteineen ja hauskalla tunnelmalla.",
    icon: "🎵",
    image: "images/Linnanmaki.jpg",
    map: "https://www.google.com/maps?q=Linnanm%C3%A4ki+Helsinki"
  },
  {
    week: 5,
    start: "2026-06-15",
    end: "2026-06-21",
    title: "Botanic Garden Walk",
    title_fi: "Kävely Kasvitieteellisessä puutarhassa",
    nickname: "Recommended by Semion Chukhno",
    nickname_fi: "Suosittelija Semion Chukhno",
    description:
      "A peaceful visit to the botanic garden is perfect for a quieter summer week. Great place for photos and relaxing.",
    description_fi:
      "Rauhallinen vierailu kasvitieteellisessä puutarhassa sopii hiljaisempaan kesäviikkoon. Hyvä paikka kuvaamiseen ja rentoutumiseen.",
    icon: "🌸",
    image: "images/Botanic-Garden-Walk.jpg",
    map: "https://www.google.com/maps?q=Kaisaniemi+Botanic+Garden+Helsinki"
  },
  {
    week: 6,
    start: "2026-06-22",
    end: "2026-06-28",
    title: "Beach Day at Hietaniemi",
    title_fi: "Rantapäivä Hietaniemessä",
    nickname: "Recommended by Anastasia Savouliak",
    nickname_fi: "Suosittelija Anastasia Savouliak",
    description:
      "Spend a warm summer day at one of Helsinki’s best-known beaches. You can swim, sunbathe or just chill with friends.",
    description_fi:
      "Vietä lämmin kesäpäivä yhdellä Helsingin tunnetuimmista rannoista. Voit uida, ottaa aurinkoa tai chillailla ystävien kanssa.",
    icon: "🏖️",
    image: "images/Hietaranta.jpg",
    map: "https://www.google.com/maps?q=Hietaniemi+Beach+Helsinki"
  },
  {
    week: 7,
    start: "2026-06-29",
    end: "2026-07-05",
    title: "Photo Walk in Oodi & City Center",
    title_fi: "Valokuvauskävely Oodissa ja keskustassa",
    nickname: "Recommended by Semion Chukhno",
    nickname_fi: "Suosittelija Semion Chukhno",
    description:
      "Take a camera or phone and capture summer moments around Oodi, Töölönlahti and central Helsinki.",
    description_fi:
      "Ota kamera tai puhelin mukaan ja taltioi kesän hetkiä Oodin, Töölönlahden ja Helsingin keskustan ympäristössä.",
    icon: "📷",
    image: "images/oodi.jpg",
    map: "https://www.google.com/maps?q=Oodi+Helsinki"
  },
  {
    week: 8,
    start: "2026-07-06",
    end: "2026-07-12",
    title: "Kayak / Sea Adventure",
    title_fi: "Melontaa / merenseikkailu",
    nickname: "Recommended by Anastasia Savouliak",
    nickname_fi: "Suosittelija Anastasia Savouliak",
    description:
      "Try a seaside activity week. A simple waterfront trip or kayak-themed day makes the calendar more adventurous.",
    description_fi:
      "Kokeile rantaviikkoa. Yksinkertainen rantaretki tai melontateemainen päivä tekee kalenterista seikkailullisemman.",
    icon: "🛶",
    image: "images/kayak.jpg",
    map: "https://www.google.com/maps?q=Helsinki+waterfront"
  },
  {
    week: 9,
    start: "2026-07-13",
    end: "2026-07-19",
    title: "Nature Day in Nuuksio",
    title_fi: "Luontopäivä Nuuksiossa",
    nickname: "Recommended by Semion Chukhno",
    nickname_fi: "Suosittelija Semion Chukhno",
    description:
      "Take a break from the city and enjoy trails, lakes and forest views. A great week for a nature challenge.",
    description_fi:
      "Pidä taukoa kaupungista ja nauti poluista, järvistä ja metsänäkymistä. Hieno viikko luontohaasteelle.",
    icon: "🌲",
    image: "images/nuuksio.jpg",
    map: "https://www.google.com/maps?q=Nuuksio+National+Park"
  },
  {
    week: 10,
    start: "2026-07-20",
    end: "2026-07-26",
    title: "Ice Cream by the Harbor",
    title_fi: "Jäätelöä satamassa",
    nickname: "Recommended by Anastasia Savouliak",
    nickname_fi: "Suosittelija Anastasia Savouliak",
    description:
      "Simple but perfect: walk by the sea, get ice cream and enjoy the summer mood near the city center.",
    description_fi:
      "Yksinkertaista mutta täydellistä: kävele meren rannalla, hanki jäätelö ja nauti kesätunnelmasta keskustan lähellä.",
    icon: "🍦",
    image: "images/Ice-Cream.jpg",
    map: "https://www.google.com/maps?q=Helsinki+Market+Square"
  },
  {
    week: 11,
    start: "2026-07-27",
    end: "2026-08-02",
    title: "Allas Sea Pool Relax Day",
    title_fi: "Rentoutumispäivä Allas Sea Poolissa",
    nickname: "Recommended by Semion Chukhno",
    nickname_fi: "Suosittelija Semion Chukhno",
    description:
      "Pools, sea views and a summer city vibe. Great choice for a more relaxing week with friends or family.",
    description_fi:
      "Altaita, merinäkymiä ja kesäkaupungin tunnelmaa. Hyvä valinta rennompaan viikkoon ystävien tai perheen kanssa.",
    icon: "🌊",
    image: "images/allas-pool.jpg",
    map: "https://www.google.com/maps?q=Allas+Sea+Pool+Helsinki"
  },
  {
    week: 12,
    start: "2026-08-03",
    end: "2026-08-09",
    title: "Seurasaari Summer Escape",
    title_fi: "Kesäpako Seurasaareen",
    nickname: "Recommended by Anastasia Savouliak",
    nickname_fi: "Suosittelija Anastasia Savouliak",
    description:
      "Spend the day outdoors, explore island scenery and enjoy a peaceful summer atmosphere close to the city.",
    description_fi:
      "Vietä päivä ulkoilmassa, tutustu saaren maisemiin ja nauti rauhallisesta kesätunnelmasta lähellä kaupunkia.",
    icon: "🏕️",
    image: "images/Seurasaari.jpg",
    map: "https://www.google.com/maps?q=Seurasaari+Helsinki"
  },
  {
    week: 13,
    start: "2026-08-10",
    end: "2026-09-02",
    title: "Löyly Sunset Evening",
    title_fi: "Auringonlasku-ilta Löylyssä",
    nickname: "Recommended by Semion Chukhno",
    nickname_fi: "Suosittelija Semion Chukhno",
    description:
      "Finish the calendar with a stylish seaside evening. Sauna, terrace and sunset views make a memorable ending.",
    description_fi:
      "Päätä kalenteri tyylikkääseen rantailtaan. Sauna, terassi ja auringonlaskunäkymät tekevät päättäjäisestä unohtumattoman.",
    icon: "🌅",
    image: "images/loyly.jpg",
    map: "https://www.google.com/maps?q=L%C3%B6yly+Helsinki"
  }
];

const translations = {
  en: {
    sectionTitle: "Border Stamps / Summer Weeks",
    statusNotStarted: "The calendar has not started yet.",
    statusAllOpen: "All summer stamps are now available.",
    statusOpen: (n) => `Weeks 1-${n} are open right now.`,
    modalStamp: "ENTRY PERMITTED",
    weekPrefix: "Week",
    lockedAlert: "This border stamp is still locked. Come back on the correct week.",
    langButton: "Suomeksi"
  },
  fi: {
    sectionTitle: "Rajamerkit / Kesäviikot",
    statusNotStarted: "Kalenteri ei ole vielä alkanut.",
    statusAllOpen: "Kaikki kesän rajamerkit ovat nyt avoinna.",
    statusOpen: (n) => `Viikot 1-${n} ovat nyt auki.`,
    modalStamp: "MAAHANTULO SALLITTU",
    weekPrefix: "Viikko",
    lockedAlert: "Tämä rajamerkki on vielä lukittu. Palaa oikealla viikolla.",
    langButton: "In English"
  }
};

let currentLang = "en";

function t(key) {
  return translations[currentLang][key];
}

function field(item, base) {
  return currentLang === "fi" ? (item[`${base}_fi`] || item[base]) : item[base];
}

const calendarGrid = document.getElementById("calendarGrid");
const statusText = document.getElementById("statusText");
const langToggleBtn = document.getElementById("langToggle");
const sectionTitleEl = document.querySelector(".section-header h2");
const modalStampEl = document.querySelector(".modal-stamp");

const modal = document.getElementById("eventModal");
const closeModalBtn = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalNickname = document.getElementById("modalNickname");
const modalDescription = document.getElementById("modalDescription");
const modalImage = document.getElementById("modalImage");
const modalMapFrame = document.getElementById("modalMapFrame");

const calendarStart = new Date("2026-05-18T00:00:00");

function getCurrentWeekIndex() {
  // TEST DATE for development.
  // Later change this line to: const today = new Date();
  const today = new Date("2026-07-10T00:00:00");

  const diffMs = today - calendarStart;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    return -1;
  }

  return Math.floor(diffDays / 7);
}

function formatDateRange(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const startDay = startDate.getDate();
  const startMonth = startDate.getMonth() + 1;
  const endDay = endDate.getDate();
  const endMonth = endDate.getMonth() + 1;

  return `${startDay}.${startMonth}. - ${endDay}.${endMonth}.`;
}

function updateStatusText(currentWeekIndex) {
  if (currentWeekIndex < 0) {
    statusText.textContent = t("statusNotStarted");
  } else if (currentWeekIndex >= 12) {
    statusText.textContent = t("statusAllOpen");
  } else {
    statusText.textContent = t("statusOpen")(currentWeekIndex + 1);
  }
}

function getEmbedMapUrl(mapUrl) {
  return `${mapUrl}&output=embed`;
}

let currentItem = null;

function openModal(item) {
  currentItem = item;
  modalTitle.textContent = field(item, "title");
  modalDate.textContent = `${t("weekPrefix")} ${item.week}: ${formatDateRange(item.start, item.end)}`;
  modalNickname.textContent = field(item, "nickname");
  modalDescription.textContent = field(item, "description");
  modalMapFrame.src = getEmbedMapUrl(item.map);

  if (item.image) {
    modalImage.src = item.image;
    modalImage.alt = field(item, "title");
    modalImage.hidden = false;
  } else {
    modalImage.hidden = true;
    modalImage.src = "";
    modalImage.alt = "";
  }

  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  modalMapFrame.src = "";
  currentItem = null;
}

function createStampCard(item, currentWeekIndex) {
  const card = document.createElement("button");
  card.className = `stamp-door week-${item.week}`;
  card.type = "button";

  const isUnlocked = item.week - 1 <= currentWeekIndex;

  if (!isUnlocked) {
    card.classList.add("locked");
  } else {
    card.classList.add("opened");
  }

  const visual = item.image
    ? `<img class="stamp-image" src="${item.image}" alt="${field(item, "title")}" loading="lazy" />`
    : `<div class="icon">${item.icon}</div>`;

  card.innerHTML = `
    <div class="week-label">${t("weekPrefix")} ${item.week}</div>
    <div class="date-label">${formatDateRange(item.start, item.end)}</div>
    ${visual}
  `;

  card.addEventListener("click", () => {
    if (!isUnlocked) {
      alert(t("lockedAlert"));
      return;
    }

    openModal(item);
  });

  return card;
}

function renderCalendar() {
  const currentWeekIndex = getCurrentWeekIndex();
  updateStatusText(currentWeekIndex);

  calendarGrid.innerHTML = "";

  summerData.forEach((item) => {
    const card = createStampCard(item, currentWeekIndex);
    calendarGrid.appendChild(card);
  });
}

function applyLanguage() {
  document.body.dataset.lang = currentLang;
  document.documentElement.lang = currentLang;
  sectionTitleEl.textContent = t("sectionTitle");
  modalStampEl.textContent = t("modalStamp");
  langToggleBtn.textContent = t("langButton");

  renderCalendar();

  if (currentItem && !modal.classList.contains("hidden")) {
    modalTitle.textContent = field(currentItem, "title");
    modalDate.textContent = `${t("weekPrefix")} ${currentItem.week}: ${formatDateRange(currentItem.start, currentItem.end)}`;
    modalNickname.textContent = field(currentItem, "nickname");
    modalDescription.textContent = field(currentItem, "description");
    if (currentItem.image) modalImage.alt = field(currentItem, "title");
  }
}

langToggleBtn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "fi" : "en";
  applyLanguage();
});

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

applyLanguage();