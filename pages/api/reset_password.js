import { jwtVerify } from 'jose';

export default async function handler(req, res) {
    const { payload } = await jwtVerify(
        req.query.token,
        TextEncoder().encode(process.env.SECRET)
    ).catch(console.error);
    //TODO: redirect the user to password reset frontend
}
