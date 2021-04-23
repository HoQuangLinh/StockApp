//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
class BT_set extends Component {
    render() {
        return (
            <View style={styles.column}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginText}>SET</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginText}>S&P</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginText}>NASDAQ</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginText}>Dow Jones</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginText}>Shanghei</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginText}>Nikkei</Text>
                    </TouchableOpacity>
                </View> 
                <View style={styles.row}>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginText}>Hang Seng</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginText}>TSEC</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginText}>EURO</Text>
                    </TouchableOpacity>
                </View>
            </View>
           
            
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    column:{
        flex:2,
        flexDirection: 'column',
        justifyContent:"center",
    },
    row:{
        //flex:1,
        flexDirection: 'row',
        alignItems: "center",
       justifyContent: "center",
    },
    loginBtn: {
        marginHorizontal: 10,
        width: "28%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#ebdb2d",
    },
    loginText:{
        alignItems:'center',
    },
});

//make this component available to the app
export default BT_set;
