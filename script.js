const summerData = [
  {
    week: 1,
    start: "2026-05-18",
    end: "2026-05-24",
    title: "Picnic in Kaivopuisto",
    nickname: "Recommended by SunnyFox",
    description:
      "Start summer with a relaxing picnic near the sea. Bring snacks, a blanket and enjoy Helsinki’s early summer atmosphere.",
    icon: "🧺",
    map: "https://www.google.com/maps?q=Kaivopuisto+Helsinki"
  },
  {
    week: 2,
    start: "2026-05-25",
    end: "2026-05-31",
    title: "Trip to Suomenlinna",
    nickname: "Recommended by CodeCaptain",
    description:
      "Take the ferry and explore the sea fortress. Great views, walking routes and perfect photo spots for a summer day.",
    icon: "⛴️",
    map: "https://www.google.com/maps?q=Suomenlinna+Helsinki"
  },
  {
    week: 3,
    start: "2026-06-01",
    end: "2026-06-07",
    title: "Bike Ride in Central Park",
    nickname: "Recommended by PixelRider",
    description:
      "Enjoy a cycling day through Helsinki Central Park. A calm green route with lots of fresh air and easy movement.",
    icon: "🚲",
    map: "https://www.google.com/maps?q=Helsinki+Central+Park"
  },
  {
    week: 4,
    start: "2026-06-08",
    end: "2026-06-14",
    title: "Music Night at Linnanmäki Area",
    nickname: "Recommended by MelodyByte",
    description:
      "Visit the amusement park area and enjoy a lively summer evening with lights, rides and fun atmosphere.",
    icon: "🎵",
    map: "https://www.google.com/maps?q=Linnanm%C3%A4ki+Helsinki"
  },
  {
    week: 5,
    start: "2026-06-15",
    end: "2026-06-21",
    title: "Botanic Garden Walk",
    nickname: "Recommended by GreenBug",
    description:
      "A peaceful visit to the botanic garden is perfect for a quieter summer week. Great place for photos and relaxing.",
    icon: "🌸",
    map: "https://www.google.com/maps?q=Kaisaniemi+Botanic+Garden+Helsinki"
  },
  {
    week: 6,
    start: "2026-06-22",
    end: "2026-06-28",
    title: "Beach Day at Hietaniemi",
    nickname: "Recommended by WaveCoder",
    description:
      "Spend a warm summer day at one of Helsinki’s best-known beaches. You can swim, sunbathe or just chill with friends.",
    icon: "🏖️",
    map: "https://www.google.com/maps?q=Hietaniemi+Beach+Helsinki"
  },
  {
    week: 7,
    start: "2026-06-29",
    end: "2026-07-05",
    title: "Photo Walk in Oodi & City Center",
    nickname: "Recommended by LensHero",
    description:
      "Take a camera or phone and capture summer moments around Oodi, Töölönlahti and central Helsinki.",
    icon: "📷",
    map: "https://www.google.com/maps?q=Oodi+Helsinki"
  },
  {
    week: 8,
    start: "2026-07-06",
    end: "2026-07-12",
    title: "Kayak / Sea Adventure",
    nickname: "Recommended by RiverNerd",
    description:
      "Try a seaside activity week. A simple waterfront trip or kayak-themed day makes the calendar more adventurous.",
    icon: "🛶",
    map: "https://www.google.com/maps?q=Helsinki+waterfront"
  },
  {
    week: 9,
    start: "2026-07-13",
    end: "2026-07-19",
    title: "Nature Day in Nuuksio",
    nickname: "Recommended by ForestLoop",
    description:
      "Take a break from the city and enjoy trails, lakes and forest views. A great week for a nature challenge.",
    icon: "🌲",
    map: "https://www.google.com/maps?q=Nuuksio+National+Park"
  },
  {
    week: 10,
    start: "2026-07-20",
    end: "2026-07-26",
    title: "Ice Cream by the Harbor",
    nickname: "Recommended by ChillStack",
    description:
      "Simple but perfect: walk by the sea, get ice cream and enjoy the summer mood near the city center.",
    icon: "🍦",
    map: "https://www.google.com/maps?q=Helsinki+Market+Square"
  },
  {
    week: 11,
    start: "2026-07-27",
    end: "2026-08-02",
    title: "Allas Sea Pool Relax Day",
    nickname: "Recommended by SaunaDev",
    description:
      "Pools, sea views and a summer city vibe. Great choice for a more relaxing week with friends or family.",
    icon: "🌊",
    map: "https://www.google.com/maps?q=Allas+Sea+Pool+Helsinki"
  },
  {
    week: 12,
    start: "2026-08-03",
    end: "2026-08-09",
    title: "Seurasaari Summer Escape",
    nickname: "Recommended by CampByte",
    description:
      "Spend the day outdoors, explore island scenery and enjoy a peaceful summer atmosphere close to the city.",
    icon: "🏕️",
    map: "https://www.google.com/maps?q=Seurasaari+Helsinki"
  },
  {
    week: 13,
    start: "2026-08-10",
    end: "2026-09-02",
    title: "Löyly Sunset Evening",
    nickname: "Recommended by SunsetCoder",
    description:
      "Finish the calendar with a stylish seaside evening. Sauna, terrace and sunset views make a memorable ending.",
    icon: "🌅",
    map: "https://www.google.com/maps?q=L%C3%B6yly+Helsinki"
  }
];

const calendarGrid = document.getElementById("calendarGrid");
const statusText = document.getElementById("statusText");

const modal = document.getElementById("eventModal");
const closeModalBtn = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalNickname = document.getElementById("modalNickname");
const modalDescription = document.getElementById("modalDescription");
const modalMap = document.getElementById("modalMap");

const calendarStart = new Date("2026-05-18T00:00:00");

function getCurrentWeekIndex() {
  const today = new Date("2026-07-10"); // тестовая дата всю функцию заменила для тестирования окошек

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
    statusText.textContent = "The calendar has not started yet.";
  } else if (currentWeekIndex >= 12) {
    statusText.textContent = "All summer stamps are now available.";
  } else {
    statusText.textContent = `Weeks 1-${currentWeekIndex + 1} are open right now.`;
  }
}

function openModal(item) {
  modalTitle.textContent = item.title;
  modalDate.textContent = `Week ${item.week}: ${formatDateRange(item.start, item.end)}`;
  modalNickname.textContent = item.nickname;
  modalDescription.textContent = item.description;
  modalMap.href = item.map;

  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

function createStampCard(item, currentWeekIndex) {
  const card = document.createElement("button");
  card.className = `stamp-door week-${item.week}`;
  card.type = "button";

  const isUnlocked = item.week - 1 <= currentWeekIndex;

  if (!isUnlocked) {
    card.classList.add("locked");
  }

  if (isUnlocked) {
    card.classList.add("opened");
  }

  card.innerHTML = `
    <div class="week-label">Week ${item.week}</div>
    <div class="date-label">${formatDateRange(item.start, item.end)}</div>
    <div class="icon">${item.icon}</div>
  `;

  card.addEventListener("click", () => {
    if (!isUnlocked) {
      alert("This border stamp is still locked. Come back on the correct week.");
      return;
    }

    openModal(item);
  });

  return card;
}

function renderCalendar() {
  const currentWeekIndex = getCurrentWeekIndex();
  updateStatusText(currentWeekIndex);

  summerData.forEach((item) => {
    const card = createStampCard(item, currentWeekIndex);
    calendarGrid.appendChild(card);
  });
}

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

renderCalendar();
