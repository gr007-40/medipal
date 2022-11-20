import {SignJWT} from "jose";
// import nodemailer from 'nodemailer';

// Example POST method implementation:
export async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'include', //*same-origin, omit,
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

export async function signJWT({user, maxAge = "30d"}) {
    const userValues = {
        id: await user.id,
        isDoctor: await user.isDoctor,
        isHospitalAdmin: await user.isHospitalAdmin,
    };

    const jwt = new SignJWT(userValues)
        .setProtectedHeader({alg: "HS256"})
        .setIssuedAt()
        .setExpirationTime(maxAge)
        .sign(new TextEncoder().encode(process.env.SECRET));
    return await jwt;
}

// export async function sendMail(message) {
//     const transporter = nodemailer.createTransport(process.env.TRANSPORTER);
//     const info = await transporter.sendMail(message);
//     console.log(info.messageId);
//     return info;
// }
