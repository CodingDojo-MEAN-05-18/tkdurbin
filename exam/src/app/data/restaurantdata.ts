import { Restaurant } from '../restaurant';

export const RESTAURANTS: Restaurant[] = [
 /* {
    id: randomId(),
    name: 'Back-A-Yard',
    cuisine: 'Caribbean',
  },
  {
    id: randomId(),
    name: 'Los Garcias',
    cuisine: 'Mexican',
  },
  {
    id: randomId(),
    name: 'The Habit',
    cuisine: 'Burgers',
  },
  {
    id: randomId(),
    name: 'Taco Bell',
    cuisine: 'Mystery',
  },
  {
    id: randomId(),
    name: 'Bo',
    cuisine: 'American Confort',
  },
  {
    id: randomId(),
    name: 'Sam and Ella',
    cuisine: 'Poison',
  },*/

];

function randomId() {
  return Math.round(Math.random() * 1000);
}
