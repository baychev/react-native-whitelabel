import { Text, View } from "react-native";
import stylesheet from "./ComponentTwo.StyleSheet";

function ComponentTwo() {
    return (
        <View style={styles.card}>
            <Text style={styles.textBold}>Example 2</Text>
            <Text style={styles.textBold}>Default component</Text>
            <Text style={styles.text}>Branded build will override the content but not the style.</Text>
        </View>
    )
}

const styles = stylesheet

export default ComponentTwo