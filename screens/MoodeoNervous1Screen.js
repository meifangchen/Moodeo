import React from 'react';
import {
  StyleSheet,
  View,
  WebView,
  Dimensions,
} from 'react-native';
import {AuthButton} from '../components/AuthButton';
import Colors from '../constants/Colors';

export default class MoodeoNervous1Screen extends React.Component {
  state = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    videoURL: this.getVideoURL()
  }
 
  getVideoURL() {  
    videoKeyList = 
    ['lunFIc-8r8o', '9wwrlLmc9sQ', '2X2gC2uqHu8', 'hqPy9EjlsKM', 'DKwcFiNe7xw', 
    'VIWVfkF2IeI', 'jp3Z53st1M0', 'BfdOP8139i4', '9wwrlLmc9sQ&t=42s', 'DXDGE_lRI0E',
    'xBQ2INptpik', 'jbeFQtaybB8', 'RsMAXhc0QTs', 'ZHtvL7Ohjaw', 'NNalljDgak4',
    'MlKetn7ZiNU', 'O5KETYJJnIE', '2gQLDdSy2cU', 'o8EQjADXNQI', 'gU5p6061M34',
    'DODLEX4zzLQ', 'tZedcCm4hl8', 'nWe2On5H6UA', '8vOUnywZxrs', 'EtH9Yllzjcc',
    'crhvwfX8CLQ', 'RU8VvrCDwXk', 'msL-lsZMyQI', 'DNqFjBRCSwg', 'kLUFit8815c',
    'ScC0tJsv96w', 'twlb_LJsp4Q', 'QSKOPTiwhe0', '3Sbw0lZ9LmY', 'rStsx8SGsPc',
    'Zdfw8uQ-vA4', 'KD-FmeueFUo', 's86j7PgN_sE', 'n8s-8KtfgFM', 'hahvUXwTXE4', 
    'DiXTIBVo1PI', 'znHrXzm7Y-8', 'YZbIkTSZoeM', 'sl3Dc1kERto', 'MsXlZ_phGNY',
    'qX1l7sMphsM', 'fSqicTTg1Ps', 'eHewbCcZcaQ', 'XZDA2XrwenY', 'HoM4tle99tM'];
    RandomNumber = Math.floor(Math.random() * (videoKeyList.length-1)) + 0 ;
    videoKey = videoKeyList[RandomNumber];
    result = `<html><body><iframe width='970' height='1134' src=https://www.youtube.com/embed/${videoKey} frameborder='0' allowfullscreen></iframe></body></html>`;  
    return result
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Video',
      headerTitleStyle: {
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize:25
      },
      headerStyle: {
        borderBottomWidth: 0,
      },
      headerTintColor:Colors.tintColor
    };
  };

  render() {
    return (
      <View style={styles.container}>    
        <WebView 
          useWebKit={true}
          style={StyleSheet.container}
          javaScriptEnabled={true}
          source={{ html: this.state.videoURL }}
        />
        <View style={styles.buttoncontainer}>
          <AuthButton 
            onPress={() => {this.props.navigation.push('VaidateVideoScreen');}}>Validate this video
          </AuthButton>
        </View>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttoncontainer: {
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
