import { postData } from "../../utils";
import Router from "next/router";

export default function profile() {
  postData("/api/verify", {}).then((user) => {
    if (user.isVerified) {
      if (user.isDoctor) {
        Router.push("/profile/doctor").then((_) => {});
      } else {
        Router.push("/profile/patient").then((_) => {});
      }
    } else {
      Router.push("/").then((_) => {});
    }
  });
  return <></>;
}
