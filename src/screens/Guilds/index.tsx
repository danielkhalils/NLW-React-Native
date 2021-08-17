import React from "react";
import { View, FlatList } from "react-native";
import { Guild } from "../../components/Guild";
import { styles } from "./styles";
import { ListDivider } from "../../components/ListDivider";
import { GuildProps } from "../../components/Guild";

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
  }

export function Guilds({handleGuildSelect}: Props){
    const guilds = [
        {
        id: '1',
        name: 'Lendários',
        icon: 'image.png',
        owner: true
        },
        
        {
        id: '2',
        name: 'Galera do Game',
        icon: 'image.png',
        owner: true
        },

        {
        id: '3',
        name: 'Lendários',
        icon: 'image.png',
        owner: true
        },
            
        {
        id: '4',
        name: 'Galera do Game',
        icon: 'image.png',
        owner: true
        },

        {
        id: '5',
        name: 'Lendários',
        icon: 'image.png',
        owner: true
        },

        {
        id: '6',
        name: 'Lendários',
        icon: 'image.png',
        owner: true
        },
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                      <Guild 
                        data={item}
                        onPress={() => handleGuildSelect(item)}    
                    />
                )}
                showsHorizontalScrollIndicator={false} //sem barra lateral
                contentContainerStyle={{paddingBottom: 68, paddingTop: 103}}
                ListHeaderComponent={() => <ListDivider isCentered/>}
                ItemSeparatorComponent={() => <ListDivider isCentered/>}
                style={styles.guilds} 
            />
        </View>
    );
}