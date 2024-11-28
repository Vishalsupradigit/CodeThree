

import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ToastAndroid, FlatList } from "react-native";

export default App = () =>
{

      const [PointOne, setPointOne] = useState("This is new App");
      const [Pointtwo, setPointTwo] = useState("");
      const [PointThree, setPointThree] = useState(false);
      const [MovieData]=useState(
        [
          {Location : "Mumbai"},
          {Location : "dadar"},
        ]
      )

      useEffect 
      (
        ()=>
        {
          setPointTwo("This is two");
        }
      )

      FunctionOne =()=>
      {
        ToastAndroid.show("This is function", ToastAndroid.SHORT);
      }

      const renderOne = ({item, index}) =>
      {
        return(
          <View>
            <Text>Try to makle List</Text>
              <Text>
                {item.Location}
              </Text>
          </View>
        );
      }
      

      return(
        <View>
          <Text>inside Application Demo</Text>

          <View>
            <Text>{PointOne}</Text>
            <Text>{Pointtwo}</Text>
          </View>

          <View>
            <TouchableOpacity
            onPress={()=>
              {
                    setPointThree(true);
              }     
            } >
            <Text>Change Button</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
            onPress={()=>
            {
              FunctionOne();
            }
            }>    
              <Text>
              Function CaLL
            </Text>
            </TouchableOpacity>
          </View>


        {PointThree == true?
        <View>
          <Text>
            text true
          </Text>
          </View>
          :
          <View>
          <Text>
            text False
          </Text>
          </View>
        }

          <Text>
            Flat List Making
          </Text>

          <View style={{backgroundColor:"#d3d2d1"}}>
          <Text>
            Flat List Making
          </Text>
            <FlatList
            data={MovieData}
            renderItem={renderOne}
            />


          </View>

        </View>
      );
}