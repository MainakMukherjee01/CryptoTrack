import { Box, Button, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import hoster from '../Assets/hoster.png'
const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.900'} color={'whiteAlpha.700'} px={'16'} py={["16", "8"]}>
            <Stack direction={['column', 'row']} h={'full'} alignItems={'center'}>
                <VStack w={'full'} alignItems={['center', 'flex-start']}>
                    <Text fontWeight={'bold'}>About Us</Text>
                    <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center', 'left']} >We are the best crypto tracking app in india, we provide our guidance at a very affordable price.</Text>
                </VStack>
                <VStack w={'full'} >
                    <Image borderRadius={'50%'} h={40} w={40} src={hoster} />
                </VStack>
                <VStack w={'full'} p={'4'}>
                    <Heading size={'md'} textTransform={'uppercase'}>
                        Social Media
                    </Heading>
                    <Button variant={'link'} colorScheme={'grey'} textTransform={'capitalize'}>
                        <a href="https://www.linkedin.com/in/mainak-mukherjee-975205273/" target="blank" >linkedin</a>
                    </Button>
                    <Button variant={'link'} colorScheme={'grey'} textTransform={'capitalize'}>
                        <a href="https://github.com/MainakMukherjee01" target="blank" >github</a>
                    </Button>
                    <Button variant={'link'} colorScheme={'grey'} textTransform={'capitalize'}>
                        <a href="https://www.instagram.com/mainakmukherjee001" target="blank" >instagram</a>
                    </Button>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer
