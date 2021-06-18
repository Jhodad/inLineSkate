import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import homeStack from './homeStack';
import drawerMenu from '../components/drawerMenu';


const drawer = createDrawerNavigator({
    News: {
        screen: homeStack
    },
    Spots: {
        screen: homeStack
    },
    Events: {
        screen: homeStack
    },
}, {
    contentComponent: drawerMenu
}
);



export default createAppContainer(drawer);