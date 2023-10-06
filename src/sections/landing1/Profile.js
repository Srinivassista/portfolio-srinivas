import React, { useState, useContext } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { Section, Button, Title, Text, Box } from '../../components/Core'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Element } from 'react-scroll'

import honestLogo from '../../assets/img/profile/honest.png'
import chevronLogo from '../../assets/img/profile/chevron.png'
import pttgcLogo from '../../assets/img/profile/pttgc.png'
import chulaLogo from '../../assets/img/profile/chula.png'
import fabLogo from '../../assets/img/profile/fabelio.jpg'
import stepLogo from '../../assets/img/profile/stepfix.png'

import honestLogoDark from '../../assets/img/profile/honest-dark.png'
import chevronLogoDark from '../../assets/img/profile/chevron-dark.png'
import pttgcLogoDark from '../../assets/img/profile/pttgc-dark.png'
import chulaLogoDark from '../../assets/img/profile/chula-dark.png'
import fabLogoDark from '../../assets/img/profile/fabelio.jpg'
import stepLogoDark from '../../assets/img/profile/stepfix.png'

import GlobalContext from '../../context/GlobalContext'
import { device } from '../../utils'



const ProfileCard = styled(Box)`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 0rem !important;
  margin-right: 0rem !important;

  .logo {
    flex: 0 0 52px;
    padding-right: 5px;
    padding-left: 5px;
    @media ${device.md} {
      flex: 0 0 72px;
      padding-right: 15px;
      padding-left: 15px;
    }
  }

  .padding-dynamic {
    padding: 0px;
    @media ${device.md} {
      padding-right: 15px;
      padding-left: 15px;
    }
  }

  .profile-card-title {
    margin-bottom: 0.3rem;
  }

  .logo-position-row {
    padding-left: 0px;
    padding-right: 0px;
    margin-right: 0px;
    margin-left: 0px;
    margin-bottom: 0.5rem;
  }

  .description-row {
    padding-left: 0px;
    padding-right: 0px;
    margin-right: 0px;
    margin-left: 0px;
    // margin-bottom: 1rem;
  }

  .logo-bottom {
    flex: 0 0 0px;
    padding-right: 0px;
    padding-left: 0px;
    @media ${device.md} {
      flex: 0 0 72px;
      padding-right: 15px;
      padding-left: 15px;
    }
  }

  .description-col {
    padding-right: 0px;
    padding-left: 0px;
  }

  .profile-card-organization {
    font-size: 0.9rem;
  }

  .profile-card-heading p {
    text-align: left;
  }

  .profile-card-date p {
    text-align: left;

    @media (min-width: 768px) {
      text-align: right;
    }
  }

  p {
    line-height: 1.5;
    font-size: 0.95rem;
    text-align: justify;
    margin-bottom: 0px;
  }

  span.sub-bullet {
    margin-left: 30px;
    display: block;
  }

  .link-icon {
    font-size: 10px;
    color: ${({ theme }) => theme.colors.frontShade};
    position: relative;
    bottom: 1px;
  }
`

const Board = styled(Col)`
  border-color: ${({ theme }) => theme.colors.shadow};
  background-color: ${({ theme }) => theme.colors.shadow};
  border-radius: 10px;
  padding: 1.25rem 15px 2.2rem 15px !important;
  @media ${device.sm} {
    padding: 1.25rem 1.875rem 2.2rem 1.875rem !important;
  }

  hr {
    border-top-color: ${({ theme }) => theme.colors.frontShade2};
  }
`

const Profile = () => {
  const [active, setActive] = useState(false)
  const gContext = useContext(GlobalContext)
  const py_section = ['30px', null, '35px', '40px']

  return (
    <>
      <Section py={py_section}>
        <Container>
          <Element name="experience">
            <Row className="d-flex justify-content-center align-items-center">
              <Board lg="9">
                <ProfileCard className="row">
                  <div className="col-12 padding-dynamic">
                    <Title variant="cardLg">Relevant Experience</Title>
                  </div>
                </ProfileCard>
                <ProfileCard className="row">
                  <div className="row logo-position-row w-100">
                    <div className="col logo">
                      <img
                        src={!gContext.theme.bodyDark ? stepLogo : stepLogoDark}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="col p-0">
                      <div className="row">
                        <div className="col-12 col-xl-7 profile-card-heading">
                          <Title variant="cardSm" className="profile-card-title">
                          Co-founder and COO
                          </Title>
                        </div>
                        <div className="col-12 col-xl-5 d-none d-xl-block profile-card-date">
                          <p>{/*Somewhere | */}Aug 2019 – Dec 2021</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 profile-card-heading">
                          <Text variant="small" color="text" className="profile-card-organization">
                            <span className="emphasize-text">StepFix</span> : An e-mobility subscription service in Belgium.
                          </Text>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 d-xl-none profile-card-heading">
                          <p>{/*Somewhere | */}Aug 2019 – Dec 2021</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row description-row w-100">
                    <div className="col logo-bottom"></div>
                    <Box className="col description-col" color="text">
                      <p>
                        Write the projects here 
                      </p>
                    </Box>
                  </div>
                </ProfileCard>
                <hr />
                <ProfileCard className="row">
                  <div className="row logo-position-row w-100">
                    <div className="col logo">
                      <img
                        src={!gContext.theme.bodyDark ? fabLogo : fabLogoDark}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="col p-0">
                      <div className="row">
                        <div className="col-12 col-xl-7 profile-card-heading">
                          <Title variant="cardSm" className="profile-card-title">
                          Co-founder and Director of Operations
                          </Title>
                        </div>
                        <div className="col-12 col-xl-5 d-none d-xl-block profile-card-date">
                          <p>{/*Somewhere | */}Mar 2015 – Jun 2019</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 profile-card-heading">
                          <Text variant="small" color="text" className="profile-card-organization">
                            <span className="emphasize-text">Fabelio</span> : Leading home furnishing e-commerce in Indonesia.
                          </Text>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 d-xl-none profile-card-heading">
                          <p>{/*Somewhere | */}Mar 2015 – Jun 2019</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row description-row w-100">
                    <div className="col logo-bottom"></div>
                    <Box className="col description-col" color="text">
                      <p>
                        Write the projects here 
                      </p>
                    </Box>
                  </div>
                </ProfileCard>
                <hr />
                <ProfileCard className="row">
                  <div className="row logo-position-row w-100">
                    <div className="col logo">
                      <img
                        src={!gContext.theme.bodyDark ? chevronLogo : chevronLogoDark}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="col p-0">
                      <div className="row">
                        <div className="col-12 col-xl-7 profile-card-heading">
                          <Title variant="cardSm" className="profile-card-title">
                            Operations Manager (Commercial)
                          </Title>
                        </div>
                        <div className="col-12 col-xl-5 d-none d-xl-block profile-card-date">
                          <p>{/*Somewhere | */}Nov 2013 – Mar 2015</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 profile-card-heading">
                          <Text variant="small" color="text" className="profile-card-organization">
                            <span className="emphasize-text">Lazada</span> : Largest e-commerce operator in South East Asia
                          </Text>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 d-xl-none profile-card-heading">
                          <p>{/*Somewhere | */}Jul 2017 – Apr 2022</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row description-row w-100">
                    <div className="col logo-bottom"></div>
                    <Box className="col description-col" color="text">
                      <p>
                        • Analyzing sales and marketing data to create strategies for 
                        category management team that enabled them to make important decisions during the hyper growth phase of the company.
                      </p>
                      <p>
                        • Coordinating activities between Purchasing and other departments within the company to achieve profitability, 
                        margin and inventory KPIs. Driving important KPI focussed meetings ( S&OP, Overstock) to reduce operational risk within the e-retail business
                      </p>
                      
                    </Box>
                  </div>
                </ProfileCard>
                <hr />
                <ProfileCard className="row">
                  <div className="row logo-position-row w-100">
                    <div className="col logo">
                      <img
                        src={!gContext.theme.bodyDark ? honestLogo : honestLogoDark}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="col p-0">
                      <div className="row">
                        <div className="col-12 col-xl-7 profile-card-heading">
                          <Title variant="cardSm" className="profile-card-title">
                            Data Analyst
                          </Title>
                        </div>
                        <div className="col-12 col-xl-5 d-none d-xl-block profile-card-date">
                          <p>{/*Somewhere | */}Aug 2012 – Aug 2013</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 profile-card-heading">
                          <Text variant="small" color="text" className="profile-card-organization">
                            <span className="emphasize-text">Fractal Analytics</span> : a prominent provider of Artificial Intelligence to Fortune 500® companies.
                          </Text>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 d-xl-none profile-card-heading">
                          <p>{/*Somewhere | */}Aug 2012 – Aug 2013</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row description-row w-100">
                    <div className="col logo-bottom"></div>
                    <Box className="col description-col" color="text">
                      <p>
                        • Created a Bayesian network of features (Size type, color, promotion) to understand their impact on sales of 
                        diapers across multiple countries
                                           
                      </p>
                      <p>
                        • Combined data from different sources ( Excel, SQL database), manipulated data in R and used Tableau for creating compelling visuals
                      </p>
                    </Box>
                  </div>
                </ProfileCard>
              </Board>
            </Row>
          </Element>
        </Container>
      </Section>
      <Section py={py_section}>
        <Container>
          <Element name="education">
            <Row className="d-flex justify-content-center align-items-center">
              <Board lg="9">
                <ProfileCard className="row">
                  {/* <div className="col-12 mb-4 padding-dynamic"> */}
                  <div className="col-12 padding-dynamic">
                    <Title variant="cardLg">Education</Title>
                  </div>
                </ProfileCard>
                <ProfileCard className="row">
                  <div className="row logo-position-row w-100">
                    <div className="col logo">
                      <img
                        src={!gContext.theme.bodyDark ? chulaLogo : chulaLogoDark}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="col p-0">
                      <div className="row">
                        <div className="col-12 col-md-8 profile-card-heading">
                          <Title variant="cardSm" className="profile-card-title">
                            M.Sc. in Mathematics
                          </Title>
                          <Text variant="small" color="text" className="profile-card-organization">
                            <span className="emphasize-text">Birla Institute of Technology and Science,Pilani</span>{' '}
                            <br className="d-flex d-md-none" />
                          
                          </Text>
                        </div>
                        {/* <div className="col-12 col-md-4 profile-card-date">
                          <p>2020 – 2022</p>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </ProfileCard>
                <hr />
                <ProfileCard className="row">
                  <div className="row logo-position-row w-100">
                    <div className="col logo">
                      <img
                        src={!gContext.theme.bodyDark ? chulaLogo : chulaLogoDark}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="col p-0">
                      <div className="row">
                        <div className="col-12 col-md-8 profile-card-heading">
                          <Title variant="cardSm" className="profile-card-title">
                            B.E in Civil Engineering
                          </Title>
                          <Text variant="small" color="text" className="profile-card-organization">
                            <span className="emphasize-text">Birla Institute of Technology and Science,Pilani</span>{' '}
                            <br className="d-flex d-md-none" />
                            
                          </Text>
                        </div>
                        {/* <div className="col-12 col-md-4 profile-card-date">
                          <p>2008 – 2012</p>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </ProfileCard>
              </Board>
            </Row>
          </Element>
        </Container>
      </Section>
      <Section py={py_section}>
        <Container>
          <Element name="skills">
            <Row className="d-flex justify-content-center align-items-center">
              <Board lg="9">
                <ProfileCard className="row">
                  {/* <div className="col-12 mb-4 padding-dynamic"> */}
                  <div className="col-12 padding-dynamic">
                    <Title variant="cardLg">Skills</Title>
                  </div>
                </ProfileCard>
                <ProfileCard className="row">
                  <div className="col padding-dynamic">
                  <p>
                      • Data Analytics : <code>SQL💪</code>, {' '}
                      Data Cleaning,Data Visualisation, <code>Excel and Gsheets💪</code>,{' '}
                      Reporting 
                    </p>
                    <p>
                      • Data Science : <code>Python💪</code>, {' '}
                      Data Wrangling with pandas,<code>ML models with Scikit-Learn💪</code>,{' '}
                      (Un)Supervised Learning 
                    </p>
                    
                    <p>
                      • Other Expertise : Project Management, Operations Excellence,{' '}
                      Business Growth, Entrepreneurship,{' '}
                      Statistics
                    </p>
                    <p>
                    
                      • Languages : <code>English (Fluent)</code>,<code>Dutch (B2)</code>,{' '}
                    </p>
                  </div>
                </ProfileCard>
              </Board>
            </Row>
          </Element>
        </Container>
      </Section>
      <Section py={py_section}>
        <Container>
          <Element name="awards">
            <Row className="d-flex justify-content-center align-items-center">
              <Board lg="9">
                <ProfileCard className="row">
                  {/* <div className="col-12 mb-4 padding-dynamic"> */}
                  <div className="col-12 padding-dynamic">
                    <Title variant="cardLg">Certifications</Title>
                  </div>
                </ProfileCard>
                <ProfileCard className="row">
                  <div className="col padding-dynamic">
                    <p>
                    • Data Analyst Professional Certificate | IBM (Coursera)
                    </p>
                    <p>
                    • SQL Basics for Data Science | UC Davis (Coursera)
                    </p>
                    <p>
                    • Data Vizualisation with Tableau | UC Davis (Coursera)
                    </p>

                    <p>
                      <br />
                    </p>
                    
                  </div>
                </ProfileCard>
              </Board>
            </Row>
          </Element>
        </Container>
      </Section>
    </>
  )
}
export default Profile
