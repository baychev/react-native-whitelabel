import { Text, View } from "react-native";
import stylesheet from "./About.StyleSheet";

function About() {
    return(
        <View style={styles.card}>
            <Text style={styles.textBold}>Example 1</Text>
            <Text style={styles.textBold}>Default component</Text>
            <Text style={styles.text}>This component is shared between all brands.</Text>
            <Text style={styles.text}>Branded build will not override neither the content nor the style.</Text>
        </View>
    )
}

const styles = stylesheet

export default About