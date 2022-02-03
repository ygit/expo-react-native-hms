import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import HmsManager, {
  HMSLogger,
  HMSLogLevel,
} from '@100mslive/react-native-hms';
import React, { useEffect, useState } from 'react';
import 'expo-dev-client';

export default function App() {
  const [instance, setInstance] = useState<HmsManager | null>(null);

  const setupBuild = async () => {
    const build = await HmsManager.build();
    const logger = new HMSLogger();
    logger.updateLogLevel(HMSLogLevel.VERBOSE, true);
    build.setLogger(logger);
    console.log(build);
    setInstance(build);
  };
  const onJoin = () => {
    // host
    // instance?.join({
    //   authToken:
    //     'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2Nlc3Nfa2V5IjoiNjBjODk0MGJiNDcwMTI0Mjk2ZWM0Y2UyIiwicm9vbV9pZCI6IjYxYjZkODA5YjY4MmE5MWRkNTRiNWQ3MiIsInVzZXJfaWQiOiI2MGM4OTQwYmI0NzAxMjQyOTZlYzRjZGUiLCJyb2xlIjoiaG9zdCIsImp0aSI6ImE2MDVmNDMwLWQzZjUtNDk2Mi1iNjQzLTViYTgwMTZlOTQ5MyIsInR5cGUiOiJhcHAiLCJ2ZXJzaW9uIjoyLCJleHAiOjE2NDM4ODc0NDB9.bD8A6YwqLFmLjUNM6f4p4sM5zGnSZFfC1F7jx8ncEk0',
    //   username: 'Sam',
    // });
    // student
    instance?.join({
      authToken:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2Nlc3Nfa2V5IjoiNjBjODk0MGJiNDcwMTI0Mjk2ZWM0Y2UyIiwicm9vbV9pZCI6IjYxYjZkODA5YjY4MmE5MWRkNTRiNWQ3MiIsInVzZXJfaWQiOiI2MGM4OTQwYmI0NzAxMjQyOTZlYzRjZGUiLCJyb2xlIjoic3R1ZGVudCIsImp0aSI6IjQ2ZDlhMzdhLWRiNzktNGJkNi05N2YxLTY3ZDRhNWRkMGYxZiIsInR5cGUiOiJhcHAiLCJ2ZXJzaW9uIjoyLCJleHAiOjE2NDM4NzI0MzN9.2t8LQWYlD_wi2vtT9aZLIjNJNjUbenuiWVmKYVPOdSI',
      username: 'Sam',
    });
    // audio only
    // instance?.join({
    //   authToken:
    //     'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2Nlc3Nfa2V5IjoiNjBjODk0MGJiNDcwMTI0Mjk2ZWM0Y2UyIiwicm9vbV9pZCI6IjYxYjZkODA5YjY4MmE5MWRkNTRiNWQ3MiIsInVzZXJfaWQiOiI2MGM4OTQwYmI0NzAxMjQyOTZlYzRjZGUiLCJyb2xlIjoiYXVkaW8tb25seSIsImp0aSI6IjlmODYwODJkLWY4NzktNDc4Ny04NjVmLTFlMTYxOWVjZTI0ZSIsInR5cGUiOiJhcHAiLCJ2ZXJzaW9uIjoyLCJleHAiOjE2NDM4ODc2ODR9.IzD7WmIkUWduaqxfiMM8xXFcjoReDznz9Sx4GMsmitI',
    //   username: 'Sam',
    // });
    //video only
    // instance?.join({
    //   authToken:
    //     'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2Nlc3Nfa2V5IjoiNjBjODk0MGJiNDcwMTI0Mjk2ZWM0Y2UyIiwicm9vbV9pZCI6IjYxYjZkODA5YjY4MmE5MWRkNTRiNWQ3MiIsInVzZXJfaWQiOiI2MGM4OTQwYmI0NzAxMjQyOTZlYzRjZGUiLCJyb2xlIjoidmlkZW8tb25seSIsImp0aSI6IjMwNWMzMzViLTM0ODgtNDU0My1iNzM5LWM4NzVlYjBiNGJjNCIsInR5cGUiOiJhcHAiLCJ2ZXJzaW9uIjoyLCJleHAiOjE2NDM4ODc2MjR9.mIBIVHI46cKK_3QQSyNyIGXqFTFiwQdQ_p6_BaDqhFI',
    //   username: 'Sam',
    // });
  };
  const onLeave = () => {
    instance?.leave();
  };

  useEffect(() => {
    setupBuild();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style='auto' />
      <Button
        onPress={onJoin}
        title='Join'
        color='#841584'
        accessibilityLabel='Learn more about this purple button'
      />
      <Button
        onPress={onLeave}
        title='Leave'
        color='#841584'
        accessibilityLabel='Learn more about this purple button'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
