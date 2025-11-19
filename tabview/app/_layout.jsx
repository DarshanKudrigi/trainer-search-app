import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome name="th-large" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'contacts',
          tabBarIcon: ({ color }) =><FontAwesome name="heart" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="project"
        options={{
          title: 'project',
          tabBarIcon: ({ color }) =><FontAwesome name="heart" size={24} color="black" />,
        }}
      />
    </Tabs>
    
  );
}