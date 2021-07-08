import React from 'react'
import { View, Text, StyleSheet, FlatList,Image } from 'react-native'
class List extends React.Component {
    constructor() {
        super()
        this.state = {//initialise le state 
            countries: []
        }
    }
    // componentDidMount = () => {
    //    fetch('http://restcountries.eu/rest/v2/all', {
    //      method: 'GET'
    //  })
    //      .then((response) => response.json())
    //     .then((responseJson) => {
    //         console.log(responseJson);
    //        this.setState({
    //             countries: responseJson
    //        })
    //    })
    //    .catch((error) => {
    //       console.error(error);
    //   });
    // }
    async componentDidMount() {
        try {
            const result = await fetch('http://restcountries.eu/rest/v2/all')
            const country = await result.json()
            this.setState({
                countries: country
            })
            console.log(this.state.country);
        } catch (error) {
            console.error(error)
        }
    }

    render() {

        return (
            <View >

                <FlatList style={styles.container}
                    data={this.state.countries}
                    renderItem={({ item }) => (
                        <View>
                            
                            <Text style={{fontWeight:'bold',backgroundColor:'white'}}>
                                {item.name}
                            </Text>
                            <Text style={{ color: 'blue',margin:7 ,fontWeight:'bold',backgroundColor:'white'}}>
                                {item.capital}
                            </Text>
                            <Image
                            source={item.flag }
                            style={{ width: 300, height: 300 ,paddingTop:'100', }} />

                        </View>
                    )
                    }
                >
                </FlatList>

            </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
     
        backgroundColor:'pink',
        padding:50 ,
       
       
    }
})

export default List