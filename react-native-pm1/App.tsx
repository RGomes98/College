import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [itemName, setItemName] = useState('');
  const [items, setItems] = useState<string[]>([]);

  function handleInputChange(text: string) {
    setItemName(text);
  }

  function handleDeleteItem(index: number) {
    setItems((prev) => prev.toSpliced(index, 1));
  }

  function handleAddItem() {
    if (!itemName.length) return;
    setItemName('');
    setItems((currentItems) => [...currentItems, itemName]);
  }

  return (
    <View style={main.container}>
      <Text style={main.heading}>Todo List</Text>
      <View style={submit.container}>
        <Text style={submit.heading}>Digite seu texto:</Text>
        <TextInput style={submit.input} value={itemName} onChangeText={handleInputChange} />
        <Button title='Adicionar' onPress={handleAddItem} />
      </View>
      <View style={item.container}>
        {items.map((content, index) => {
          return (
            <View key={index} style={item.element} onTouchStart={() => handleDeleteItem(index)}>
              <Text style={item.text}>{content}</Text>
              <Button color='red' title='Deletar' />
            </View>
          );
        })}
      </View>
    </View>
  );
}

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
    marginBottom: 20,
    gap: 10,
  },
  heading: { fontSize: 18 },
  input: { borderWidth: 1, flexGrow: 1 },
});

const item = StyleSheet.create({
  container: { display: 'flex', flexDirection: 'column', gap: 10 },
  text: { marginRight: 'auto' },
  element: { display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 },
});
