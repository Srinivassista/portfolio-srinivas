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
import { HiOutlineBeaker } from 'react-icons/hi'
import { HiOutlineDocumentText } from 'react-icons/hi'



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
                Twitter Analysis of US senators
              </Title>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">01. Learning Objective</Title>
              <p>
              <p>1. Get experience in analysing social media data</p>
              <p>2. Explore network graphs and their analysis in Python</p>
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
                        <HiOutlineBeaker />
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
                          color: #a7c7e7;
                        `}
                      >
                        <HiOutlineDocumentText />
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
              <p> • Hypothesis testing with Student-t-test (<code>scipy</code>)
              </p>
              <p> • Unsupervised machine learning with K-means clustering (<code>sklearn</code>)
              </p>
              <p> • Network graphs (<code>networkx</code>)
              </p>
              
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">05. Exploratory Data Analysis</Title>
                <p> The data is in the form of 2 JSONs : 
                  <br></br>
                  <p>Users.json : list of all relevant twitter users</p>
                  <p>Tweets.json : list of all tweets from the above users</p>
                  <br></br>
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
                <p>
                  <b><u>Users data</u></b> : 
                    <p> • There are 548 senators that are part of this analysis</p>
                    <p> • Most senators have very low twitter following (median 16k) as well as friends (median 800) with a few outliers</p>
                    <p> Insert 2 graphs here after they are made good looking</p>
                    <p>• Top 5 in terms of following and friends and number of tweets below :</p>
                      <p>Insert 3 images here from Kaggle notebook</p>
                    <p>• Most senators have tweeted less than 3k times (median is 2.7k) over 2008-2017</p>
                    <p> Insert image here</p>
                </p>
                <p>
                    <b><u>Tweets data</u></b> :
                    <p>&emsp;• The data has 1,235,383 tweets with 21 features.</p>
                    <p>&emsp;• The tweets are from  2008-08-04 to 2017-06-06 – approx. 9 years ( with 3 presidential election years – 2008, 2012 and 2016)</p>
                    <p>&emsp;• The number of tweets from senators has grown exponentially over the years</p>
                    <p>&emsp;• 2016 tweeting looks like all time high but 2017 data is only till 6th June so extrapolating to full year would have resulted in 514k senator tweets</p>
                    <p>&emsp;• There are some outlier days with crazy activity in tweeting that might be worth investigating</p>
                    <p> Inset 2 images here </p>
                    <p>&emsp; • Retweeting/Mentioning and quoting by senators</p>
                    <p> &emsp;&emsp; • The retweeting/quoting starting from 2015 and has kept increasing. The ratio of retweets over total tweets is also increasing YoY.</p>
                    <p>&emsp;&emsp; • Mentioning has grown from 20% in 2010 to more than 50% of all tweets made by senators having mentions</p>
                    <p>&emsp;&emsp; • The overall interaction on twitter by senators is on the up with 55% of all tweets in 2016 having either mentions, quotes are retweeted and this number is still increasing in 2017.</p>
                    <p>&emsp; • Use of hashtags by senators</p>
                    <p>&emsp; &emsp; • 2014 and 2015 had more than 50% of tweets with hashtags, however this % is dropping since 2016</p>
                    <p>&emsp; • Relevant topics by year</p>
                    <p>&emsp; &emsp; • TCOT (Top Conservatives of Twitter) was used a lot till 2014</p>
                    <p>&emsp; &emsp; • 4jobs was a relevant hashtag in 2011 and 2012</p>
                    <p>&emsp; &emsp; • 2015 and 2016 had State of the Union being discussed a lot (#SOTU). Even though this is annual, only these 2 years have seen it being a big focus</p>
                    <p>&emsp; &emsp; • Obamacare has been a top topic since 2012 to 2017 constantly</p>
                    <p>&emsp; &emsp; • Zika in 2016 and Trumpcare in 2017 were highly discussed topics</p>






                </p>
              
               
              
              
            </Col>
          </Row>
          
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">06. Hypotheses</Title>
              
                Based on the initial exploration, I have the following hypotheses
              
              <table border="1" border-spacing="10px" border-collapse="separate" padding="15px">
                 
                <tr>
                  <th> Hypothesis
                  </th>
                  <th>Test
                  </th>
                </tr>
                <tr>
                  <td> Hypothesis A : Presidential election years see an increase in senator interaction 
                activity due to party campaigns.</td>
                  <td>The % of tweets with interactions with other senators will be higher in 2012 and 2016 compared to other years as these are 
                presidential campaign years and I expect there to be strong Twitter campaigns
                  </td>
                </tr> 
                
                <tr> 
                  <td> Hypothesis B: There is a section of users that have a strong interaction with each 
                other for 2016 presidential campaign.
                  </td> 
                  <td>There is a connected subgraph within the graph 
                of all users and interactions(within users) for 2016
                  </td>
                </tr>
                <tr>
                  <td>Hypothesis C: Users had different roles in campaign amplification during 2016 
                presidential campaign
                  </td> 
                  <td>User clustering will yield clusters with well defined roles
                  </td>
                </tr>
              </table>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">07. Hypothesis testing and results</Title>
              <p><b><u>Hypothesis A</u></b></p>
              <p>&emsp; • The % of tweets with senator mentions is increasing year on year and the rate of increase in 2012 and 2016 is actually not more 
                than the previous years as seen by the slope of the line graph</p>
                <p>&emsp; • A t-test on the distribution of senator interaction for (2012vs 2011) has a t-statistic of -27.6 with a p value  less than 0.05 and for 
                  (2016 vs 2015) had a t-statistic 
                of -20.05 with a p-value less than 0.05, indicating that infact there is a statistically significant decrease in senator 
                interaction during the Presidential election years.</p>
              <p><b><u>Hypothesis B</u></b></p>
                <p>&emsp; • There is a connected subgraph within the network graph of all senators and their interactions with Donald Trump being the node with highest</p>
                <p>&emsp; • All other users have much less interaction with each other as seen by the degree histogram</p>
              <p><b><u>Hypothesis C</u></b></p>
                <p>&emsp; • There are 3 clusters within senators based on # of followers, # of tweets and Interaction with other senators</p>
                  <p>&emsp; &emsp;• HEAVY INFLUENCER : Donald Trump’s very high following puts him as his own cluster</p>
                  <p>&emsp; &emsp;• LEADING INFLUENCERS (in yellow) : A set of 5 senators with medium high following and high interaction ( same mean as Trump), but lower avg tweets than Trump</p>
                  <p>&emsp; &emsp;• The rest are users with low followers, low avg tweets and low interactions – PASSIVES (in purple)</p>
              <p><b><u>Conclusions from Hypothesis testing</u></b></p>
                <p>&emsp; • There is no evidence of higher interaction between senators during presidential election years</p>
                <p>&emsp; • There is a group of senators mainly connected via Trump that interacts heavily in a closed group </p>
                <p>&emsp; • Senators can be clustered based on their influence into 3 categories</p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">08. Findings and further research</Title>
              <p>
              • As Lobbyists4America is looking to influence legislation, they need to have influence 
              with the top 2 clusters of senators - the Heavy Influencers and Leading Influencers</p>
              <p>• As there is a strong network of senators that retweet,quote and reply to Donald Trump, 
                it might be useful to engage them on topics they speak about to get amplified</p>
              <p>• There are some key topics that need to be analysed further
                <p>&emsp; • Obamacare being a top topic for many years, the sentiment analysis of this keyword 
                  within the highly interactive senators group</p>
                <p>&emsp; • Analysing some of the days with extremely high number of tweets and the topics 
                  to understand any minor campaigns and who influences them most</p>
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
