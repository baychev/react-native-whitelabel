import { Text, View } from "react-native"
import About from "../One/About"
import ComponentTwo from "../Two/ComponentTwo"
import ComponentThree from "../Three/ComponentThree"
import stylesheet from "./Home.StyleSheet"
import ComponentFour from "../Four/ComponentFour"

function Home() {
    return(<View>
        <Text style={style.header}>HOME</Text>
        <About />
        <ComponentTwo />
        <ComponentThree />
        <ComponentFour />
    </View>)
}

const style = stylesheet

export default Home