import React from "react";
import Logo from "./Logo"
import ListLink from "./ListLink";
import InputSearch from "./InputSearch";
import { MenuNavBar } from "./MenuNavBar";

export function Header(){

    const links = [
        {id: 1, link: "#", text: "Price"},
        {id: 2, link: "#", text: "Products"},
        {id: 3, link: "#", text: "Support"},
    ]
    return(
        <header className="relative py-3 px-6 flex items-center justify-between w-screen border-b border-primary-color">
            <Logo/>
            <InputSearch></InputSearch>
            <ListLink links={links}></ListLink>
            <MenuNavBar links={links}></MenuNavBar>
            

            
        </header>
    )
}
