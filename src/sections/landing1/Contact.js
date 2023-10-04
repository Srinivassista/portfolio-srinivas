import React from 'react'
import { rgba } from 'polished'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { Section, Title, Text, Span, Box } from '../../components/Core'
import { device } from '../../utils'
import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { Element } from 'react-scroll'

const ContactCard = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => rgba(theme.colors.ash, 0.2)};
`

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  transition: 0.4s;
  background-color: ${({ theme }) => theme.colors.lightShade};
  border-radius: 10px;
  cursor: pointer;
  // max-width: 300px;
  width: 270px;
  :hover {
    transform: translateY(-5px);
  }

  .social-icon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-right: 0.65rem;
    border: none;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.dark};
    background-color: ${({ theme }) => theme.colors.light};
  }

  .social-text {
    color: ${({ theme }) => theme.colors.dark};
  }
`

function copy_email_contact() {
  /* Get the text field */
  var copyText = 'sista.bits@gmail.com'

  navigator.clipboard.writeText(copyText)

  /* Alert the copied text */
  var tooltip = document.getElementById('email-contact')
  tooltip.innerHTML = 'Copied!'
}

function mouse_leave_email_contact() {
  var tooltip = document.getElementById('email-contact')
  tooltip.innerHTML = 'sista.bits@gmail.com'
}

const Contact = ({ hero = false, bg = 'dark', ...rest }) => {
  return (
    <>
      <Element name="contact">
        <Box mt={['50px', null, '65px', '85px']}></Box>
        <Section hero={hero} bg={bg} {...rest}>
          <Container>
            <Row
              className="justify-content-center"
              css={`
                @media ${device.lg} {
                  margin-top: -20px;
                  margin-bottom: -20px;
                }
              `}
            >
              <Col lg="10" className="px-0 px-sm-3">
                <ContactCard className="p-3 p-sm-5 ml-lg-5 mr-lg-5">
                  <Row>
                    <Col md="6" className="mb-3 d-flex justify-content-center">
                      <a href="https://www.linkedin.com/in/srinivas-sista-5ba86a52/" target="_blank">
                        <SocialContainer>
                          <Span className="social-icon">
                            <FaLinkedinIn />
                          </Span>

                          <Text variant="small" className="social-text">
                            Srinivas Sista
                          </Text>
                        </SocialContainer>
                      </a>
                    </Col>
                    <Col md="6" className="mb-3 d-flex justify-content-center">
                      <a href={undefined}>
                        <SocialContainer
                          onClick={copy_email_contact}
                          onMouseLeave={mouse_leave_email_contact}
                        >
                          <Span className="social-icon">
                            <FaEnvelope />
                          </Span>

                          <Text
                            variant="small"
                            className="social-text"
                            id="email-contact"
                            onClick={copy_email_contact}
                          >
                            sista.bits@gmail.com
                          </Text>
                        </SocialContainer>
                      </a>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md="6" className="mb-3 mb-md-0 d-flex justify-content-center">
                      <a href={undefined}>
                        <SocialContainer>
                          <Span className="social-icon">
                            <FaPhoneAlt />
                          </Span>
                          <Text variant="small" className="social-text">
                            (+31)683773181
                          </Text>
                        </SocialContainer>
                      </a>
                    </Col>
                    <Col md="6" className="d-flex justify-content-center">
                      <a href={undefined}>
                        <SocialContainer>
                          <Span className="social-icon">
                            <FaMapMarkerAlt />
                          </Span>
                          <Text variant="small" className="social-text">
                            The Netherlands
                          </Text>
                        </SocialContainer>
                      </a>
                    </Col>
                  </Row>
                </ContactCard>
              </Col>
            </Row>
          </Container>
        </Section>
      </Element>
    </>
  )
}

export default Contact
