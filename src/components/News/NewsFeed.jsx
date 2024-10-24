import React, { useEffect } from 'react'
import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, Pagination, PaginationItem, Typography, useMediaQuery, useTheme } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useLocation, Link } from 'react-router-dom';
import backgroundImage from '../../assets/image/news.jpg';
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Loader from '../Loader';
const NewsFeed = () => {
       const [loading, setLoading] = React.useState(true);
       const [page, setPage] = React.useState(1);
       const [imaglist, setimaglist] = React.useState([]);
       const [filterImage, setfilterImage] = React.useState([]);
       const [activecategory, setactivecategory] = React.useState([]);
       const [SelectCategory, setSelectCategory] = React.useState('');

       const FilterByCategory = ((e, value) => {
              setSelectCategory(value);
              let fill = itemData;
              const filval = fill.filter(q => q.category == value);
              setfilterImage(filval);
              const lt = filval.slice(0, 9);
              console.log("filval", lt);
              setimaglist(lt);
              setPage(1);
       });
       useEffect(() => {
                setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // Simulating async load delay
   
              setimaglist(itemData.slice(0, 9));
              setfilterImage(itemData);

              const cats = itemData.map(q => q.category);

              setactivecategory(cats.filter((q, idx) =>
                     cats.indexOf(q) === idx));
              return () => clearTimeout(timer); // Cleanup timer

              setLoading(false);
       }, [])
       const ChangePage = ((e, value) => {
              setPage(value);
              setimaglist(filterImage.slice((value - 1) * 9, value * 9));
       });
       const location = useLocation();
       const query = new URLSearchParams(location.search);

       const theme = useTheme();
       const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
       if (loading) {
              return <Loader />; // Show loader while loading
            }
       return (
              <>
                     <LazyLoadComponent>
                            <Box
                                   style={{
                                          display: 'flex',
                                          flexDirection: 'column',
                                          backgroundColor: '#000000',
                                          backgroundImage: `url(${backgroundImage})`,
                                          backgroundSize: 'cover',
                                          backgroundPosition: 'center',
                                          top: 0,
                                          height: matchDownMd ? '350px' : '686px',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                   }}
                            >
                                   <NewspaperIcon sx={{ fontSize: matchDownMd ? '50px' : '80px', fill: 'white' }} />
                                   <Typography
                                          sx={{
                                                 color: 'white',
                                                 textAlign: 'center',
                                                 verticalAlign: 'center',
                                                 fontSize: matchDownMd ? '35px' : '45px',
                                                 fontWeight: 'bold',
                                                 marginLeft: 'auto',
                                                 marginRight: 'auto',
                                                 textShadow: '0 0 24px rgba(0, 0, 0, 0.6)',
                                
                                          }}
                                   >
                                          News
                                   </Typography>
                            </Box >
                     </LazyLoadComponent>

                     <Grid container style={{ height: '100%', backgroundColor: '#000000' }}>

                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                   <Box justifyContent="flex-center" alignItems="flex-center"  >
                                          <Box sx={{
                                                 left: '50%', bottom: 0, justifyContent: 'flex-start', display: 'flex',
                                                 flexDirection: 'column', alignItems: 'center',
                                                 height: matchDownMd ? '7vh' : '9vh', marginTop: matchDownMd ? '-7.2vh' : '-9.2vh',
                                          }}>

                                                 <Divider sx={{ height: 2, width: 15, borderBottom: '1px', background: 'white', opacity: 1 }} />
                                                 <Divider orientation="vertical" sx={{ width: '0.0001px', background: 'White', opacity: 1 }} />

                                          </Box>
                                          <Box sx={{
                                                 left: '50%', top: 0, bottom: 0, justifyContent: 'flex-start', background: 'transparent', display: 'flex',
                                                 flexDirection: 'column', alignItems: 'center'
                                          }}>
                                                 <Divider orientation="vertical" sx={{ width: '0.0001px', height: matchDownMd ? '9vh' : '10vh', background: 'white', opacity: 1 }} />
                                                 <Divider sx={{ height: 15, width: 15, borderRadius: '50%', background: 'white', opacity: 1, marginBottom: 2 }} />
                                                 <Typography sx={{ color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 2 }}>All News</Typography>

                                          </Box>
                                   </Box>
                                   <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>


                                          <Grid container spacing={2} style={{ textAlign: 'center', padding: matchDownMd ? '50px' : '100px 200px 100px 200px' }}>
                                                 <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ textAlign: 'left' }}>
                                                        {activecategory.map((x) =>
                                                        (

                                                               <Button
                                                                      onClick={(event) => {
                                                                             FilterByCategory(event, x);
                                                                      }}
                                                                      style={{
                                                                             padding: 5, margin: 5,
                                                                             backgroundColor: SelectCategory != x ? '' : 'white',
                                                                             border: '1px white solid', fontWeight: 'bold', borderRadius: 700, textDecoration: 'none',
                                                                             color: SelectCategory == x ? 'black' : 'white',
                                                                      }}> {x} </Button>

                                                        ))}


                                                 </Grid>
                                                 <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <ImageList style={{ width: '100%', textAlign: 'center', overflow: 'hidden' }} cols={matchDownMd ? 1 : 3} gap={70}>
                                                               {imaglist.map((item) => (
                                                                      <ImageListItem key={item.id} style={{ width: '100%' }}>
                                                                             <a href='/'>

                                                                                    <img style={{ display: 'block', height: '300px' }}
                                                                                           srcSet={`${item.img}`}
                                                                                           src={`${item.img}`}
                                                                                           alt={item.title}
                                                                                           loading="lazy" />

                                                                                    {/*       <LazyLoadImage
                                                                                           style={{ display: 'block', height: '300px' }}
                                                                                           srcSet={`${item.img}`}
                                                                                           src={`${item.img}`}
                                                                                           alt={item.title}
                                                                                           effect="blur"
                                                                                           loading="lazy"
                                                                                    />*/}
                                                                             </a>
                                                                             <Typography style={{ textAlign: 'left', color: 'white', paddingTop: 10, fontWeight: 700 }}>25 Sept 2023</Typography>

                                                                             <Typography style={{ textAlign: 'left', paddingTop: 10 }}><a style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, textDecoration: 'none' }} href='/'>Bridging the Gap: Integrating Recyclers' Perspectives into European Textile Sustainability Policies</a></Typography>

                                                                             <Typography style={{ textAlign: 'left', paddingTop: 10, paddingBottom: '10px', color: 'white' }}><span style={{ padding: 7, border: '1px gray solid', borderRadius: 999 }}>{item.category} </span></Typography>

                                                                      </ImageListItem>

                                                               ))}
                                                        </ImageList>
                                                 </Grid>

                                          </Grid>
                                   </Grid>

                            </Grid>

                     </Grid>

                     <Grid container justifyContent="center" sx={{ p: 10, backgroundColor: '#000000' }}>

                            <Grid
                                   item
                                   xs={12}
                                   sm={12}
                                   md={12}
                                   lg={12}
                                   xl={12}
                                   style={{ display: 'flex', justifyContent: 'center' }}
                                   sx={{ height: '100%' }}
                            >
                                   <Pagination
                                          page={page}
                                          count={Math.ceil(filterImage.length / 9)}
                                          onChange={ChangePage}
                                          size='large'
                                          showFirstButton
                                          showLastButton
                                          sx={{
                                                 textAlign: 'center',
                                                 '& .MuiPaginationItem-root': {
                                                        color: 'white',
                                                 },
                                                 '& .Mui-selected': {
                                                        color: 'white',
                                                        backgroundColor: 'rgba(255, 255, 255, 0.16)',
                                                 },
                                          }}
                                          style={{ marginTop: '5px' }}
                                          renderItem={(item) => (
                                                 <PaginationItem
                                                        size='large'
                                                        {...item}
                                                 />
                                          )}
                                   />
                            </Grid>
                     </Grid>
              </>
       )
}

const itemData = [
       {
              img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
              title: 'Breakfast',
              author: '@bkristastucchio',
              category: 'Car',
              id: 1,
       },
       {
              img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
              title: 'Burger',
              author: '@rollelflex_graphy726s',
              category: 'Car',
              id: 3,
       },
       {
              img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
              title: 'Camera',
              category: 'Byke',
              author: '@helloimniks',
              id: 4,
       },
       {
              img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
              title: 'Coffee',
              category: 'Book',
              author: '@nolanissacs',
              id: 5

       },
       {
              img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
              title: 'Hats',
              author: '@hjrc33s', id: 6,
              category: 'Food',

       },
       {
              img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
              title: 'Honey',
              author: '@arwinneil',
              id: 7,
              category: 'Pizza',

       },
       {
              img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
              title: 'Basketball',
              category: 'Car',
              author: '@tjdragotta',
              id: 8,
       },
       {
              img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
              title: 'Fern',
              category: 'Book',
              author: '@katie_wasserman',
              id: 9

       },
       {
              img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
              title: 'Mushrooms',
              category: 'Book',
              author: '@silverdalex',
              id: 10
       },
       {
              img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
              title: 'Tomato basil',
              author: '@shelleypauls',
              category: 'Book',
       },
       {
              img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
              title: 'Sea star',
              category: 'Book',
              author: '@peterlaster',
              id: 11

       },
       {
              img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
              title: 'Bike',
              author: '@southside_customs',
              category: 'Car',
              id: 12


       },
       {
              img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
              title: 'Breakfast',
              author: '@bkristastucchio',
              category: 'Book',
              id: 13


       },
       {
              img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
              title: 'Burger', category: 'Car',

              author: '@rollelflex_graphy726',
              id: 14

       },
       {
              img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
              title: 'Camera',
              author: '@helloimnik',
              category: 'Book',
              id: 15


       },
       {
              img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
              title: 'Coffee',
              author: '@nolanissac',
              category: 'Book',
              id: 16

       },
       {
              img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
              title: 'Hats',
              author: '@hjrc33',
              category: 'Book',
              id: 17

       },
       {
              img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
              title: 'Honey',
              author: '@arwinneil',
              category: 'Book',
              id: 18

       },
       {
              img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
              title: 'Basketball',
              author: '@tjdragotta',
              category: 'Food',
              id: 19

       },
       {
              img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
              title: 'Fern',
              author: '@katie_wasserman',
              category: 'Food',
              id: 20

       },
       {
              img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
              title: 'Mushrooms',
              author: '@silverdalex',
              category: 'Food',
              id: 21

       },
       {
              img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
              title: 'Tomato basil',
              author: '@shelleypauls',
              category: 'Food',
              id: 22

       },
       {
              img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
              title: 'Sea star',
              author: '@peterlaster',
              category: 'Food',
              id: 23

       },
       {
              img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
              title: 'Bike',
              author: '@southside_customs',
              category: 'Food',
              id: 24

       },
];

export default NewsFeed;
