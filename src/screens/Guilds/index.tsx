import React from "react";
import { View, FlatList } from "react-native";
import { Guild } from "../../components/Guild";
import { styles } from "./styles";
import { ListDivider } from "../../components/ListDivider";

export function Guilds(){
    const guilds = [
        {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
        }
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                      <Guild data={item}/>
                )}
                showsHorizontalScrollIndicator={false} //sem barra lateral
                ItemSeparatorComponent={() => <ListDivider/>}
                style={styles.guilds} 
            />
        </View>
    );
}