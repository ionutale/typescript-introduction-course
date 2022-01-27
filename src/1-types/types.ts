// primitives
const age: number = 0;
const isMarried: boolean = true;
const username: string = 'ion';

// union types
// userId can be a number in case of an auto incremental id
// or a string in case of uuid
let userId: number | string;
userId = 1234;
userId = "8osh7fda87sd8fa0sd87a";

// type aliases
type userIdType = number | string;

type mapPinType = {
  latitude: number;
  longitude: number;
}
const mapPin: mapPinType = { latitude: 1.1423123, longitude: 1.3413241 }

// enum types
enum allowedColors {
  RED,
  YELLOW,
  BLUE,
}
console.log(allowedColors)

// interfaces
interface UserInterface {
  name: string;
  age: number;
  isMarried: boolean;
}

const userDario: UserInterface = {
  name: "dario",
  age: 27,
  isMarried: false,
}

// interface can be changed later on
interface UserInterface {
  speaksEnglish?: boolean
}
userDario.speaksEnglish = true

// literal types
const email: "iutale@florence-consulting.it" = "iutale@florence-consulting.it";

// why is usefull the literal type?
const alignment: "left" | "right" | "center" = "center";

// no value primitives
const isSunny: undefined = undefined;
const isRaining: null = null;

// tuples 
const address: [string, number, string] = ['via laiano', 5, 'Pisa']
// use state in react returns a tuple

// tuples are not fixed array, can be altered later on
address.push('Italy')
console.log(address) // ['via laiano', 5, 'Pisa', 'Italy']

// void type
function executeBatch(): void {
  console.log('batch start executing')
  console.log('batch is running')
  console.log('batch finshed executing')
}

// unknown type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Italy'
//userName = userInput; // no error if type is any 
if (typeof userInput === 'string') {
  userName = userInput;
}

// never type
function generateError(message: string, code: number): never {
  throw { message, code }
}
generateError('not found', 404)

function gameLoop(): never {
  while (true) {
    // loop 60 times per seconds
    // game logic and render to the screen
  }
}
