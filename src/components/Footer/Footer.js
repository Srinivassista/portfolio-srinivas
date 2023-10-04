import React from 'react'
import { Container } from 'react-bootstrap'
import { Box, Title, Span } from '../Core'
import { BsHeartFill } from 'react-icons/bs'

const Footer = ({ isDark = true }) => {
  const d = new Date()
  let year = d.getFullYear()
  return (
    <>
      {/* <!-- Footer section --> */}
      <Box
        bg="bg"
        pt={['3.75rem', null, null, '3.75rem']}
        pb="3.75rem"
        css={`
          z-index: -50;
        `}
      >
        
      </Box>
    </>
  )
}

export default Footer
