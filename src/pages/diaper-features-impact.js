import React, { useState, useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { Element } from 'react-scroll'

import { Section, Button, Title, Text, Box } from '../components/Core'
import Contact from '../sections/landing1/Contact'
import imgSenFol from '../assets/img/portfolio/senfollowers.png'
import imgFolCount from '../assets/img/portfolio/folcount.png'
import imgSenFriend from '../assets/img/portfolio/senfriends.png'
import imgFrndCount from '../assets/img/portfolio/frcount.png'
import imgSenTweet from '../assets/img/portfolio/sentweets.png'
import imgTweetCount from '../assets/img/portfolio/twcount.png'
import imgTweetDays from '../assets/img/portfolio/tweetdays.png'
import imgTweetYears from '../assets/img/portfolio/tweetyears.png'
import imgRetweets from '../assets/img/portfolio/retweets.png'
import imgMentions from '../assets/img/portfolio/mentions.png'
import imgInteractions from '../assets/img/portfolio/interaction.png'
import imgCluster from '../assets/img/portfolio/cluster.png'
import imgConnGraph from '../assets/img/portfolio/conngraph.png'
import imgDegPlot from '../assets/img/portfolio/degreeplot.png'
import imgElbow from '../assets/img/portfolio/elbow.png'
import imgSenatorInt from '../assets/img/portfolio/senint.png'
import imgHashtags from '../assets/img/portfolio/hashtags.png'

import { device, breakpoints } from '../utils'


import { HiArrowNarrowLeft,HiArrowNarrowRight} from 'react-icons/hi'
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
              Impact of diaper features on sales in South America for P&G
              </Title>
            </Col>
          </Row>
          </Container>
      </Section>
      <Contact />
    </>
  )
}
export default WorkSingle
          
          



