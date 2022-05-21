import { StyleSheet } from 'react-native';

const mapStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEAED',
    },
    courseWrapper: {
        padding: 10,
        paddingHorizontal: 20,
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 15,
    },
    titleWrapper: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    //background of map
    svg: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        backgroundColor: "#000000",
    },

    body: {
        alignItems: "start",
        justifyContent: "center",
        margin: 20,
        backgroundColor: "#EBEAED",
        flexDirection: "row",
    },

    //"fake margin" made with borders of the same color as the outer component
    //because box-sizing doesnt work...
    rightSideView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EBEAED",
        flexDirection: "column",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#C0C0C0",
    },
    rightSideTableTitle: {
        margin: 10,
        fontSize: 25,
        color: "black",
    },

    middleView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EBEAED",
        flexDirection: "column",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#C0C0C0",
    },

    leftSideView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ff00ff",
        flexDirection: "column",
        borderWidth: 20,
        borderColor: "#5555ff",
    },

    button: {
        height: 40,
        width: "40%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },

    modal: {
        width: "40%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00ff00",
    },

    modalView: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#00000099",
    },

    listItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
        textAlign: "center",
    },


});

export {mapStyle}