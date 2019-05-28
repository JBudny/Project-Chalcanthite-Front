import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#7ba0fe',
      main: '#4472ca',
      dark: '#004799',
      contrastText: '#fff',
    },
  },
});

export default theme;
