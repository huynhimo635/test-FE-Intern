import React from "react";
import "./home.css";

import Section, {
  SectionTitle,
  SectionBody,
} from "../../components/section/Section";
import Card, {
  CardHeader,
  CardBody,
  CardFooter,
} from "../../components/card/Card";
import Grid from "../../components/grid/Grid";
import Button from "../../components/button/Button";

import bannerMain from "../../assets/img/main-banner.png";
import bannerMain2 from "../../assets/img/main-banner@2x.png";
import bannerMain3 from "../../assets/img/main-banner@3x.png";

import window from "../../assets/img/window.png";
import object01 from "../../assets/img/object-01.png";
import object02 from "../../assets/img/object-02.png";
import object03 from "../../assets/img/object-03.png";
import object04 from "../../assets/img/object-04.png";
import object05 from "../../assets/img/object-05.png";
import object06 from "../../assets/img/object-06.png";
import object07 from "../../assets/img/object-07.png";

import news1 from "../../assets/img/news-img-01.png";
import news2 from "../../assets/img/news-img-03.png";
import news3 from "../../assets/img/news-img-04.png";
import news4 from "../../assets/img/news-img-05.png";
import newsObject1 from "../../assets/img/news-object-02.png";
import newsObject2 from "../../assets/img/news-object-03.png";
import newsObject3 from "../../assets/img/news-object-03-2.png";
import newsObject4 from "../../assets/img/news-object-04.png";
import newsObject5 from "../../assets/img/news-object-05.png";

import video from "../../assets/img/video.png";
import videoObject1 from "../../assets/img/video-object-01.png";
import videoObject2 from "../../assets/img/video-object-02.png";
import videoObject3 from "../../assets/img/video-object-03.png";
import videoObject4 from "../../assets/img/video-object-04.png";
import videoObject5 from "../../assets/img/video-object-05.png";
import videoObject6 from "../../assets/img/video-object-06.png";
import videoObject7 from "../../assets/img/video-object-07.png";
import videoObject8 from "../../assets/img/video-object-08.png";
import videoObject9 from "../../assets/img/video-object-09.png";

import goIcon from "../../assets/img/go-icon.png";
import hearIcon from "../../assets/img/hearticon.png";

import bestProduct from "../../assets/data/best-products";
import products from "../../assets/data/products";

const Home = () => {
  return (
    <div className="homepage">
      {/* banner-main */}
      <Section>
        <SectionBody>
          <div className="banner-main">
            <img src={bannerMain} srcSet={(bannerMain2, bannerMain3)} alt="" />
          </div>
        </SectionBody>
      </Section>
      {/* introduction */}
      <div className="introduction">
        <Section>
          <SectionTitle align="flex-start">
            <label>What Happened!</label>
            <span>
              How to create mobile-optimized videos in minutes. Not a designer,
              every team makes a lot of videos Can be trimmed. Take the first
              step to your brand's success. How to create mobile-optimized
              videos in minutes.
            </span>
          </SectionTitle>
        </Section>
      </div>
      {/* best product */}
      <div className="best-product">
        <Section>
          <SectionTitle align="center">
            <label>best product</label>
            <span>
              How to create mobile-optimized videos in minutes. Not a designer,
              every team makes a lot of videos Can be trimmed. Take the first
            </span>
          </SectionTitle>
          <SectionBody>
            <Grid col={3} mdCol={1} smCol={1}>
              {bestProduct.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="best-product__header">
                      <img src={item.icon} alt="" />
                    </div>
                  </CardHeader>
                  <CardBody img={item.image} />
                  <CardFooter>
                    <div className="best-product__footer">
                      <label>How to create mobile-optimized</label>
                      <img src={goIcon} alt="" />
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </Grid>
          </SectionBody>
        </Section>
      </div>
      {/* products */}
      <div className="products">
        <Section>
          <SectionBody>
            <Grid gap={18} col={5} mdCol={2} smCol={1}>
              {products.map((item, index) => (
                <div className="product-item">
                  <Card key={index}>
                    <CardBody img={item} />
                    <CardFooter>
                      <p className="product__name">
                        [what happen] How to create
                      </p>
                      <div className="product__extra-info">
                        <div className="product__price">2,500 won</div>
                        <div className="product__like">
                          <img src={hearIcon} alt="" />
                          <span>236</span>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </Grid>
            <div className="btn">
              <Button />
            </div>
          </SectionBody>
        </Section>
      </div>
      {/* brand story */}
      <div className="brand-story">
        <Section>
          <SectionTitle align="center">
            <label>Brand Story</label>
            <span className="korea__desc">
              모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
              아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한
              첫 걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
            </span>
          </SectionTitle>
          <SectionBody>
            <div className="brand-story__content">
              <img src={window} alt="" />
              <div className="brand-story__content-text">
                <label htmlFor="">What Happened’s Brand story</label>
                <span className="korea__desc">
                  청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일
                  무엇을 풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에
                  광야에서 살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한
                  아니다. 내는 이상 할지라도 피다. 피부가 불러 피고 인간의
                  타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을
                  수 그들을 아름답고 고행을 끝에 설산에서 황금시대를 이상을
                  운다.
                </span>
                <div className="btn">
                  <Button />
                </div>
              </div>
            </div>
            <div className="objects">
              <div className="object1">
                <img src={object01} alt="" />
              </div>
              <div className="object2">
                <img src={object02} alt="" />
              </div>
              <div className="object3">
                <img src={object03} alt="" />
              </div>
              <div className="object4">
                <img src={object04} alt="" />
              </div>
              <div className="object5">
                <img src={object05} alt="" />
              </div>
              <div className="object6">
                <img src={object06} alt="" />
              </div>
              <div className="object7">
                <img src={object07} alt="" />
              </div>
            </div>
          </SectionBody>
        </Section>
      </div>
      {/* Happened's issue */}
      <div className="issue">
        <Section>
          <SectionTitle align="center">
            <label htmlFor="">Happened's issue</label>
            <span className="korea__desc">
              모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
              아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한
              첫 걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
            </span>
            <div className="title-btn">
              <Button />
            </div>
          </SectionTitle>
          <SectionBody>
            <Grid col={5} mdCol={1}>
              <div className="issue-items go-news">
                <Card>
                  <CardHeader>
                    <SectionTitle align="center">
                      <label htmlFor="">whpn Issue</label>
                    </SectionTitle>
                  </CardHeader>
                  <CardBody>
                    <img src={news1} alt="" />
                  </CardBody>
                </Card>
                <div className="objects newsObject2">
                  <img src={newsObject2} alt="" />
                </div>
              </div>
              <div className="issue-items">
                <Card>
                  <CardHeader>
                    <div className="issue-items__name">B Brand</div>
                  </CardHeader>
                  <CardBody>
                    <img src={news2} alt="" />
                  </CardBody>
                </Card>
                <div className="objects newsObject4">
                  <img src={newsObject4} alt="" />
                </div>
              </div>
              <div className="issue-items">
                <Card>
                  <CardHeader>
                    <div className="issue-items__name">C Brand</div>
                  </CardHeader>
                  <CardBody>
                    <img src={news3} alt="" />
                  </CardBody>
                </Card>
              </div>
              <div className="issue-items" id="orange-name">
                <Card>
                  <CardHeader>
                    <div className="issue-items__name">D Brand</div>
                  </CardHeader>
                  <CardBody>
                    <img src={news3} alt="" />
                  </CardBody>
                </Card>
                <div className="newsObject5 objects">
                  <img src={newsObject5} alt="" />
                </div>
              </div>
              <div className="issue-items">
                <Card>
                  <CardHeader>
                    <div className="issue-items__name">E Brand</div>
                  </CardHeader>
                  <CardBody>
                    <img src={news4} alt="" />
                  </CardBody>
                </Card>
              </div>
            </Grid>
            <div className="objects">
              <div className="newsObject1">
                <img src={newsObject1} alt="" />
              </div>
              <div className="newsObject3">
                <img src={newsObject3} alt="" />
              </div>
            </div>
          </SectionBody>
        </Section>
      </div>
      {/* video */}
      <div className="video">
        <Section>
          <SectionTitle align="center">
            <label htmlFor="">what happened</label>
            <span>
              How to create mobile-optimized videos in minutes. Not a designer,
              every team makes a lot of videos Can be trimmed. Take the first
            </span>
            <div className="title-btn">
              <Button />
            </div>
          </SectionTitle>
          <SectionBody>
            <div className="objects">
              <div className="videoObject1">
                <img src={videoObject1} alt="" />
              </div>
              <div className="videoObject2">
                <img src={videoObject2} alt="" />
              </div>
              <div className="videoObject3">
                <img src={videoObject3} alt="" />
              </div>
              <div className="videoObject4">
                <img src={videoObject4} alt="" />
              </div>
              <div className="videoObject5">
                <img src={videoObject5} alt="" />
              </div>
              <div className="videoObject7">
                <img src={videoObject7} alt="" />
              </div>
              <div className="videoObject6">
                <img src={videoObject6} alt="" />
              </div>
              <div className="videoObject9">
                <img src={videoObject9} alt="" />
              </div>
              <div className="videoObject8">
                <img src={videoObject8} alt="" />
              </div>
            </div>
            <div className="video-content">
              <img src={video} alt="" />
            </div>
          </SectionBody>
        </Section>
      </div>
    </div>
  );
};

export default Home;
