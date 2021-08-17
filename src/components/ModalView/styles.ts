import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    //cor do cartão do modal
    overlay: {
        flex: 1,
        backgroundColor: theme.colors.overlay,
    },

    container: {
        flex: 1,
        marginTop: 100,
    },

    //barra de deslize no topo do modal
    bar: {
        width: 39,
        height: 2,
        borderRadius: 2,
        backgroundColor: theme.colors.secondary30,
        alignSelf: 'center',
        marginTop: 13,
    }
})