//Cards de categorias

import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';
import { styles } from './styles';
import { categories } from '../../utils/categories';
import { Category } from '../Category';

type Props = { 
  CategorySelected: string;
  setCategory: (categoryId : string) => void;
}

export function CategorySelect({
  CategorySelected, 
  setCategory
} : Props) {

  return (
    <ScrollView  
      horizontal 
      style={styles.container} //estilo container
      showsHorizontalScrollIndicator={false} //desabilitar barra de rolagem
      contentContainerStyle={{paddingRight: 40}} //espaçamento final da lista esteja alinhado corretamente
     >
       {
         categories.map(category => ( 
           <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === CategorySelected}
            onPress={() => setCategory(category.id)}
           >
             
           </Category> //categorias de cards
         ))
       }
     </ScrollView>
  );
}