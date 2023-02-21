import React from 'react'
import { Flex, Text, Box } from '@chakra-ui/react'
import { ListItem, UnorderedList } from '@chakra-ui/react'

const Skills = () => {
  return (
    <Box className='Skills' w='100vw' id='skills'>
      
      <Flex gap='6'  p='20' flexDir='column'>

        <Text
        fontWeight='bold'
        fontSize='2xl'
        className='letterSecundary'
        >
          Skills
        </Text >

        <Text className='letters'>
          Como desarrollador, mis habilidades se centran en la creación de Diseños web Dinámicos y Atractivos utilizando las siguientes tecnologías:
        </Text>
        
        <UnorderedList className='letters'>

          <Flex flexDir='column' gap='5'>

              <ListItem
              fontSize='25'>
            React
              </ListItem>
                <Text>
                Soy altamente competente en react. Soy capaz de descomponer aplicaciones complejas en componentes reutilizables, lo que resulta en código altamente performante y flexible.
                <br/>
                Control y manejo de Estados para lograr Componentes Dinamicos, Hooks.
                </Text>

              <ListItem
              fontSize='25'>
            JavaScript
              </ListItem>
                <Text>
                Tengo conocimientos de JavaScript, un lenguaje de programación versátil utilizado para crear aplicaciones web dinámicas e interactivas. Puedo añadir funcionalidad a los sitios web, tales como menús desplegables, deslizadores y animaciones.
                <br/>
                También soy capaz de trabajar con varias bibliotecas y frameworks de JavaScript.
                </Text>

              <ListItem
              fontSize='25'>
            CSS
              </ListItem>
                <Text>
                Tengo fuertes habilidades en CSS, un lenguaje utilizado para el estilo y el formato de páginas web. Tengo experiencia en la creación de diseños visualmente atractivos utilizando CSS, así como diseño web responsivo que funciona en todos los dispositivos.
                </Text>

              <ListItem
              fontSize='25'>
            Library - Frameworks
              </ListItem>
                <Text>
                Para agilizar la productividad en el desarrollo del lado Frontend, estoy capacitado en utilizar frameworks como 'Bootstrap, Tailwind y librerias como  Chakra Ui y React-Icons'
                </Text>

              <ListItem
              fontSize='25'>
            Herramientas de Diseño UX-UI
              </ListItem>
                <Text>
                Utilizo las siguientes Herramientas Gráficas:
                <br/>
                'Photoshop, Adobe Illustrator, Figma, Adobe Xd, Canva'.
                </Text>

              <ListItem
              fontSize='25'>
            Campañas Ads
              </ListItem>
                <Text>
                Administración de Campañas, planificacion y logistica de Publicidad Digital, elaboro el mapa del PROPOSITO de la Campaña, utilizando herramientas como
                (Google Trends, Google Ads, Facebook Ads, Tiktok Campañas).
                <br/>
                Con el fin de Impulsar una Marca/Servicio/Empresa. Y sumando el Diseño para las distintas necesidades de la Compania.
                </Text>

          </Flex>
            
        </UnorderedList>
            
      </Flex>

    </Box>
  )
}
export default Skills;