import React from 'react'
import { Flex, Text, Box, Image } from '@chakra-ui/react'
import Siglo21 from '../assets/img/Siglo21.png'
import Utn from '../assets/img/UTN.png'
import Itc from '../assets/img/informaticCenter.png'
import AlephAds from '../assets/img/alephAds.png'

const Academico = () => {
  return (
    <Box className='Academico' w='100vw' id='academico' pt='10' pb='10' >

            <Text
            ml='20'
            fontWeight='bold'
            fontSize='2xl'
            className='letterSecundary'
            >
            Academico
            </Text>

            <Text
            ml='20'
            mt='5'
            className='letters'
            fontSize='20'
            >
            Breve descripción acerca de mis estudios académicos
            </Text>

        <Flex className='Cards_Uni' m='10' justifyContent='center'>
           
{/* Cards Universidad*/}
           <Flex flexDir='column' w='30vw' m='10' boxShadow='lg' className='Card__academico__1' alignItems='center' justifyContent='space-around' borderRadius='15'>
                
                <Flex className='Card_UTN' flexDir='column' p='10'>
                    <Text
                    fontSize='20'
                    textAlign='center'
                    mb='5'
                    >
                    Universidad Tecnológica Nacional UTN.BA
                    </Text>

                    <Text textAlign='center'>
                    Diplomatura en “Desarrollo Fullstack Developer” (Inicio 'Noviembre 2022 - Septiembre 2023')
                    <br/>
                    <br/>
                    En curso.
                    </Text>

                </Flex>
                
                <Image
                    boxSize='100px'
                    objectFit='contain'
                    mixBlendMode={'multiply'}
                    src={Utn}
                    alt='UTN.ba'
                />

           </Flex>

            
            <Flex className='Card__academico__2' flexDir='column' w='30vw' m='10' boxShadow='lg' alignItems='center' justifyContent='space-around' borderRadius='15'>
                
                <Flex className='Card_Siglo21' flexDir='column' p='10'>
                    <Text
                    fontSize='20'
                    textAlign='center'
                    mb='5'
                    >
                    Nivel Terciario
                    <br/>
                    Universidad Siglo21
                    </Text>

                    <Text textAlign='center'>
                    Licenciatura en "Informatica” (1 Año Completado, período 2020)
                    <br/>
                    <br/>
                    Postergado
                    </Text>
                    
                </Flex>

                <Image
                    boxSize='100px'
                    objectFit='contain'
                    src={Siglo21}
                    alt='siglo21'
                />

           </Flex>

    </Flex>

{/* Cards Certificados */}
            <Text
            fontSize='28'
            className='letters'
            fontWeight='medium'
            ml='20'
            >
            Certificaciónes
            </Text>

            <Flex m='10' className='Cards_Certificados'  justifyContent='center'>

                <Flex flexDir='column' w='30vw' m='10' boxShadow='lg' className='Card__academico__3' alignItems='center' justifyContent='space-around' borderRadius='15'>
                
                    <Flex className='Card_ITC' p='10' flexDir='column' justifyContent='center' >

                        <Text
                        fontSize='20'
                        textAlign='center'
                        mb='5'
                        >
                        Informatic Traning Center
                        </Text>

                        <Text textAlign='center'>
                        Certificación en “Administracion de Pymes” ('Junio 2018 - Noviembre 2018')
                        <br/>
                        <br/>
                        FINALIZADO
                        </Text>
                        
                </Flex>
                
                <Image
                    boxSize='100px'
                    objectFit='contain'
                    mixBlendMode={'multiply'}
                    src={Itc}
                    alt='UTN.ba'
                />

           </Flex>

           <Flex className='Card__academico__4' flexDir='column' w='30vw' m='10' boxShadow='lg' alignItems='center' justifyContent='space-around' borderRadius='15'>
                
                <Flex className='Card_ADS' p='10' flexDir='column' justifyContent='center' >

                    <Text fontSize='20' textAlign='center' mb='5'>
                    Digital Ads Expert - Aleph
                    </Text>

                    <Text textAlign='center'>
                    Certificación en “Marketing Digital” ('Enero 2023 - Abril 2023')
                    <br/>
                    <br/>
                    En curso
                    </Text>

                </Flex>

                <Image
                    boxSize='100px'
                    objectFit='contain'
                    mixBlendMode={'multiply'}
                    src={AlephAds}
                    alt='UTN.ba'
                />

           </Flex>

        </Flex>
        
    </Box>
  )
}
export default Academico