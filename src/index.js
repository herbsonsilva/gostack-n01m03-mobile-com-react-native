import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity, Touchable } from 'react-native';
import api from './services/api';

// Os componentes react-native não possuem valor semãntico (significado).
// Também não possuem estilização padrão.
// Todos os componentes possuem o 'display: flex' por padrão.
// Não existe herança de estilos entre os containers.

// View: div, header, footer, aside, section, ...
// Text: h1, h2, h3, p, span, ...

export default function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data);
      setProjects(response.data);
    })
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: 'Herbson Silva',
    });

    const project = response.data;

    setProjects([...projects, project]);
  }


  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#E40003"/>

      <SafeAreaView style={ styles.container }>
        <FlatList 
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({item: project}) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />

        <TouchableOpacity 
          activeOpacity={0.6} 
          style={styles.btnOpacity}
          onPress={handleAddProject}
        >
          <Text style={styles.btnOpacityText}>Adicionar Projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>

      {/* <View style={ styles.container }>
        <Text style={ styles.title }>Uniesp</Text>
        {projects.map(project => (
          <Text style={ styles.project } key={ project.id }>{ project.title }</Text>
        ))}
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E40003',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#FFF',
    fontSize: 60,
    fontWeight: 'bold',
  },

  project: {
    color: '#FFF',
    fontSize: 20,
  },

  btnOpacity: {
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnOpacityText: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});