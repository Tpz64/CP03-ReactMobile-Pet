/**
 * CP03 - RM553892
 */

import React, { useState, useRef } from 'react';
import {View, ScrollView, Text, TextInput, Button, Image, TouchableOpacity, Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import style from './assets/Stylesheet.js';


// Tela Agendamento
const AgendamentoScreen = () => {
  const [nomePet, setNomePet] = useState('');
  const [servico, setServico] = useState('');
  const [erro, setErro] = useState('');
  const [focusInput, setFocusInput] = useState(false);

  const inputRef = useRef<TextInput>(null);

  const handleAgendar = () => {
    if (!nomePet) {
      setErro('Por favor, insira o nome do seu pet.');
      inputRef.current?.focus();
      return;
    }
    if (!servico) {
      setErro('Por favor, selecione um serviço.');
      return;
    }
    
    setErro('');
    Alert.alert(
      'Agendamento Confirmado!',
      `Serviço de ${servico} para ${nomePet} foi agendado com sucesso!`,
      [{ text: 'OK' }]
    );
    
    setNomePet('');
    setServico('');
  };

  return (
    <ScrollView style={style.screenContainer}>
      <Text style={style.title}>Agendamento</Text>
      <Text style={style.text}>Agende o horário do seu melhor amigo!</Text>

      <View style={style.inputContainer}>
        <Text style={style.text}>Nome do Pet:</Text>
        <TextInput
          ref={inputRef}
          style={[style.inputLabel, focusInput && style.inputFocused]}
          placeholder="Ex: Chandler, Joey, Phoebe..."
          placeholderTextColor="#A9A9A9"
          value={nomePet}
          onChangeText={setNomePet}
          onFocus={() => setFocusInput(true)}
          onBlur={() => setFocusInput(false)}
        />
      </View>

      <View style={style.inputContainer}>
        <Text style={style.text}>Escolha o Serviço:</Text>
        <View style={style.pickerContainer}>
          <Picker
            selectedValue={servico}
            style={style.picker}
            onValueChange={(itemValue) => setServico(itemValue)}>
            <Picker.Item label="Selecione um serviço..." value="" />
            <Picker.Item label="Banho" value="Banho" />
            <Picker.Item label="Tosa" value="Tosa" />
            <Picker.Item label="Banho + Tosa (Completo)" value="Banho + Tosa" />
          </Picker>
        </View>
      </View>

      {erro ? <Text style={style.error}>{erro}</Text> : null}

      <TouchableOpacity style={style.button} onPress={handleAgendar} activeOpacity={0.8}>
        <Text style={style.buttonText}>Agendar Serviço</Text>
      </TouchableOpacity>

      <View style={{marginTop: 15}}>
        <Button 
          title="Ligar para a Loja" 
          onPress={() => Alert.alert('Ligando...', '(11) 5555-1234')}
          color="#4DA97C"
        />
      </View>
    </ScrollView>
  );
};

// Tela inicial
const HomeScreen = () => (
  <View style={style.screenContainerCenter}>
    <Text style={style.title}>Espaço Central Pet</Text>
    <Image
      source={require('./assets/img_pet_karol.png')} 
      style={style.logo}
      resizeMode="contain"
    />
    <Text style={style.text}>Seu pet, nosso amigo. "I'll be there for you!"</Text>
    <Image 
      source={require('./assets/dog.png')} 
      style={style.cutePetImage}
      resizeMode="cover"
    />
  </View>
);

// Tela lojinha
const LojaScreen = () => (
  <ScrollView style={style.screenContainer}>
    <Text style={style.title}>Nossa Lojinha</Text>
    
    <View style={style.productItem}>
      <View style={style.productInfo}>
        <Text style={style.productTitle}>Ração Premium</Text>
        <Text style={style.text}>Ração especial para cães e gatos de todas as idades.</Text>
      </View>
    </View>
    
    <View style={style.productItem}>
      <View style={style.productInfo}>
        <Text style={style.productTitle}>Coleira "Friends"</Text>
        <Text style={style.text}>Coleiras temáticas da sua série favorita. Estilosas e seguras!</Text>
      </View>
    </View>
    
    <View style={style.productItem}>
      <View style={style.productInfo}>
        <Text style={style.productTitle}>Brinquedo "Smelly Cat"</Text>
        <Text style={style.text}>Gatinhos de pelúcia (não cheiram mal!) para diversão garantida.</Text>
      </View>
    </View>

  </ScrollView>
);

// Tela de Banho
const BanhoScreen = () => (
  <View style={style.screenContainerCenter}>
    <Text style={style.title}>Serviço de Banho</Text>
    <Text style={style.text}>Banhos relaxantes com os melhores produtos.</Text>
    <Text style={style.text}>Deixamos seu pet limpo e cheiroso!</Text>
  </View>
);

// Tela de Tosa 
const TosaScreen = () => (
  <View style={style.screenContainerCenter}>
    <Text style={style.title}>Serviço de Tosa</Text>
    <Text style={style.text}>Tosa na tesoura ou máquina.</Text>
    <Text style={style.text}>O visual do seu pet em dia!</Text>
  </View>
);


// --- Navegação---

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Navegação TABS - Banho e Tosa
function ServicosTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#4B4788',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#FDF8E3' }, 
      }}>
      <Tab.Screen name="Banho" component={BanhoScreen} />
      <Tab.Screen name="Tosa" component={TosaScreen} />
    </Tab.Navigator>
  );
}

const stackScreenOptions = {
  headerStyle: {
    backgroundColor: '#4B4788', 
  },
  headerTintColor: '#FDF8E3', 
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

// Componente do Botão hambúrguer
const MenuButton = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 15 }}>
    <Text style={{ color: '#FDF8E3', fontSize: 24, fontWeight: 'bold' }}>☰</Text>
  </TouchableOpacity>
);

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        name="Início"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerLeft: () => <MenuButton navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
}

function LojaStack() {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        name="Loja"
        component={LojaScreen}
        options={({ navigation }) => ({
          headerLeft: () => <MenuButton navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
}

function AgendamentoStack() {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        name="Agendamento"
        component={AgendamentoScreen}
        options={({ navigation }) => ({
          headerLeft: () => <MenuButton navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
}

function ServicosStack() {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        name="Serviços"
        component={ServicosTabNavigator}
        options={({ navigation }) => ({
          headerLeft: () => <MenuButton navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Início"
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#4DA97C', 
          drawerActiveTintColor: '#FFFFFF',
          drawerInactiveTintColor: '#4B4788', 
          drawerStyle: {
            backgroundColor: '#FDF8E3',
          },
        }}>
        <Drawer.Screen name="Início" component={HomeStack} />
        <Drawer.Screen name="Serviços (Banho/Tosa)" component={ServicosStack} />
        <Drawer.Screen name="Nossa Lojinha" component={LojaStack} />
        <Drawer.Screen name="Fazer Agendamento" component={AgendamentoStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;