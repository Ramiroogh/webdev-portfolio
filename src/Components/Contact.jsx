import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Flex, Box, Button, Text } from "@chakra-ui/react"

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_1338pq8','template_083o1hq', form.current,'oYAn-9RZxzbDi9zxA')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
    <Box className='Contact' w='100vw' pt='10' pb='1' id='contact'>
        <Text fontSize='25' fontWeight='bold' ml='20' mb='20' className='letterSecundary' >
            Contact
        </Text>

        <Flex justifyContent='center' borderRadius='10' boxShadow='lg' >

            <form id="formulario" ref={form} onSubmit={sendEmail} className='field'>
                <Flex flexDir='column' justifyContent='flex-start' alignContent='center' w='50vw' p='10' gap='5' >
       
                    <Flex flexDir='column' gap='2'>

                        <label>Name</label>
                        <input
                            autoComplete='off'
                            placeholder='nombre'
                            type="text"
                            name="user_name"
                        />
                        
                        <label>Email</label>
                        <input
                            autoComplete='off'
                            placeholder='correo electrónico'
                            type="email"
                            name="user_email"
                        />
                        
                    </Flex>
                    
                    <Flex flexDir='column' justifyContent='flex-start' alignContent='center' gap='5'>
                        
                        <label>Message</label>
                            <textarea
                            placeholder='Escribe tu mensaje Aqui'
                            name="message"
                        />

                        <Button
                        type="submit"
                        value="Send"
                        colorScheme='green'
                        size='md'
                        >
                        Enviar
                        </Button>
                        
                        <Button
                        type='reset'
                        colorScheme='red'
                        size='md'
                        >
                        Limpiar
                        </Button>

                    </Flex>
                        
                </Flex>
                        
            </form>

        </Flex>

    </Box>
  )
}
export default Contact;