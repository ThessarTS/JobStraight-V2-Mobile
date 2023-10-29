import { Image, View, Text, Button, ImageBackground, Pressable } from "react-native";

export default function LandingScreen({ navigation }) {
    return (
        <ImageBackground source={{ uri: 'https://w0.peakpx.com/wallpaper/308/660/HD-wallpaper-minimal-color-colorfull-geometry-perfect-shadow.jpg' }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={require('../assets/logo_white.png')}
                    style={{ height: 80, width: 400 }}
                />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>Welcome!</Text>
                <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>Take your career further with</Text>
                <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>JobStraight by TSR</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Pressable
                    onPress={() => navigation.navigate('Home')}
                    style={{ backgroundColor: '#080559', borderRadius: 10, paddingVertical: 10, width: 300 }}
                ><Text style={{ color: 'white', textAlign: "center", fontSize: 18 }}>Get Started</Text></Pressable>
            </View>

        </ImageBackground>
    )
}
