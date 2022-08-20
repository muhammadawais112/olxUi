import React from 'react'

import { View, Text } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph, List } from 'react-native-paper';

function All() {
  return (
    <View>
      <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20, marginBottom: 10 }}>
        <Text style={{ color: "black", fontSize: 15 ,fontWeight:"bold" }}>Buying</Text>
      </View>

   
 
      <Card style={{ padding: 10 }}>

        <Card.Actions>
          <Avatar.Image size={40} source={{
            uri: 'https://yt3.ggpht.com/ytc/AKedOLRf-6KYYiU2Rwip3zSf-npHSTau8Ws9aem5n1enJQ=s176-c-k-c0x00ffffff-no-rj-mo'
          }} />
       <View>
          <Paragraph style={{ paddingHorizontal: 10, fontWeight: "bold" }}>Sir Naveed Sarwar</Paragraph>
        <Text style={{paddingHorizontal: 10}} >hey</Text>
        </View>
        <Paragraph style={{ paddingHorizontal: 170,  fontSize: 10 }}>9:02 AM</Paragraph>

          {/* <Paragraph style={{ paddingHorizontal: 150, fontWeight: "bold", fontSize: 10 }}>9:02 AM</Paragraph> */}

        </Card.Actions>
      </Card>
      <Card style={{ padding: 10 }}>

<Card.Actions>
  <Avatar.Image size={40} source={{
    uri: 'https://www.treehugger.com/thmb/UnNPKlPjiHa0bc0jRilkOOrYq0A=/1800x1185/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__11__ice-geysers-ce28b3b3c55b43eba6ee70e465015c66.jpg'
  }} />
<View>
  <Paragraph style={{ paddingHorizontal: 10, fontWeight: "bold" }}>Muhammad Awais</Paragraph>
<Text style={{paddingHorizontal: 10}} >hey </Text>
</View>
<Paragraph style={{ paddingHorizontal: 170,  fontSize: 10 }}>11:02 AM</Paragraph>

  {/* <Paragraph style={{ paddingHorizontal: 150, fontWeight: "bold", fontSize: 10 }}>9:02 AM</Paragraph> */}

</Card.Actions>
</Card>












    </View>
  )
}
export default All