import {postData} from "../../utils";
import Router from "next/router";
import Alert from "@mui/material/Alert";
import success from "../../components/success";

export default function profile(){
    postData('api/verify',{}).then((user=>{
        if(user.isVerified){
            if(user.isDoctor){
                Router.push('/profile/doctor').then(_=>{})
            }else{
                Router.push('/profile/patient').then(_=>{})
            }
        }else{
            Router.push('/').then(_=>success())
        }
    }))
}