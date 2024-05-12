import { StyleSheet } from 'react-native';

export default function HomeHeader(title, subtitle) {
    return(
        <View styles={styles.container}>
          <Text styles={styles.headerText}>{title}</Text>
          <Text styles={styles.subtitleText}>{subtitle}</Text>
        </View>
      )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    headerText: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    subtitleText: {
      fontSize: 12,
      fontWeight: '100'
    }
  });
  