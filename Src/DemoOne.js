import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity ,ToastAndroid} from "react-native";

export default App =()=>
{
  const [Apple, setApple] = useState('Applie String');
  const [Bat, setBat] = useState('');
  const [itemVisible, setitemVisible] = useState(true);


  useEffect(
    ()=>
    {
      setBat('purchase New Bat');
    }
  )

  const FunctionOnCall =()=>
  {
    ToastAndroid.show("inside Done", ToastAndroid.SHORT);
    setitemVisible(false);
  }

  return(
    <View style={{
      backgroundColor:'#fff087', marginTop:20
    }}>

        <Text>1 .  {Apple}</Text>
        <Text>2 .  {Bat}</Text>



      <TouchableOpacity
        onPress={()=> 
              {
                FunctionOnCall()
              }
        }>
        <View
        style={{backgroundColor:'#ff9012', margin:10, padding:10, borderRadius:10, alignContent:'center'}}>
          <Text>Call Function</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=> 
              {
                setitemVisible(true);
              }
        }>
        <View
        style={{backgroundColor:'#ff1012', margin:10, padding:10, borderRadius:10, alignContent:'center'}}>
          <Text>False Function</Text>
        </View>
        </TouchableOpacity>

        {itemVisible == true?
          <View
          style={{backgroundColor:'#00ff91', margin:10, padding:10, borderRadius:10, alignContent:'center'}}>
            <Text>We make New Function call </Text>
          </View>
          :
          <View
          style={{backgroundColor:'#00ff11', margin:10, padding:10, borderRadius:10, alignContent:'center'}}>
            <Text>We False </Text>
          </View>
        
       }

      

    </View>
  );

}