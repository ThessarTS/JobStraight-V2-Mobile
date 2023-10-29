import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function JobCard({ item, navigation }) {
    const dateFormat = (input) => {
        return input.split('T')[0].split('-').reverse().join('/')
    }

    return (
        <Pressable onPress={() => navigation.navigate('Detail', { id: item.id, jobTitle: item.title })} style={styles.card}>
            <Image
                source={{ uri: item.Company.companyLogo }}
                style={styles.logo}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.companyName}>{item.Company.name}</Text>
            <Text style={styles.location} >{item.Company.location}</Text>
            <Text >{dateFormat(item.createdAt)}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        marginVertical: 10,
        padding: 20,
        borderRadius: 10,
        rowGap: 5,
        borderStartWidth: 5,
        borderLeftColor: '#512eaa'
    },
    logo: {
        height: 68,
        width: 80,
        marginBottom: 5,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 25,
        color: 'blue'
    },
    companyName: {
        fontSize: 18
    },
    location: {
        fontSize: 16,
        fontWeight: '800'
    }
})