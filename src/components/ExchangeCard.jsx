import React from 'react'
import {
    VStack,
    Image,
    Heading,
    Text,
} from '@chakra-ui/react';

const ExchangeCard = ({ name, img, rank, url }) => <a href={url} target='blank'>
    <VStack
        w={'52'}
        shadow={'lg'}
        borderRadius={'lg'}
        m={'4'}
        p={'8'}
        transition={'all 200ms'}
        css={{
            "&:hover": {
                transform: 'scale(1.1)',
            },
        }}
    >
        <Image src={img} h={'10'} w={'10'} objectFit={'contain'} alt='Exchange' />
        <Heading size='md' noOfLines={1}>{rank}</Heading>
        <Text noOfLines={1}>{name}</Text>
    </VStack>
</a>
export default ExchangeCard