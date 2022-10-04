import React from 'react';
import styled from 'styled-components';
import PrimaryButton from '../buttons/PrimaryButton';
import ParagraphText from '../paragraphTexts/ParagraphText';
import SectionTitle from '../titles/SectionTitle';
import FormField from './FormField';
import ContactImg from '../../assets/images/hero1.png';

const ContactSectionStyles = styled.div`
  padding: 10rem 0;
  .contact__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .contact__info {
    max-width: 350px;
    margin-bottom: 4rem;
    .contact_desc {
      margin: 1.5rem 0;
    }
    .contact__img {
      height: 350px;
      max-width: max-content;
      margin-right: auto;
      border-radius: 8px;
      margin-top: 2.5rem;
      --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
      --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
        0 4px 6px -4px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 8px;
      }
    }
  }
  .contact__form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5rem;
    row-gap: 3rem;
    .contact__field--fullWidth {
      grid-column: span 2;
    }
    .contact__submit {
      width: max-content;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 768px) {
    .contact__form {
      grid-template-columns: 1fr;
      row-gap: 2rem;
      width: 450px;
      .contact__field--fullWidth {
        grid-column: span 1;
      }
    }
    .contact__wrapper {
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 576px) {
    .contact__form {
      width: 100%;
    }
  }
`;

function ContactSection() {
  return (
    <ContactSectionStyles id="contact">
      <div className="container">
        <div className="contact__wrapper">
          <div className="contact__info">
            <SectionTitle>Get In Touch</SectionTitle>
            <ParagraphText>Connect With Our Sales Team.</ParagraphText>
            <ParagraphText className="contact_desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              eaque alias similique.
            </ParagraphText>
            <div className="contact__img">
              <img src={ContactImg} alt="images" />
            </div>
          </div>
          <form className="contact__form">
            <FormField
              className="contact__field--fullWidth required_fields"
              type="text"
              label="name"
              name="name"
              id="name"
              required
            />
            <FormField
              className="required_fields"
              type="email"
              label="Email"
              name="email"
              id="email"
              required
            />
            <FormField
              type="text"
              label="Subject"
              name="subject"
              id="subject"
              required
            />
            <FormField
              className="contact__field--fullWidth required_fields"
              label="Message"
              name="message"
              id="message"
              rows="6"
            />
            <PrimaryButton
              type="submit"
              buttonType="button"
              className="contact__submit"
            >
              Submit
            </PrimaryButton>
          </form>
        </div>
      </div>
    </ContactSectionStyles>
  );
}

export default ContactSection;
