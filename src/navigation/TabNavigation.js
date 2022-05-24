import * as React from 'react'
import { BottomNavigation } from 'react-native-paper'
import HomeRoute from '../screens/HomeRoute';
import FoodRoute from '../screens/FoodRoute';
import InfoRoute from '../screens/InfoRoute';
import ContactRoute from '../screens/ContactRoute';


const TabNavigation = ({navigation: navigationStack}) => {


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home', color : '#EC6810' },
    { key: 'food', title: 'Food', icon: 'noodles', color : '#EC6810', navigation : navigationStack },
    { key: 'info', title: 'Info', icon: 'information', color : '#EC6810' },
    { key: 'contact', title: 'Contact', icon: 'card-account-mail', color : '#EC6810' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    food: FoodRoute,
    info: InfoRoute,
    contact: ContactRoute,
  }, 
  );


  return (

      <BottomNavigation
      navigationState={{ index, routes, navigationStack }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      />
  );
};

export default TabNavigation;