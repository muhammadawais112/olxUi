import React, { useState } from 'react'

import { View, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar, Card, Title, Paragraph, List } from 'react-native-paper';
import IconCard from 'react-native-vector-icons/dist/FontAwesome';
import IconSetting from 'react-native-vector-icons/dist/Feather'
import IconHelp from 'react-native-vector-icons/dist/MaterialIcons'



function Account() {

  return (
    <View>




      <View style={{ padding: 10, marginTop: 20 }}>

        <Card.Actions>
          <Avatar.Image size={70} source={{
            uri: 'https://yt3.ggpht.com/ytc/AKedOLRf-6KYYiU2Rwip3zSf-npHSTau8Ws9aem5n1enJQ=s176-c-k-c0x00ffffff-no-rj-mo'
          }} />
          <View>
            <Paragraph style={{ paddingHorizontal: 10, fontWeight: "bold", fontSize: 20 }} >Sir Naveed Sarwar</Paragraph>


            <Text style={{ paddingHorizontal: 10 }}  >Visit And edit Profile</Text>
          </View>

          {/* <Paragraph style={{ paddingHorizontal: 150, fontWeight: "bold", fontSize: 10 }}>9:02 AM</Paragraph> */}

        </Card.Actions>
      </View>

      <View style={{ border: 1, borderBottomWidth: 0.2, marginTop: 10 }}>
        <Card.Actions>
          <Text style={{ paddingHorizontal: 10 }}>
            <IconCard name="credit-card-alt" size={20} color="black" />
          </Text>
          <View>
            <Paragraph style={{ paddingHorizontal: 10, fontWeight: "bold", fontSize: 16 }} >Buy Product And My Orders</Paragraph>


            <Text style={{ paddingHorizontal: 10 }}  >Packages,orders and billing</Text>
          </View>

          {/* <Paragraph style={{ paddingHorizontal: 150, fontWeight: "bold", fontSize: 10 }}>9:02 AM</Paragraph> */}

        </Card.Actions>
      </View>



      <View style={{ border: 1, borderBottomWidth: 0.2, marginTop: 10 }}>
        <Card.Actions>
          <Text style={{ paddingHorizontal: 10 }}>
            <IconSetting name="settings" size={20} color="black" />
          </Text>
          <View>
            <Paragraph style={{ paddingHorizontal: 10, fontWeight: "bold", fontSize: 16 }} >Settings</Paragraph>


            <Text style={{ paddingHorizontal: 10 }}  >Privay and logout</Text>
          </View>

          {/* <Paragraph style={{ paddingHorizontal: 150, fontWeight: "bold", fontSize: 10 }}>9:02 AM</Paragraph> */}

        </Card.Actions>
      </View>

      <View style={{ border: 1, borderBottomWidth: 0.2, marginTop: 10 }}>
        <Card.Actions>
          <Text style={{ paddingHorizontal: 10 }}>
            <IconHelp name="support-agent" size={20} color="black" />
          </Text>
          <View>
            <Paragraph style={{ paddingHorizontal: 10, fontWeight: "bold", fontSize: 16 }} >Help</Paragraph>


            <Text style={{ paddingHorizontal: 10 }}  >Help Center and legal  terms</Text>
          </View>

          {/* <Paragraph style={{ paddingHorizontal: 150, fontWeight: "bold", fontSize: 10 }}>9:02 AM</Paragraph> */}

        </Card.Actions>
      </View>










    </View>
  )
}
export default Account;