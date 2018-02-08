import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native';
import {Rating} from 'react-native-elements';
export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
           <Image style={styles.images} source={require('./4.jpg')}/>
           </View>
<View style={styles.circle}>
           <View style={styles.forProfile}>
           <Image style={styles.profile} source={require('./1.jpg')}/>
   </View>
      </View>
 <View style={styles.area}>
      <View style={styles.forName} >
          <Text style={styles.name1}>George Edwards</Text>
          <Text style={styles.name2}>XYZ-182</Text>
          <Text style={styles.name3}>$48,98</Text>
      </View>
      <View style={styles.st}>

       </View>
      <View style={styles.rate}>
<Text style={styles.text}> Rate Your Trip</Text>
</View>
<View style={styles.forRating}>
      <Rating
style={styles.rating}
  type="star"
  fractions={1}
  startingValue={3.6}
  imageSize={40}
  onFinishRating={this.ratingCompleted}
  style={{ paddingVertical: 10 }}
/>
</View>
<TouchableOpacity style={styles.button}>
<Text style={styles.sumbit}> Sumbit Rating </Text>
</TouchableOpacity>
 </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


},
header:{
  flex:1,
  width:'100%',
  height:170
},
area:{
  height:500,
  width:'100%',


},
circle:{
  width:'100%',
  height:100,
  marginTop:145,
  alignItems:'center',
  justifyContent:'center'

},
name1:{
  fontSize:20
},
name2:{
  fontSize:20,
  color:'grey'
},
name3:{
  fontSize:40
},
rating:{

},
forName:{
  width:'100%',
  height:130,
  alignItems:'center',
  justifyContent:'center'

},
forProfile:{
  height:100,
  width:100,
  borderRadius:100,
},
profile:{
  height:100,
  width:100,
  borderWidth:5,
  borderRadius:100,

},
forRating:{
  height:60,
  width:'100%',
  alignItems:'center',
  justifyContent:'center',
  marginTop:80
},
images:{
  width:'100%',
  height:200,
},
button:{
  alignItems:'center',
  justifyContent:'center',
  height:60,
  width:'100%',
  marginTop:40,
  backgroundColor:'#400080'
},
rate:{
  height:20,
  width:'100%',
  alignItems:'center',
  justifyContent:'center',
},
text:{
  color:'grey'
},
sumbit:{
  fontSize:20,
  color:'white'
},
st:{
  width:'90%',
  height:2,
borderWidth:2,
borderColor:'#ebebe0',
marginLeft:20,


}

});
