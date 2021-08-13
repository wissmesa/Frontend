import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { Button } from '../ButtonElements'
import Icon1 from '../../images/img.svg'
import { 
     InfoContainer,
     InfoWrapper,
     InfoRow,
     Column1,
     Column2,
     TextWrapper,
     TopLine,
     Heading,
     Subtitle,
     BtnWrap,
     ImgWrap,
     
     Img } from './InfoElements'


     const toggleHome = () => {
        scroll.scrollToTop();
    }


const InfoSection = ({lightBg,
    id,
    imgStart,
    lightText,
    topLine,
    headline,
    darkText,
    description,
    buttonLabel,
    img,
    primary,
    dark,
    dark2,
    alt}) => {
    return (
        <>
           <InfoContainer lightBg={lightBg} id={id} >
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading   lightText={lightText}>{headline}</Heading>
                        <Subtitle   darkText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button to='/' onClick={toggleHome}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary ? 1 : 0 }
                            dark= {dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                            
                            >{buttonLabel} </Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                             <Img src={Icon1} /> 
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
           </InfoContainer>
        </>
    )
}

export default InfoSection
