import Darkmode from 'darkmode-js';

new Darkmode().showWidget();
const options = {
  bottom: '64px', 
  right: 'unset',
  left: '32px',
  time: '0.5s',
  mixColor: '#fff',
  backgroundColor: '#fff',  
  buttonColorDark: '#FFFFFF', 
  buttonColorLight: '#00000', 
  saveInCookies: false, 
  label: '', 
  autoMatchOsTheme: true 
}

const darkmode = new Darkmode(options);
darkmode.showWidget();