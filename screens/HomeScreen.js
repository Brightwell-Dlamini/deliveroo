import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <SafeAreaView className="mt-4 bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl ">
            Current Location <ChevronDownIcon size={20} color="#00ccbb" />
          </Text>
        </View>
        <UserIcon size={35} color="#00ccbb" />
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
        <View className="flex-row space-x-2  bg-gray-200 p-2 flex-1 rounded-sm">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurant and cuising"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00bbcc" />
      </View>

      {/* Body */}
      <ScrollView className="bg-gray-100">
        {/* Catogories */}
        <Categories />
        {/* Featured Row */}
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts"
        />
        <FeaturedRow
          id="1235"
          title="Offers near you"
          description="Why not support your local restaurant tonight"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
