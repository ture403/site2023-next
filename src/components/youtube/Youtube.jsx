import Image from "next/image";
import React from "react";

const Youtube = () => {
    return (
        <section id="youtubeSection" className="youtube__wrap section nexon5">
            <div className="youtube__inner container">
                <div className="youtube__text">
                    <h3>글쓴이 추천 유튜브 소개</h3>
                    <p>
                        시대별 그림 설명을 들을수 있습니다. <br />
                        시대적 풍경을 대략적으로 알수있습니다.
                    </p>
                    <a href="/" className="button-red">
                        자세히 보기
                    </a>
                </div>
                <div className="youtube__item">
                    <div>
                        {/* <img
                            src="../assets/images/youtube/youtube01.png"
                            alt="유튜브"
                        /> */}
                        <Image
                            width={400}
                            height={500}
                            src={"/assets/images/youtube/youtube01.png"}
                            alt=" 이미지"
                            style={{ width: "auto", height: "auto" }}
                        />
                    </div>
                    <div>
                        {/* <img
                            src="../assets/images/youtube/youtube02.png"
                            alt="유튜브"
                        /> */}
                        <Image
                            width={400}
                            height={500}
                            src="/assets/images/youtube/youtube02.png"
                            alt=" 이미지"
                            style={{ width: "auto", height: "auto" }}
                        />
                    </div>
                    <div>
                        {/* <img
                            src="../assets/images/youtube/youtube03.png"
                            alt="유튜브"
                        /> */}
                        <Image
                            width={400}
                            height={500}
                            src="/assets/images/youtube/youtube03.png"
                            alt=" 이미지"
                            style={{ width: "auto", height: "auto" }}
                        />
                    </div>
                    <div>
                        {/* <img
                            src="../assets/images/youtube/youtube04.png"
                            alt="유튜브"
                        /> */}
                        <Image
                            width={400}
                            height={500}
                            src="/assets/images/youtube/youtube04.png"
                            alt=" 이미지"
                            style={{ width: "auto", height: "auto" }}
                        />
                    </div>
                    <div>
                        {/* <img
                            src="../assets/images/youtube/youtube05.png"
                            alt="유튜브"
                        /> */}
                        <Image
                            width={400}
                            height={500}
                            src="/assets/images/youtube/youtube05.png"
                            alt=" 이미지"
                            style={{ width: "auto", height: "auto" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Youtube;
