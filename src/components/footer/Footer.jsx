import Link from "next/link";
import React from "react";

const link = [
    {
        id: 1,
        title: "페이스북",
    },
    {
        id: 2,
        title: "인스타",
    },
    {
        id: 3,
        title: "유투브",
    },
    {
        id: 4,
        title: "깃",
    },
];
const link2 = [
    {
        id: 1,
        title: "웹표준 사이트",
    },
    {
        id: 2,
        title: "반응형 사이트",
    },
    {
        id: 3,
        title: "패럴랙스 사이트",
    },
    {
        id: 4,
        title: "포트폴리오 사이트",
    },
];
const link3 = [
    {
        id: 1,
        title: "이미지 유형",
    },
    {
        id: 2,
        title: "카드 유형",
    },
    {
        id: 3,
        title: "이미지/텍스트 유형",
    },
    {
        id: 4,
        title: "배너 유형",
    },
    {
        id: 5,
        title: "텍스트 유형",
    },
    {
        id: 6,
        title: "푸터 유형",
    },
];
const link4 = [
    {
        id: 1,
        title: "검색 이펙트",
    },
    {
        id: 2,
        title: "퀴즈 이팩트",
    },
    {
        id: 3,
        title: "마우스 이펙트",
    },
    {
        id: 4,
        title: "슬라이드 이펙트",
    },
    {
        id: 5,
        title: "패럴랙스 이펙트",
    },
    {
        id: 6,
        title: "게임 이펙트",
    },
];
const link5 = [
    {
        id: 1,
        title: "CSS",
    },
    {
        id: 2,
        title: "FONTS",
    },
    {
        id: 3,
        title: "HTML",
    },
    {
        id: 4,
        title: "JAVASCRIPT",
    },
    {
        id: 5,
        title: "REACT",
    },
];
const Footer = () => {
    return (
        <footer
            id="footer"
            role="contentinfo"
            className="footer__wrap section bg-blue nexon5"
        >
            <div className="footer__inner container">
                <div className="footer__text">
                    <h5>juneyungi</h5>
                    <p>
                        질문 환영 <br />
                        궁금한 사항은 메일로 연락주세요!
                        <Link href="mailto:ture403@gmail.com">
                            ture403@gmail.com
                        </Link>
                    </p>
                    <ul className="sns">
                        {link.map((link) => (
                            <li key={link.id}>
                                <Link href="/">
                                    <span className="ir">{link.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer__menu">
                    <div>
                        <h4>사이트</h4>
                        <ul>
                            {link2.map((link) => (
                                <li key={link.id}>
                                    <Link href="/">{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4>유형</h4>
                        <ul>
                            {link3.map((link) => (
                                <li key={link.id}>
                                    <Link href="/">{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4>스크립트</h4>
                        <ul>
                            {link4.map((link) => (
                                <li key={link.id}>
                                    <Link href="/">{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4>레퍼런스</h4>
                        <ul>
                            {link5.map((link) => (
                                <li key={link.id}>
                                    <Link href="/">{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    Copyright 2022. All Rights Reserved. - Designed by Jin
                </div>
            </div>
        </footer>
    );
};

export default Footer;
