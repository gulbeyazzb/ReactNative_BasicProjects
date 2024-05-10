import { TouchableOpacity, StyleSheet, Text } from "react-native";
import React from "react";

export default function CustomButton({ title, onPress }) {
  return (
    <>
      {/* TouchableOpacity veya TouchableHighlight dokunma olaylarına tepki verir ve
      özelleştirilmiş buton oluşturmayuı sağlar. Çünkü Button bileşenini
      özelleştirmek mümkün değildir. */}
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007bff", // Arka plan rengi
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff", // Metin rengi
    fontSize: 16,
    padding: 20,
    fontWeight: "bold",
  },
});
