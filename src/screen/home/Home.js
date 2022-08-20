import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';
import IconCar from 'react-native-vector-icons/dist/Ionicons';
import IconLoc from 'react-native-vector-icons/dist/Entypo';

import Iconbuild from 'react-native-vector-icons/dist/FontAwesome5';
import { TextInput } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import IconNotif from 'react-native-vector-icons/dist/Ionicons';
import IconEnco from 'react-native-vector-icons/dist/Entypo';
import IconSale from 'react-native-vector-icons/dist/Foundation';
import IconAnimal from 'react-native-vector-icons/dist/Foundation';
import FoundationIcon from 'react-native-vector-icons/dist/Foundation';



import IconBike from 'react-native-vector-icons/dist/FontAwesome5';

import { ScrollView } from 'react-native-gesture-handler';
import { Button, Card, Title, Paragraph } from 'react-native-paper';






function Home() {
  const [text, setText] = React.useState('');
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />



  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <View>

            <View style={{ paddingHorizontal: 10, paddingVertical: 10, flexDirection: "row", justifyContent: "space-between" }}>
              <Avatar.Image size={30} source={{
                uri: 'https://play-lh.googleusercontent.com/20RCYopjA2KQr-_1XJUE9eCAlVuSokSBa1gsxXQqREahxxEB40csJwqVsj1I8jDgCzNw=w240-h480-rw',
              }} />




              <View style={{ flexDirection: "row" }}>

                <View style={{ height: 30, width: 30, backgroundColor: "#E2E5DE", justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
                  <IconCar name="car" size={25} color="black" />

                </View>


                <Text style={{ paddingHorizontal: 5, paddingVertical: 5, color: "black" }}>MOTORS</Text>
              </View>
              <View style={{ flexDirection: "row" }}>

                <View style={{ height: 30, width: 30, backgroundColor: "#E2E5DE", justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
                  <Iconbuild name="building" size={18} color="black" />

                </View>

                <Text style={{ paddingHorizontal: 5, paddingVertical: 5, color: "black" }}>PROPERTY</Text>

              </View>

            </View>

          </View>

          {/* Search bar */}
          <View style={{ height: 120, width: 420, backgroundColor: "#E2E5DE" }}>
            <View style={{ paddingHorizontal: 20, flexDirection: "row", paddingVertical: 10 }}>
              <IconLoc name="location-pin" size={30} color="black" />
              <Text style={{ paddingHorizontal: 5, paddingVertical: 5, color: "black" }}>Faisalabad , Punjab


              </Text>

            </View>
            <View style={{ marginVertical: 10, }}>
              <Searchbar
                placeholder="Search"
                style={{ marginHorizontal: 18 }}
                inputStyle={{ fontSize: 15 }}
              />


            </View>

          </View>

          {/*brower category  */}

          <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}>
            <Text style={{ fontSize: 15, color: "black" }}>Brower Categories</Text>
            <Text style={{ fontSize: 15, color: "blue" }}>Sell all</Text>
          </View>

          {/* list  */}

          <View style={{ flexDirection: "row", marginTop: 10, }}>
            <ScrollView horizontal={true}>
              <View style={{ paddingHorizontal: 10 }}>
                <View style={{ height: 60, width: 60, color: "red", backgroundColor: "#2a52be", justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
                  < IconEnco name="mobile" size={30} color="black" />
                </View>
                <Text style={{ paddingHorizontal: 10 }}>Mobile</Text>
              </View>
              <View>
                <View style={{ height: 60, width: 60, backgroundColor: "#40e0d0", justifyContent: "center", marginHorizontal: 10, alignItems: "center", borderRadius: 30 }}>
                  <IconCar name="car" size={30} color="black" />
                </View>
                <Text style={{ marginHorizontal: 29 }}>Car</Text>
              </View>

              <View>
                <View style={{ height: 60, width: 60, backgroundColor: "red", justifyContent: "center", marginHorizontal: 10, alignItems: "center", borderRadius: 30 }}>
                  <IconSale name="burst-sale" size={30} color="black" />
                </View>
                <Text style={{ marginHorizontal: 25 }}>Sale</Text>
              </View>
              <View>
                <View style={{ height: 60, width: 60, backgroundColor: "#daa520", justifyContent: "center", marginHorizontal: 10, alignItems: "center", borderRadius: 30 }}>
                  < IconEnco name="laptop" size={30} color="black" />
                </View>
                <Text style={{ marginHorizontal: 15 }}>Laptop</Text>
              </View>

              <View>
                <View style={{ height: 60, width: 60, backgroundColor: "#fff44f", justifyContent: "center", marginHorizontal: 10, alignItems: "center", borderRadius: 30 }}>
                  <IconBike name="motorcycle" size={25} color="black" />
                </View>
                <Text style={{ marginHorizontal: 25 }}>Bike</Text>
              </View>
              <View>
                <View style={{ height: 60, width: 60, backgroundColor: "#f88379", justifyContent: "center", marginHorizontal: 10, alignItems: "center", borderRadius: 30 }}>
                  <IconAnimal name="guide-dog" size={30} color="black" />
                </View>
                <Text style={{ marginHorizontal: 18 }} >Animals</Text>
              </View>



            </ScrollView>


          </View>
          {/* card */}



          <View style={{ flex: 1, flexDirection: "row", marginTop: 30, }}>


            <View style={{ flex: 0.5, height: 220, width: 200, marginHorizontal: 10, borderRadius: 12, borderColor: "black", borderWidth: 3 }}>



              <View style={{ height: 120, }}>
                <Image
                  style={{ height: 120, borderTopRightRadius: 8, borderTopLeftRadius: 8 }}
                  source={{ uri: "https://images.hindustantimes.com/tech/img/2021/12/31/960x540/DSC_1295_1639757951972_1640957855261.jpg" }} />
              </View>

              <View style={{ height: 60 }}>
                <View style={{ flexDirection: "row", height: 150, width: 160, justifyContent: "space-between" }}>

                  <Text style={{ color: "black", marginHorizontal: 5, marginTop: 10 }}>HP PAVILION LAPTOP
                    16GB RAM


                  </Text>


                  <Text style={{ marginHorizontal: 5, marginTop: 15 }}>
                    <IconSale name="burst-sale" size={30} color="black" />
                  </Text>

                </View>

              </View>
              <Text style={{ marginHorizontal: 10, color: "black", fontWeight: "bold", fontSize: 16 }}>Rs 60,000
              </Text>


            </View>

            <View style={{ flex: 0.5, height: 220, width: 200, marginHorizontal: 10, borderRadius: 12, borderColor: "black", borderWidth: 3 }}>
              <View style={{ height: 120, }}>
                <Image
                  style={{ height: 120, borderTopRightRadius: 8, borderTopLeftRadius: 8 }}
                  source={{ uri: "https://greatdubai.com/sell-car-rentals/wp-content/uploads/sites/4/2022/05/u5.jpg" }} />
              </View>

              <View style={{ height: 60 }}>
                <View style={{ flexDirection: "row", height: 150, width: 160, justifyContent: "space-between" }}>

                  <Text style={{ color: "black", marginHorizontal: 5, marginTop: 10 }}>TOYOTA PRADO TXL LAND CRUSIER


                  </Text>


                  <Text style={{ marginHorizontal: 5, marginTop: 15 }} >
                    <IconSale name="burst-sale" size={30} color="black" />


                  </Text>

                </View>

              </View>
              <Text style={{ marginHorizontal: 10, color: "black", fontWeight: "bold", fontSize: 16 }}>Rs 8,000,000
              </Text>



            </View>



          </View>
          {/* second row */}

          <View style={{ flex: 1, flexDirection: "row", marginTop: 30, }}>


            <View style={{ flex: 0.5, height: 220, width: 200, marginHorizontal: 10, borderRadius: 12, borderColor: "black", borderWidth: 3 }}>



              <View style={{ height: 120, }}>
                <Image
                  style={{ height: 120, borderTopRightRadius: 8, borderTopLeftRadius: 8 }}
                  source={{ uri: "https://images.olx.com.pk/thumbnails/249028180-400x300.webp" }} />
              </View>

              <View style={{ height: 60 }}>
                <View style={{ flexDirection: "row", height: 150, width: 160, justifyContent: "space-between" }}>

                  <Text style={{ color: "black", marginHorizontal: 5, marginTop: 10 }}>Iphone 12 pro max gold 256 gb


                  </Text>


                  <Text style={{ marginHorizontal: 5, marginTop: 15 }}>
                  </Text>

                </View>

              </View>
              <Text style={{ marginHorizontal: 10, color: "black", fontWeight: "bold", fontSize: 16 }}>Rs 223,000
              </Text>


            </View>

            <View style={{ flex: 0.5, height: 220, width: 200, marginHorizontal: 10, borderRadius: 12, borderColor: "black", borderWidth: 3 }}>
              <View style={{ height: 120, }}>
                <Image
                  style={{ height: 120, borderTopRightRadius: 8, borderTopLeftRadius: 8 }}
                  source={{ uri: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&w=1000&q=80" }} />
              </View>

              <View style={{ height: 60 }}>
                <View style={{ flexDirection: "row", height: 150, width: 160, justifyContent: "space-between" }}>

                  <Text style={{ color: "black", marginHorizontal: 5, marginTop: 10 }}>
                    HP PAVILION LAPTOP
                    4GB RAM

                  </Text>


                  <Text style={{ marginHorizontal: 5, marginTop: 15 }} >

                  </Text>

                </View>

              </View>
              <Text style={{ marginHorizontal: 10, color: "black", fontWeight: "bold", fontSize: 16 }}>Rs 8,000,000
              </Text>



            </View>



          </View>


          {/* third row  */}

          <ScrollView>
            <View style={{ flex: 1, flexDirection: "row", marginTop: 30, }}>


              <View style={{ flex: 0.5, height: 220, width: 200, marginHorizontal: 10, borderRadius: 12, borderColor: "black", borderWidth: 3 }}>



                <View style={{ height: 120, }}>
                  <Image
                    style={{ height: 120, borderTopRightRadius: 8, borderTopLeftRadius: 8 }}
                    source={{ uri: "https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/99-honda-civic-2022-european-reveal-studio-static-front.jpg" }} />
                </View>

                <View style={{ height: 60 }}>
                  <View style={{ flexDirection: "row", height: 150, width: 160, justifyContent: "space-between" }}>

                    <Text style={{ color: "black", marginHorizontal: 5, marginTop: 10 }}>THonda Civic  Already Bank Leased



                    </Text>


                    <Text style={{ marginHorizontal: 5, marginTop: 15 }}>
                      <IconSale name="burst-sale" size={30} color="black" />
                    </Text>

                  </View>

                </View>
                <Text style={{ marginHorizontal: 10, color: "black", fontWeight: "bold", fontSize: 16 }}>Rs 6,000,000
                </Text>


              </View>

              <View style={{ flex: 0.5, height: 220, width: 200, marginHorizontal: 10, borderRadius: 12, borderColor: "black", borderWidth: 3 }}>
                <View style={{ height: 120, }}>
                  <Image
                    style={{ height: 120, borderTopRightRadius: 8, borderTopLeftRadius: 8 }}
                    source={{ uri: "https://4.imimg.com/data4/MM/MM/GLADMIN-/images-about-cbr-150r-500x500.png" }} />
                </View>

                <View style={{ height: 60 }}>
                  <View style={{ flexDirection: "row", height: 150, width: 160, justifyContent: "space-between" }}>

                    <Text style={{ color: "black", marginHorizontal: 5, marginTop: 10 }}>A clean bike is a happy bike


                    </Text>


                    <Text style={{ marginHorizontal: 5, marginTop: 15 }} >

                    </Text>

                  </View>

                </View>
                <Text style={{ marginHorizontal: 10, color: "black", fontWeight: "bold", fontSize: 16 }}>Rs 4,000,000
                </Text>



              </View>



            </View>





          </ScrollView>

        </ScrollView>


      </SafeAreaView>

    </View>
  )
}
export default Home