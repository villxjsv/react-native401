import { Text, Pressable, StyleSheet } from 'react-native';

interface Props {
  label: string;
  position?: 'left' | 'right';

  // Methods - Actions
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({ label, onPress, onLongPress, position = 'right' }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.floatingButton,
        position === 'right' ? styles.positionright : styles.positionleft,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#1c108b',
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

  positionright: {
    right: 20,
  },

  positionleft: {
    left: 20,
  },

  pressed: {
    opacity: 0.7,
  },

  text: {
    color: 'white',
    fontSize: 20,
  },
});