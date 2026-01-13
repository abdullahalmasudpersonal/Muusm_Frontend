import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: 'rgb(6, 36, 92)', minHeight: '350px', display: 'flex', flexDirection: 'column', justifyContent:'space-between' }}>
            <Container maxWidth='lg' disableGutters sx={{display:'flex',justifyContent:'space-between',}}>
                <Box sx={{backgroundColor:'rgb(43, 77, 139)'}}>
                    fg
                </Box>
                <Box sx={{backgroundColor:'rgb(43, 77, 139)'}}>
                    fg
                </Box>
                <Box sx={{backgroundColor:'rgb(43, 77, 139)'}}>
                    fg
                </Box>
                <Box sx={{backgroundColor:'rgb(43, 77, 139)'}}>
                    fg
                </Box>
            </Container>
            <Box sx={{ backgroundColor: 'rgb(6, 57, 151)', }}>
                <Container maxWidth='lg'  sx={{ minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'rgb(193, 218, 255)', paddingY:2, fontWeight:700 }}>
                    © 2026 Mafsar Ul Ulum Sinior Madrasah. All Rights Reserved. Design, Development and Maintenance by <span style={{color:'#8eb2ff', }}>&nbsp;Abdullah al masud</span>
                </Container>
            </Box>

            {/* <Box className='container-xl' sx={{ backgroundColor: 'rgb(7, 7, 8)', minHeight: '350px', display: 'flex', flexDirection: 'column' }}>
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