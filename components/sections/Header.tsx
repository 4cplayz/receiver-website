import React from 'react';
import BoxContainer from '../container/BoxContainer';
import PlacementContainer from '../container/PlacementContainer';
import TextContainer from '../container/TextContainer';
import ShadowContainer from '../container/ShadowContainer';

const Header = () => {
  return (
    <div>
      <ShadowContainer shadowOffsetY={2} shadowBlur={7.5} shadowSpread={3} shadowColor="rgba(0, 0, 0, 0.3)" roundBottomLeft={1} roundBottomRight={1}>
        <BoxContainer padding={0.5} paddingX={4} roundBottomLeft={1} roundBottomRight={1}>
          <PlacementContainer row full justifyContent='center' alignItems='center' width='100'>
              <TextContainer Size={2}>
                IATO
              </TextContainer>
          </PlacementContainer>
        </BoxContainer>
      </ShadowContainer>
    </div>
  );
};

export default Header;
