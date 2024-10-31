import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import BoxContainer from '../container/BoxContainer';
import PlacementContainer from '../container/PlacementContainer';
import ShadowContainer from '../container/ShadowContainer';

const Footer = () => {
  return (
    <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <ShadowContainer shadowOffsetY={-2} shadowBlur={7.5} shadowSpread={3} shadowColor="rgba(0, 0, 0, 0.3)" roundTopLeft={1} roundTopRight={1}>
        <BoxContainer padding={0.5} paddingX={4} roundTopLeft={1} roundTopRight={1}>
          <PlacementContainer row full justifyContent='center' alignItems='center' width='100'>
            <a href="https://www.linkedin.com/company/intelligentautomaticticketorganiser/about/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
              <FaLinkedin size={24} color="white" />
            </a>
            <a href="https://www.instagram.com/iato.ca/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
              <FaInstagram size={24} color="white" />
            </a>
          </PlacementContainer>
        </BoxContainer>
      </ShadowContainer>
    </div>
  );
};

export default Footer;
