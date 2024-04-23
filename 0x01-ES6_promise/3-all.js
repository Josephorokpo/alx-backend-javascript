import { uploadPhoto, createUser } from './utils.js';

export default async function handleProfileSignup() {
    try {
        const photoResult = await uploadPhoto();
        const userResult = await createUser();

        const firstName = userResult.body.firstName;
        const lastName = userResult.body.lastName;

        console.log(`${firstName} ${lastName}`);
    } catch (error) {
        console.log("Signup system offline");
    }
}
