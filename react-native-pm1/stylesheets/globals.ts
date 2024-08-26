import { StyleSheet } from 'react-native';

const main = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'lightgrey',
    display: 'flex',
    gap: 10,
    flexDirection: 'column',
    paddingHorizontal: 25,
    paddingVertical: 50,
  },
  heading: { fontSize: 28, fontWeight: '500' },
});

const submit = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  heading: { fontSize: 18 },
  input: { borderWidth: 1, flexGrow: 1 },
});

const error = StyleSheet.create({
  text: { color: 'red', marginBottom: 10, marginTop: -5 },
});

const item = StyleSheet.create({
  container: { display: 'flex', flexDirection: 'column', gap: 10 },
  text: { marginRight: 'auto' },
  element: { display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 },
});

export const styles = { main, submit, error, item };
