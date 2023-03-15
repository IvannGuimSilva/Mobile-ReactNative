import React from 'react'
import { View, Text, Image, ScrollView, Pressable, Linking } from 'react-native'
import style from '../Pessoal/style'

export default Pessoal = () => {
  const profile = {
    name: "Ivan Guimarães",
    login: "IvannGuimSilva",
    bio: "Our self development's an infinite roadway, and that is cool!",
    link: "https://github.com/IvannGuimSilva"
  }
  return(
    <ScrollView style={style.phoneScreen}>
      <View style={style.profileCard}>
        <Image 
          style={style.profileImg} 
          source={require('./images/foto-perfil.jpeg')}
        />
        <View style={style.textsBox}>
          <Text style={style.nome}>{profile.name}</Text>
          <Text style={style.login}>{profile.login}</Text>
          <Text style={style.bio}>{profile.bio}</Text>
          <Pressable
            onPress={ () => { Linking.openURL(profile.link) }}
          >
            <Text style={style.txtBtn}>
              Veja meu perfil e projetos no Github
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}