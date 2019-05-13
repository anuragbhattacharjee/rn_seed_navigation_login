import React from 'react';
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from 'react-native';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '' 
        };
    }
    render() {
        return (
        <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Username:</Text>
            <TextInput 
                style={styles.inputField}
                onChangeText={(username) => this.setState({username})}
                value={this.state.username}
                placeholder="Username"
                onSubmitEditing={()=> this.password.focus()}
                keyboardType="email-address"
            />
            <Text style={styles.formTitle}>Password:</Text>
            <TextInput 
                style={styles.inputField}
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                placeholder="Password"
                ref={(input)=> this.password = input}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{this.props.type}</Text>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    formContainer:{
        flex: 1,
        justifyContent: 'center'
    },
    inputField: {
        height: 40,
        width: 300,
        paddingHorizontal: 16,
        backgroundColor: '#fff', 
        borderRadius: 25
    },
    formTitle: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 10,
        marginTop: 10,
    },
    button:{
        backgroundColor: '#006064',
        width: 300,
        height: 40,
        paddingHorizontal: 16,
        borderRadius: 25  ,
        marginTop: 20,
        padding: 10
    },
    buttonText:{
        fontSize: 16,
        textAlign: 'center',
        color: '#fff'
    }
});
