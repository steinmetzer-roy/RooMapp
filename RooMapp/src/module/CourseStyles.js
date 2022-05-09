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
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
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
        marginRight: 15,
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
    drawerButtonBackgroundStyle:{
        paddingVertical: 15,
        borderRadius: 12,
        borderWidth: 2,
        width: 250,
        backgroundColor: '#C0C0C0',
        backgroundColor: 'white',
        borderColor: 'black',
    },
    drawerButtonTitleStyle:{
        textAlign:'center',
    },
    drawerNavStyle:{
        backgroundColor: 'white',
        alignItems:'center',
        width: 250,

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
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#888C93'
    },
    item: {
        backgroundColor: '#888C93',
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
        marginRight: 15,
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
    drawerButtonBackgroundStyle:{
        flex: 1,
        paddingVertical: 15,
        borderRadius: 12,
        borderWidth: 2,
        width: 250,
        backgroundColor: '#2A2D32',
        borderColor: 'gray',
    },
    drawerButtonTitleStyle:{
        color: '#C0C0C0',
        textAlign:'center'

    },
    drawerNavStyle:{
        backgroundColor: '#C0C0C0',
        alignItems:'center',
        width: 250,

    }
});

export { courseStyle, courseStyleDarkMode };