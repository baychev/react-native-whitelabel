import { Text, View } from "react-native";
import stylesheet from "./ComponentFive.StyleSheet.branded";

function ComponentFive() {
    return (
        <View style={styles.card}>
            <Text style={styles.textBold}>Branded component</Text>
            <Text style={styles.text}>This is a component with appear only in branded build.</Text>
        </View>
    )
}

const styles = stylesheet

export default ComponentFive