import { Badge, Box, Button, Container, HStack, Image, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader.jsx';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { server } from '../index.js';
import ErrorPage from './ErrorPage.jsx';
import CustomBar from './CustomBar.jsx'
import Chart from './Chart.jsx'
const CoinDetails = () => {

    const params = useParams();
    const [coin, setCoin] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currency, setCurrency] = useState('inr');
    const [days, setDays] = useState("24h");
    const [chartArray, setChartArray] = useState([]);
    const currencySymbol = currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$';
    const btns = ['day', 'week', '2 weeks', 'month', '3 months', '6 months', '1y', 'max'];
    const SwitchChartStats = (key) => {
        switch (key) {
            case 'day':
                setDays('24h');
                setLoading(true);
                break;
            case 'week':
                setDays('7d');
                setLoading(true);
                break;
            case '2 weeks':
                setDays('14d');
                setLoading(true);
                break;
            case 'month':
                setDays('30d');
                setLoading(true);
                break;
            case '3 months':
                setDays('90d');
                setLoading(true);
                break;
            case '6 months':
                setDays('183d');
                setLoading(true);
                break;
            case '1y':
                setDays('365d');
                setLoading(true);
                break;
            case 'max':
                setDays('max');
                setLoading(true);
                break;

            default:
                setDays('24h');
                setLoading(true);
                break;

        }
    };


    useEffect(() => {
        const fetchCoin = async () => {
            try {
                const { data } = await axios.get(`${server}/coins/${params.id}`);
                const { data: chartData } = await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);
                console.log(axios);
                setCoin(data);
                setChartArray(chartData.prices)
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchCoin();
        return;
    }, [currency, days, loading, params.id]);
    if (error)
        return (<ErrorPage message={"Error while Fetching Coin Details"} />)

    return (

        <Container
            maxW={'container.xl'}
        >
            {loading ? <Loader /> : <>
                <Box
                    borderWidth={'1'}
                    width={'full'}
                >

                    <Chart arr={chartArray} currency={currencySymbol} days={days} />
                </Box>
                <HStack
                    p={'4'}
                    wrap={'wrap'}
                >
                    {btns.map((i) => <Button key={i} onClick={() => SwitchChartStats(i)} >{i}</Button>)}
                </HStack>
                <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
                    <HStack spacing={'4'} >
                        <Radio value={'inr'} >INR</Radio>
                        <Radio value={'usd'} >USD</Radio>
                        <Radio value={'eur'} >EUR</Radio>
                    </HStack>
                </RadioGroup>
                <VStack
                    spacing={'4'}
                    p={'16'}
                    alignItems={'flex-start'}

                >
                    <Text
                        fontSize={'sm'}
                        alignSelf={'center'}
                        opacity={'0.7'}
                    >
                        Last Updated on {Date(coin.market_data.last_updated).split('G')[0]}
                    </Text>
                    <Image src={coin.image.large} w={'16'} h={'16'} objectFit={'contain'} />
                    <Stat>
                        <StatLabel>{coin.name}</StatLabel>
                        <StatNumber>{currencySymbol}{coin.market_data.current_price[currency]}</StatNumber>
                        <StatHelpText>
                            <StatArrow type={coin.market_data.price_change_percentage_24h > 0 ? 'increase' : 'decrease'} />
                            {coin.market_data.price_change_percentage_24h}%
                        </StatHelpText>
                    </Stat>
                    <Badge fontSize={'2xl'}
                        bgColor={'blackAlpha.800'}
                        color={'white'}
                    >{`#${coin.market_cap_rank}`}
                    </Badge>
                    <CustomBar high={`${currencySymbol}${coin.market_data.high_24h[currency]}`} low={`${currencySymbol}${coin.market_data.low_24h[currency]}`} />
                    <Box w={'full'} p={'4'}>
                        <Item title={'Max Supply'} value={coin.market_data.max_supply} />
                        <Item title={'circulating supply'} value={coin.market_data.circulating_supply} />
                        <Item title={'max capital'} value={`${currencySymbol}${coin.market_data.market_cap[currency]}`} />
                        <Item title={'all time low'} value={`${currencySymbol}${coin.market_data.atl[currency]}`} />
                        <Item title={'all time high'} value={`${currencySymbol}${coin.market_data.ath[currency]}`} />

                    </Box>
                </VStack>
            </>}
        </Container>
    )
}
const Item = ({ title, value }) => <HStack justifyContent={'space-between'} w={'full'} my={'4'} overflow={'auto'} >
    <Text fontFamily={'bebas Neue'} letterSpacing={'widest'}>{title}</Text>
    <Text >{value}</Text>

</HStack>
export default CoinDetails