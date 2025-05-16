import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Dashboard } from "../pages/Dashboard";
import { List } from "../pages/List";
import { Search } from "../pages/Search";
import { colors } from "../styles/color";

type AppRoutes = {
    dashboard: undefined;
    list: undefined;
    search: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.green.base,
            tabBarInactiveTintColor: colors.gray[400],
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: colors.gray[100],
                height: 60,
                borderTopWidth: 1,
                borderTopColor: colors.gray[200],
                paddingBottom: 8,
                paddingTop: 8,
            }
        }}>
            <Screen
                name="dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <FontAwesome6
                            name="add"
                            size={24}
                            color={color}
                        />
                }}
            />
            <Screen
                name="list"
                component={List}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <FontAwesome
                            name="list-ul"
                            size={24}
                            color={color}
                        />
                }}
            />
            <Screen
                name="search"
                component={Search}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <FontAwesome
                            name="search"
                            size={24}
                            color={color}
                        />
                }}
            />
        </Navigator>
    )
}