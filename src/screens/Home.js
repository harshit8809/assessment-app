
import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import TripHome from './BottomTabScreens/TripHome';
import Profile from './BottomTabScreens/Profile';
import ApiData from './BottomTabScreens/ApiData';

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Trips', 
    focusedIcon: 'heart', unfocusedIcon: 'heart-outline'
},
    { key: 'albums', title: 'Api Data', 
    focusedIcon: 'heart', unfocusedIcon: 'heart-outline'
},
    { key: 'notifications', title: 'Profile', 
    focusedIcon: 'heart', unfocusedIcon: 'heart-outline' 
},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: TripHome,
    albums: ApiData,
    notifications: Profile,
  });

  return (
    <>
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    >
    </BottomNavigation>
    </>
  );
};

export default Home;