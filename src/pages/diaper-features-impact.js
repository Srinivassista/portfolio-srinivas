import React, { useState, useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { Element } from 'react-scroll'

import { Section, Button, Title, Text, Box } from '../components/Core'
import Contact from '../sections/landing1/Contact'


import { device, breakpoints } from '../utils'

import { BiListUl } from 'react-icons/bi'
import { FaDatabase } from 'react-icons/fa'
import { FaFileExcel } from 'react-icons/fa'
import { HiArrowNarrowLeft } from 'react-icons/hi'



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
              Impact of diaper features on sales in South America for P&G
              </Title>
            </Col>
          </Row>

          
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">01. Analysis Objective</Title>
              <p>
              The client (P&G) wanted to understand the impact of their packaging changes in the diaper category across South America on their sales.
              Based on this analysis, P&G would make decisions on what type of packaging works best across sub-categories and markets. 
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">02. Data Sources</Title>
              <p>
              The following data sources were used
              </p>
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
                        <FaDatabase/>
                      </span>
                    </div>
                  </Col>
                  <Col className="col-12 achievements-desc" lg="12" sm="9">
                    <Title variant="cardSm" className="mt-3">
                      Nielsen Database for sales
                    </Title>
                    
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
                        <FaFileExcel />
                      </span>
                    </div>
                  </Col>
                  <Col className="col-12 achievements-desc" lg="12" sm="9">
                    <Title variant="cardSm" className="mt-3">
                      Campaign and Packaging data in Excel
                      </Title>
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
                        <BiListUl />
                      </span>
                    </div>
                  </Col>
                  <Col className="col-12 achievements-desc" lg="12" sm="9">
                    <Title variant="cardSm" className="mt-3">
                      Survey data from customers
                    </Title>
                    
                  </Col>
                </Row>
              </Col>
            </Col>
          </Row>
        
            <br>
            </br>
            <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">03. Analysis steps and results</Title>
              <p>To analyse this data the following tools and steps were taken </p>
            <p>• Data was cleaned to remove unwanted variables ( more than 1000) in <code>R</code> and <code>Excel</code> </p>
            <p>• Data was collated using <code>SQL</code></p>
            <p>• A Naive Bayes model was created used <code>BayesiaLab</code></p>
            <p>• A report was created to present findings</p>
            <br>
            </br>
            The main findings of this analysis were 
            <p>• Packaging variables like color, promotion text used had a minimal impact on the sales with the actual promotion being the feature with highest importance</p>
            <p>• Customer's perception of packaging did not impact sales ( Perception variables were not able to explain enough variance)</p>
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
          
          



