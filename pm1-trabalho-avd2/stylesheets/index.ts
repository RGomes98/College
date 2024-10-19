import { StyleSheet } from 'react-native';

const main = StyleSheet.create({
  container: {
    gap: 20,
    flex: 1,
    backgroundColor: '#091540',
    justifyContent: 'flex-start',
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  heading: { fontSize: 28, fontWeight: '600', color: '#ABD2FA' },
});

const inputs = StyleSheet.create({
  container: { display: 'flex', flexDirection: 'column', gap: 14 },
  wrapper: { display: 'flex', flexDirection: 'column', gap: 6 },
  label: { fontSize: 15, fontWeight: '600', color: '#7692FF' },
  input: {
    fontSize: 12,
    fontWeight: '500',
    color: '#0E1116',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  submit: { width: '100%', backgroundColor: '#3D518C', borderRadius: 4, paddingVertical: 16, marginTop: 12 },
  submitText: { color: '#FFFFFF', fontWeight: '600', fontSize: 20, textAlign: 'center' },
});

const course = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#585D89',
    borderRadius: 4,
    flexDirection: 'column',
    paddingBottom: 8,
  },
  course: {
    backgroundColor: '#2D3047',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 4,
    padding: 8,
  },
  wrapper: { display: 'flex', gap: 8, flexDirection: 'row', alignItems: 'center' },
  label: { fontSize: 16, fontWeight: '600', color: '#FFFFFF' },
  code: { fontSize: 16, fontWeight: '700', color: '#FFFFFF' },
  teacher: { fontSize: 14, fontWeight: '500', color: '#FFFFFF' },
  workload: { fontSize: 14, fontWeight: '500', color: '#FFFFFF' },
});

export { main, inputs, course };
