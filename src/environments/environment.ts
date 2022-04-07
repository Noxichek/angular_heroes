export const environment: Environment = {
  production: false,
  apiUrl: 'https://www.superheroapi.com/api.php/',
  apiToken: '2246724375469588/'
};

export interface Environment {
  production: boolean,
  apiUrl: string,
  apiToken: string
}
