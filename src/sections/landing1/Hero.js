import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-scroll'

import { Title, Button, Section, Box, Text } from '../../components/Core'
import { device } from '../../utils'
import imgL from '../../assets/img/profile.jpg'
import Social from '../../components/Social'

const ImgRight = styled.img`
  max-width: 100%;
`

const Hero = () => {
  const d = new Date()
  let year = d.getFullYear()
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section hero className="position-relative">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg="5" md="8" sm="9">
              <div className="text-center text-lg-right position-relative">
                <div className="img-main">
                  <ImgRight
                    src={imgL}
                    alt=""
                    css={`
                      border-radius: 50rem !important;
                    `}
                  />
                </div>
              </div>
            </Col>
            <Col lg="7" className="mb-5 mb-lg-0 pt-5">
              <Box>
                <Text variant="tag" className="text-uppercase" color="heading" mb="25px">
                  Srinivas Sista
                </Text>
                <Title mb="0.5rem">Data Analyst/Data Scientist/Business Analyst</Title>
                <Text
                  color="text"
                  css={`
                    line-height: 1.5;
                    font-size: 1.1rem;
                  `}
                  mb="2.5rem"
                >
                  Data driven business insights | SQL | Python <span className="emphasize-text">🚀</span>
                </Text>
                <Box
                  color="text"
                  css={`
                    p {
                      line-height: 1.5;
                      font-size: 0.95rem;
                      text-align: justify;
                      text-indent: 20px;
                    }
                  `}
                  mb="2.5rem"
                >
                <p>
                  I'm a data geek. Whether it's crunching numbers, manipulating data, or 
                  creating beautiful and impactful visualizations, I absolutely love it. 
                  It's amazing how it can guide strategic decisions and uncover hidden opportunities. 
                  You will always find me learning new techniques and putting them in practise to solve for business problems. 
                  When I'm passionate about something, I go all in! I get totally obsessed with learning more and 
                  diving deep into the subject. It's exhilarating to uncover new insights and bring fresh perspectives 
                  to the table. I'm the kind of person who automatically thinks of why a new idea or process might not work. 
                  But don't worry, I'm not here to rain on your parade. I'm all about finding solutions and helping 
                  overcome any obstacles in the way, which is why I am your guy if something needs to be fixed or problems need to be solved.
                </p>
                 
                </Box>
                <Box className="d-flex flex-column align-items-center text-center">
                  <Social className="test classname" />
                </Box>
              </Box>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default Hero
