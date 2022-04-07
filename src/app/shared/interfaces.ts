import {UserState} from "../global/services/store.service";

export interface User {
  email: string,
  password: string,
  username: string,
  userState?: UserState
}

export interface UserSession {
  user: User,
  sessionStartTime: string
}

export interface Hero {
  id: number;
  name: string;
  isSelected: boolean;
  image: {
    url: string
  }
  powerstats: HeroPowerstats
  biography: {
    'full-name': string;
    'alter-egos': string;
    aliases: string[];
    'place-of-birth': string;
    'first-appearance': string;
    publisher: string;
    alignment: string;
  }
  appearance: {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    'eye-color': string;
    'hair-color': string;
  }
  work: {
    occupation: string;
    base: string;
  }
  connections: {
    'group-affiliation': string;
    relatives: string;
  }
}

export interface HeroPowerstats {
  [key: string]: string
}

export interface CurrentSession {
  sessionStartTime: string,
  user: User
}

export interface Powerup {
  id: number,
  name: string,
  image: string,
  stats: string,
  usesLeft: number,
  selected: boolean,
  statsValue: number,
  statName: string,
  isActive: boolean
}

export const powerups: Powerup[] = [
  {
    id: 0,
    name: 'Glimmer Cape',
    image: 'https://courier.spectral.gg/images/dota/profile_badges/glimmer_cape.png?size=!source',
    stats: 'Intelligence +10',
    usesLeft: 5,
    selected: false,
    statsValue: 10,
    statName: 'intelligence',
    isActive: true
  },
  {
    id: 1,
    name: 'Black King Bar',
    image: 'https://courier.spectral.gg/images/dota/profile_badges/black_king_bar.png?size=!source',
    stats: 'Combat +10',
    usesLeft: 5,
    selected: false,
    statsValue: 10,
    statName: 'combat',
    isActive: true
  },
  {
    id: 2,
    name: 'Phase Boots',
    image: 'https://courier.spectral.gg/images/dota/profile_badges/phase_boots.png?size=!source',
    stats: 'Speed +10',
    usesLeft: 5,
    selected: false,
    statsValue: 10,
    statName: 'speed',
    isActive: true
  },
  {
    id: 3,
    name: 'Heart Of Tarrasque',
    image: 'https://courier.spectral.gg/images/dota/profile_badges/heart.png?size=!source',
    stats: 'Strength +10',
    usesLeft: 5,
    selected: false,
    statsValue: 10,
    statName: 'strength',
    isActive: true
  },
  {
    id: 4,
    name: 'Octarine Core',
    image: 'https://courier.spectral.gg/images/dota/profile_badges/octarine_core.png?size=!source',
    stats: 'Durability +10',
    usesLeft: 5,
    selected: false,
    statsValue: 10,
    statName: 'durability',
    isActive: true
  },
  {
    id: 5,
    name: 'Mjollnir',
    image: 'https://courier.spectral.gg/images/dota/profile_badges/mjollnir.png?size=!source',
    stats: 'Power +10',
    usesLeft: 5,
    selected: false,
    statsValue: 10,
    statName: 'power',
    isActive: true
  }
]

export interface Battle {
  winner: string,
  date: Date,
  myHero: string,
  enemyHero: string,
  myHeroId: string,
  enemyHeroId: string
}
