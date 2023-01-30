import { getUser } from './services/user';
console.log('Hello world!')



export interface UserInterface {
    id: number;
    name: string;
}
const account = async() => {
    const user = await getUser();
    console.log(`user : `, user);
}
account();


