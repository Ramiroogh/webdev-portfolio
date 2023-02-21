import React from 'react'
import { Box, Text, Flex } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box className='Footer' w='100vw' p='50'>
      
      <Flex justify='center'>
        <Text className='letters'>
          Ramiro Navarrete @ 2023 - Todos los Derechos Reservados
        </Text>
      </Flex>
      
    </Box>
  )
}

export default Footer;