import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen'
import ListScreen from './src/screens/ListScreen'
import ImageScreen from "./src/screens/ImageScreen"
import RockPaperScissors from './src/screens/rock-paper-scissors';
import ColorScreen from "./src/screens/colorScreen";
import SquareScreen from "./src/screens/squareScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components : ComponentsScreen,
    List : ListScreen,
    Image : ImageScreen,
    RPS : RockPaperScissors,
    Color: ColorScreen,
    SquareScreen : SquareScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
