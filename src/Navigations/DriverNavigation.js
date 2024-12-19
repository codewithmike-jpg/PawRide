import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreem from '../Drivers/DashboardScreem';
import Maps from '../Drivers/Maps';
import EarningScreen from '../Drivers/EarningScreen';
import ProfileScreen from '../Drivers/ProfileScreen';


const Tab = createBottomTabNavigator();

export default function DriverNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashboardScreem} />
      <Tab.Screen name="Map" component={Maps} />
      <Tab.Screen name="Earnings" component={EarningScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}