import React from "react";
import "./footer.css";

import icon1 from "../../assets/img/snsicon-01.png";
import icon1x2 from "../../assets/img/snsicon-01@2x.png";
import icon1x3 from "../../assets/img/snsicon-01@3x.png";

import icon2 from "../../assets/img/snsicon-02.png";
import icon2x2 from "../../assets/img/snsicon-02@2x.png";
import icon2x3 from "../../assets/img/snsicon-02@3x.png";

import icon3 from "../../assets/img/snsicon-03.png";
import icon3x2 from "../../assets/img/snsicon-03@2x.png";
import icon3x3 from "../../assets/img/snsicon-03@3x.png";

import Grid from "../../components/grid/Grid";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="horizontal-line-break"></div>
      <div className="footer-top">
        <div className="footer-news">
          <div className="title logo">
            <label>what happened</label>
          </div>
          <ul className="footer-news__content">
            <li className="footer-news__content-item">
              [공지] 개인 정보 처리 방침 변경 사전 안내
            </li>
            <li className="footer-news__content__item">
              [공지] 29CM 강남 스토어 영업 종료
            </li>
            <li className="footer-news__content__item">
              [공지] 개인 정보 처리 방침 변경 사전 안내
            </li>
            <li className="footer-news__content__item">
              [공지] iOS 10 이하 버전 지원 중단 안내
            </li>
            <li className="footer-news__content__item">
              [공지] 개인 정보 처리 방침 변경 사전 안내
            </li>
          </ul>
        </div>
        <div className="footer-menu">
          <Grid col={4} gap={15} mdCol={4} smCol={1}>
            <div className="footer-menu__item">
              <div className="title">
                <label>about us</label>
              </div>
              <ul>
                <li>회사 소개 </li>
                <li>인재 채용</li>
                <li>상시 할인 혜택</li>
              </ul>
            </div>
            <div className="footer-menu__item">
              <div className="title">
                <label>my order</label>
              </div>
              <ul>
                <li>내 주문</li>
                <li>주문 배송</li>
                <li>취소 / 교환 / 반품 내역</li>
                <li>상품 리뷰 내역</li>
                <li>증빙 서류 발급</li>
              </ul>
            </div>
            <div className="footer-menu__item">
              <div className="title">
                <label>my account</label>
              </div>
              <ul>
                <li>회원 정보 수정 </li>
                <li>회원 등급</li>
                <li>마일리지 현황</li>
                <li>쿠폰</li>
              </ul>
            </div>
            <div className="footer-menu__item">
              <div className="title">
                <label>help</label>
              </div>
              <ul>
                <li>1 : 1 상담 내역</li>
                <li>상품 Q & A 내역</li>
                <li>공지 사항</li>
                <li>자주하는 질문</li>
                <li>고객의 소리</li>
              </ul>
            </div>
          </Grid>
        </div>
      </div>
      <div className="horizontal-line-break"></div>
      <div className="footer-bottom">
        <div className="footer-contact">
          <div className="footer-contact__info">
            <p>
              © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
              사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
            </p>
            <p>
              서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
              이용약관 l 개인정보처리방침
            </p>
          </div>
          <div className="footer-contact__link">
            <img src={icon1} srcSet={(icon1x2, icon1x3)} alt="" />
            <img src={icon2} srcSet={(icon2x2, icon2x3)} alt="" />
            <img src={icon3} srcSet={(icon3x2, icon3x3)} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
