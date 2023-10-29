import { FlatList, Image, View } from "react-native";
import JobCard from "../components/JobCard";
import { useQuery } from "@apollo/client";
import { GET_JOBS } from "../query";
import Loading from "../components/Loading";
import HomeHeader from "../components/HomeHeader";

export default function HomeScreen({ navigation }) {
    const { data, loading, error } = useQuery(GET_JOBS)


    if (loading) {
        return <Loading />
    }

    const jobs = data.getJobs

    return (
        <View style={{ flex: 1, backgroundColor: '#ECECEC', paddingHorizontal: 10 }}>

            <FlatList

                data={jobs}
                renderItem={({ item }) => <JobCard item={item} navigation={navigation} />}
                ListHeaderComponent={() => <HomeHeader />}
                ListFooterComponent={() => <View style={{ alignItems: 'center', marginVertical: 20 }}><Image source={{ uri: 'https://www.jobstreet.co.id/id/cms/employer/wp-content/themes/jobstreet-employer/assets/images/hvp/Hirer-CMS-Banner-Mobile-idid-2.png' }}
                    style={{ height: 200, width: '100%', resizeMode: "contain" }} /></View>}
            />

        </View>

    )
}