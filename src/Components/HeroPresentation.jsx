import React from 'react';
import { Image, Flex, Text, } from '@chakra-ui/react'
import profileHero from '../../src/assets/img/profileHero.jpg'

export default function HeroPresentation() {
  return (
    
    <Flex w='100vw' className="Hero__Presentation" justify='space-between' alignItems='center' pt='20' pb='5' >

      <Flex flexDir='column' gap='2' m='20'>

          <Text
          fontSize='xl'
          className='letters'
          >
            Hola, Soy
          </Text>

          <Text
          fontWeight='bold'
          fontSize='2xl'
          className='letterSecundary'
          >
            Ramiro Navarrete
          </Text>

          <Text
          fontSize='3xl'
          className='letters'
          >
            Web Developmnet
          </Text>
  
    </Flex>

    <Image className='profileHero'
        borderRadius='full'
        boxSize='150px'
        objectFit='cover'
        h='250'
        src={profileHero}
        alt='profile__hero'
        mr='20'
        boxShadow='dark-lg'
        />

    </Flex>
   
    
  )
}