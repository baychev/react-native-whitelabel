import { Text, View } from "react-native";
import stylesheet from "./ComponentThree.StyleSheet.branded";

function ComponentThree() {
    return (
        <View style={styles.card}>
            <Text style={styles.textBold}>Example 3</Text>
            <Text style={styles.textBold}>Branded component</Text>
            <Text style={styles.text}>Branded build will override the content and the style.</Text>
        </View>
    )
}

const styles = stylesheet

export default ComponentThree