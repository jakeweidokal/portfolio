import { createMuiTheme } from '@material-ui/core/styles';
import { dark } from '@material-ui/core/styles/createPalette';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#00838f'
    },
    secondary: {
        main: '#ff6e40'
    },
  },
});

export default theme;