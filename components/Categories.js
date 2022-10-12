import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* Category card */}
      <CategoryCard
        imgUrl="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/dd8a3a1d71/chicken-wide.jpg"
        title="testing1"
      />
      <CategoryCard
        imgUrl="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/e0988a5a22/curry-wide.jpg"
        title="testing2"
      />
      <CategoryCard
        imgUrl="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/b07158449c/sushi-wide.jpg"
        title="testing3"
      />
      <CategoryCard
        imgUrl="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/0ee9c5082d/dessert-wide.jpg"
        title="testing4"
      />
      <CategoryCard
        imgUrl="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/d67ea4ffce/thai-wide.jpg"
        title="testing5"
      />
    </ScrollView>
  );
};

export default Categories;
