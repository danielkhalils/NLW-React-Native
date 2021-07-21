declare module "*.svg" {
    import React from 'react';
    import { SvgProps } from 'react-native-svg'
    const content: React.FC<SvgProps>; //FC = Functional component
    export default content;
}

//o código acima exporta o conteúdo SVG tipado 
