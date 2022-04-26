import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEAED',
    },
    courseWrapper: {
        padding: 80,
        paddingHorizontal: 20,
        flex: 1,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    items: {
        marginTop: 30,
    },
    writeCourseWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
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
});

const stylesDarkMode = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#555b65',
    },
    courseWrapper: {
        padding: 80,
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: 'red',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    item: {
        backgroundColor: 'blue',
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
        backgroundColor: 'darkblue',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemLeft: {
        backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: 'pink',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
        marginTop: 10,
    },
    addCourseButton: {
        width: 55,
        height: 55,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        textAlign: 'center',
        textAlignVertical: 'auto',
        fontSize: 22
    }
});

export { styles, stylesDarkMode };