import React from 'react'
import { Flex, Text, Box, Image} from '@chakra-ui/react'
import photo1 from '../../src/assets/img/1.png'
import photo2 from '../../src/assets/img/2.jpg'
import photo3 from '../../src/assets/img/3.jpg'

const Proyects = () => {
  return (
    <Box className='Proyects' w='100vw' id='proyects'>
        
      <Text
      fontWeight='bold'
      fontSize='2xl'
      ml='20'
      className='letterSecundary'
      pt='10'>
    Proyects
      </Text>

        <Flex className='Proyects_Photos' gap='8' pt='20' pb='20' justifyContent='center'>

            <Image className='Proyects_design'
              borderRadius='xl'
              boxSize='200px'
              objectFit='cover'
              h='250'
              src={photo1}
              alt='photo'
              boxShadow='dark-lg'
            />

            <Image className='Proyects_design'
              borderRadius='xl'
              boxSize='200px'
              objectFit='cover'
              h='250'
              src={photo2}
              alt='photo2'
              boxShadow='dark-lg'
            />

            <Image className='Proyects_design'
              borderRadius='xl'
              boxSize='200px'
              objectFit='cover'
              h='250'
              src={photo3}
              alt='photo3'
              boxShadow='dark-lg'
            />
           
        </Flex>

    </Box>
  )
}

export default Proyects;