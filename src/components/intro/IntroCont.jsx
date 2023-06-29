import React from "react";
import styles from "./intro.module.scss";

const IntroCont = () => {
  return (
    <>
      <div className={`${styles.intro__proflie} nexon`}>
        <div className={`${styles.intro__proflie__wrap}`}>
          <h2>동양화란?</h2>
          <span>
            동양화는 동양 문화 영향을 받은 회화의 한 스타일입니다. 주로 동아시아
            지역에서 발전하였으며, <br /> 중국, 일본, 한국을 중심으로
            발전하였습니다. 동양화는 동양의 예술, 철학, 역사, 문화, 자연 등을{" "}
            <br />
            주제로 하며, 동양의 고유한 미학과 정서를 표현하는 것을 목표로
            합니다.
          </span>
        </div>
        <div className={styles.link}>
          <a href="/">전시회 알아보기</a>
          <a href="/">전시회 바로가기</a>
        </div>
        <div className={`${styles.intro__proflie__desc}`}></div>
      </div>
      <section id="introSection" className="containter section">
        <h3 className="blind">프론트앤드 커리큘럼 과정 소개</h3>
        <div className="intro__inner container">
          <div className="intro__title">
            <span>동양화</span>
            <h3>
              동양화
              <br />
              종류
            </h3>
            <p>
              동양화의 다양한 종류와 스타일
              <br />
              입니다.
            </p>
          </div>
          <div className="intro__desc">
            <div>
              <h4 className="icon-bg1">고려화</h4>
              <p>
                고려시대(918년-1392년)에 발전한 한국의 전통적인 동양화
                스타일입니다. 주로 산수화(산수: 산과 물), 인물화, 동물화, 꽃과
                나무 등 자연 속의 풍경을 다루며, 섬세하고 정교한 묘사 기법과
                자연의 조화로운 표현이 특징입니다.
              </p>
            </div>
            <div>
              <h4 className="icon-bg2">고산자</h4>
              <p>
                중국의 고려(고려시대)와 조(조선시대) 시기에 발전한 동양화
                스타일입니다. 고려시대의 고산자와 조선시대의 안씨파, 도형파
                등으로 구분됩니다. 이 스타일은 대개 산수화, 인물화, 동물화, 꽃과
                나무 등을 다루며, 간결하고 깔끔한 선의 사용과 물색 기법이
                특징입니다.
              </p>
            </div>
            <div>
              <h4 className="icon-bg3">수필화</h4>
              <p>
                중국에서 가장 대표적인 동양화 스타일 중 하나로, 자연의 경치인
                산과 강, 구름 등을 주로 다룹니다. 수필화는 경치의 아름다움과
                자연의 조화를 표현하며, 물색 기법과 많은 공간을 활용하여 자연의
                무한함과 강렬한 느낌을 전달합니다.
              </p>
            </div>
            <div>
              <h4 className="icon-bg4">항조화</h4>
              <p>
                중국 동양화에서 매우 중요한 위치를 차지하는 스타일로, 주로
                조류와 꽃을 주제로 다룹니다. 조류와 꽃의 아름다움을 극대화하여
                표현하며, 섬세한 선과 물색, 깊이 있는 구조로 자연의 생명력과
                아름다움을 전달합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroCont;
