import { getUser } from './services/user';
(async () => {
    const user = await getUser();
    console.log(`user : `, user);
})();


