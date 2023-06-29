import Image from "next/image";
import Link from "next/link";
import React from "react";
const Portfolio = () => {
    return (
        <section
            id="portSection"
            className="port__wrap section center bg-blue nexon"
        >
            <h3>작품 소개</h3>
            <p>동양화 작품을 소개합니다.</p>
            <div className="port__inner container">
                <div className="port__btn">
                    <ul>
                        <li>
                            <Link href="#">1910년대</Link>
                        </li>
                        <li>
                            <Link href="#">1920년대</Link>
                        </li>
                        <li>
                            <Link href="#">1930년대</Link>
                        </li>
                        <li>
                            <Link href="#">1940년대</Link>
                        </li>
                    </ul>
                </div>
                <div className="port__cont">
                    <div className="port">
                        <figure className="port__header">
                            {/* <img
                                src="./assets/images/port/memberView01.png"
                                alt="포트폴리오 이미지"
                            /> */}
                            <Image
                                width={300}
                                height={400}
                                src="/assets/images/port/memberView01.png"
                                alt=" 이미지"
                            />
                        </figure>
                        <div className="port__body">
                            <div className="pic">
                                {/* <img
                                    src="./assets/images/port/memberIcon01.png"
                                    alt="멤버 이미지"
                                /> */}
                                <Image
                                    width={300}
                                    height={400}
                                    src="/assets/images/port/memberIcon01.png"
                                    alt=" 이미지"
                                />
                            </div>
                            <div>
                                <h4>신윤복</h4>
                                <p>단오풍정</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            {/* <img
                                src="./assets/images/port/memberView02.png"
                                alt="포트폴리오 이미지"
                            /> */}
                            <Image
                                width={300}
                                height={400}
                                src="/assets/images/port/memberView02.png"
                                alt=" 이미지"
                            />
                        </figure>
                        <div className="port__body">
                            <div className="pic">
                                {/* <img
                                    src="./assets/images/port/memberIcon01.png"
                                    alt="멤버 이미지"
                                /> */}
                                <Image
                                    width={300}
                                    height={400}
                                    src="/assets/images/port/memberIcon01.png"
                                    alt=" 이미지"
                                />
                            </div>
                            <div>
                                <h4>김홍도</h4>
                                <p>자화상</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            {/* <img
                                src="./assets/images/port/memberView03.png"
                                alt="포트폴리오 이미지"
                            /> */}
                            <Image
                                width={300}
                                height={400}
                                src="/assets/images/port/memberView03.png"
                                alt=" 이미지"
                            />
                        </figure>
                        <div className="port__body">
                            <div className="pic">
                                {/* <img
                                    src="./assets/images/port/memberIcon01.png"
                                    alt="멤버 이미지"
                                /> */}
                                <Image
                                    width={300}
                                    height={400}
                                    src="/assets/images/port/memberIcon01.png"
                                    alt=" 이미지"
                                />
                            </div>
                            <div>
                                <h4>장승업</h4>
                                <p>미산이곡</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            {/* <img
                                src="./assets/images/port/memberView04.png"
                                alt="포트폴리오 이미지"
                            /> */}
                            <Image
                                width={300}
                                height={400}
                                src="/assets/images/port/memberView04.png"
                                alt=" 이미지"
                            />
                        </figure>
                        <div className="port__body">
                            <div className="pic">
                                {/* <img
                                    src="./assets/images/port/memberIcon01.png"
                                    alt="멤버 이미지"
                                /> */}
                                <Image
                                    width={300}
                                    height={400}
                                    src="/assets/images/port/memberIcon01.png"
                                    alt=" 이미지"
                                />
                            </div>
                            <div>
                                <h4>신윤복</h4>
                                <p>혜원전신첩</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            {/* <img
                                src="./assets/images/port/memberView05.png"
                                alt="포트폴리오 이미지"
                            /> */}
                            <Image
                                width={300}
                                height={400}
                                src="/assets/images/port/memberView05.png"
                                alt=" 이미지"
                            />
                        </figure>
                        <div className="port__body">
                            <div className="pic">
                                {/* <img
                                    src="./assets/images/port/memberIcon01.png"
                                    alt="멤버 이미지"
                                /> */}
                                <Image
                                    width={300}
                                    height={400}
                                    src="/assets/images/port/memberIcon01.png"
                                    alt=" 이미지"
                                />
                            </div>
                            <div>
                                <h4>김홍도</h4>
                                <p>성하부전도</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            {/* <img
                                src="./assets/images/port/memberView06.png"
                                alt="포트폴리오 이미지"
                            /> */}
                            <Image
                                width={300}
                                height={400}
                                src="/assets/images/port/memberView01.png"
                                alt=" 이미지"
                            />
                        </figure>
                        <div className="port__body">
                            <div className="pic">
                                {/* <img
                                    src="./assets/images/port/memberIcon01.png"
                                    alt="멤버 이미지"
                                /> */}
                                <Image
                                    width={300}
                                    height={400}
                                    src="/assets/images/port/memberIcon01.png"
                                    alt=" 이미지"
                                />
                            </div>
                            <div>
                                <h4>장승업</h4>
                                <p>군마도</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
