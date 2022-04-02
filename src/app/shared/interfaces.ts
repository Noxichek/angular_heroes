export interface User {
  email: string,
  password: string,
  username: string,
}

export interface UserSession {
  user: User,
  sessionStartTime: string
}

export interface Hero {
  id: number;
  name: string;
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
  [key: string] : string
}

// powerstats: {
//   intelligence: string;
//   strength: string;
//   speed: string;
//   durability: string;
//   power: string;
//   combat: string;
// }
