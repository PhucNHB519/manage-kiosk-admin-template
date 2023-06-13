import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Link } from '@mui/material';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  // OR using local (public folder)
  // -------------------------------------------------------
  const logo = (
    <Box
      component="img"
      src="https://lh3.googleusercontent.com/fife/APg5EOYt5D8f8WGYob_HTjALNt3_TjN_HvesyeQ20X00unV8H4Q2MLEsyhZKqiExPj8wFK0zER5U1BJixLqGzEHlEU_QJSjniPTQ9_ypMO_N3NDFCld13c1j_KkeHMM5E0o8XmW2Fuil09RWvOPdQhxMnOU4kdUsOPdinT2gYRUeZ0PD-aOsTxbfUZVyVnXwM8rxbE8B0ZKM-RgWf3ydySD6sX4KME0rPhMH1fA2ONsFlxS64Cf2OoN2RokA-1qluJelIPn4NvA6F1-KPttYFeIURDZN0ES-08ycD4wSpDcSqq3zKp25TkzcQQdTtMrdXAGPpWo1WuleIGTf4mHvoAQkAUsqV9-pWnpStr9jww8A4JSl6-vVeCu0aYqWlIngzw_QFCKpOinrXAT-DDVCStoIZrXa2npg8tHklZANZreCcK874KWX2P5djBoYMf3dcWowHBOcKtUXLvvkveIeAvrh6nVnP7AYKftXJNmE1fKqBrhPAD8a7KLId7taPQI1N8PR1owug2SKkJd_S6Y2ow3ITlQblCrXZl6WT8SHS4Kvp4YcbeYulgwpMVIwENJxQpNUQG_8lUrO7U6XoF3jkmgQkLBQ1uh34QS165D2gjjau83k7N-QfWH_Kn8raPMT8sNH56CM35VwPLJAxG8q6g_2SOZMNsNfBg9m8heOy9q7KzG7PIPE0LhHsiUJCL6rb_0Ky6u5vF33cY5OcFGeuPkJHJFQAY1aQVsmnwshF5r0jIcUBnc_mXp56g20Qhu5Ra250gPN1RtqMGXyG48lJtWt2z8jYyF-BzLl1DWydZQJ6Pz1_z1ke8Qo78eDS_0vruT5Wjdjeu0iDfAw5iAARqP5_-5XDk3IoTPrbMBb_BMldbwpop_8eo9w3zrNA3UwVUZfoC6xfJ8rF77e3pzQJNPIRFgJWURBRwqlSzKa7lHm0NIW1qmjXoSL6mvkNr9kRRBJwahIoWNM7fEcS2i8OvSyK3tL5_ukext2uk6a1OdGFfktLnIz3b9gUCSrA7Bi5gXWyJiLMQBev0GA5nv7DwZk1jhsvn1Z1PUiwolxclJYtgonQlqGsQWPQTQUnBy26JmA1X26QMa6Fa5bKTTV1YYWRYFCMd-UX_LFMJ-2fObbnNx3waF_RFH_RNlnEhIFOgESrh6R9cSOhJJ1raMd5PQ-lSPX_PmwnME8Fcio8D-WDay51oD-F8ASGlzilOyX-30exvADxrfRB3-6Qoy9Vmc9cQBTBi3vDVsA4YcUoBx_LvV8XXEmy7iOOzlNikgRkEelWZaTlJZ4hXgFzBEHJ6FOpWhuPNoo5KkWLpgTNxADl1DGidU994lfg5_0xzAC0KcvWQgxMM9qHy0Sn1uOSbW-DFG5CXP0rDct686-EB-ndJFqK6Xrna6GgtZ7_BwVD7SXbxbEgEy3uDsctlfJPu6d3kbaPKR6mLbNuBxxbgjHVxy_Vw7Ius46uJyB4E-lD4_gRW5vPbNgkCAp7JNSBXppfPgw5sgOrTfdSc2X1HhrToZkND6uuXtlEc0lRKyWBTjZkxWknGLTxSFYG3JMjGECKiV-Ly5ydgnSNxU9BSE55SiEc8P07LVVf2GbubCDT22voQGZrwwyEOQOxhhDeZGy3gii_MV4nw5VWayVXFNek0nbi2rBCC8kBXNl3VRqQV2DyUId2zi9DDWPlaGsdCivVh5JR-4eYo0q9m7Vrgk3vKVLLyrtCa8428MVbu0BiDcVkmUEKpKW3A_Qwp-9VDGoDw7FtKUqA0_rOjpyYLi0U2F_NrikhCR3WLL4rK-H_QZ1sGYpTw=w1920-h942"
      sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
    />
  );

  // const logo = (
  //   <Box
  //     ref={ref}
  //     component="div"
  //     sx={{
  //       width: 40,
  //       height: 40,
  //       display: 'inline-flex',
  //       ...sx,
  //     }}
  //     {...other}
  //   >
  //     <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
  //       <defs>
  //         <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
  //           <stop offset="0%" stopColor={PRIMARY_DARK} />
  //           <stop offset="100%" stopColor={PRIMARY_MAIN} />
  //         </linearGradient>

  //         <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
  //           <stop offset="0%" stopColor={PRIMARY_LIGHT} />
  //           <stop offset="100%" stopColor={PRIMARY_MAIN} />
  //         </linearGradient>

  //         <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
  //           <stop offset="0%" stopColor={PRIMARY_LIGHT} />
  //           <stop offset="100%" stopColor={PRIMARY_MAIN} />
  //         </linearGradient>
  //       </defs>

  //       <g fill={PRIMARY_MAIN} fillRule="evenodd" stroke="none" strokeWidth="1">
  //         <path
  //           fill="url(#BG1)"
  //           d="M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z"
  //         />
  //         <path
  //           fill="url(#BG2)"
  //           d="M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"
  //         />
  //         <path
  //           fill="url(#BG3)"
  //           d="M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"
  //         />
  //       </g>
  //     </svg>
  //   </Box>
  // );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return (
    <Link to="/" component={RouterLink} sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  sx: PropTypes.object,
  disabledLink: PropTypes.bool,
};

export default Logo;
