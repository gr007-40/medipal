import { getCookie, hasCookie } from "cookies-next";
import { jwtVerify } from "jose";
import User from "../../Models/User";

export default async function handler(req, res) {
  if (hasCookie("token", { req, res })) {
    const jwt = getCookie("token", { req, res });
    const payload = await jwtVerify(
      jwt,
      new TextEncoder().encode(process.env.SECRET)
    ).then((payload)=>{return payload.payload}).catch(console.error);
    console.log(payload);
    const user = await User.findOne({ where: { id: await payload.id } })
      .then((user) => {
        return user.dataValues;
      })
      .catch(console.error);
    console.log(user);
    res.status(200).json({
      isVerified: true,
      id: user.id,
      name: user.name,
      isDoctor: user.isDoctor,
      isHospitalAdmin: user.isHospitalAdmin,
      // profileImage: user.proPic,
    });
    return;
  } else {
    res.status(200).json({ isVerified: false });
    return;
  }
}
