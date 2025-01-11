import { Text, View } from "react-native";
import stylesheet from "./ComponentFour.StyleSheet";

function ComponentFour() {
    return(
        <View style={styles.card}>
                    <Text style={styles.textBold}>Example 4</Text>
            <Text style={styles.textBold}>Default component</Text>
            <Text style={styles.text}>Branded build will not override the content but will override the style.</Text>
        </View>
    )
}

const styles = stylesheet

export default ComponentFour