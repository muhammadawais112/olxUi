// import { View, Text } from 'react-native'
// import React, { useState } from 'react'

// export default function EditAccount() {
//     const [name, setName] = useState("")
//     const [email, SetEmail] = useState("")
//     const [imagePic, setImagePic] = useState({});

//     return (
//         <View>

//             <TextInput
//                 style={{ marginHorizontal: 20, marginTop: 20 }}

//                 placeholder='Enter a Title'
//                 placeholderTextColor="blue"
//                 value={title}
//                 onChangeText={(title) => setTitle(title)}

//             />
//             <TextInput
//                 style={{ marginHorizontal: 20, marginTop: 20 }}
//                 keyboardType='numeric'
//                 placeholder='Enter a Price'
//                 placeholderTextColor="blue"
//                 value={price}
//                 onChangeText={(price) => setPrice(price)}
//             />
//             <View style={{

//                 justifyContent: "center", alignItems: "center",

//             }}>

//                 {
//                     imagePic ?
//                         (<Image source={{ uri: imagePic.uri }} style={{ height: 100, width: 100 }} />)
//                         :
//                         (<Text>
//                             no image found
//                         </Text>)
//                 }
//             </View>











//         </View>




//     )
// }
import { View, Text } from 'react-native'
import React from 'react'

export default function Edit() {
  return (
    <View>
      <Text>Edit</Text>
    </View>
  )
}