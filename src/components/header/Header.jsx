import Link from "next/link";
import React from "react";

const links = [
    {
        id: 1,
        title: "Intro",
        url: "/intro",
        name: "소개",
    },
    {
        id: 2,
        title: "Member",
        url: "/member",
        name: "멤버",
    },
    {
        id: 3,
        title: "Port",
        url: "/port",
        name: "포트폴리오",
    },
    {
        id: 4,
        title: "Youtube",
        url: "/youtube",
        name: "유튜브",
    },
    {
        id: 5,
        title: "Unplash",
        url: "/unsplash",
        name: "이미지",
    },
    {
        id: 6,
        title: "Movie",
        url: "/movie",
        name: "영화",
    },
];

const Header = () => {
    return (
        <header
            id="header"
            className="header__wrap nexon5 bg-blue"
            row-lavel="1"
            aria-label="1"
        >
            <div className="header__inner container">
                <h1 className="header__logo">
                    <Link href="/">
                        june <em>site</em>
                    </Link>
                </h1>
                <nav className="header__nav" role="navigation">
                    <ul>
                        {links.map((link) => (
                            <li key={link.id}>
                                <Link href={link.url}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
