import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
//import logo from 'Main_logo.svg';
interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    // <Box onClick={onClick}>
    //   <Typography
    //     variant="h4"
    //     component="h1"
    //     sx={{ fontWeight: 700, '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' } }}
    //   >
    //     Jasmine<span>Lane</span>
    //   </Typography>
     
    // </Box>
    <img src="images/Main_logo.svg" onClick={onClick} alt="logo"/>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
