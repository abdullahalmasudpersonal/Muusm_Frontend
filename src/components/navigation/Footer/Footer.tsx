"use client";
import { Box, Container, Typography } from '@mui/material';
import Grid from "@mui/material/Grid";

const Footer = () => {
    return (
        <Box sx={{ background: 'rgb(61, 77, 107)', minHeight: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box sx={{ background: 'rgb(19, 57, 128)', paddingY: 4, }}>
                <Container maxWidth='lg' sx={{ display: 'flex', justifyContent: 'space-between', }}>
                    <Grid container spacing={3}>
                        <Grid size={{ md: 3, sm: 6, xs: 12 }}>
                            <Box sx={{ background: "rgb(43,77,139)", p: 2, color: "#fff" }}>
                                hihhhhhhhhhhhhhhhhhh hhhhhhhhhhh hhhhhhhhhhh hhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhh
                            </Box>
                        </Grid>
                        <Grid size={{ md: 3, sm: 6, xs: 12 }}>
                            <Box sx={{ background: "rgb(43,77,139)", p: 2, color: "#fff" }}>
                                hihhhhhhhhhhhhhhhhhh hhhhhhhhhhh hhhhhhhhhhh hhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhh
                            </Box>
                        </Grid>
                        <Grid size={{ md: 3, sm: 6, xs: 12 }}>
                            <Box sx={{ background: "rgb(43,77,139)", p: 2, color: "#fff" }}>
                                hihhhhhhhhhhhhhhhhhh hhhhhhhhhhh hhhhhhhhhhh hhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhh
                            </Box>
                        </Grid>
                        <Grid size={{ md: 3, sm: 6, xs: 12 }}>
                            <Box sx={{ background: "rgb(43,77,139)", p: 2, color: "#fff" }}>
                                hihhhhhhhhhhhhhhhhhh hhhhhhhhhhh hhhhhhhhhhh hhhhhhhhhhhhhh hhhhhhhhhhhhhh
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ background: 'rgb(6, 57, 151)', }}>
                <Container maxWidth='lg' sx={{ minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingY: 2, }}>
                    <Typography sx={{ fontWeight: 700, color: 'rgb(193, 218, 255)', }}>  © 2026 Mafsar Ul Ulum Sinior Madrasah. All Rights Reserved. Design, Development and Maintenance by <span style={{ color: '#dda60d', }}>&nbsp;Abdullah al masud</span></Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;


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