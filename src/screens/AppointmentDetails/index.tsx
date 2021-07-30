import React from "react";
import { ImageBackground, Text, View, FlatList } from 'react-native';
import { BorderlessButton } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import BannerImg from '../../assets/banner.png';
import { ListHeader } from "../../components/ListHeader";
import { styles } from "./styles";

export function AppointmentDetails(){
    const members = [
        {
            id: '1',
            username: 'Jujuba',
            avatar_url: 'https://github.com/jucebrasil.png',
            statys: 'online'
        }

        {
            id: '2',
            username: 'Juce',
            avatar_url: 'https://github.com/jucebrasil.png',
            statys: 'offline'
        }
    ]
    
    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    //Botão de compartilhar
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            {/* Imagem de fundo do background*/}
            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>

                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida da md10
                    </Text>
                </View>

            </ImageBackground>

            <ListHeader
                title="Jogadores"
                subtitle="Total 3">
            </ListHeader>

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    
                )}
            >

            </FlatList>
            
        </Background>
    );
}