import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { styles } from "./style";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { ListHeader } from "../../components/ListHeader";
import { CategorySelect } from "../../components/CategorySelect";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  const appointments = [ {
    id: '1',
    guild: {
      id:'1',
      name: 'Lendários',
      icon: null,
      owner: true
    },
    category: '1',
    date: '23/06 às 19:00h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
  }, 
  
  {
    id: '2',
    guild: {
      id:'1',
      name: 'Yeah, boy',
      icon: null,
      owner: true
    },
    category: '1',
    date: '20/06 às 09:00h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
  },

  {
    id: '3',
    guild: {
      id:'1',
      name: 'Rumo ao topo',
      icon: null,
      owner: true
    },
    category: '1',
    date: '20/06 às 14:20h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
  },

  {
    id: '4',
    guild: {
      id:'1',
      name: 'Bora queimar tudo',
      icon: null,
      owner: true
    },
    category: '1',
    date: '22/06 às 20:40h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
  },

  {
    id: '5',
    guild: {
      id:'1',
      name: 'Valorosos',
      icon: null,
      owner: true
    },
    category: '1',
    date: '22/06 às 20:40h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
  },

  {
    id: '6',
    guild: {
      id:'1',
      name: 'Lendários II',
      icon: null,
      owner: true
    },
    category: '1',
    date: '22/06 às 20:40h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
  }
]

//função para saber se o category tem algo nele
//se o Id atual é mesmo que está sendo clicado, serve para desmarcá-lo
  function handleCategorySelect(categoryId: string){
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails(){
    navigation.navigate('AppointmentDetails')
  }

  function handleAppointmentCreate(){
    navigation.navigate('AppointmentCreate')
  }

  return (
    <Background>
      <View style={styles.header}> 
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate}/>
      </View>
      
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <ListHeader 
          title='Partidas Agendadas'
          subtitle='Total 6'
        /> 

        <FlatList 
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment 
              data={item}
              onPress={handleAppointmentDetails} //função para abrir os detalhes
            />
          )}
          ItemSeparatorComponent={() => <ListDivider/>}
          contentContainerStyle={{paddingBottom:69}}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          />
    </Background>
  );
}
