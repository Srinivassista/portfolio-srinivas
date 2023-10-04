import React, { useState, useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { Element } from 'react-scroll'

import { Section, Button, Title, Text, Box } from '../components/Core'
import Contact from '../sections/landing1/Contact'
import imgWorkCover from '../assets/img/portfolio/ml-research-framework.png'
import { device, breakpoints } from '../utils'

import { HiArrowNarrowLeft } from 'react-icons/hi'
import { BiDollar } from 'react-icons/bi'
import { FaTrophy, FaSmileBeam } from 'react-icons/fa'
import { FcFactory } from 'react-icons/fc'
import { IoIosRocket } from 'react-icons/io'

import { TbRobot, TbPlugConnected } from 'react-icons/tb'

const WorkSingle = () => {
  return (
    <>
      <Section
        py={['50px', null, '50px', '75px']}
        className="mt-lg-5 mt-3"
        css={`
          p {
            text-align: justify;
            font-size: 1rem;
          }

          span.sub-bullet {
            margin-left: 30px;
            display: block;
          }
        `}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="9">
              <Text variant="tag">Machine Learning</Text>
              <Title variant="secSm" className="my-4">
                Credit Card Fraud Detection
              </Title>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">01. Learning Objective</Title>
              <p>
              1. Get experience in analysing credit card fraud
              2. Explore simple classification models in Python
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">02. Analysis Objective</Title>
              <p>
              Bank ABC wants to be able to predict whether a particular card usage is fraudulent based on many features.
              This will help them to better inform the customer or take preventive actions in cases where a transaction is predicted to be fraudulent.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center d-flex mt-5 mb-4">
            <Col lg="6" className="mb-5">
              <img src={imgWorkCover} alt="" className="img-fluid w-100" />
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-1">
            <Col lg="9">
              <Title variant="cardLg">03. Methodology</Title>
            </Col>
          </Row>
          <Row
            className="justify-content-center mt-0 mb-4"
            css={`
              .achievements-icon {
                font-size: 5rem;
                justify-content: center;
                align-items: center;
              }

              .achievements-desc {
                text-align: center;
                padding-left: 0px;
                @media ${device.lg} {
                  padding-left: 15px;
                }
                @media (max-width: 576px) {
                  padding-left: 15px;
                }
              }

              .achievements-card {
                margin-top: 15px;
                @media (max-width: ${breakpoints.sm}px) {
                  padding-left: 0px;
                  padding-right: 0px;
                }
              }

              .achievements-card2 {
                background: ${({ theme }) => theme.colors.shadow};
                padding-bottom: 15px;
                padding-top: 15px;
                border-radius: 20px;
              }

              .achievements-icon2 {
                width: 80px;
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0.5rem;
                border-radius: 50%;
                border: none;
                transition: 0.4s;
                font-size: 3rem;
                color: #000;
                background: ${({ theme }) => theme.colors.light};
              }

              .achievements-icon2 > span {
                margin-top: -10px;
              }
            `}
          >
            <Col lg="4" className="achievements-card">
              <Col className="col-12 h-100 achievements-card2">
                <Row>
                  <Col className="col-12 d-flex achievements-icon" lg="12" sm="3">
                    <div className="achievements-icon2">
                      <span
                        css={`
                          color: #e8ad11;
                        `}
                      >
                        <IoIosRocket />
                      </span>
                    </div>
                  </Col>
                  <Col className="col-12 achievements-desc" lg="12" sm="9">
                    <Title variant="cardSm" className="mt-3">
                      Exploratory Analysis
                    </Title>
                    <Text variant="small">
                    Initial exploratory analysis to find relationship between target variable and features
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Col>
            <Col lg="4" className="achievements-card">
              <Col className="col-12 h-100 achievements-card2">
                <Row>
                  <Col className="col-12 d-flex achievements-icon" lg="12" sm="3">
                    <div className="achievements-icon2">
                      <span
                        css={`
                          color: #7a996d;
                        `}
                      >
                        <TbRobot />
                      </span>
                    </div>
                  </Col>
                  <Col className="col-12 achievements-desc" lg="12" sm="9">
                    <Title variant="cardSm" className="mt-3">
                      Data Cleaning and Feature Engineering
                    </Title>
                    <Text variant="small">
                      Clean available data, impute missing values and create derived features
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Col>
            <Col lg="4" className="achievements-card">
              <Col className="col-12 h-100 achievements-card2">
                <Row>
                  <Col className="col-12 d-flex achievements-icon" lg="12" sm="3">
                    <div className="achievements-icon2">
                      <span
                        css={`
                          color: #e4a8ae;
                        `}
                      >
                        <TbPlugConnected />
                      </span>
                    </div>
                  </Col>
                  <Col className="col-12 achievements-desc" lg="12" sm="9">
                    <Title variant="cardSm" className="mt-3">
                      Classification ML models
                    </Title>
                    <Text variant="small">
                    Creating classification models for prediction of fraud and compare model performances.
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">04. Analysis Techniques Used</Title>
              <p>
              • Student t-test
              </p>
              <p>
              • ANOVA tests
              </p>
              <p>
              • Logistic regression classifier
              </p>
              <p>
              • Random Forest classifier
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">05. Exploratory Data Analysis</Title>
              <p>
              The data is available in the form of a csv which was read into Python using pandas.
              There were no missing values in the data and the data could be used as it was for analysis.
              Some variables were created from existing variables
              <p>• Transaction time</p>
              <p>• Transaction day of week</p>
              <p>• Transaction category type</p>
              <p>• Customer age from date of birth</p>
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">06. Data Modeling</Title>
              <p>
              Enter details
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">07. Findings and further research</Title>
              <p>
              The transaction amount, customer age and the time of day when the transaction occurred are very accurate 
              predictors of whether a transaction is a fraud. I believe that there can still be a slight improvement in 
              the model to reduce Type 1 error ( cases where there is a fraud but we predict there is not). For this we 
              can either focus on hyperparameter tuning in the Random Forest classifier or try other classification 
              models like Neural Networks.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center d-flex mt-5 mb-4">
            <Col lg="6" className="mb-5">
              <img src={imgWorkCover} alt="" className="img-fluid w-100" />
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center d-flex mt-5 mb-4">
            <Col lg="6" className="mb-5">
              <img src={imgWorkCover} alt="" className="img-fluid w-100" />
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Link to="/">
              <Button>
                <HiArrowNarrowLeft
                  className="mr-4"
                  css={`
                    font-size: 1.25rem;
                  `}
                />
                Home
              </Button>
            </Link>
          </Row>
        </Container>
      </Section>
      <Contact />
    </>
  )
}
export default WorkSingle
