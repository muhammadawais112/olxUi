import React from 'react'

import { View, Text } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph, List } from 'react-native-paper';

function All() {
  return (
    <View>
      <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20, marginBottom: 10 }}>
        <Text style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>Selling</Text>
      </View>




      <Card style={{ padding: 10 }}>

        <Card.Actions>
          <Avatar.Image size={40} source={{
            uri: 'https://media.istockphoto.com/photos/image-of-open-antique-book-on-wooden-table-with-glitter-overlay-picture-id1354441996?b=1&k=20&m=1354441996&s=170667a&w=0&h=O4JDagXhIh1N13PNN6G4_L5KB5QPZryin7FOrZnzYvc='
          }} />
          <View>
            <Paragraph style={{ paddingHorizontal: 10, fontWeight: "bold" }}>Muhammad Ali Khan</Paragraph>
            <Text
              style={{ paddingHorizontal: 10 }} >Thanks </Text>
          </View>
          <Paragraph style={{ paddingHorizontal: 156, fontSize: 10 }}>12:02 AM</Paragraph>

          {/* <Paragraph style={{ paddingHorizontal: 150, fontWeight: "bold", fontSize: 10 }}>9:02 AM</Paragraph> */}

        </Card.Actions>
      </Card>
      <Card style={{ padding: 10 }}>

        <Card.Actions>
          <Avatar.Image size={40} source={{
            uri: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg'
          }} />
          <View>
            <Paragraph style={{ paddingHorizontal: 10, fontWeight: "bold" }}>Muhammad Bilal</Paragraph>
            <Text style={{ paddingHorizontal: 10 }} >Good Best of Luck </Text>
          </View>
          <Paragraph style={{ paddingHorizontal: 166, fontSize: 10 }}>12:02 AM</Paragraph>


        </Card.Actions>
      </Card>








    </View>
  )
}
export default All