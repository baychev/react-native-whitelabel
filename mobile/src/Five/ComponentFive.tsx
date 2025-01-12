import { Text, View } from "react-native";
import stylesheet from "./ComponentFive.StyleSheet";

const Image = require('./image.png');
const Svg = require('./svg.svg');

function ComponentFive() {
    const _ = Image! && Svg!

    return (
        <View style={styles.card}>
            <Text style={styles.textBold}>Example 5</Text>
            <Text style={styles.textBold}>Default component</Text>
            <Text style={styles.text}>This component imports branded assets (image & svg).</Text>
        </View>
    )
}

const styles = stylesheet

export default ComponentFive