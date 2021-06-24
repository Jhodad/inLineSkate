import React, { useState } from 'react';
import { Button, Input, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { firebase } from '../firebase/fire.js';
import {
    NewsCardContainer,
    NewsCardHeader,
    NewsCardContent_Text,
    NewsCardContent_Image,
    NewsCardContent_Video,
    NewsCardFooter
} from '../components/Cards.js';


const S_News = ({ navigation }) => {

    return <>
    
    <ScrollView>
        <TouchableOpacity>
            <NewsCardContainer>

                <NewsCardHeader>
                    <Text>This is a Title</Text>
                </NewsCardHeader>

                <NewsCardContent_Text>
                    <Text>Content desc ,asdkla</Text>
                </NewsCardContent_Text>

                <NewsCardFooter>
                    <Text>Date</Text>
                </NewsCardFooter>

            </NewsCardContainer>
            
        </TouchableOpacity >

        <TouchableOpacity>
            <NewsCardContainer>

                <NewsCardHeader>
                    <Text>This is a Title</Text>
                </NewsCardHeader>

                <NewsCardContent_Image>
                    <Image 
                    source = {{ uri: "https://bigwheelblading.com/wp-content/uploads/2019/03/shoptaskflow-1140x475.jpg"}}
                    style= {{ height:'100%', width: '100%' }}/>
                </NewsCardContent_Image>

                <NewsCardFooter>
                    <Text>Date</Text>
                </NewsCardFooter>

            </NewsCardContainer>
            
        </TouchableOpacity >

        <TouchableOpacity>
            <NewsCardContainer>

                <NewsCardHeader>
                    <Text>This is a Title</Text>
                </NewsCardHeader>

                <NewsCardContent_Image>
                    <Image 
                    source = {{ uri: "https://bigwheelblading.com/wp-content/uploads/2019/03/shoptaskflow-1140x475.jpg"}}
                    style= {{ height:'100%', width: '100%' }}/>
                </NewsCardContent_Image>

                <NewsCardFooter>
                    <Text>Date</Text>
                </NewsCardFooter>

            </NewsCardContainer>
            
        </TouchableOpacity >

        <TouchableOpacity>
            <NewsCardContainer>

                <NewsCardHeader>
                    <Text>This is a Title</Text>
                </NewsCardHeader>

                <NewsCardContent_Text>
                    <Text>Content desc ,asdkla</Text>
                </NewsCardContent_Text>

                <NewsCardFooter>
                    <Text>Date</Text>
                </NewsCardFooter>

            </NewsCardContainer>
            {/*//< Text>written by...</Text>*/}
        </TouchableOpacity >

        <TouchableOpacity>
            <NewsCardContainer>

                <NewsCardHeader>
                    <Text>This is a Title</Text>
                </NewsCardHeader>

                <NewsCardContent_Image>
                    <Image 
                    source = {{ uri: "https://bigwheelblading.com/wp-content/uploads/2019/03/shoptaskflow-1140x475.jpg"}}
                    style= {{ height:'100%', width: '100%' }}/>
                </NewsCardContent_Image>

                <NewsCardFooter>
                    <Text>Date</Text>
                </NewsCardFooter>

            </NewsCardContainer>
            
        </TouchableOpacity >

        <TouchableOpacity>
            <NewsCardContainer>

                <NewsCardHeader>
                    <Text>This is a Title</Text>
                </NewsCardHeader>

                <NewsCardContent_Image>
                    <Image 
                    source = {{ uri: "https://bigwheelblading.com/wp-content/uploads/2019/03/shoptaskflow-1140x475.jpg"}}
                    style= {{ height:'100%', width: '100%' }}/>
                </NewsCardContent_Image>

                <NewsCardFooter>
                    <Text>Date</Text>
                </NewsCardFooter>

            </NewsCardContainer>
            
        </TouchableOpacity >

        </ScrollView>


    </>



};



export default S_News;