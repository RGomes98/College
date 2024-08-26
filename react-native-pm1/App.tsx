import { Button, Text, TextInput, View } from 'react-native';
import { styles } from './stylesheets/globals';
import { useState } from 'react';

export default function App() {
  const [items, setItems] = useState<string[]>([]);
  const [itemName, setItemName] = useState('');
  const [error, setError] = useState('');

  function handleInputChange(text: string) {
    setItemName(text);
  }

  function handleDeleteItem(index: number) {
    setItems((currentItems) => currentItems.toSpliced(index, 1));
  }

  function handleAddItem() {
    if (itemName.length < 5) return setError('O texto precisa ter no mínimo 5 caracteres.');
    setItems((currentItems) => [...currentItems, itemName]);
    setItemName('');
    setError('');
  }

  return (
    <View style={styles.main.container}>
      <Text style={styles.main.heading}>Todo List</Text>
      <View style={styles.submit.container}>
        <Text style={styles.submit.heading}>Digite seu texto:</Text>
        <TextInput style={styles.submit.input} value={itemName} onChangeText={handleInputChange} />
        <Button title='Adicionar' onPress={handleAddItem} />
      </View>
      {error && <Text style={styles.error.text}>{error}</Text>}
      <View style={styles.item.container}>
        {items.map((content, index) => {
          return (
            <View key={index} style={styles.item.element}>
              <Text style={styles.item.text}>{content}</Text>
              <Button color='red' title='Deletar' onPress={() => handleDeleteItem(index)} />
            </View>
          );
        })}
      </View>
    </View>
  );
}
