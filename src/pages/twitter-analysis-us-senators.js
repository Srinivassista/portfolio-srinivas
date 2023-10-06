import React, { useState, useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { Element } from 'react-scroll'

import { Section, Button, Title, Text, Box } from '../components/Core'
import Contact from '../sections/landing1/Contact'
import imgTimeTrans from '../assets/img/portfolio/timeoftrans.png'
import imgDayTrans from '../assets/img/portfolio/daytrans.png'
import imgAgeTrans from '../assets/img/portfolio/agetrans.png'
import imgAgeTrans2 from '../assets/img/portfolio/agetrans2.png'
import imgAmtTrans from '../assets/img/portfolio/amttrans.png'
import imgCatTrans from '../assets/img/portfolio/catgtrans.png'
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
import { HiEye } from 'react-icons/hi'
import { BiBong } from 'react-icons/bi'
import { FaProjectDiagram } from 'react-icons/fa'


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
              <Text variant="tag">Data Analysis</Text>
              <Title variant="secSm" className="my-4">
                Twitter Analysis of US senators ( 2008-2017)
              </Title>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">01. Learning Objective</Title>
              <p>
              <p>1. Get experience in working with social media data</p>
              <p>2. Explore simple network graphs and analysis in Python</p>
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">02. Analysis Objective</Title>
              <p>
              Lobbyists4America is a company that seeks to provide insights to their customers aiming to affect legislation within the US. 
              The client wants to analyze the 2008-2017 congressional tweets in order to understand
                <p>1. Key topics</p>
                <p> 2. Key members</p>
                <p> 3. Relationships within Congress</p>
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
                        <HiEye/>
                      </span>
                    </div>
                  </Col>
                  <Col className="col-12 achievements-desc" lg="12" sm="9">
                    <Title variant="cardSm" className="mt-3">
                      Exploratory Analysis
                    </Title>
                    <Text variant="small">
                    Initial exploratory data analysis of senators(users) data and tweets data.
                    Data cleaning and missing value imputation
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
                        <BiBong />
                      </span>
                    </div>
                  </Col>
                  <Col className="col-12 achievements-desc" lg="12" sm="9">
                    <Title variant="cardSm" className="mt-3">
                      Feature Engineering
                    </Title>
                    <Text variant="small">
                    Creating features and dropping features not required for analysis
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
                        <FaProjectDiagram />
                      </span>
                    </div>
                  </Col>
                  <Col className="col-12 achievements-desc" lg="12" sm="9">
                    <Title variant="cardSm" className="mt-3">
                      Hypothesis testing
                    </Title>
                    <Text variant="small">
                    Creating hypothesis based off of exploration and testing hypotheses
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
                        <FaProjectDiagram />
                      </span>
                    </div>
                  </Col>
                  <Col className="col-12 achievements-desc" lg="12" sm="9">
                    <Title variant="cardSm" className="mt-3">
                      Conclusion
                    </Title>
                    <Text variant="small">
                    Presentation of conclusions, findings and potential next steps
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">04. Analysis Techniques Used</Title>
              <p> • Hypothesis testing with Student-t-test (scipy)
              </p>
              <p> • Unsupervised machine learning with K-means clustering (sklearn)
              </p>
              <p> • Network graphs (networkx)
              </p>
              
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">05. Exploratory Data Analysis</Title>
                <p> The data is in the form of 2 JSONs
                  <p>Users.json : list of all relevant twitter users</p>
                  <p>Tweets.json : list of all tweets from the above users</p>
                  The .json files were read into Python as pandas objects 
                  using read_json with defined chunksize because they were large (2GB). 
                  The pandas dataframes were then read back to a csv format to be able to load data easier 
                  in the future.
                  <p>• Checked for missing values in both tables and columns 
                    (all missing data/non valuable data/duplicate info) 
                  </p>
                  <p>• New features created from existing columns
                  </p>
                  <p>• Changed columns type to extract information
                    <p>Tweets – ‘source’ from html layout to string using BeautifulSoup, extracted 
                      hashtags used, user ids mentioned in tweets from dict type column</p>
                  </p>
                  <p>• Removed rows in tweets data not corresponding to users in users table
                  </p>
              </p>
              
               
              
              
            </Col>
          </Row>
          
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">06. Data Modeling</Title>
              <p>
              • <b><u>Logistic Regression</u></b> : After adding dummy variables for all selected categorical variables, and 
              scaling the continuous variables, I used logistic regression to predict whether a transaction is fraud or not.
              The model had a very high score of 0.995 on test data. However the AUC of the ROC curve was at 0.78.
              </p>
                <Row className="justify-content-center align-items-center d-flex mt-5 mb-4">
                  <Col lg="6" className="mb-5">
                    <img src={imgLRCM} alt="" height="300" width="300" />
                  </Col>
                  <Col lg="6" className="mb-5">
                    <img src={imgLRROC} alt="" height="300" width="500" />
                  </Col>
                </Row>
                <p>
                • The model is a decent classifier but results in high type 1 errors ( False negatives).
                </p>
                <p>
              • <b><u>Random Forest Classifier </u></b> : The model had a very high score of 0.998 and also a high AUC value of 0.97 on test data.
              </p>
                <Row className="justify-content-center align-items-center d-flex mt-5 mb-4">
                  <Col lg="6" className="mb-5">
                    <img src={imgRFCM} alt="" height="300" width="300" />
                  </Col>
                  <Col lg="6" className="mb-5">
                    <img src={imgRFROC} alt="" height="300" width="500" />
                  </Col>
                </Row>
                <p>
                • The features with the highest importance were
                 <p> - Transaction Amount</p>
                 <p> - Age of customer</p>
                 <p> - Hour of day of transaction</p>
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
