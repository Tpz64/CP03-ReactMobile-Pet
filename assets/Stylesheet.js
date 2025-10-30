import { StyleSheet } from 'react-native';

const cores = {
  roxo: '#4B4788', 
  verde: '#4DA97C', 
  fundo: '#f3b951', 
  texto: '#333333',
  erro: '#E63946'
};

const style = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: cores.fundo,
  },

  screenContainerCenter: {
    flex: 1,
    padding: 20,
    backgroundColor: cores.fundo,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    color: cores.roxo
, 
  },

  text: {
    fontSize: 18,
    color: cores.texto,
    marginBottom: 10,
    textAlign: 'center',
    lineHeight: 24,
  },

  inputContainer: {
    marginTop: 15,
    marginBottom: 10,
  },
  
  inputLabel: {
    borderWidth: 2,
    borderColor: cores.fundo, 
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 12,
    fontSize: 18,
    color: cores.texto,
  },
  
  inputFocused: {
    borderColor: cores.roxo
, 
    backgroundColor: '#F0EFFF',
  },

  pickerContainer: {
    borderWidth: 2,
    borderColor: cores.fundo, 
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },

  picker: {
    backgroundColor: '#FFFFFF',
    color: cores.texto,
    fontSize: 18,
  },

  button: {
    backgroundColor: cores.verde, 
    marginTop: 20,
    paddingVertical: 14,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  erro: {
    color: cores.erro,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 10,
    fontSize: 16,
  },

  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  productItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    borderColor: cores.fundo,
    borderWidth: 1,
    marginBottom: 15,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: cores.roxo
,
  },
});

export default style;