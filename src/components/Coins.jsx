import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '../index';
import {
    Button,
    Container,
    HStack,
    Radio,
    RadioGroup,
} from '@chakra-ui/react';
import Loader from './Loader.jsx'
import CoinCard from './CoinCard.jsx'
import ErrorPage from './ErrorPage.jsx'
const Coins = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState("eur");
    const currencySymbol = currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$';
    const pageArr = new Array(99).fill(0);
    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
                setCoins(data);
            } catch (error) {
                setError(true);
            }
            setLoading(false);
        };
        fetchCoins();
    }, [currency, page, loading])
    if (error)
        return (<ErrorPage message={"Error while Fetching Coins"} />)

    return (
        <Container maxW={'container.xl'}>{loading ? <Loader /> :
            <>
                <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
                    <HStack spacing={'4'} >
                        <Radio value={'inr'} >INR</Radio>
                        <Radio value={'usd'} >USD</Radio>
                        <Radio value={'eur'} >EUR</Radio>
                    </HStack>
                </RadioGroup>
                <HStack
                    wrap={'wrap'}
                    justifyContent={'space-evenly'}
                >{
                        coins.map((i) => (<CoinCard
                            id={i.id}
                            key={i.id}
                            name={i.name}
                            price={i.current_price}
                            img={i.image}
                            symbol={i.symbol}
                            currencySymbol={currencySymbol}
                        />))
                    }
                </HStack>
                <HStack w={'full'} overflowX={'auto'} p={'8'} >
                    {pageArr.map((useless, index) => <Button key={index} p={'lg'} size={'lg'} fontSize={'x-large'} bgColor={'blackAlpha.900'} color={'white'} onClick={() => { setLoading(true); setPage(index + 1); }}>
                        {index + 1}
                    </Button>)}

                </HStack>
            </>
        }
        </Container>
    )
}
export default Coins