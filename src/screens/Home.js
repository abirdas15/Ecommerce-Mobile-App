import React from 'react';

import {
  View,
  Text,
  ScrollView,
  TextInput,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const SCREEN_WIDTH = Dimensions.get('window').width;

import Carousel, {Pagination} from 'react-native-snap-carousel-v4';
import Slider from '../components/Slider';
import Category from '../components/Category';
import FlashSale from '../components/FlashSale';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const SLIDE_WIDTH = Math.round(viewportWidth / 5.6);
const ITEM_HORIZONTAL_MARGIN = 15;
const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 2;
const SLIDER_WIDTH = viewportWidth;

const PRODUCT_SLIDE_WIDTH = Math.round(viewportWidth / 3.0);
const PRODUCT_ITEM_HORIZONTAL_MARGIN = 15;
const PRODUCT_ITEM_WIDTH = PRODUCT_SLIDE_WIDTH + PRODUCT_ITEM_HORIZONTAL_MARGIN * 2;
const PRODUCT_SLIDER_WIDTH = viewportWidth;


const SliderData = [
  {
    id: 1,
    name: 'React JS',
    url: require('../assets/img/slider.png'),
  },
  {
    id: 2,
    name: 'JavaScript',
    url: require('../assets/img/slider.png'),
  },
  {
    id: 3,
    name: 'Node JS',
    url: require('../assets/img/slider.png'),
  },
];

const CategoryData = [
  {
    id: 1,
    name: 'Man Shirt',
    url: require('../assets/img/category1.png'),
  },
  {
    id: 2,
    name: 'Dress',
    url: require('../assets/img/category1.png'),
  },
  {
    id: 3,
    name: 'Man Work Equipment',
    url: require('../assets/img/category1.png'),
  },
  {
    id: 4,
    name: 'Woman Bag',
    url: require('../assets/img/category1.png'),
  },
  {
    id: 5,
    name: 'Man Shoes',
    url: require('../assets/img/category1.png'),
  },
];
const FlashSaleData = [
  {
    id: 1,
    name: 'FS - Nike Air Max 270 React',
    price: '$299,43',
    old_price: '$534,33',
    discount_value: '24 % off',
    url: require('../assets/img/product1.png'),
  },
  {
    id: 2,
    name: 'FS - Nike Air Max 270 React',
    price: '$299,43',
    old_price: '$534,33',
    discount_value: '24 % off',
    url: require('../assets/img/product1.png'),
  },
  {
    id: 3,
    name: 'FS - Nike Air Max 270 React',
    price: '$299,43',
    old_price: '$534,33',
    discount_value: '24 % off',
    url: require('../assets/img/product1.png'),
  }
];

const renderSlider = ({item, index}) => {
  return (
    <View>
      <Slider item={item}></Slider>
      <Pagination
        dotsLength={3} // also based on number of sildes you want
        activeDotIndex={0}
        containerStyle={{marginTop: -15}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: '#40BFFF',
        }}
        inactiveDotStyle={{
          backgroundColor: '#EBF0FF',
        }}
        inactiveDotOpacity={1}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const renderCategory = ({item, index}) => {
  return (
    <Category item={item}></Category>
  );
};


const Home = ({navigation}) => {
  const renderFlashSale = ({item, index}) => {
    return (
      <FlashSale item={item} navigation={navigation}></FlashSale>
    );
  }
  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
          marginHorizontal: 20,
          marginTop: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#EBF0FF',
            width: '80%',
            paddingLeft: 10,
            height: 45,
          }}>
          <Icon name="search-outline" size={15} color="#40BFFF"></Icon>
          <TextInput placeholder="Search Product"></TextInput>
        </View>
        <View>
          <Icon name="heart-outline" size={25}></Icon>
        </View>
        <View>
          <Icon name="md-notifications-outline" size={25}></Icon>
        </View>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderRadius: 1,
          marginTop: 20,
          borderColor: '#EBF0FF',
        }}></View>
      <View>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={SliderData}
          renderItem={renderSlider}
          sliderWidth={SCREEN_WIDTH}
          itemWidth={SCREEN_WIDTH}
          slideStyle={{width: SCREEN_WIDTH}}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <Text style={{fontSize: 14, fontWeight: '700'}}>Category</Text>
        <TouchableOpacity>
          <Text style={{fontSize: 14, fontWeight: '700', color: '#40BFFF'}}>
            More Category
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={CategoryData}
          renderItem={renderCategory}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          activeSlideAlignment={'start'}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginTop: 20
        }}>
        <Text style={{fontSize: 14, fontWeight: '700'}}>Flash Sale</Text>
        <TouchableOpacity>
          <Text style={{fontSize: 14, fontWeight: '700', color: '#40BFFF'}}>
            See More
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={FlashSaleData}
          renderItem={renderFlashSale}
          sliderWidth={PRODUCT_SLIDER_WIDTH}
          itemWidth={PRODUCT_ITEM_WIDTH}
          activeSlideAlignment={'start'}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
        />
      </View>


      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginTop: 20
        }}>
        <Text style={{fontSize: 14, fontWeight: '700'}}>Mega Sale</Text>
        <TouchableOpacity>
          <Text style={{fontSize: 14, fontWeight: '700', color: '#40BFFF'}}>
            See More
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={FlashSaleData}
          renderItem={renderFlashSale}
          sliderWidth={PRODUCT_SLIDER_WIDTH}
          itemWidth={PRODUCT_ITEM_WIDTH}
          activeSlideAlignment={'start'}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
