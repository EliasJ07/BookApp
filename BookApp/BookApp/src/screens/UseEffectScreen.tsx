import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

export default function UseEffectScreen() {
  const [contador, setContador] = useState(0);
  const [mensajeContador, setMensajeContador] = useState(
    "El contador todavía no ha cambiado."
  );

  /*
   * ============================================================
   * A. useEffect SIN arreglo de dependencias
   * ============================================================
   *
   * Definición:
   * Este tipo de useEffect no recibe un arreglo de dependencias.
   * Por esta razón, React ejecuta el efecto después de cada
   * renderizado del componente.
   *
   * Cada vez que una interacción modifica el estado y provoca
   * un nuevo render, este efecto vuelve a ejecutarse.
   *
   * ¿Cuándo se recomienda usarlo?
   * Se recomienda cuando necesitamos realizar una acción después
   * de cada renderizado. Sin embargo, debe utilizarse con cuidado,
   * especialmente si dentro del efecto se modifica el estado,
   * porque podría provocar renderizados innecesarios o ciclos
   * de renderizado.
   */

  useEffect(() => {
    console.log("A - El componente se renderizó");
  });

  /*
   * ============================================================
   * B. useEffect CON arreglo de dependencias
   * ============================================================
   *
   * Definición:
   * Este tipo de useEffect recibe un arreglo de dependencias.
   * React observa las variables incluidas en ese arreglo y vuelve
   * a ejecutar el efecto cuando alguna de ellas cambia.
   *
   * En este ejemplo, la dependencia es "contador", por lo que
   * el efecto se ejecuta cuando el valor del contador cambia.
   *
   * ¿Cuándo se recomienda usarlo?
   * Se recomienda cuando necesitamos reaccionar únicamente a
   * cambios específicos de nuestro estado o de alguna propiedad,
   * evitando ejecutar el efecto en todos los renderizados.
   *
   * Si utilizáramos un arreglo vacío [], el efecto se ejecutaría
   * solamente una vez después del montaje inicial del componente.
   * Esto resulta útil para tareas de inicialización.
   */

  useEffect(() => {
    console.log("B - El contador cambió a:", contador);

    setMensajeContador(
      `B - El contador cambió a: ${contador}`
    );
  }, [contador]);

  const incrementarContador = () => {
    setContador((valorAnterior) => valorAnterior + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Demostración de useEffect
      </Text>

      <Text style={styles.description}>
        Presiona el botón y observa cómo se comportan los
        diferentes useEffect.
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>
          Contador
        </Text>

        <Text style={styles.counter}>
          {contador}
        </Text>

        <CustomButton
          title="Incrementar"
          onPress={incrementarContador}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          A. useEffect sin dependencias
        </Text>

        <Text style={styles.info}>
          Se ejecuta después de cada renderizado.
        </Text>

        <Text style={styles.info}>
          Revisa la consola para observar:
        </Text>

        <Text style={styles.log}>
          "A - El componente se renderizó"
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          B. useEffect con [contador]
        </Text>

        <Text style={styles.info}>
          {mensajeContador}
        </Text>

        <Text style={styles.log}>
          Observa también este mensaje en la consola.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },

  label: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  counter: {
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  info: {
    fontSize: 15,
    marginBottom: 5,
  },

  log: {
    fontSize: 14,
    fontStyle: "italic",
    marginTop: 5,
  },
});