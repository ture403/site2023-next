import Image from "next/image";
import React from "react";
import styles from "./portfolio.module.scss";

const PortCont = () => {
  return (
    <>
      <div className={styles.port__human}>
        <div className={styles.port__human__wrap}>
          <div className={styles.imgWrap}>
            <Image
              width={500}
              height={500}
              src="/assets/images/port/img01.jpg"
              alt="논갈이"
            />
          </div>
          <div className={styles.textWrap}>
            <div className={styles.title}>
              <h3>논갈이, 《단원 풍속도첩》</h3>
              <span>김홍도(金弘道)</span>
            </div>
            <div className={styles.desc}>
              <p>
                김홍도(金弘道, 1745-1816 이후)의 풍속화들은 대체로 소탈한
                서민생활의 단면과 생업(生業)의 모습을 소재로 한 것이 많다. 또
                당시 사람들의 생활 감정을 한국적인 해학과 정취를 곁들여 생생하게
                나타냈다는 데 그 의의가 있다. 김홍도 풍속화의
                대표작《단원풍속화첩》에는 각 계층의 생업 장면, 생활 모습, 놀이
                풍습 등을 담아내고 있는데 김홍도의 인간과 삶에 대한 따뜻하면서도
                예리한 시선을 느낄 수 있다. 주변의 배경을 생략하고 인물이 취하는
                자세와 동작만으로 화면을 구성하여 인물을 잘 부각시켰다. 연습
                삼아 그린 작품처럼 보이면서도 투박하고 강한 필치와 짜임새 있는
                구성의 솜씨는 김홍도 회화의 특성을 보여준다. 김홍도가 이러한
                풍속화들을 언제부터 그렸는지는 분명하지 않지만 대체로 30대
                후반이 아닌가 싶으며, 이 풍속화첩의 제작 시기는 40대 전후로
                추측된다. &lt;논갈이&gt;는 한 쌍의 소가 쟁기를 끌고 두 명의
                농군이 쇠스랑으로 흙을 고르는 모습을 그린 것으로, 대각으로
                솟구치고 있는 소라든지 쟁기를 잡은 농부의 몸짓 등이 힘든
                농사일을 말해준다.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.port__human__wrap}>
          <div className={styles.imgWrap}>
            <Image
              width={500}
              height={500}
              src="/assets/images/port/img02.jpg"
              alt="춤추는 아이"
            />
          </div>
          <div className={styles.textWrap}>
            <div className={styles.title}>
              <h3>춤추는 아이, 《단원 풍속도첩》</h3>
              <span>김홍도(金弘道)</span>
            </div>
            <div className={styles.desc}>
              <p>
                이 화첩은 김홍도의 풍속도를 엮은 화첩이다. 1918년
                조한준(趙漢俊)에게서 구입했고 모두 27점이었으나 1957년 원 화첩의
                수미에 위치한 〈군선도〉2점은 별도의 족자로 만들고 풍속도 25점만
                새롭게 화첩으로 꾸미고 《단원풍속도첩》이란 명칭을 붙였다. 이
                화첩에 속한 그림 중 4점이 1934년 간행된 『조선고적도보』에
                게재되었다. 이 화첩은 1）서당, 2) 논갈이, 3) 활쏘기 4) 씨름, 5)
                행상, 6) 무동, 7) 기와이기, 8) 대장간, 9) 노상과안, 10) 점괘,
                11) 나룻배, 12) 주막, 13) 고누놀이, 14) 빨래터, 15) 우물가, 16)
                담배썰기, 17) 자리짜기, 18) 벼타작, 19) 그림감상, 20) 길쌈, 21)
                편자박기, 22) 고기잡이, 23) 산행, 24) 점심, 25) 장터길 순서로
                구성되어 있다. 이들 작품명을 통해서 알 수 있듯이, 각 계층의
                생업장면과 놀이 등 생활의 이모저모가 잘 나타나 있다. 예외도 없지
                않으나 대체로 배경을 생략하고 등장인물들이 취하는 자세와
                동작만으로 적절한 화면구성을 이루고 있다. 평범한 일상사이나
                화가의 따뜻한 시선과 예리한 시각에 의한 순간의 포착은 이를
                볼거리로 부각시켜 그림이 그려진 사회분위기를 잘 전한다.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.port__human__wrap}>
          <div className={styles.imgWrap}>
            <Image
              width={500}
              height={500}
              src="/assets/images/port/img03.jpg"
              alt="길쌈"
            />
          </div>
          <div className={styles.textWrap}>
            <div className={styles.title}>
              <h3>길쌈, 《단원 풍속도첩》</h3>
              <span>김홍도(金弘道)</span>
            </div>
            <div className={styles.desc}>
              <p>
                베틀에서 길쌈하는 아낙네를 바라보는 아이와 아이를 업고서 이를
                바라보는 나이 지긋한 할머니, 그리고 화면 위쪽에 열심히 실을
                뽑아내는 땀에 젖은 아낙네의 진솔한 생활미가 깃들어 있는
                작품이다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortCont;
