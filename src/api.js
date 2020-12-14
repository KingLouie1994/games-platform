// Base URL
const base_url = "https://api.rawg.io/api/";

// Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;

const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

// New Games
const new_Games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

// Upcoming Games
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const newGamesUrl = () => `${base_url}${new_Games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;

// Game Details
export const gameDetailsUrl = (gameId) => `${base_url}games/${gameId}`;
