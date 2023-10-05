import React, { useState, useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { Element } from 'react-scroll'

import { Section, Button, Title, Text, Box } from '../components/Core'
import Contact from '../sections/landing1/Contact'
import imgWorkCover from '../assets/img/portfolio/ml-research-framework.png'
import imgTimeTrans from '../assets/img/portfolio/timeoftrans.png'
import imgDayTrans from '../assets/img/portfolio/daytrans.png'
import imgAgeTrans from '../assets/img/portfolio/agetrans.png'
import imgAgeTrans2 from '../assets/img/portfolio/agetrans2.png'
import imgAmtTrans from '../assets/img/portfolio/amttrans.png'
import imgCatTrans from '../assets/img/portfolio/cattrans.png'
import imgLRCM from '../assets/img/portfolio/logregcm.png'
import imgLRROC from '../assets/img/portfolio/logregroc.png'
import imgRFCM from '../assets/img/portfolio/rfcm.png'
import imgRFROC from '../assets/img/portfolio/rfroc.png'
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
              <Row>

              </Row>
              <p>The data consisted of 1296675 rows and 23 columns in the training dataset spread across 730 days.
                There are 989 unique customers whose transactions are in the data. 
                I wanted to understand the impact of the following features/variables on the target variable ( is_fraud)</p>
              <p>• <b><u>Time of transaction</u></b> : There is a clear indication that most fraud happens between 9 PM to 3 AM. 
              
              <Row className="justify-content-center align-items-center d-flex mt-5 mb-4">
              <Col lg="6" className="mb-5">
                <img src={imgTimeTrans} alt="" />
              </Col>
              </Row>
              </p>
              <p>• <b><u>Day of week of transaction </u></b>: There does seem to be significant variration in fraud by day of week. 
                An ANOVA test gave an f-statistic of 30 with a very low p-value, confirming that not all Dayofweek have 
                zero impact on the target variable.</p>
                <Row className="justify-content-center align-items-center d-flex mt-5 mb-4">
              <Col lg="6" className="mb-5">
                <img src={imgDayTrans} alt="" className="img-fluid w-100" />
              </Col>
              </Row>
              
              <p>• <b><u>Amount of transaction</u></b> : A boxplot of amount vs is_fraud showed that transactions which were not fraud 
                had a very low mean and lots of outliers whereas fraud transactions seem to have very little variance and 
                are usually higher in value that non-fraudulent transactions. The mean and medians for fraud transactions 
                are almost 10x the non fraud ones. </p>
              <Row className="justify-content-center align-items-center d-flex mt-5 mb-4">
              <Col lg="6" className="mb-5">
                <img src={imgAmtTrans} alt="" className="img-fluid w-100" />
              </Col>
              </Row>
              <p> •  <b><u>Merchant</u></b> : I looked at the merchants with highest rate of fraud transactions and drilled down and noticed 
                that they all shared a certain Category of transaction. To explore further I created a list of outlier 
                merchants with high fraud levels and compared the fraud distribution across these merchants by category 
                to the distribution of fraud by category for all merchants. I did not notice any difference, leading me to 
                conclude that merchants themselves were not an important predictor of fraud but the transaction category might be.</p>
               <p> •  <b><u>Distance between merchant location and customer location</u></b> : There was no relationship between the physical 
                distance between merchant and customer to is_fraud.</p>
                <p>•  <b><u>City/State</u></b> : I observed that some states had very high fraud rate with particularly 3 outliers. Digging deeper 
                I could see that 2 out of these 3 states had high fraud ratio as the same customer had multiple fraud transactions 
                in that state. This led me to conclude that the state was not an important predictor of fraud. I did the same 
                with cities, but also created a table of unique customers frauded per city to remove outliers. The cities with 
                very high fraud rate were also not in the high fraud rate States. I did not have a strong indication that this 
                feature should be part of the model so I decided to make the model without city first.</p>
                <p>•  <b><u>Categories</u></b> : Category of transaction had a clear impact on the probability of fraud as witnessed by the below graph. </p>
                <Row className="justify-content-center align-items-center d-flex mt-5 mb-4">
              <Col lg="6" className="mb-5">
                <img src={imgCatTrans} alt="" className="img-fluid w-100" />
              </Col>
              </Row>
                <p> •  <b><u>Gender of customer</u></b>: The fraud ratio between genders was also observed to be different with male customers 
                getting frauded 0.64% compared to 0.53% for females. </p>
                <p>•  <b><u>Age of customer</u></b> : There was a difference between fraud rates based on the customer age as seen from the 
                boxplot below. This was confirmed statitically by running a t-test which gave a t-statistic of 14.14 with 
                a very low p-value thus establishing that the distributions of age by is_fraud were different.</p>
                <Row className="justify-content-center align-items-center d-flex mt-5 mb-4">
              <Col lg="6" className="mb-5">
                <img src={imgAgeTrans} alt="" className="img-fluid w-100" />
                <Row className="justify-content-center align-items-center d-flex mt-5 mb-4">
              <Col lg="6" className="mb-5">
                <img src={imgAgeTrans2} alt="" className="img-fluid w-100" />
              </Col>
              </Row>
              </Col>
              </Row>
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
