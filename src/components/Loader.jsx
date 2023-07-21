import { Box, Container, Spinner } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
    return (
        <Container
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            h={'80vh'}
        >
            <Box transform={'scale(5)'} >
                <Spinner size={'xl'} speed='1000ms'></Spinner>
            </Box>
        </Container>
    )
}

export default Loader