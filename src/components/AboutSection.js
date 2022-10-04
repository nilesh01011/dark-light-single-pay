import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import howToUseApp from './AboutItemsLists';
import PrimaryButton from './buttons/PrimaryButton';
import ParagraphText from './paragraphTexts/ParagraphText';
import SectionTitle from './titles/SectionTitle';
import AboutImg from '../assets/images/hero3.jpg';
import AboutImg_ from '../assets/images/callcenter.jpg';
import themeList from '../data/themeList';

const AboutStyles = styled.div`
  padding: 10rem 0;
  .container_2 {
    margin-top: 6.3rem;
  }
  .about__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: max-content;
  }
  .about__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    text-transform: capitalize;
    color: var(--mediumSlateBlue);
    display: block;
  }
  .about__subtitle span {
    font-size: 13px !important;
  }
  .about__title {
    margin-bottom: 2rem;
  }
  .about__desc {
    margin-bottom: 2rem;
    max-width: 300px;
  }
  .about__img {
    border-radius: 8px;
    height: 400px;
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
      0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  .about__img img {
    border-radius: 8px;
  }
  .aboutLists {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    width: 450px;
  }
  .aboutLists:not(:last-child) {
    margin-bottom: 1rem;
  }
  .countesNumber {
    outline: 1.5px solid #6f5de7;
    color: #6f5de7;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    line-height: 1rem;
  }
  .aboutTitles {
    font-size: 2rem;
    margin-bottom: 0.6rem;
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
  }
  .infos {
    font-size: 1.4rem;
    width: 100%;
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_2)'};
  }
  .second_about__info {
    max-width: 420px;
  }
  @media only screen and (max-width: 992px) {
    .about__wrapper {
      justify-content: space-between;
    }
    .aboutLists {
      width: 100%;
    }
    .about__title {
      max-width: 400px;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 4rem 0;
    .second_about__info {
      max-width: 100%;
    }
    .about__wrapper {
      flex-direction: column;
    }
    .about__img {
      max-width: 400px;
    }
    .first_about__img {
      margin-bottom: 4rem;
    }
    .second_about__img {
      margin-top: 4rem;
    }
    .aboutLists {
      width: 100%;
    }
  }
`;

function AboutSection() {
  const [useApp, setUseApp] = useState(howToUseApp);
  console.log(setUseApp);
  return (
    <AboutStyles id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__img first_about__img">
            <img src={AboutImg} alt="callcenter" />
          </div>
          <div className="about__info">
            <ParagraphText className="about__subtitle">
              <span> -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY</span>
            </ParagraphText>
            <SectionTitle className="about__title">
              How to use the App?
            </SectionTitle>
            <div className="about__desc">
              {useApp.map((items) => {
                const { id, title, info } = items;

                return (
                  <div key={id} className="aboutLists">
                    <span className="countesNumber">{id}</span>
                    <div>
                      <h2 className="aboutTitles">{title}</h2>
                      <p className="infos">{info}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <PrimaryButton buttonType={Link} to="contact" smooth>
              Get In Touch
            </PrimaryButton>
          </div>
        </div>
      </div>
      <div className="container container_2">
        <div className="about__wrapper">
          <div className="about__info second_about__info">
            <ParagraphText className="about__subtitle">
              <span> -- SUPPORT IN ANY LANGUAGES</span>
            </ParagraphText>
            <SectionTitle className="about__title">
              World class support is available 24/7
            </SectionTitle>
            <div className="about__desc">
              {useApp.map((items) => {
                const { id, title, info } = items;

                return (
                  <div key={id} className="aboutLists">
                    <span className="countesNumber">{id}</span>
                    <div>
                      <h2 className="aboutTitles">{title}</h2>
                      <p className="infos">{info}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <PrimaryButton buttonType={Link} to="contact" smooth>
              Get In Touch
            </PrimaryButton>
          </div>
          <div className="about__img second_about__img">
            <img src={AboutImg_} alt="callcenter" />
          </div>
        </div>
      </div>
    </AboutStyles>
  );
}

export default AboutSection;
