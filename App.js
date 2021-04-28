import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResturantPick from "./src/screens/ResturantPick";


const navigator = createStackNavigator(
  {
    Home: SearchScreen,
    RestPick:ResturantPick

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
