import { StyleSheet } from 'react-native';

const courseStyle = StyleSheet.create({
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
        borderWidth: 2,
        borderColor: '#C0C0C0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    square:
    {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 0,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
        marginTop: 10,
    },
    drawerButtonBackgroundStyle: {
        flex: 1,
        paddingVertical: 15,
        borderRadius: 12,
        borderWidth: 2,
        width: 250,
        backgroundColor: 'white',
        borderColor: 'black',
    },
    drawerButtonTitleStyle: {
        textAlign: 'center',
    },
    drawerNavStyle: {
        backgroundColor: 'white',
        alignItems: 'center',
        width: 250,
    },
    modal:{
        backgroundColor: "#EBEAED", 
        padding: 20, 
        borderColor: "#C0C0C0", 
        borderWidth: 3, 
        borderRadius:15,
        alignItems:'center', 
        alignSelf:'center', 
        flexDirection:'row',
        position:'absolute', 
        left:"50%", 
        top:"50%",
        transform: "translate(-50%, -50%)"
    },
    callCourseFormButton: {
        alignSelf: 'center',
        borderRadius: 40,
        borderColor: "#C0C0C0",
        borderWidth: 2, 
        padding: 25
    }

});

const courseStyleDarkMode = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2A2D32',
    },
    courseWrapper: {
        padding: 10,
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: '#2A2D32',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 15,
        color: "#C0C0C0"
    },
    titleWrapper: {
        borderWidth: 2,
        borderColor: '#C0C0C0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    item: {
        backgroundColor: '#C0C0C0',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    square:
    {
        width: 24,
        height: 24,
        backgroundColor: 'black',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 0,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#2A2D32',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
        marginTop: 10,
        color: '#C0C0C0'
    },
    drawerButtonBackgroundStyle: {
        flex: 1,
        paddingVertical: 15,
        borderRadius: 12,
        borderWidth: 2,
        width: 250,
        backgroundColor: '#2A2D32',
        borderColor: 'gray',
    },
    drawerButtonTitleStyle: {
        color: '#C0C0C0',
        textAlign: 'center'

    },
    drawerNavStyle: {
        backgroundColor: '#C0C0C0',
        alignItems: 'center',
        width: 250,
    },
    modal:{
        backgroundColor: "#2A2D32",
        borderColor: "#C0C0C0", 
        padding:20,
        borderWidth: 3,
        borderRadius:15, 
        alignItems:'center', 
        alignSelf:'center', 
        flexDirection:'row',
        position:'absolute', 
        left:"50%", 
        top:"50%",
        transform: "translate(-50%, -50%)"
    },
    callCourseFormButton: {
        alignSelf: 'center',
        borderRadius: 40,
        borderColor: "#C0C0C0",
        borderWidth: 2, 
        padding: 25
    }

});

export { courseStyle, courseStyleDarkMode };