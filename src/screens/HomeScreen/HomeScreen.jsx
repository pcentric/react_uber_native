import React from 'react'
import { View, Text } from 'react-native'
import CovidMessage from '../../components/CovidMessage/CovidMessage'
import HomeMap from '../../components/HomeMap/HomeMap'
import HomeSearch from '../../components/HomeSearch/HomeSearch'

const HomeScreen = () => {
    return (
        <View>
           <HomeMap />
           <CovidMessage  />
           <HomeSearch />
        </View>
    )
}

export default HomeScreen
