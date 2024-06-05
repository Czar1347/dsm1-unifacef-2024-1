import { StyleSheet, TextInput, View, StatusBar, Text, TouchableOpacity, Pressable, ScrollView } from "react-native"
import { Feather } from "@expo/vector-icons"
import { FontAwesome5 } from "@expo/vector-icons"
import {story } from "./style"
import { Image } from "expo-image"
import { Entypo } from "@expo/vector-icons"
import { TabActions } from "@react-navigation/native"

const storys = [
  {
    id: 1,
    name: "Seu story",
    image: require("../../../assets/users/user_1.jpg"),
  },
  {
    id: 0,
    name: "User 1",
    image: require("../../../assets/users/user_2.jpg"),
  },
  {
    id: 0,
    name: "User 2",
    image: require("../../../assets/users/user_3.jpg"),
  },
  {
    id: 0,
    name: "User 3",
    image: require("../../../assets/users/user_4.jpg"),
  },
  ,
  {
    id: 0,
    name: "User 4",
    image: require("../../../assets/users/user_5.jpg"),
  },
  ,
  {
    id: 0,
    name: "User 5",
    image: require("../../../assets/users/user_6.jpg"),
  },
]

export default Storys = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={story.scroll}>
      {storys.map((data) => {
        return (
          <TouchableOpacity>
            <View style={story.storyBlock}>
              {data.id == 1 ? (
                <View style={story.entypoView}>
                  <Entypo name="circle-with-plus" style={story.entypo} />
                </View>
              ) : null}
              {data.id == 1 ? (
                <View style={story.viewStoryCircleProfile}>
                  <Image source={data.image} style={story.imageStoryCircle} />
                </View>
              ) : (
                <View style={story.viewStoryCircle}>
                  <Image source={data.image} style={story.imageStoryCircle} />
                </View>
              )}
              <Text style={{ textAlign: "center", fontSize: 10, marginTop: 5, fontWeight: 600 }}>{data.name}</Text>
            </View>
          </TouchableOpacity>
        )
      })}
    </ScrollView>
  )
}
