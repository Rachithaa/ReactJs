import * as React from 'react';

import Typography from '@mui/material/Typography';

import { Link } from "react-router-dom";
import MainContent from './MainContent';


function Home()
{
    return(
            <><MainContent />
            <Copyright sx={{ mt: 5 }} />
            </>
        );
}
function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="">
          Rachitha
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}
export default Home;