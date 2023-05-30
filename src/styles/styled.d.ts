import 'styled-components';


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      light: string
      accent: string
      surface: string
      background: string
      contrast: string
    };
  }
}