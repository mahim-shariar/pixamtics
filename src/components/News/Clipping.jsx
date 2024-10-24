import React, { useEffect } from 'react'
import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, Pagination, PaginationItem, Typography, useMediaQuery, useTheme } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useLocation, Link } from 'react-router-dom';
import { ButtonBase } from '@material-ui/core';
const Clipping = () => {
       const [page, setPage] = React.useState(1);
       const [imaglist, setimaglist] = React.useState([]);
       const [filterImage, setfilterImage] = React.useState([]);



       const [activecategory, setactivecategory] = React.useState([]);


       const [SelectCategory, setSelectCategory] = React.useState('');

       const FilterByCategory = ((e, value) => {
              setSelectCategory(value);
              console.log("dsfff", value);
              let fill = itemData;
              const filval = fill.filter(q => q.category == value);
              setfilterImage(filval);
              const lt = filval.slice(0, 12);
              console.log("filval", lt);
              setimaglist(lt);
              setPage(1);
       });
       useEffect(() => {
              setimaglist(itemData.slice(0, 12));
              setfilterImage(itemData);

              const cats = itemData.map(q => q.category);

              setactivecategory(cats.filter((q, idx) =>
                     cats.indexOf(q) === idx));

       }, [])
       const ChangePage = ((e, value) => {
              setPage(value);
              setimaglist(filterImage.slice((value - 1) * 12, value * 12));
       });
       const location = useLocation();
       const query = new URLSearchParams(location.search);
       //const page = parseInt(query.get('page') || '1', 10);

       const theme = useTheme();
       const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
       return (
              <>

                     <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'blue', top: 0, height: matchDownMd ? '18vh' : '28vh', justifyContent: 'end' }}>
                            <Typography style={{ color: 'white', textAlign: 'center', verticalAlign: 'buttom', fontSize: matchDownMd ? '3rem' : '6rem', textShadow: 'black', fontWeight: 700 }}>Clippings</Typography>

                     </div>

                     <Grid container style={{ height: '100%', backgroundColor: '#FFFF' }}>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ background: 'blue', }}>
                                   <Box sx={{
                                          left: '50%', bottom: 0, justifyContent: 'flex-start', background: 'blue', display: 'flex',
                                          flexDirection: 'column', alignItems: 'center',
                                          height: matchDownMd ? '8vh' : '10vh', marginTop: '-1px',
                                   }}>

                                          <Divider sx={{ height: 2, width: 15, borderBottom: '1px', background: 'white', opacity: 1 }} />

                                          <Divider orientation="vertical" sx={{ width: '0.0001px', background: 'White', opacity: 1 }} />

                                   </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                   <Box justifyContent="flex-center" alignItems="flex-center"  >
                                          {/* <Box sx={{
                                          left: '50%', top: 0, bottom: 0, justifyContent: 'flex-start', background: 'transparent', display: 'flex',
                                          flexDirection: 'column', alignItems: 'center', paddingRight: matchDownMd ? '100px' : '0', marginTop: matchDownMd ? '-54px' : '-110px',
                                   }}>
                                          <Divider sx={{ height: 2, width: 15, borderBottom: '1px', background: 'white', opacity: 1 }} />
                                          <Divider orientation="vertical" sx={{ width: '0.0001px', height: matchDownMd ? '52px' : '108px', background: 'White', opacity: 1 }} />


                                   </Box> */}
                                          <Box sx={{
                                                 left: '50%', top: 0, bottom: 0, justifyContent: 'flex-start', background: 'transparent', display: 'flex',
                                                 flexDirection: 'column', alignItems: 'center'
                                          }}>
                                                 <Divider orientation="vertical" sx={{ width: '0.0001px', height: matchDownMd ? '40px' : '90px', background: '#0000FF', opacity: 1 }} />
                                                 <Divider sx={{ height: 15, width: 15, borderRadius: '50%', background: '#0000FF', opacity: 1, marginBottom: 1 }} />
                                                 <Typography sx={{ color: '#0000FF', textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 2 }}>All Clippings</Typography>
                                                 {/* <Box sx={{ width: '50%' }}>
                                                        <div data-aos="fade-up"
                                                               data-aos-anchor-placement="bottom-bottom">
                                                               <Typography sx={{ color: 'black', textAlign: 'center', fontSize: 16 }}>
                                                                      As experts in sustainability and recycled cotton, we are the preferred partner to educate about circular fashion, as demonstrated by our brand collaborations with leaders in the fashion industry.
                                                               </Typography>
                                                        </div>
                                                 </Box> */}
                                          </Box>
                                   </Box>
                                   <Grid sx={{
                                          '.link': { color: 'blue' }, '.link:focus,.link:hover': {
                                                 color: "rgba(140,140,140,var(--tw-text-opacity))"
                                          }
                                   }} item xs={12} sm={12} md={12} lg={12} xl={12}>


                                          <Grid container spacing={2} rowGap={2} style={{ textAlign: 'center', padding: matchDownMd ? '50px' : '100px 200px 100px 300px' }}>


                                                 {/* <ImageList style={{ width: '100%', textAlign: 'center', overflow: 'hidden' }} cols={matchDownMd ? 1 : 3} gap={70}> */}

                                                 {imaglist.map((item) => (
                                                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{padding:'40px'}}>



                                                               <Typography style={{ textAlign: 'left', paddingTop: 10 }} >
                                                                      <a className='link'
                                                                             style={{ fontSize: '1rem', fontFamily: 'sans-serif', fontWeight: 700, textDecoration: 'underline' }} href='/'>Valdese hooks up with Goldman Sachs-backed circular fiber source </a></Typography>
                                                               <Typography style={{ textAlign: 'left', color: 'black',fontSize: '1.2rem', paddingTop: 10, fontWeight: 'bolder' }}>Home Textiles Today</Typography>
                                                               <Typography style={{ textAlign: 'left', color: 'black', paddingTop: 10, fontWeight: 700 }}>25 Sept 2023</Typography>

                                                           

                                                        </Grid>


                                                 ))}
                                                 {/* </ImageList> */}

                                          </Grid>


                                   </Grid>


                            </Grid>

                     </Grid>

                     <Grid container justifyContent="center" sx={{ p: 10 }}>

                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: "flex", justifyContent: "center" }} sx={{ height: '100%' }}>
                                   <Pagination
                                          page={page}
                                          count={Math.ceil((filterImage.length / 12))}
                                          onChange={ChangePage}
                                          size='large'
                                          showFirstButton
                                          showLastButton
                                          sx={{
                                                 textAlign: 'center',
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
              pubishDate: '12/12/2023',
              id: 1,
       },
       {
              img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
              title: 'Burger',
              author: '@rollelflex_graphy726s',
              category: 'Car',
              pubishDate: '12/12/2023',
              id: 3,
       },
       {
              img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
              title: 'Camera',
              category: 'Byke',
              author: '@helloimniks',
              pubishDate: '12/12/2023',
              id: 4,
       },
       {
              img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
              title: 'Coffee',
              category: 'Book',
              author: '@nolanissacs',
              pubishDate: '12/12/2023',
              id: 5

       },
       {
              img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
              title: 'Hats',
              author: '@hjrc33s', id: 6,
              pubishDate: '12/12/2023',
              category: 'Food',

       },
       {
              img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
              title: 'Honey',
              author: '@arwinneil',
              pubishDate: '12/12/2023',
              id: 7,
              category: 'Pizza',

       },
       {
              img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
              title: 'Basketball',
              category: 'Car',
              pubishDate: '12/12/2023',
              author: '@tjdragotta',
              id: 8,
       },
       {
              img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
              title: 'Fern',
              category: 'Book',
              pubishDate: '12/12/2023',
              author: '@katie_wasserman',
              id: 9

       },
       {
              img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
              title: 'Mushrooms',
              category: 'Book',
              pubishDate: '12/12/2023',
              author: '@silverdalex',
              id: 10
       },
       {
              img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
              title: 'Tomato basil',
              author: '@shelleypauls',
              pubishDate: '12/12/2023',
              category: 'Book',
       },
       {
              img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
              title: 'Sea star',
              category: 'Book',
              pubishDate: '12/12/2023',
              author: '@peterlaster',
              id: 11

       },
       {
              img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
              title: 'Bike',
              author: '@southside_customs',
              category: 'Car',
              pubishDate: '12/12/2023',
              id: 12


       },
       {
              img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
              title: 'Breakfast',
              author: '@bkristastucchio',
              category: 'Book',
              pubishDate: '12/12/2023',
              id: 13


       },
       {
              img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
              title: 'Burger', category: 'Car',
              pubishDate: '12/12/2023',

              author: '@rollelflex_graphy726',
              id: 14

       },
       {
              img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
              title: 'Camera',
              author: '@helloimnik',
              pubishDate: '12/12/2023',
              category: 'Book',
              id: 15


       },
       {
              img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
              title: 'Coffee',
              author: '@nolanissac',
              pubishDate: '12/12/2023',
              category: 'Book',
              id: 16

       },
       {
              img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
              title: 'Hats',
              author: '@hjrc33',
              pubishDate: '12/12/2023',
              category: 'Book',
              id: 17

       },
       {
              img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
              title: 'Honey',
              author: '@arwinneil',
              pubishDate: '12/12/2023',
              category: 'Book',
              id: 18

       },
       {
              img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
              title: 'Basketball',
              author: '@tjdragotta',
              pubishDate: '12/12/2023',
              category: 'Food',
              id: 19

       },
       {
              img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
              title: 'Fern',
              author: '@katie_wasserman',
              pubishDate: '12/12/2023',
              category: 'Food',
              id: 20

       },
       {
              img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
              title: 'Mushrooms',
              author: '@silverdalex',
              pubishDate: '12/12/2023',
              category: 'Food',
              id: 21

       },
       {
              img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
              title: 'Tomato basil',
              author: '@shelleypauls',
              category: 'Food',
              pubishDate: '12/12/2023',
              id: 22

       },
       {
              img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
              title: 'Sea star',
              author: '@peterlaster',
              pubishDate: '12/12/2023',
              category: 'Food',
              id: 23

       },
       {
              img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
              title: 'Bike',
              author: '@southside_customs',
              pubishDate: '12/12/2023',
              category: 'Food',
              id: 24

       },
];

export default Clipping
