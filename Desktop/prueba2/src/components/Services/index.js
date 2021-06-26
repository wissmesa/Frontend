import React from 'react'
import Icon1 from '../../images/img.svg'
import Icon2 from '../../images/img.svg'
import Icon3 from '../../images/img.svg'
import { 
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services" >
            <ServicesH1>Our services</ServicesH1>
            <ServicesWrapper>
            
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Profesional</ServicesH2>
                <ServicesP>We help reduce your fess and increase you</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Enterprise</ServicesH2>
                <ServicesP>We help reduce your fess and increase you</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Premium</ServicesH2>
                <ServicesP>We help reduce your fess and increase you</ServicesP>
            </ServicesCard>
           
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
