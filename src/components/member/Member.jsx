import Image from "next/image";
import Link from "next/link";
import React from "react";
const Member = () => {
    return (
        <section
            id="memberSection"
            className="member__wrap section center nexon"
        >
            <h3>멤버 소개</h3>
            <p>한국화가 맴버를 소개합니다.</p>
            <div className="member__inner container">
                <article className="member">
                    <figure className="member__header">
                        {/* <img src="./assets/images/icon/peep-1.svg" alt="멤버" /> */}
                        <Image
                            width={300}
                            height={400}
                            src="/assets/images/icon/peep-1.svg"
                            alt=" 이미지"
                        />
                    </figure>
                    <div className="member__body">
                        <h4>동양화작가</h4>
                        <p className="desc">신윤복작가</p>
                        <Link href="/" className="btn"></Link>
                    </div>
                </article>
                <article className="member">
                    <figure className="member__header">
                        {/* <img src="./assets/images/icon/peep-2.svg" alt="멤버" /> */}
                        <Image
                            width={300}
                            height={400}
                            src="/assets/images/icon/peep-2.svg"
                            alt=" 이미지"
                        />
                    </figure>
                    <div className="member__body">
                        <h4>동양화작가</h4>
                        <p className="desc">김홍도 작가</p>
                        <Link href="/" className="btn"></Link>
                    </div>
                </article>
                <article className="member">
                    <figure className="member__header">
                        {/* <img src="./assets/images/icon/peep-3.svg" alt="멤버" /> */}
                        <Image
                            width={300}
                            height={400}
                            src="/assets/images/icon/peep-3.svg"
                            alt=" 이미지"
                        />
                    </figure>
                    <div className="member__body">
                        <h4>동양화작가</h4>
                        <p className="desc">김환기 작가</p>
                        <Link href="/" className="btn"></Link>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Member;
