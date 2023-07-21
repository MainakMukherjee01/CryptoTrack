import React from 'react'
import {
    VStack,
    Image,
    Heading,
    Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = '₹' }) => <Link to={`/coin/${id}`}>
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
        <Heading size='md' noOfLines={1}>{symbol}</Heading>
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{price ? `${currencySymbol} ${price}` : 'NA'}</Text>
    </VStack>
</Link>
export default CoinCard