import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Image } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Imgae Loader</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://i.ibb.co/VVkMV1r/Cottage-of-Sunlit-Shadows-insta.png',            
          }}
          //source={require('./assets/00005-149177941.png')}
          resizeMode='contain'
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#e0e0e0',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default App;