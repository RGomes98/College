import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { main, inputs, course } from './stylesheets';

type Course = { code: string; teacher: string; workload: string };
type ValidCourseKeys = keyof Course;

const VALID_COURSES = ['PM I', 'PM II', 'LPW II', 'BD', 'LOG', 'POO', 'ALG'];
const INPUT_DATA_INITIAL_STATE = { code: '', teacher: '', workload: '' };

export default function App() {
  const [inputData, setInputData] = useState<Record<ValidCourseKeys, string>>(INPUT_DATA_INITIAL_STATE);
  const [courses, setCourses] = useState<Course[]>([]);

  function handleUpdateInputData(key: ValidCourseKeys, value: string) {
    setInputData((currentInputData) => ({ ...currentInputData, [key]: value }));
  }

  function addCourse() {
    if (!VALID_COURSES.includes(inputData.code))
      return Alert.alert('Curso Inválido!', 'Código de Curso Inválido!');
    setCourses((currentCourses) => [...currentCourses, inputData]);
  }

  return (
    <View style={main.container}>
      <StatusBar style='light' />
      <Text style={main.heading}>Cadastro de Cursos</Text>
      <View style={inputs.container}>
        <View style={inputs.wrapper}>
          <Text style={inputs.label}>Código do Curso:</Text>
          <TextInput style={inputs.input} onChangeText={(value) => handleUpdateInputData('code', value)} />
        </View>
        <View style={inputs.wrapper}>
          <Text style={inputs.label}>Professor do Curso:</Text>
          <TextInput style={inputs.input} onChangeText={(value) => handleUpdateInputData('teacher', value)} />
        </View>
        <View style={inputs.wrapper}>
          <Text style={inputs.label}>Carga Horária do Curso:</Text>
          <TextInput
            style={inputs.input}
            onChangeText={(value) => handleUpdateInputData('workload', value)}
          />
        </View>
        <TouchableOpacity style={inputs.submit} onPress={addCourse}>
          <Text style={inputs.submitText}>Adicionar Curso</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={course.container}>
        {courses.map(({ code, teacher, workload }, index) => {
          return (
            <View style={course.course} key={`${code}+${teacher}+${workload}+${index}`}>
              <View style={course.wrapper}>
                <Text style={course.label}>Código do Curso:</Text>
                <Text style={course.code}>{code}</Text>
              </View>
              <View style={course.wrapper}>
                <Text style={course.label}>Professor:</Text>
                <Text style={course.teacher}>{teacher}</Text>
              </View>
              <View style={course.wrapper}>
                <Text style={course.label}>Carga Horária:</Text>
                <Text style={course.workload}>{workload}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
