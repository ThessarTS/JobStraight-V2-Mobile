import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { GET_JOB_BY_ID } from "../query";
import { useQuery } from "@apollo/client";
import Loading from "../components/Loading";

export default function DetailScreen({ route }) {
    const { id } = route.params

    const { data, loading, error } = useQuery(GET_JOB_BY_ID, {
        variables: {
            getJobId: id
        }
    })

    if (loading) {
        return <Loading />
    }

    const dateFormat = (input) => {
        return input.split('T')[0].split('-').reverse().join('/')
    }

    const job = data.getJob

    return (
        <ScrollView style={styles.main}>
            <View style={styles.card}>
                <Image
                    source={{ uri: job.Company.companyLogo }}
                    style={styles.logo}
                />
                <Text style={styles.title}>{job.title}</Text>
                <Text style={styles.companyName}>{job.Company.name}</Text>
                <Text style={styles.location} >{job.Company.location}</Text>
                <Text style={{ marginTop: 15 }} >Posted On :</Text>
                <Text style={{ fontSize: 16 }} >{dateFormat(job.createdAt)}</Text>
                <Text style={{ marginTop: 10 }} >Posted By :</Text>
                <Text style={{ color: 'blue', fontSize: 16 }} >{job.User.email}</Text>
            </View>
            <View style={styles.card}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Gaji yang ditawarkan</Text>
                    <Text style={{ fontSize: 18 }}>
                        IDR {job.salary.toLocaleString()} /bulan
                    </Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Deskripsi Pekerjaan</Text>
                    <Text style={{ fontSize: 18, textAlign: 'justify' }}>
                        {job.description}
                    </Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Skill yang diperlukan</Text>
                    {
                        job.Skills.length > 0 ?

                            job.Skills.map((skill, i) => {
                                return (
                                    <View key={i} style={{ paddingStart: 10, rowGap: 3, marginTop: 15 }}>
                                        <Text style={{ fontSize: 18 }}>
                                            ●  {skill.name}
                                        </Text>
                                        <Text style={{ color: 'gray', paddingStart: 20 }}>
                                            {skill.level}
                                        </Text>
                                    </View>
                                )
                            })

                            : <Text style={{ fontSize: 30, marginStart: 10 }}>-</Text>
                    }

                </View>
            </View>
            <View style={styles.card}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Tentang Perusahaan</Text>
                <Text style={{ fontSize: 18, textAlign: 'justify' }}>
                    {job.Company.description}
                </Text>
                <View style={styles.companyCard} >
                    <Image
                        source={{ uri: job.Company.companyLogo }}
                        style={{ height: 88, width: 100 }}
                    />
                    <View style={{ marginStart: 15 }}>
                        <Text style={{ fontSize: 20 }}>{job.Company.name}</Text>
                        <Text style={{ fontSize: 16, marginVertical: 3 }}>{job.Company.location}</Text>
                        <Text style={{ fontSize: 18, color: 'blue' }}>{job.Company.email}</Text>
                    </View>
                </View>
            </View >
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#ECECEC',
        flex: 1
    },
    card: {
        backgroundColor: 'white',
        marginBottom: 10,
        padding: 20,
        rowGap: 5,
    },
    logo: {
        height: 68,
        width: 80,
        marginBottom: 5
    },
    title: {
        fontSize: 30,
        color: 'blue'
    },
    companyName: {
        fontSize: 23
    },
    location: {
        fontSize: 18,
        fontWeight: '800'
    },
    companyCard: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: 'center'
    }
})