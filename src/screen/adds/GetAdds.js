import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React, { useState, useCallback } from 'react'
import { firestore } from "../../config/Firebase"

import { collection, addDoc, getDocs, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { Button } from 'react-native';
import { ActivityIndicator, TextInput, } from 'react-native-paper';

import { ScrollView } from 'react-native-gesture-handler';

export default function Add() {
    const [product, setProduct] = useState([]);

















    // open document and choose




    //  add document 



    // fectch docment

    const fetchProduct = async () => {
        try {
            let array = [];
            const querySnapshot = await getDocs(collection(firestore, "products"));
            querySnapshot.forEach((doc) => {

                const data = doc.data();
                data.id = doc.id;
                array.push(data)
                console.log(data);

                console.log(`${doc.id} => ${doc.data()}`);
            });

            setProduct(array)

        } catch (error) {
            console.log(error);
        }




    }



    const handleUpdate = async (prod) => {





        try {
            await setDoc(doc(firestore, "products", prod.id), {

            }, { merge: true });
            alert("update products")
        } catch (error) {
            console.log(error);
        }


    }






    const deleteData = async (prod) => {

        try {
            await deleteDoc(doc(firestore, "products", prod.id));
            console.log("deleted data");

            const newProduct = product.filter((newPro) => {
                return prod.id != newPro.id
            }
            )


            setProduct(newProduct)
            alert("AD DELETE DONE")
        } catch (error) {
            console.log(error);
        }

    }
















    return (



        <View>






            <View>

                <ScrollView>
                    <View style={{ marginTop: 30 }}>
                        <Button title='Show My Product' onPress={() => fetchProduct()} />

                    </View>


                    {product.length > 0 ?
                        product.map((prod, i) => {
                            return <ScrollView>
                                <SafeAreaView>

                                    <View key={i}>
                                        <View style={{
                                            flex: 1, flexDirection: "row", marginTop: 30,
                                        }}>



                                            <View style={{ height: 260, width: 400, marginHorizontal: 10, borderRadius: 12, borderColor: "black", borderWidth: 2 }}>




                                                <Image source={{ uri: `${prod.Img}` }} style={{ height: 150, borderTopRightRadius: 6, borderTopLeftRadius: 6 }} />

                                                <Text style={{ color: "black", fontSize: 16, paddingHorizontal: 10, marginTop: 1 }}> {prod.Title}</Text>
                                                <Text style={{ color: "black", fontWeight: "bold", fontSize: 20, paddingHorizontal: 10, marginTop: 10, }}>Rs:{prod.Price}</Text>

                                                <Text style={{ height: 100, width: 100, flexDirection: "row", marginTop: 3, paddingHorizontal: 3 }}> <Button title='delete' onPress={() => deleteData(prod)} /> </Text>


                                            </View>
                                        </View>

                                    </View>




                                </SafeAreaView>
                            </ScrollView>

                        }

                        )
                        :
                        <View style={{ marginTop: 70 }}>
                            <ActivityIndicator />
                        </View>
                    }

                </ScrollView>
            </View>

        </View>



    )

}