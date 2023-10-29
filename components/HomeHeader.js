import { useQuery } from '@apollo/client'
import { GET_COMPANIES } from '../query'
import Loading from './Loading'
import { FlatList, Image, Text, View } from 'react-native'

export default function HomeHeader() {
    const { data, loading, error } = useQuery(GET_COMPANIES)

    if (loading) {
        return <Loading />
    }


    const companies = data.getCompanies
    return (
        <><View style={{ alignItems: 'center', paddingVertical: 10, backgroundColor: '#512eaa', borderRadius: 7, marginTop: 10 }}><Image source={require('../assets/logo_white.png')}
            style={{ height: 100, width: 400, resizeMode: 'contain' }} /></View>
            <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 10, color: '#512eaa' }}>Hiring Partners</Text>
            <FlatList
                data={companies}
                renderItem={({ item }) => <View key={item.id} style={{ flex: 1, marginHorizontal: 20 }}><Image source={{ uri: item.companyLogo }} style={{ height: 100, width: 100, resizeMode: "contain" }} /></View>}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ backgroundColor: '#ffff', paddingVertical: 10, marginBottom: 20 }}
            />
            {/* <Text style={{ fontSize: 30, marginTop: 40, paddingBottom: 5, marginBottom: 10, borderBottomWidth: 3, borderBottomColor: '#cab6fc', color: '#512eaa' }}>Job List</Text> */}
        </>
    )
}