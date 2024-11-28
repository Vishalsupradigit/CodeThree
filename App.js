import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from "react-native";

export default App = ()=>
{

  const [PointOne , SetPointOne] = useState("upload new file on git hub");
  const [PointTwo ,  SetPointTwo] = useState("");
  const [PointThree, SetPointThree] = useState([
    {
      location : "Dadar"
    },
    {
      location : "Mumbai"
    },
    {
    location : "Thane to kalyan all new state"
    },
    {
      location : "Apply gir hub new push msg upload now"
      }
  ])



  useEffect(
    ()=>
    {
      SetPointTwo("All Is Good")
    }
  )

    const renderOne = ({item, index}) =>
    {
      return(
      <View>
        <TouchableOpacity onPress={()=>
          {
            ToastAndroid.show("Position :- ",index, ToastAndroid.SHORT);
          }
        }>
          <View>
          <Text>
            {item.location}
          </Text>
          </View>
        </TouchableOpacity>
      </View>
      );
    }



  return(
    <View>
      <Text>
        Hi Long time
      </Text>

          <View style={{backgroundColor:"#ff9812", margin:20, padding:20}}>
            <Text>
              {PointOne}
            </Text>
          </View>

          <View>
            <Text>
              {PointTwo}
            </Text>
          </View>

          <View>
            <Text>
              Making Flat List
            </Text>


            <FlatList
            data={PointThree}
            renderItem={renderOne}/>

          </View>




    </View>
  );
}