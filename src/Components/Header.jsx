import React, {useState} from "react";
import { Box, Button, Flex, Text, } from '@chakra-ui/react'
import { RiLinkedinBoxFill, RiGithubFill, RiMailSendLine } from "react-icons/ri";


const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <Box className='Navbar' w='100vw' p='5' >

        <Flex className='Header_Contain' alignItems="center" justify="space-evenly" gap='2' >
            
            <Text fontSize='25'
            className='letters'>
            Ramiro Navarrete
            </Text>

            <Flex gap='4' className={`Links_Header ${isOpen ? "open" : ''}`} >

                <a href='#sobremi' onClick={() => setIsOpen(isOpen == false)}
                >Sobre mi</a>
                <a href='#skills' onClick={() => setIsOpen(isOpen == false)}
                >Skills</a>
                <a href='#proyects' onClick={() => setIsOpen(isOpen == false)}
                >Proyects</a>
                <a href='#academico' onClick={() => setIsOpen(isOpen == false)}
                >Academico</a>

            </Flex>

            <Flex gap='2' className={`Buttons_Header ${isOpen ? "open" : ''}`}>

            <a
                href='https://www.linkedin.com/in/ramiro-navarrete-05207a18a/'
                target='_blank'
                onClick={() => setIsOpen(isOpen == false)}
                >
              <Button
                size='sm'
                colorScheme='whiteAlpha'
                variant='ghost'
                gap='2'
                >
                  <RiLinkedinBoxFill size='20'/>
                Linkedin
              </Button>
            </a>
                    
            <a
                href='https://github.com/Ramiroogh'
                target='_blank'
                onClick={() => setIsOpen(isOpen == false)}
                >
              <Button
                size='sm'
                colorScheme='whiteAlpha'
                variant="ghost"
                gap='2'
                >
                  <RiGithubFill size='20'/>
                Github
                </Button>
            </a>

             <a
                href='#contact'
                onClick={() => setIsOpen(isOpen == false)}
                >
              <Button
                size='sm'
                className='btn_Contactame_header'
                bg='whiteAlpha.100'
                gap='2'
                >
                  <RiMailSendLine size='20'/>
                Contactame
                </Button>
            </a>

            </Flex>
            
            <div className={`Nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>

        </Flex>
        
    </Box>
  )
}

export default Header