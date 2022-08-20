import { View, Text, ActivityIndicator, Button } from 'react-native'
import React from 'react';
import GetAdds from "./GetAdds"
  export default function Adds() {
  return (
    <View>
     <GetAdds/>

      {/* {props.length > 0 ?
        props.map((product, i) => {
          return <View key={i}>
            <View style={{
              flex: 1, flexDirection: "row", marginTop: 30,
            }}>



              <View style={{ flex: 0.5, height: 200, width: 200, marginHorizontal: 10, borderRadius: 12, borderColor: "black", borderWidth: 3 }}>




                <Image source={{ uri: `${product.Img}` }} style={{ height: 150, }} />

                <Text >{product.Title}</Text>
                <Text style={{ marginTop: 5, paddingHorizontal: 10 }}>Rs:{product.Price}</Text>


              </View>
            </View>
          </View>




        }

        )
        :
        <ActivityIndicator />
      } */}
    </View>

  )
}

