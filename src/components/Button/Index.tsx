//Configurando o ButtonIcon

import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text} from "react-native";
import { styles } from "./styles";

type Props = RectButtonProps & {
  //nesta linha informamos que o Props rece tudo de TouchableOpacityPorps e+ o que estiver dentro de props
  title: string; //para opcional colocar title?: string
};

//criando o componente ButtonIcon
export function Button({ title, ...rest }: Props) {
  return (
    <RectButton
      style={styles.container}
      {...rest} //acessar todas as propriedades de outras propriedades
    >
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
