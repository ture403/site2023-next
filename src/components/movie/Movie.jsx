import Image from "next/image";
import React from "react";

const Movie = () => {
    return (
        <section id="moviesSection" className="movie__wrap nexon5">
            <div className="movie__inner">
                <div className="movie__inner container">
                    <div className="movie__text">
                        <h3>그림 영화</h3>
                        <p>
                            Netflix와 Youtube등 다양한 경로에서
                            <br />
                            그림 관련 영화를 시청할 수 있습니다.
                        </p>
                        <a href="/" className="button-green">
                            자세히 보기
                        </a>
                    </div>
                    <div className="movie__item">
                        <div>
                            {/* <img
                                src="../assets/images/movie/movie01.png"
                                alt="유튜브"
                            /> */}
                            <Image
                                width={400}
                                height={500}
                                src="/assets/images/movie/movie01.png"
                                alt=" 이미지"
                            />
                        </div>
                        <div>
                            {/*  <img
                                src="../assets/images/movie/movie02.png"
                                alt="유튜브"
                             /> */}
                            <Image
                                width={400}
                                height={500}
                                src="/assets/images/movie/movie02.png"
                                alt=" 이미지"
                            />
                        </div>
                        <div>
                            {/* <img
                                src="../assets/images/movie/movie03.png"
                                alt="유튜브"
                            /> */}
                            <Image
                                width={400}
                                height={500}
                                src="/assets/images/movie/movie03.png"
                                alt=" 이미지"
                            />
                        </div>
                        <div>
                            {/* <img
                                src="../assets/images/movie/movie04.png"
                                alt="유튜브"
                            /> */}
                            <Image
                                width={400}
                                height={500}
                                src="/assets/images/movie/movie04.png"
                                alt=" 이미지"
                            />
                        </div>
                        <div>
                            {/* <img
                                src="../assets/images/movie/movie05.png"
                                alt="유튜브"
                            /> */}
                            <Image
                                width={400}
                                height={500}
                                src="/assets/images/movie/movie05.png"
                                alt=" 이미지"
                            />
                        </div>
                        <div>
                            {/* <img
                                src="../assets/images/movie/movie06.png"
                                alt="유튜브"
                            /> */}
                            <Image
                                width={400}
                                height={500}
                                src="/assets/images/movie/movie01.png"
                                alt=" 이미지"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Movie;
