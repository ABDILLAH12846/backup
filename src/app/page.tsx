"use client"

import Image from "next/image";
import Gambar from "../resource/undraw_login_re_4vu2.svg"
import { useRouter } from "next/navigation";
// import styles from "./page.module.css";

export default function Home() {
  const router = useRouter()
  return (
    <main className="login">
      <div className="right">
            <Image src={Gambar} alt=""/>
            {/* <img src={Kamu} alt="" /> */}
        </div>
        <div className="left">
            <form action="" className="input">
                {/* <!-- <label for="username">username</label> --> */}
                <input type="text" name="username"/>
                {/* <!-- <label for="password">password</label> --> */}
                <input type="password" name="password"/>
                <button type="submit" onClick={()=>router.replace('/dashboard')}>Sign In</button>
            </form>
        </div>
    </main>
  );
}
