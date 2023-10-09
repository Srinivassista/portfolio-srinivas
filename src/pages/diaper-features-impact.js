import React, { useState, useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { Element } from 'react-scroll'

import { Section, Button, Title, Text, Box } from '../components/Core'
import Contact from '../sections/landing1/Contact'


import { device, breakpoints } from '../utils'



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
              <Title variant="cardLg">02. Data, Tools and Analysis</Title>
              <p>
              <p>Data for the analysis was procured from the following sources</p>
              <p> 1) Nielsen database</p>
              <p>2) Excel files from client containing data on packaging, associated promotions</p>
              <p>3) Survey data </p>
            <br>
            </br>
            <p>To analyse this data the following tools and steps were taken </p>
            <p>1) Data was cleaned to remove unwanted variables ( more than 1000) in <code>R</code> and <code>Excel</code> </p>
            <p>2) Data was collated using <code>SQL</code></p>
            <p>3) A Naive Bayes model was created used <code>BayesiaLab</code></p>
            <p>4) A report was created to present findings</p>
            <br>
            </br>
            The main findings of this analysis were 
            <p>1) Packaging variables like color, promotion text used had a minimal impact on the sales with the actual promotion being the feature with highest importance</p>
            <p>2) Customer's perception of packaging did not impact sales ( Perception variables were not able to explain enough variance)</p>
              </p>
            </Col>
          </Row>


          </Container>
      </Section>
      <Contact />
    </>
  )
}
export default WorkSingle
          
          



