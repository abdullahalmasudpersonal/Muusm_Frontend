import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: 'rgba(23, 56, 117, 1)', minHeight: '350px', display: 'flex', flexDirection: 'column' }}>
            <Container maxWidth='lg' disableGutters>
                <Box>
                    fg
                </Box>
            </Container>
            <Box sx={{ backgroundColor: 'rgba(32, 50, 83, 1)', }}>
                <Container maxWidth='lg' disableGutters >
                    fg
                </Container>
            </Box>

            {/* <Box className='container-xl' sx={{ backgroundColor: 'rgba(23, 56, 117, 1)', minHeight: '350px', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                gap: 2,
                p: 3,
            }}>
                <Box sx={{ bgcolor: 'gray' }}>
                    <ul>
                        <li>Bangladesh Madrasah Education Board</li>
                        <li>Board of Education Results</li>
                        <li>Banbase</li>
                        <li>Ministry of Education</li>
                        <li>Department of Technical and Madrasa Education</li>
                        <li>Department of Secondary and Higher Education</li>
                    </ul>
                </Box>
                <Box sx={{ bgcolor: 'gray' }}>
                    <ul>
                        <li>Bangladesh Madrasah Education Board</li>
                        <li>Board of Education Results</li>
                        <li>Banbase</li>
                        <li>Ministry of Education</li>
                        <li>Department of Technical and Madrasa Education</li>
                        <li>Department of Secondary and Higher Education</li>
                    </ul>
                </Box>
                <Box sx={{ bgcolor: 'gray' }}>
                    <ul>
                        <li>Bangladesh Madrasah Education Board</li>
                        <li>Board of Education Results</li>
                        <li>Banbase</li>
                        <li>Ministry of Education</li>
                        <li>Department of Technical and Madrasa Education</li>
                        <li>Department of Secondary and Higher Education</li>
                    </ul>
                </Box>
                <Box sx={{ bgcolor: 'gray' }}>
                    <ul>
                        <li>Bangladesh Madrasah Education Board</li>
                        <li>Board of Education Results</li>
                        <li>Banbase</li>
                        <li>Ministry of Education</li>
                        <li>Department of Technical and Madrasa Education</li>
                        <li>Department of Secondary and Higher Education</li>
                    </ul>
                </Box>
            </Box>
            <Box sx={{ height: '70px', backgroundColor: 'rgba(15, 32, 61, 1)', mt: 'auto' }}>
                    <Typography sx={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>© 2026 Mafsar Ul Ulum Sinior Madrasah. All Rights Reserved. Design, Development and Maintenance by &nbsp;<span style={{ color: 'rgba(253, 187, 132, 1)', fontWeight: '700' }}>Abdullah al masud</span></Typography>
            </Box>
        </Box> */}
        </Box>
    );
};

export default Footer;