import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, ToastAndroid } from "react-native";

export default App =()=>
{
  const[PointOne, SetPointOne]= useState("Value One");
  const[PointTwo, SetPointTwo]= useState("----");
  const[PointThree, SetPointThree]= useState("");
  const[pointFour, SetpointFour]= useState(true);
  const[MovieData]= useState(
    [
      { Location: 'Bhayandar' },
      { Location: 'Andheri' },
      { Location: 'Borivali East' },
      { Location: 'Borivali West' },
      { Location: 'Malad'},
      { Location: 'Mumbai'},
      { Location: 'Andheri' },
      { Location: 'Borivali East' },
      { Location: 'Borivali West' },
      { Location: 'Malad'},Z
    ]
  );

  useEffect(
    ()=>
    {
      SetPointThree('New World');
    }
  );

  const FunctionNewOne =()=>
  {
    SetpointFour(false);
  }

  const renderOne = ({index,item})=>
  {
    return(
      <TouchableOpacity 
      onPress={()=>
      {
        ToastAndroid.show("Done :- "+index, ToastAndroid.SHORT);
      }
      }>
      <View style={{margin:10, backgroundColor:'#d2d2d2',padding:10}}>
        <Text>{item.Location}</Text>
      </View>
      </TouchableOpacity>
    );

  }

  return(
    <View style={{
      backgroundColor:'#fff988',
      flex:1
    }}>

      <Text>Function Making</Text>
      <Text>boolean Val making</Text>
      <Text>flat list making</Text>

      <Text style={{backgroundColor:'#ff9109', margin:10, padding:10, borderRadius:10}}>{PointOne}</Text>
      <Text style={{backgroundColor:'#ff1109', margin:10, padding:10, borderRadius:10}}>{PointTwo}</Text>
      <Text style={{backgroundColor:'#fff709', margin:10, padding:10, borderRadius:10}}>{PointThree}</Text>

      <TouchableOpacity
      onPress={()=>
      {
          SetPointTwo('we set this val')
      }
      }>
      <View style={{backgroundColor:'#d1d1d1', margin:30, padding:10, borderRadius:10}}>
        <Text>Set Two Val</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={()=>
      {
        FunctionNewOne();
      }
      }>
      <View style={{backgroundColor:'#d1d1d1', margin:30, padding:10, borderRadius:10}}>
        <Text>Set Four Val</Text>
      </View>
      </TouchableOpacity>

     {pointFour == true?
     <View>
       <Text style={{backgroundColor:'#91ff09', margin:10, padding:10, borderRadius:10}}>we set point four if</Text>
     </View>
     :
     <View>
     <Text style={{backgroundColor:'#9109ff', margin:10, padding:10, borderRadius:10}}>we set point four else</Text>
      </View>
     }

     <View>
      <Text>Calling Flatlist</Text>
     </View>


      <FlatList
      data={MovieData}
      renderItem={renderOne}
      />

    </View>
  );
}