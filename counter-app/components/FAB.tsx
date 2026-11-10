import { Text, Pressable, StyleSheet } from 'react-native'

interface Props {
  label: string;

  //Methods - Acctions
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({ label, onPress, onLongPress }: Props) {
  return (
    <Pressable style={styles.floatingButton}
    onPress={onPress}
    onLongPress={onLongPress}
    >
      <Text style={{ color: 'white', fontSize: 20 }}>{label}</Text>
    </Pressable>

  )
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#140086',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
});