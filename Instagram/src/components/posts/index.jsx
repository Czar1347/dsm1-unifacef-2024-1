import React, { useState } from "react"
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native"
import Feather from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionic from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import posts from "../../database/posts"

export default Post = () => {
  return (
    <View>
      {posts.map((data) => {
        // const [like, setLike] = useState(data.isLiked);
        return (
          <View
            style={{
              paddingBottom: 10,
              borderBottomColor: "gray",
              borderBottomWidth: 0.1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 15,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={data.postPersonImage} style={{ width: 40, height: 40, borderRadius: 100 }} />
                <View style={{ paddingLeft: 5 }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>{data.postTitle}</Text>
                </View>
              </View>
              <Feather name="more-vertical" style={{ fontSize: 20 }} />
            </View>
            <View
              style={{
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={data.postImage} style={{ width: "100%", height: 400 }} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 12,
                paddingVertical: 15,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity>
                  <AntDesign
                    name={"heart"}
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: like ? "red" : "black",
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionic name="ios-chatbubble-outline" style={{ fontSize: 20, paddingRight: 10 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather name="navigation" style={{ fontSize: 20 }} />
                </TouchableOpacity>
              </View>
              <Feather name="bookmark" style={{ fontSize: 20 }} />
            </View>
            <View style={{ paddingHorizontal: 15 }}>
              <Text>
                Liked by {like ? "you and" : ""} {like ? data.likes + 1 : data.likes} others
              </Text>
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 14,
                  paddingVertical: 2,
                }}
              >
                If enjoy the video ! Please like and Subscribe :)
              </Text>
              <Text style={{ opacity: 0.4, paddingVertical: 2 }}>View all comments</Text>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={data.postPersonImage}
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 100,
                      backgroundColor: "orange",
                      marginRight: 10,
                    }}
                  />
                  <TextInput placeholder="Add a comment " style={{ opacity: 0.5 }} />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Entypo name="emoji-happy" style={{ fontSize: 15, color: "lightgreen", marginRight: 10 }} />
                  <Entypo name="emoji-neutral" style={{ fontSize: 15, color: "pink", marginRight: 10 }} />
                  <Entypo name="emoji-sad" style={{ fontSize: 15, color: "red" }} />
                </View>
              </View>
            </View>
          </View>
        )
      })}
    </View>
  )
}
