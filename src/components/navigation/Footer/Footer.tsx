"use client";
import { Box, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import Grid from "@mui/material/Grid";
import Image from 'next/image';
import logo from '@/assets/logo/logo.png';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from 'next/link';

const Footer = () => {

    return (
        <>
            <Box sx={{ minHeight: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box sx={{ background: 'rgb(0, 33, 71)', paddingY: 4, }}>
                    <Container maxWidth='lg'>
                        <Grid container spacing={3}>
                            <Grid size={{ md: 3, sm: 6, xs: 12 }}>
                                <Box sx={{ /* background: "rgba(38, 67, 122, 0.36)", */ p: 2 }}>
                                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                                        Useful Links
                                    </Typography>
                                    <List disablePadding>
                                        <ListItem sx={{ color: 'white', padding: '5px 0px', transition: 'all 0.5s ease', "&:hover": { color: 'rgb(255, 147, 23)', transform: 'translateX(1px)', }, }} component={Link} href='https://bmeb.gov.bd' target='_blank'>
                                            <ChevronRightIcon sx={{ fontSize: 18, mr: 1, }} />
                                            <ListItemText primary="Madrasah board" />
                                        </ListItem>
                                        <ListItem sx={{ color: 'white', padding: '5px 0px', transition: 'all 0.5s ease', "&:hover": { color: 'rgb(255, 147, 23)', transform: 'translateX(1px)', }, }} component={Link} href='https://bmeb.gov.bd' target='_blank'>
                                            <ChevronRightIcon sx={{ fontSize: 18, mr: 1, transition: 'transform 0.5s ease', '.MuiListItem-root:hover &': { transform: 'translateX(2px)', }, }} />
                                            <ListItemText primary="Board Results" />
                                        </ListItem>
                                        <ListItem sx={{ color: 'white', padding: '5px 0px', transition: 'all 0.5s ease', "&:hover": { color: 'rgb(255, 147, 23)', transform: 'translateX(1px)', }, }} component={Link} href='https://bmeb.gov.bd' target='_blank'>
                                            <ChevronRightIcon sx={{ fontSize: 18, mr: 1, transition: 'transform 0.5s ease', '.MuiListItem-root:hover &': { transform: 'translateX(2px)', }, }} />
                                            <ListItemText primary="Banbase" />
                                        </ListItem>
                                        <ListItem sx={{ color: 'white', padding: '5px 0px', transition: 'all 0.5s ease', "&:hover": { color: 'rgb(255, 147, 23)', transform: 'translateX(1px)', }, }} component={Link} href='https://bmeb.gov.bd' target='_blank'>
                                            <ChevronRightIcon sx={{ fontSize: 18, mr: 1, transition: 'transform 0.5s ease', '.MuiListItem-root:hover &': { transform: 'translateX(2px)', }, }} />
                                            <ListItemText primary="Ministry of Education" />
                                        </ListItem>
                                        <ListItem sx={{ color: 'white', padding: '5px 0px', transition: 'all 0.5s ease', "&:hover": { color: 'rgb(255, 147, 23)', transform: 'translateX(1px)', }, }} component={Link} href='https://bmeb.gov.bd' target='_blank'>
                                            <ChevronRightIcon sx={{ fontSize: 18, mr: 1, transition: 'transform 0.5s ease', '.MuiListItem-root:hover &': { transform: 'translateX(2px)', }, }} />
                                            <ListItemText primary="Technical Education Board" />
                                        </ListItem>
                                        <ListItem sx={{ color: 'white', padding: '5px 0px', transition: 'all 0.5s ease', "&:hover": { color: 'rgb(255, 147, 23)', transform: 'translateX(1px)', }, }} component={Link} href='https://bmeb.gov.bd' target='_blank'>
                                            <ChevronRightIcon sx={{ fontSize: 18, mr: 1, transition: 'transform 0.5s ease', '.MuiListItem-root:hover &': { transform: 'translateX(2px)', }, }} />
                                            <ListItemText primary="Islamic Arabic University" />
                                        </ListItem>
                                    </List>
                                </Box>
                            </Grid>
                            <Grid size={{ md: 3, sm: 6, xs: 12 }}>
                                <Box sx={{ /* background: "rgba(43, 77, 139, 0.33)", */ p: 2 }}>
                                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                                        Internal Links
                                    </Typography>
                                    <List disablePadding>
                                        <ListItem sx={{ color: 'white', padding: '5px 0px', transition: 'all 0.5s ease', "&:hover": { color: 'rgb(255, 147, 23)', transform: 'translateX(1px)', }, }} component={Link} href='https://bmeb.gov.bd' target='_blank'>
                                            <ChevronRightIcon sx={{ fontSize: 18, mr: 1, transition: 'transform 0.5s ease', '.MuiListItem-root:hover &': { transform: 'translateX(2px)', }, }} />
                                            <ListItemText primary="Notices" />
                                        </ListItem>
                                        <ListItem sx={{ color: 'white', padding: '5px 0px', transition: 'all 0.5s ease', "&:hover": { color: 'rgb(255, 147, 23)', transform: 'translateX(1px)', }, }} component={Link} href='https://bmeb.gov.bd' target='_blank'>
                                            <ChevronRightIcon sx={{ fontSize: 18, mr: 1, transition: 'transform 0.5s ease', '.MuiListItem-root:hover &': { transform: 'translateX(2px)', }, }} />
                                            <ListItemText primary="Results" />
                                        </ListItem>
                                        <ListItem sx={{ color: 'white', padding: '5px 0px', transition: 'all 0.5s ease', "&:hover": { color: 'rgb(255, 147, 23)', transform: 'translateX(1px)', }, }} component={Link} href='https://bmeb.gov.bd' target='_blank'>
                                            <ChevronRightIcon sx={{ fontSize: 18, mr: 1, transition: 'transform 0.5s ease', '.MuiListItem-root:hover &': { transform: 'translateX(2px)', }, }} />
                                            <ListItemText primary="Admission" />
                                        </ListItem>
                                        <ListItem sx={{ color: 'white', padding: '5px 0px', transition: 'all 0.5s ease', "&:hover": { color: 'rgb(255, 147, 23)', transform: 'translateX(1px)', }, }} component={Link} href='https://bmeb.gov.bd' target='_blank'>
                                            <ChevronRightIcon sx={{ fontSize: 18, mr: 1, transition: 'transform 0.5s ease', '.MuiListItem-root:hover &': { transform: 'translateX(2px)', }, }} />
                                            <ListItemText primary="Ministr" />
                                        </ListItem>
                                        <ListItem sx={{ color: 'white', padding: '5px 0px', transition: 'all 0.5s ease', "&:hover": { color: 'rgb(255, 147, 23)', transform: 'translateX(1px)', }, }} component={Link} href='https://bmeb.gov.bd' target='_blank'>
                                            <ChevronRightIcon sx={{ fontSize: 18, mr: 1, transition: 'transform 0.5s ease', '.MuiListItem-root:hover &': { transform: 'translateX(2px)', }, }} />
                                            <ListItemText primary="Library" />
                                        </ListItem>
                                        <ListItem sx={{ color: 'white', padding: '5px 0px', transition: 'all 0.5s ease', "&:hover": { color: 'rgb(255, 147, 23)', transform: 'translateX(1px)', }, }} component={Link} href='https://bmeb.gov.bd' target='_blank'>
                                            <ChevronRightIcon sx={{ fontSize: 18, mr: 1, transition: 'transform 0.5s ease', '.MuiListItem-root:hover &': { transform: 'translateX(2px)', }, }} />
                                            <ListItemText primary="Financial Aid" />
                                        </ListItem>
                                    </List>
                                </Box>
                            </Grid>
                            <Grid size={{ md: 3, sm: 6, xs: 12 }}>
                                <Box sx={{ /* background: "rgba(43, 77, 139, 0.33)", */ p: 2 }}>
                                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                                        Others Links
                                    </Typography>
                                    <List disablePadding>
                                        <ListItem sx={{ color: 'white', padding: '5px 0px', transition: 'all 0.5s ease', "&:hover": { color: 'rgb(255, 147, 23)', transform: 'translateX(1px)', }, }} component={Link} href='https://bmeb.gov.bd' target='_blank'>
                                            <ChevronRightIcon sx={{ fontSize: 18, mr: 1, transition: 'transform 0.5s ease', '.MuiListItem-root:hover &': { transform: 'translateX(2px)', }, }} />
                                            <ListItemText primary="About Us" />
                                        </ListItem>
                                        <ListItem sx={{ color: 'white', padding: '5px 0px', transition: 'all 0.5s ease', "&:hover": { color: 'rgb(255, 147, 23)', transform: 'translateX(1px)', }, }} component={Link} href='https://bmeb.gov.bd' target='_blank'>
                                            <ChevronRightIcon sx={{ fontSize: 18, mr: 1, transition: 'transform 0.5s ease', '.MuiListItem-root:hover &': { transform: 'translateX(2px)', }, }} />
                                            <ListItemText primary="Privacy Policy" />
                                        </ListItem>
                                        <ListItem sx={{ color: 'white', padding: '5px 0px', transition: 'all 0.5s ease', "&:hover": { color: 'rgb(255, 147, 23)', transform: 'translateX(1px)', }, }} component={Link} href='https://bmeb.gov.bd' target='_blank'>
                                            <ChevronRightIcon sx={{ fontSize: 18, mr: 1, transition: 'transform 0.5s ease', '.MuiListItem-root:hover &': { transform: 'translateX(2px)', }, }} />
                                            <ListItemText primary="Gallery" />
                                        </ListItem>

                                        <ListItem sx={{ color: 'white', padding: '5px 0px', transition: 'all 0.5s ease', "&:hover": { color: 'rgb(255, 147, 23)', transform: 'translateX(1px)', }, }} component={Link} href='https://bmeb.gov.bd' target='_blank'>
                                            <ChevronRightIcon sx={{ fontSize: 18, mr: 1, transition: 'transform 0.5s ease', '.MuiListItem-root:hover &': { transform: 'translateX(2px)', }, }} />
                                            <ListItemText primary="Blogs" />
                                        </ListItem>
                                        <ListItem sx={{ color: 'white', padding: '5px 0px', transition: 'all 0.5s ease', "&:hover": { color: 'rgb(255, 147, 23)', transform: 'translateX(1px)', }, }} component={Link} href='https://bmeb.gov.bd' target='_blank'>
                                            <ChevronRightIcon sx={{ fontSize: 18, mr: 1, transition: 'transform 0.5s ease', '.MuiListItem-root:hover &': { transform: 'translateX(2px)', }, }} />
                                            <ListItemText primary="News" />
                                        </ListItem>
                                        <ListItem sx={{ color: 'white', padding: '5px 0px', transition: 'all 0.5s ease', "&:hover": { color: 'rgb(255, 147, 23)', transform: 'translateX(1px)', }, }} component={Link} href='https://bmeb.gov.bd' target='_blank'>
                                            <ChevronRightIcon sx={{ fontSize: 18, mr: 1, transition: 'transform 0.5s ease', '.MuiListItem-root:hover &': { transform: 'translateX(2px)', }, }} />
                                            <ListItemText primary="Terms & Conditions" />
                                        </ListItem>
                                    </List>
                                </Box>
                            </Grid>
                            <Grid size={{ md: 3, sm: 6, xs: 12 }}>
                                <Box sx={{ background: "rgba(43, 77, 139, 0)", p: 2, display: 'flex', flexDirection: 'column', }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', pb: 3 }}>
                                        <Image src={logo} width={72} height={60} alt="Mafsar Ul Ulum Sinior Madrasah"  />
                                    </Box>
                                    <Box sx={{ paddingLeft: 3, }}>
                                        <Typography>Baridhara, Radhanagor</Typography>
                                        <Typography>Bhandaria, pirojpur</Typography>
                                        <Typography>Phone: +880-1717420439</Typography>
                                        <Typography>Phone: +880-1717420439</Typography>
                                        <Typography>Email: muusm58@gmail.com</Typography>
                                        <Box sx={{ pt: 2 }}>
                                            <Typography>Stay Connected with Us:</Typography>
                                            <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 2, pt: 1.5, }}>
                                                <Link href="https://youtube.com" target="_blank">
                                                    <Box sx={{ transition: "transform 0.3s ease", "&:hover": { transform: "scale(1)" }, }}>
                                                        <Image src='/images/socila-media/YouTube_full-color_icon.png' alt="YouTube" width={32} height={25} />
                                                    </Box>
                                                </Link>
                                                <Link href="https://youtube.com" target="_blank">
                                                    <Box sx={{ transition: "transform 0.3s ease", "&:hover": { transform: "scale(1)" }, }}>
                                                        <Image src='/images/socila-media/facebook-icon.png' alt="YouTube" width={31} height={27} />
                                                    </Box>
                                                </Link>
                                                <Link href="https://youtube.com" target="_blank">
                                                    <Box sx={{ transition: "transform 0.3s ease", "&:hover": { transform: "scale(1)" }, }}>
                                                        <Image src='/images/socila-media/twitter-logo-twitter-icon.png' alt="YouTube" width={32} height={27} />
                                                    </Box>
                                                </Link>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box sx={{ background: 'rgba(0, 57, 122, 0.71)', }}>
                    <Container maxWidth='lg' sx={{ minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingY: 2, }}>
                        <Typography sx={{ fontWeight: 700, color: 'rgb(193, 218, 255)', }}>  © 2026 Mafsar Ul Ulum Sinior Madrasah. All Rights Reserved. Design, Development and Maintenance by <span style={{ color: '#dda60d', }}>&nbsp;Abdullah al masud</span></Typography>
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default Footer;
