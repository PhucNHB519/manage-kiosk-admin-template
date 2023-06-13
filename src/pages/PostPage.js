import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
import { PostCard, PostsSort, PostsSearch } from '../sections/@dashboard/post';
// mock
import POSTS from '../_mock/post';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Mới nhất' },
  { value: 'oldest', label: 'Cũ nhất' },
];

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Helmet>
        <title> KioskMH | Quản lí bài đăng </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Quản lí bài đăng kiosk
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="wpf:approval" />}>
            Xét duyệt
          </Button>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <PostsSearch posts={POSTS} />
          <PostsSort options={SORT_OPTIONS} />
        </Stack>

        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
