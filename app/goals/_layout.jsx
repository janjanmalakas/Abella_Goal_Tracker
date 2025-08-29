import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons"
import { GoalsProvider } from '../../contexts/GoalsContext'

export default function GoalsLayout() {

  return (
    <GoalsProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#a7a41aff',
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Your Goals',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: 'Add Goal',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </GoalsProvider>
  )
}