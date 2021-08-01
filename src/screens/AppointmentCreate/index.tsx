import React, {useState} from "react";
import { Text, View, FlatList } from 'react-native';
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { CategorySelect } from "../../components/CategorySelect";
import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";
 
export function AppointmentCreate(){
    const [category, setCategory] = useState('');
    return (
        <Background>
            <Header
                title="Agendar Partida"
            />

            <Text style={styles.label}>
                Categoria
            </Text>

            <CategorySelect 
                hasCheckBox 
                setCategory={setCategory}
                categorySelected={category}>
            </CategorySelect>

            <View style={styles.form}>
                <RectButton>
                    <View style={styles.select}>
                        <View style={styles.image}>
                        </View>

                        <View style={styles.selectBody}>
                            <Text style={styles.label}>
                                Selecione um servidor
                            </Text>
                        </View>

                        <Feather
                            name="chevron-right"
                            color={theme.colors.heading}
                            size={18}
                        >
                            
                        </Feather>
                    </View>
                </RectButton>
            </View>
        </Background>
    );
}