import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React, { useState, useCallback } from 'react'
import { firestore } from "../../config/Firebase"
import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore/lite";
import { Button } from 'react-native';
import { ActivityIndicator, TextInput, Title, } from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';
import { storage } from '../../config/Firebase'
import { ref, uploadBytes } from "firebase/storage";
import { ScrollView } from 'react-native-gesture-handler';

import { Adds } from "../../screen/adds/Adds"
export default function Add() {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [imagePic, setImagePic] = useState({});
    const [product, setProduct] = useState([]);

















    // open document and choose

    const fileData = async () => {

        try {
            const response = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.images],


            });
            console.log(response.name);
            setImagePic(response)


        } catch (err) {
            console.log(err);

        }
    }


    //  add document 

    const dataObject = async () => {
        try {
            const docRef = addDoc(collection(firestore, "products"), {
                Title: title,
                Price: price,
                Img: imagePic.uri,

            });

            setPrice()
            setTitle()
            setImagePic()
            alert("you product add ")


        } catch (e) {
            console.error("Error adding document: ", e);
        }



    }

    // fectch docment

    const fetchProduct = async () => {
        try {
            let array = [];
            const querySnapshot = await getDocs(collection(firestore, "products"));
            querySnapshot.forEach((doc) => {

                const data = doc.data();
                array.push(data)

                console.log(`${doc.id} => ${doc.data()}`);
            });

            setProduct(array)

        } catch (error) {
            console.log(error);
        }




    }


    // // storage

    const storeData = async () => {
        try {
            const fileExt = imagePic.name.split(".").pop();
            // console.log(fileExt);
            const randomId = Math.random().toString(36).slice(2);


            // console.log(randomId);

            const storageRef = ref(storage, `data/${randomId}.${fileExt} `);


            await uploadBytes(storageRef, imagePic).then((snapshot) => {
                console.log(snapshot);
                console.log('Uploaded a blob or file!');
            });



        } catch (error) {
            console.log(error);
        }







    }




















    return (
        <View>
            <ScrollView>
                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20, marginBottom: 20 }}>
                    <Text style={{ fontSize: 20, fontFamily: "bold", color: "blue" }}>Add New Product</Text>
                </View>
                <View>

                    <TextInput
                        style={{ marginHorizontal: 20, marginTop: 20 }}

                        placeholder='Enter a Title'
                        placeholderTextColor="blue"
                        value={title}
                        onChangeText={(title) => setTitle(title)}

                    />
                    <TextInput
                        style={{ marginHorizontal: 20, marginTop: 20 }}
                        keyboardType='numeric'
                        placeholder='Enter a Price'
                        placeholderTextColor="blue"
                        value={price}
                        onChangeText={(price) => setPrice(price)}
                    />










                </View>





                <View style={{

                    justifyContent: "center", alignItems: "center",

                }}>

                    {
                        imagePic ?
                            (<Image source={{ uri: imagePic.uri }} style={{ height: 100, width: 100 }} />)
                            :
                            (<Text>
                                no image found
                            </Text>)
                    }
                </View>

                <View style={{ justifyContent: "space-around", flexDirection: "row" }}>
                    <View style={{ marginTop: 10, width: 200 }}>
                        <Button title="Pick Image" onPress={() => fileData()} />
                    </View>
                    <View style={{ marginTop: 10, width: 200 }}>
                        <Button title='Upload Image' onPress={() => storeData()} />

                    </View>
                </View>



                <View style={{ marginTop: 30, justifyContent: "center", width: 200, flexDirection: "row", marginHorizontal: 120 }}>
                    <Button title='add Products' onPress={() => dataObject()} />

                </View>




                {/* {product.length > 0 ?
                    product.map((product, i) => {
                        return <ScrollView>
                            <SafeAreaView>

                                <View key={i}>
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
                                <View  style={{ flex: 0.5, height: 200, width: 200, marginHorizontal: 10, borderRadius: 12, borderColor: "black", borderWidth: 3 }}>




                                    <Image source={{ uri: `${product.Img}` }} style={{ height: 150, }} />

                                    <Text >{product.Title}</Text>
                                    <Text style={{ marginTop: 5, paddingHorizontal: 10 }}>Rs:{product.Price}</Text>


                                </View>



                            </SafeAreaView>
                        </ScrollView>

                    }

                    )
                    :
                    <ActivityIndicator />
                } */}
            </ScrollView>
        </View>



    )
}
