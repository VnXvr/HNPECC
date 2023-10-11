import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View>
          <Text style={styles.heading}>ECC Himig ng Pasko Concert</Text>
        </View>
        <View style={styles.container}>
          <View>
            <Text>Click the button to start scanning QR codes</Text>
            <Button title="Start Scanner" />
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold", // You can adjust the font weight as needed
    color: "#333", // Set your desired text color here
    textAlign: "center", // Align the text to the center
    marginBottom: 20, // Add some margin at the bottom if needed
  },
});
