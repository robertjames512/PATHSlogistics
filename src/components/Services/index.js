import React from 'react';
import Icon1 from '../../images/PATHSlogo.png';
import Icon2 from '../../images/PATHSlogo.png';
import Icon3 from '../../images/PATHSlogo.png';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>HOW THE FREIGHT LOGISTICS SYSTEM WORKS</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Shipper</ServicesH2>
          <ServicesP>
          Several shippers work with manufacturers to get the product or freight on a truck to be delivered to various parts of the U.S.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Dispatcher</ServicesH2>
          <ServicesP>
          Dispatchers act as middlemen between the broker and carrier. We complete administrative tasks and keep the carrier focused on driving. This is what we do.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Carrier/Owner/Operator</ServicesH2>
          <ServicesP>
          Carriers (also called owners or operators) drive the trucks that carry the freight all over the U.S. They focus on the road, the drive time and keep the freight intact from point A to point B.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
