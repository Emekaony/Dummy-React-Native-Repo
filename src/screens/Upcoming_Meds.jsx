import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList, ScrollView} from 'react-native';
import {firebase} from '@react-native-firebase/database';

import MedicationContainer from '../components/MedicationContainer';
import Header from '../components/Header';
import DATA from '../data/data';

const Upcoming_Meds = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch the data from API
    fetchData();
  }, []); // only run once

  const fetchData = async () => {
    try {
      const dbLink = 'https://pillmaster-9e7a7-default-rtdb.firebaseio.com/';
      const response = await firebase
        .app()
        .database(dbLink)
        .ref('/medication')
        .once('value');
      const jsonData = await response.val();
      const dataArray = Object.keys(jsonData).map(key => {
        return {
          name: key,
          ...jsonData[key],
        };
      });
      console.log('data array is ', dataArray);
      setData(dataArray);
    } catch (e) {
      console.log('Error fetching data: ', e);
    }
  };

  const renderPill = item => {
    // console.log('item right before calling return in renderPill: ', item);
    // passes thru here!
    return (
      <MedicationContainer
        name={item.name}
        canister={item.canister}
        count={item.count}
        days={item.days}
        hours={item.hours}
        weight={item.weight}
      />
    );
  };

  return (
    <ScrollView>
      <Header />
      <View style={styles.lowerContainer}>
        <Text style={styles.daysMedication}>Today's Medication</Text>
        {data.length > 0 ? (
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({item}) => renderPill(item)}
            keyExtractor={item => item.name}
          />
        ) : null}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  lowerContainer: {
    paddingLeft: 20,
  },
  daysMedication: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 20,
  },
});

export default Upcoming_Meds;
