import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '../index';
import {
    Container,
    HStack,
} from '@chakra-ui/react';
import Loader from './Loader.jsx'
import ExchangeCard from './ExchangeCard.jsx'
import ErrorPage from './ErrorPage.jsx'
const Exchanges = () => {

    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const { data } = await axios.get(`${server}/exchanges`);
                setExchanges(data);
            } catch (error) {
                setError(true)
            }
            setLoading(false);
        };
        fetchExchanges();
        return;
    }, [])
    if (error)
        return (<ErrorPage message={"Error while Fetching Exchanges"} />)

    return (
        <Container maxW={'container.xl'}>{loading ? <Loader /> : <HStack
            wrap={'wrap'}
            justifyContent={'space-evenly'}
        >{
                exchanges.map((i, ndx) => (<ExchangeCard
                    key={ndx}
                    name={i.name}
                    img={i.image}
                    rank={i.trust_score_rank}
                    url={i.url}
                />))
            }</HStack>}</Container>
    )
}
export default Exchanges