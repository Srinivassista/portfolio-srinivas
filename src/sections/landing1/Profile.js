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

import honestLogoDark from '../../assets/img/profile/honest-dark.png'
import chevronLogoDark from '../../assets/img/profile/chevron-dark.png'
import pttgcLogoDark from '../../assets/img/profile/pttgc-dark.png'
import chulaLogoDark from '../../assets/img/profile/chula-dark.png'

import GlobalContext from '../../context/GlobalContext'
import { device } from '../../utils'

// cert.
import mlexpert_2022 from '../../assets/cert/2022_mlexpert.pdf'
import algoexpert_2022 from '../../assets/cert/2022_algoexpert.pdf'
import data_scientist_python_2020 from '../../assets/cert/2020_data_scientist_python.pdf'
import complete_web_dev_ztm_2022 from '../../assets/cert/2022_complete_web_dev_ztm.pdf'
import toefl from '../../assets/cert/2020_TOEFL.pdf'
import toeic from '../../assets/cert/2020_TOEIC.pdf'
import git_github_2022 from '../../assets/cert/2022_git_github.pdf'
import python_oop_2022 from '../../assets/cert/2022_python_oop.pdf'
import programming_expert from '../../assets/cert/2022_programming_expert.pdf'
import functional_programming_2022 from '../../assets/cert/2022_functional_programming.pdf'
import design_patterns_2022 from '../../assets/cert/2022_design_patterns.pdf'
import system_design_2022 from '../../assets/cert/2022_system_design.pdf'
import mlds_bootcamp_2022 from '../../assets/cert/2022_mlds_bootcamp.pdf'
import hyperparameter_optimization_2022 from '../../assets/cert/2022_hyperparameter_optimization.pdf'
import feature_selection_2022 from '../../assets/cert/2022_feature_selection.pdf'
import feature_engineering_2022 from '../../assets/cert/2022_feature_engineering.pdf'
import docker_kubernetes_2022 from '../../assets/cert/2022_docker_kubernetes.pdf'
import devops_terraform_2022 from '../../assets/cert/2022_devops_terraform.pdf'
import pyspark_2022 from '../../assets/cert/2022_pyspark.pdf'
import clean_code_2022 from '../../assets/cert/2022_clean_code.pdf'
import google_cloud_digital_leader_training_2022 from '../../assets/cert/2022_google_cloud_digital_leader_training.pdf'
import database_engineering_2022 from '../../assets/cert/2022_database_engineering.pdf'
import sql_and_databases_2022 from '../../assets/cert/2022_sql_and_databases.pdf'
import mlops_2022 from '../../assets/cert/2022_mlops.pdf'
import cs50x_2023 from '../../assets/cert/2023_cs50x.pdf'
import frontend_expert_2023 from '../../assets/cert/2023_frontend_expert.pdf'

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
                      <p>
                        • Demonstrated exceptional <code>project management</code> skills in
                        coordinating cross-functional teams for various operational projects driving{' '}
                        <span className="emphasize-text">$128.5 million more benefits</span> and{' '}
                        <span className="emphasize-text">zero injury/incident</span> from my
                        projects.
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
                      <code>Data Cleaning</code>,<code>Data Visualisation</code>, <code>Excel and Gsheets💪</code>,{' '}
                      <code>Reporting</code>, 
                    </p>
                    <p>
                      • Data Science : <code>Python💪</code>, {' '}
                      <code>Data Wrangling with pandas</code>,<code>ML models with Scikit-Learn💪</code>,{' '}
                      <code>(Un)Supervised Learning</code>, 
                    </p>
                    
                    <p>
                      • Other Expertise : <code>Project Management</code>, <code>Operations Excellence</code>,{' '}
                      <code>Business Growth</code>, <code>Entrepreneurship</code>,{' '}
                      <code>Statistics</code>
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
