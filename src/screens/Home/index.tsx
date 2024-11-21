import { Text,View, TextInput, TouchableOpacity, FlatList, Alert} from "react-native"
import { styles } from "./styles" 
import { Participant } from "../../components/Participant"


export default function Home() {

  const participantes = ['francielly', 'rodrigo', 'lucas', 'maria', 
    'jose', 'joao', 'pedro', 'ana', 'carlos', 'juliana']

  function handleParticipantAdd(){
   
   if(participantes.includes("francielly")){
    return Alert.alert(
      'Erro', 'Já existe um participante na lista com esse nome'
    )
   }
   console.log('Adicionando Participante')
  }

  function handleParticipantRemove(name: string){
    Alert.alert("Deletar", `Deseja remover ${name} da lista de presença?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert(
          "Removido", `${name} foi removido da lista de presença`),
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
    console.log(`Removendo ${name}`)
  }
    return (
      <View style={styles.container}>
        <Text style={styles.eventName}>Nome do Evento</Text>
        <Text style={styles.eventDate}>Sexta, 20 de Novembro de 2024.</Text>
        
        <View style={styles.form}>
          <TextInput 
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor={'#6B6B6B'}
          keyboardType="numeric"
          />

          <TouchableOpacity 
                style={styles.button}
                onPress={handleParticipantAdd}
                
                >
                  <Text style={styles.buttonText}>
                  +        
                  </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={participantes}
          keyExtractor={item=> item}
          renderItem={({ item }) => (
            <Participant 
            key={item}
            name={item}
            onRemove={ ()=> handleParticipantRemove(item) }
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Ninguém chegou no evento ainda? Adicione participantes na sua lista 
              de presença!
            </Text>
          )}
        />
      </View>
  )
}
