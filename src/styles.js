import { makeStyles } from '@material-ui/core/styles';
import Image from './assets/rainbow_vortex.png';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: `url(${Image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    container: {
      padding: '8vh 8vw',
      minHeight: '100%',
    },
    content: {
      /*margin: theme.spacing(8, 4),*/
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    formControl: {
      margin: theme.spacing(3),
    },
    button: {
      margin: theme.spacing(1, 1, 0, 0),
    },
}));

export {useStyles}
