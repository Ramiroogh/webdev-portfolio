import React from 'react'
import { Flex, Text, } from '@chakra-ui/react'
// Icons
import { VscCode } from "react-icons/vsc";
import { AiFillFormatPainter } from "react-icons/ai";


const SobreMi = () => {
  return (
    
    <Flex className='SobreMi' w='100vw' id='sobremi' gap='10' pl='20' pr='20' pb='20'>

        <Flex flexDir='column' gap='2'>

          <Text
          fontWeight='bold'
          fontSize='2xl'
          className='letterSecundary'
          >
            Sobre Mi
          </Text>
        
        <Text
        fontSize='lg'
        className='letters'
        mt='5'
        >
            Mi nombre es Ramiro, tengo 22 años, Actualmente vivo en Argentina-Neuquén. “Nivel de Inglés: A2” según <a className='links__a__color' target="_blank" href='https://www.cambridgeenglish.org/es/exams-and-tests/cefr/'>MCER</a>
            <br/>
            <br/>
            Como diseñador web, me especializo en crear diseños visualmente 'Agradables y Orientativos' para sitios web que son fáciles de navegar y usar.
            Tengo experiencia en principios de diseño, teoría del color y tipografía, lo que me permite crear diseños cohesivos y Estéticamente Agradables.
            <br/>
            Mi dominio en React me permite crear interfaces de usuario UI interactivas y dinámicas para aplicaciones web. Tengo experiencia en desglosar aplicaciones complejas en componentes reutilizables, lo que resulta en un alto rendimiento y flexibilidad.
            <br/>
            <br/>
            Soy capaz de desarrollar aplicaciones de una sola página que brindan a los usuarios una experiencia fluida.
            <br/>
            Soy Diseñador Gráfico, se diseñar tanto Logos vectoriales, packaging y todo lo relacionado a impulsar un producto y tranmitir "Algo al Consumnidor" (Mockups, Flyers, Folletos, Ads, Package Design)
            <br/>
            <br/>
            Actualmente soy estudiante en “Desarrollo Fullstack Developmnet” en la Universidad de Buenos Aires <a className='links__a__color' target="_blank" href='https://www.frba.utn.edu.ar/'>UTN.BA</a>
        </Text>

        </Flex>

          <Flex className='SobreMi_Cards_Contain'  gap='5' flexDir='column' justifyContent='center' alignItems='center'>
            
            <Flex  className='SobreMi_Cards' color='white' boxShadow='xl' w='80' py='5' alignItems='center' borderRadius='5' justifyContent='space-around' gap='5'>             
                
                <Text fontSize='18'>
                  Web Development
                </Text>

                <VscCode
                size='50'
                className='Icon_webDev'
                />
                
            </Flex>
            
            <Flex className='SobreMi_Cards' color='white' boxShadow='xl' w='80' py='5' alignItems='center' borderRadius='5' justifyContent='space-around' gap='5'>
                
                <Text fontSize='18' textAlign='center'>
                  Graphic Design
                </Text>

                <AiFillFormatPainter
                size='40'
                className='Icon_gdesign'
                />

            </Flex>

        </Flex>

    </Flex>
  )
}

export default SobreMi;