import React from 'react';
import styled from 'styled-components';
import { FaDownload } from 'react-icons/fa';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { MdIntegrationInstructions } from 'react-icons/md';
import SectionTitle from '../titles/SectionTitle';
import ServiceItem from './ServiceItem';

const ServicesSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .services__title {
    margin-bottom: 3rem;
  }
  .services__items {
    display: flex;
    gap: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .services__items {
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;

function ServicesSection() {
  return (
    <ServicesSectionStyles id="services">
      <div className="container">
        <SectionTitle className="services__title">Our Services</SectionTitle>
        <div className="services__items">
          <ServiceItem
            icon={<FaDownload />}
            title="Downlaod App"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?"
          />
          <ServiceItem
            icon={<MdIntegrationInstructions />}
            title="Complete the Instruction"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?"
          />
          <ServiceItem
            icon={<RiMoneyDollarCircleFill />}
            title="Receive your funds"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?"
          />
        </div>
      </div>
    </ServicesSectionStyles>
  );
}

export default ServicesSection;
