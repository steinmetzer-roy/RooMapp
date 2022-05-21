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
        color:'black'
    },
    titleWrapper: {
        borderWidth: 2,
        borderColor: '#C0C0C0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
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
        color: "black"
    },
    rightSideListView:{
            borderRadius: 10,
            backgroundColor: "#FFFFFF",
            margin: 10,
            borderColor: 'white',
            borderWidth: 2,
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

const mapStyleDarkMode = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2A2D32',
    },
    courseWrapper: {
        padding: 10,
        paddingHorizontal: 20,
        flex: 1
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 15,
        color: "#C0C0C0"
    },
    titleWrapper: {
        borderWidth: 1,
        borderColor: '#C0C0C0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
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
        backgroundColor: "#C0C0C0",
        flexDirection: "row",
    },

    //"fake margin" made with borders of the same color as the outer component
    //because box-sizing doesnt work...
    rightSideView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2A2D32",
        flexDirection: "column",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#C0C0C0",
    },
    rightSideTableTitle: {
        margin: 10,
        fontSize: 25,
        color: "#C0C0C0",
    },
    rightSideListView:{
            borderRadius: 10,
            backgroundColor: "#C0C0C0",
            margin: 10,
            borderColor: 'white',
            borderWidth: 2,
            color: 'white'
    },

    middleView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2A2D32",
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
        color: "#2A2D32"
    },


});

export {mapStyle, mapStyleDarkMode}