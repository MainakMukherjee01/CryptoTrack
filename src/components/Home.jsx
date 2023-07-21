import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import img from '../Assets/btc.png'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <Box
            bgColor={'blackAlpha.900'}
            w={'full'}
            h={'85vh'}
        >
            <motion.div
                style={{
                    height: '80vh',
                }}
                animate={{
                    translateY: '200px'
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
            >
                <Link to={'/coins'} style={{ height: 'min-content', width: 'min-content', borderRadius: '50%' }}>
                    <Image w={'full'} h={'full'} objectFit={'contain'} src={img} filter={'grayscale(1)'} />
                </Link>
                <Text fontSize={'6xl'} textAlign={'center'} fontWeight={'thin'} color={'whiteAlpha.700'} mt={-20}>CryptoTrack</Text>
            </motion.div>
        </Box>
    )
}

export default Home;