import { StyleSheet } from "react-native"

export const commonsStyles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 20,
        marginTop: 20
    },
    link: {
        color: '#1975ff',
        fontSize: 16,
    },
    flexRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
        gap: 20
    },
    customText: {
        lineHeight: 14
    },
    errorContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    }
})