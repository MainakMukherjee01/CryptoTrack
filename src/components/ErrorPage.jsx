import { Button, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import img from '../Assets/btc.png'
import { Link } from 'react-router-dom'
import Home from './Home.jsx'
const ErrorPage = ({ message }) => {
    return (
        <VStack
            h={'80vh'}
            width={'100%'}
            backgroundImage={img}
            backgroundRepeat={'no-repeat'}
            backgroundSize={'85vh'}
            backgroundPosition={'center'}
            backgroundColor={'#444'}
            backgroundBlendMode={'multiply'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Heading
                color={'#ccc'}
                textTransform={'capitalize'}
            >{message}</Heading>
            <Button
                borderRadius={'0'}
                border={'2px solid white'}
                bgColor={'#0000'}
                color={'white'}
                _hover={{ color: 'black', bgColor: 'white' }}
            >
                <Link to="/" element={<Home />}>
                    Revert Back
                </Link>
            </Button>
        </VStack>
    )
}

export default ErrorPage