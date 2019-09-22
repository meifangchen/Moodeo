import React from 'react';
import {
  StyleSheet,
  View,
  WebView,
  Dimensions,
} from 'react-native';
import {AuthButton} from '../components/AuthButton';

export default class MoodeoHappy1Screen extends React.Component {
  state = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    videoURL: this.getVideoURL()
  }
 
  getVideoURL() {  
    videoKeyList = ['sj_4xEMdDVQ', 'uyrlWCK6U7o', 'dveODkUrOqY', 'ZN-b3WUccmc', 'lKol2GOSPeM', 'y6Ngq3QYXYc', 'QpNXHJGfGYo', '2qoj6BRFT5c', 'XyNlqQId-nk', 'TOnjl338qIQ', 'TM23x21Qs2Q', '7Fpui4o8vso', 'xoP_lwh8070', 'jjWhgqxly98', '09eDvF2iR_Y', 'FQ-CqV7Va5I', 'm20A4vOcqzo', 'sgOZNUoT9L4', 'aBABkTN8n_w', 'H4YqYyA-fVk', 'k8TMlAerG34', 'eKbytA_rAtk', 'CxndWySC3YQ', 'HCE3AndUdfQ', '0TPzdNQEDXw', 'fN5nN6NYJFs', 'RNXb6BvRyvg', '8Y4mMYRfIow', 'wqTXF6JxYhQ', 'eHl7jMIFDpU', '_pxRLV4i3CU', 'qPhVZExcGXg', '-4vAx94ENIQ', 'REJLBz9X6Os', 'RBlZwqKCkQw', 'QCpxprhyr80', 'fPFoGDtFmek', 'dAArUMr4HRs', '_1vHKSlH8Rk', 'xDTRiloP2Cs', '8tMq70b0Ork', 'WIIOY0I1fqI', 'T0vZcGhAus0', 'R1TkMyXyZSE', 'eXKmzXUGNk8', 'qFNBZtchN3k', 'MPrHKt315Qk', 'QfxelhCskKo', '68ORjuHT1og', 'hjuFTA4Ns8s', '--Hb7ErpanI', 'jPEY5Z7-JKA', 'i5X9mhihi5I', '4BQWSy0j-jQ', 'jySrwZc4sZo', 'Bu3TKuClF-w', 'eSyZ_X3swaY', 'Gkb1QMHrGvA', '3Y5jA6uLgiE', 'TWrKViTNZV4', 'FHczHp8JqhU', '93b3D1rNlZs', 'J7Fmk4ej1oo', 'd4rIwyVW-Gg', 'k0CJwbayisw', 'roymTEdOfHs', 'yZIMBGMdvX0', 'wVONXTt7gD4', '3CAhU1a0z3s', 'AQZucmBO1-4', 'T1c75NxL_8w', 'I5_SMjsm2Qg', '5q91cl0Wzr4', 'JOQ03okoQNk', '5dsGWM5XGdg', 'TYSoaOHExoQ', 'taK3q6YeMzk', 'v3_9BmdBs_c', 'KeWUNGjAE3Q', 'ZOmg2iBiJAw', 'E84VqqCPI7w', '_OzeOw2YKFw', '7SNxz3B1Uc8', '7unkueyyqxI', 'JVQhwPoAIcw', 'Ez0CTpAGDg0', 'G87UXIH8Lzo', 'A6sd0eB6ujk', '7WBvz0_Kix4', 'B5madndLkFo', '66kATUzhZUk', 'CJVZPwWP5JY', 'ZwFcCu2_gBg', 'obw0uNdor80', '1hLWOcjXOM0', '5Ypl6N4biH0', 'vgzUCoo4EKo', '9lkF9F8PtSk', 'CrGdQA3Ycwo', '3mQy4uFrUjg', 'Mb_ehn1DpF4', '-Cv4qOyz0dA', 'OUZ1IYbvIok', '4ind586OPDU', 'lyXiCUK5lg0', 'K7xN8pXJIz0', 'R7ghDhpCLKM', 'OwPDPiE2ivI', 'xRq5Qr6J9QQ', 'GSLSwwkLRW0', 'vyOLPR-ap2Y', 'RKU6x1n9Hak', '81O-OR-lKis', 'wnHaSPhc0ys', 'L-dHkmswS7A', 'Aq_RwiyKj5Q', 'QiCqaQBHyJw', 'kmfLolJqOik', 'YPQ_N4imYVE', 'ES27eG82C6g', 'f92VWkYl8CI', 'aBECcRKjL5g', 'UjuaZDdqmCw', 'Qglifokiuvo', 'WsPK5lVpVgY', 'uTmuWrjHAsQ', 'ySV_-JggXNU', 'a7PCZJr5A9c', 'FX1HaV_qjOM', 'fcEi1ttwl6E', 'iqdHm_-Ytfw', 'UDEN_aDkWLA', '2q5BCvTO0pw', 'lC8eBWDfY74', 'usvHg6miYKg', 'tV-wgZBGfCo', '99aInDW9MYo', '8Brt9pEQeGI', 'LCRTuC0zv3Y', '6lu17rWygSc', 'mJCatA3f_1U', 'QbQN5rDVRfw', 'X07LTqRxOGk', '8e1pQuRcIbo', 'sDfO7YXtKOk', '5NmIav-DttI', 'X6VLdVrVQGQ', 'twSvd5bQLDw', 'G_1jjqKFYaY', 'GHhFtkGfaWU', 'UDugant6hwE', '9_7Skw8qtLY', 'Q4AMhFDtmB8', '2aK8hy50fS4', 'DODLEX4zzLQ', 'nRN5VPZeTSw', 'bzZEH_5OuIs', 'JrDkVw0Sa-8', 'o7uTiyF97Ys', 'S5oR5WrUvJo', 'kIDQVoDmVrM', 'HE9nLWFZ6ac', 'wvvkUo_uFDM', 'WZ10jhB3dTA', 'Z6tJoI0gd1Q', 'cyXExkBwfZ4', '-72P_EFphSc', 'cwsThMmUSfU', 'cqTvkl5u6Js', 'n97F-pHlN_4', 'VAWv9f2_f0Q', '8R1mN8qTK50', 'IWINtUCshxY', 'CdGuccnjbQc', 'UnW3xkHxIEQ', 'kzztCpqcL7w', 'g7BhoMtzYXA', 'cqn2-SwmF50', '0FbfAM72cZY', 'Ps476YAUpbY', 'XhkY6pi72q8', '54ShtRrdv-M', 'xHDk2ui94Y0', 'cvElK9pOgos', 'SzdTtg8_29o', 'B8mCUkqSSCs', 'JXVeO59eZcU', 'xxjT7nK0Q9k', 'jhWXrWHJXwU', '3QDYbQIS8cQ', 'V1yv0ETlEls', '79Mib0BY2K8', 'nz_eqFDiO4o', '5GveMVko78U', '4bhpXhxP-WU', 'zvbt6TANVhY', 'nQPLmpBL2uE', '4H-EnMsOOIM', 'WEkSYw3o5is', 'tr-H8dR0HLo', '-kuLkVBCIyk', 'y7NSQ3v-gfE', 'vtYyRA1MNIM', 'K5bk_8UU-Lw', 'tPb8AXteyes', 'fVXjd0wSISA', 'PXaBLuI5464', 'GwBHA4tP27A', 'cYSSgtSvk9g', 'hieFFlpPsdI', 'aSktKuOKaVI', 'hpnQ2fdgKa0', 'KI-NAfw0yGo', '1gD93T6i-P8', '7na_-LfGfpE', 'Zk4JhPSGVpA', 'FGTaDkZjrl4', '1QpLB1cmOdQ', 'QJnfGBP0qRA', '_y2iCBYWZQU', 'ItlSyDva2-g', 'wGxyBNKJfaY', 'MhEY7UtBLJA', 'QDZaKFo2FBU', 'cb3a4c-FILc', 'qeUmtUJqhxs', 'QrVl7mgVSg0', '8mP5xOg7ijs', 'EwTrkro_E2g', 'W5IJcsp0QHI', 'Nx3KUe_2LUs', 'Ayw3J7sxEkQ', 'w5H3Z-lTtCs', 'SWQ5ZWd04nI', 'zn_wwL3y4lE', 'MyZDQ02txuc', 't7vrDHGTVf4', 'KAxHlDYZZdE', 'KiP4jwiTazI', 'MsTCsmqkezQ', 'ngY-r8BPmZI', '35yd_H5oQ6U', 'E7KzbBr6-84', 'SCbndpezewk', 'VB4CCHHYOqY', 'qOfQyZmW2Dc', '1Ce8hRxMtxo', 'MRKKGwE5N58', 'dfJ92d5Sohw', 'OoI57NeMwCc', '0CdnLDxkJHM', 'CNScM66KXAI', 'rE8U6U9Uasw', 'Gqcx-EYs19U', '0E9QYW1w8rg', 'ZBrc_OZkPe0', 'LzQpL4oTqfM', 'XO0psFtLIno', 'P2qOZDuiYlM', 'Tb4B0Fc8V_A', 'QQ8l83uqYcs', 'E0ijapzi6P4', 'YNc1ykg0Im0', 'tHXGyE9-rrg', 'tkbG1uSH0to', 'eryKY1fhUlo', 'ihFWv4_Pru8', 'jSDiWaeDNhA', 'vKMDuXy2m_k', 'Zs4OMZf8igU', 'p33PkLnYyxs', 'yCYMBg4kkbs', 'U0uCnAOEcHE', 'Jrh76Zm0NGA', 'tyk0MLrR12s', 'BLXwpGCn2KQ', 'FSSIuUAoTbQ', 'vOoULsLcrgs', '2fT6pssrES8', 'rStsx8SGsPc', '2K21q_HQfgs', 'AcL0MeVZIxM', '6HPDcPjUIWU', 'hY7m5jjJ9mM', '5yFfCAaedgA', 'xHuy4SeAuDM', '5tiDplW8Idg', 'dd8JHqjHJ5U', '-1FUF7atd64', 'uMLQEco892U', '9m0ANIj5Tbw', 'LcDWzISnOSE', 'ZnlFPBlCLfs', 'OeHSZT3RGMM', 'uK7W6iV5sz8', 'fLeI6_iimeo', 'Sz_OKfPUIlU', 'AEw5vxc4Wbc', 'yCNapZ0eCX8', '8RkcoZIYVWg', 'RT4j6bX9geM', 'hUyS5FRHaQA', 'ciDZgoGDpqU', 'Ixo-7HbsDrw', 'fDXFQ9VNOC0', 'Uqk66rusqY0', '72NfSwCzFVE', 'AUEjc0Ua9Kw', 'jmUmSht9MEs', 'LAV4Ar7H4KE', 'Ec-70W_K77U', 'tjQqJwpYwN8', 'jvXywhJpOKs', 'IytNBm8WA1c', 'Baon_vJsWCg', 'hf99-j6ep24', 'YuwxJB-TOyM', 'QcHBmZt34E4', '6FKidOhNQmA', 'tT5FvbVHq70', 'OKY6BGcx37k', 'frUKZFpmAfg', 'N8Fin1aw9oM', 'zXrUDo6wD_Y', 'JOW0HTv3soA', 'rEOugUo1A9g', 'KBfNlQ1wwPg', 'IVgrUQGnwzA', 'KLRmRpH8XmA', 'cBz44TI9918', 'lmuIJkCBn5Q', 'FMiG7G7VVuY', 'E6aMBYTH3wM', 'pbdUBnvi1Sg', 'PYOSKYWg-5E', '_wFbiy_LIH8', 'OuXuZU97Fy0', 'Are-c0BLyIg', 'zOOSetiWxyg', 'K1hlp0DCE_8', '7PIq2AeY7Sw', 'auFiXfdj-FM', 'wb0gLVFnrCE', '2HCXN96Zzbc', 'QlvYqkA-Wt0', 'Ev3sRw69RuQ', '9caspXJ0ea8', 'oUPRUcDNNbY', 'ko-TsQCE-lM', 'TttUIFXaAkM', 'kZzzSaXwpXQ', 'e-O8Pr0mxSk', '_sYTJbsvUF8', 'DC6gB79GDzc', 'Iu1oFeqiy44', '7L4JnAuW00k', 'EohYb_kNGlQ', 'HyyxFZ77OUI', '9iEBaI6c5sw', '2yrfexqY500', 'Om1cDuQBpJs', 'bV_EUMba534', '7hObPxK6870', 'hkANcahJA4U', 'czCEOIoLde0', 'oOEwmeA5SuE', 'vLKEZ7LU4Cc', 't2Qu5KG_jDE', 'EQ1HKCYJM5U', '-F1oZ3-9QmU', 'SA7bKo4HRTg', 'cStja5Zrjs8', 'wLDJwnIXnZw', 'ALTzR7yQ2Tw', 'MqowKTcp8RQ', 'Zyjerh9kLQA', '6nh_pIm36FY', 'JlCC8e_Uk2o', 'eI5DPt3Ge_s', 'P9oLZsk-DzE', '8cyl263-GoA', 'lUedtfxLj4Y', '0ltosWoe48Q', '4KQZjFMJ1L4', 'MQprGev54Z8', 'nSuoXQDsZes', 'zMGi3KfFTGc', 'S5p5cAhJCvs', 'YiJQmRZvJs4', 'v8PSNd7uKi0', 'EMZ9OZhpl-Q', 'ysSgG5V-R3U', 'c4kzS9MHn3g', '1kAaSA4ckUE', 'ClmRO--Iq3k', 'nTasT5h0LEg', 'gRyPjRrjS34', 'k8-S7VkQpT4', '4FdEOxKpk70'];
    RandomNumber = Math.floor(Math.random() * (videoKeyList.length-1)) + 0 ;
    videoKey = videoKeyList[RandomNumber];
    result = `<html><body><iframe width='970' height='1134' src=https://www.youtube.com/embed/${videoKey} frameborder='0' allowfullscreen></iframe></body></html>`;  
    return result
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Moodeo Happy 1',
      headerTitleStyle: {
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize:20
      }
    };
  };

  render() {
    return (
      <View style={styles.container}>    
        <WebView 
          style={StyleSheet.container}
          javaScriptEnabled={true}
          source={{ html: this.state.videoURL }}
        />
        <View style={styles.buttoncontainer}>
          <AuthButton 
            onPress={() => {this.props.navigation.push('MoodeoHappy2Screen');}}>Next video
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
  },
});
