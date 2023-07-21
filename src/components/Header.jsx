import { HStack, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {

    const [link, setLink] = useState('');
    // setInterval(() => {
    //     setLink(window.location.href.split('ost:3000')[1].split('/')[1]);
    // }, 2000);

    return (
        <HStack
            p={'4'}
            shadow={'base'}
            bgColor={'blackAlpha.900'}
            position={'sticky'}
            top={'0'}
            left={'0'}
            zIndex={'overlay'}
            justifyContent={['space-between', 'flex-start']}
        >
            <Button _hover={[{ transform: 'scale(1)' }, { transform: 'scale(1.1)' }]} px={[0, 15]} fontSize={[15, 25]} variant={'unstyled'} color={link === '' ? 'white' : 'whiteAlpha.700'} onClick={() => setLink(window.location.href.split('ost:3000')[1].split('/')[1])} >
                <Link to={'/'}>Home</Link>
            </Button>
            <Button _hover={[{ transform: 'scale(1)' }, { transform: 'scale(1.1)' }]} px={[0, 15]} fontSize={[15, 25]} variant={'unstyled'} color={link === 'exchanges' ? 'white' : 'whiteAlpha.700'} onClick={() => setLink(window.location.href.split('ost:3000')[1].split('/')[1])} >
                <Link to={'/exchanges'}>Exchanges</Link>
            </Button>
            <Button _hover={[{ transform: 'scale(1)' }, { transform: 'scale(1.1)' }]} px={[0, 15]} fontSize={[15, 25]} variant={'unstyled'} color={link === 'coins' ? 'white' : 'whiteAlpha.700'} onClick={() => setLink(window.location.href.split('ost:3000')[1].split('/')[1])} textTransform={'capitalize'}>
                <Link to={'/coins'} >coins</Link>
            </Button>
        </HStack>
    )
}

export default Header;