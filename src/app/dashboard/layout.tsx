"use client"

import Link from "next/link";
// import React from 'react'
import { usePathname, useRouter } from "next/navigation";
import MenuList from "./component/listMenu";

export default function Dashboard({ children, }: Readonly<{ children: React.ReactNode; }>) {
    const router = useRouter()
    const pathName = usePathname()
    return (
        <main className="dashboard">
            <div className="menu">
                <div className="list-menu">
                    <MenuList path={"/dashboard"} name="Home"/>
                    <MenuList path={"/dashboard/nilai"} name="Nilai"/>
                    <MenuList path={"/dashboard/absensi"} name="Absensi"/>
                </div>
            </div>
            <div className="pages">
                
                {children}
            </div>
        </main>
    )
}
