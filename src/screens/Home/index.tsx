import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";
import { styles } from "./style";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { ListHeader } from "../../components/ListHeader/indes";
import { CategorySelect } from "../../components/CategorySelect";
import { Appointment } from "../../components/Appointment";

export function Home() {
  const [category, setCategory] = useState('')

  const appointments = {
    id: '1',
    guild: {
      id:'1',
      name: 'Lendários',
      icon: null,
      owner: true
    },
    category: '1',
    date: '22/06 às 20:40h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
  }

//função para saber se o category tem algo nele
//se o Id atual é mesmo que está sendo clicado, serve para desmarcá-lo
  function handleCategorySelect(categoryId: string){
    categoryId === category ? setCategory('') : setCategory(categoryId);

  }

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      
      <View>
        <CategorySelect
          CategorySelected={category}
          setCategory={handleCategorySelect}
        
        />

        <View style={styles.content}>
          <ListHeader 
            title='Partidas Agendadas'
            subtitle='Total 6'
          />

          <FlatList 
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment data={item} />
            )}
          />
        </View>
      </View> 
    </View>

  );
}
