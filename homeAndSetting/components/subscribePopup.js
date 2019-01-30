import React from 'react';
import {
    Image,
    Icon,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    Button
} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import GenerateForm from 'react-native-form-builder';

export class SubscribePopup extends React.Component {

    constructor(props) {
        super(props)

        let key = 0;
        let formField = [];

        this.props.content.forEach((el) => {
            formField.push(<View key={key}>
                <Text style={styles.fieldTitle}>{el}</Text>
                <TextInput style={styles.field}
                    placeholder="Type here!"
                    onChangeText={(text) => {
                        this.state.args[el] = text;
                        console.log("element : ", this.state.args[el]);
                        this.setState({ text })
                    }} >
                </TextInput>
            </View>);
            key += 1;
        })

        this.state = {
            args: new Object(),
            formField: formField
        }
    }

    subscribe() {
        var i = 0;
        console
        for (var el in this.state.args) {
            if (this.state.args[el] == undefined ||
                this.state.args[el] == null ||
                this.state.args[el] == "" ||
                !this.state.args[el]) {
                console.log("Missing field");
                return false;
            }
            i++;
            console.log("key : ", el, " / el : ", this.state.args[el])
        }
        if (i != this.props.content.length) {
            console.log("Missing field");
            return false;
        }
        this.props.closed();
        return true;
    }

    render() {
        return (
            <View style={styles.background}>
                <View style={styles.popupContainer}>
                    {/* <Image style={styles.image} source={{ uri: this.props.logo }}></Image>
                 */}
                    <Text style={ styles.closeCross } onPress={this.props.closed}>X</ Text>
                    <Text style={ styles.title } >{ this.props.name }</ Text>
                    <ScrollView>
                        {this.state.formField}
                    </ScrollView>
                    <Button style={styles.button} title="Subscribe" color="#f2c975" onPress={this.subscribe.bind(this)} />
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    closeCross: {
        fontSize: 30,
        fontFamily: 'roboto',
        textAlign: 'right',
        color: '#f2c975',
        paddingRight: 5
    },
    title: {
        textDecorationLine: 'underline',
        fontSize: 30,
        fontFamily: 'roboto',
        color: "#008773",
        alignSelf: 'center'
    },
    background: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'center',
        width: Dimensions.get("window").height / 3,
    },
    popupContainer: {
        flex: 1,
        backgroundColor: '#1C3341',
        opacity: 0.9,
        borderWidth: 0.7,
        borderColor: '#6bb983',
        marginTop: Dimensions.get("window").height / 7,
    },
    text: {
        fontSize: 15,
        fontFamily: 'roboto',
        color: '#fff'
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
    },
    fieldTitle: {
        fontSize: 20,
        fontFamily: 'roboto',
        color: "#008773",
        marginBottom: 15,
        marginLeft: 10,
        marginTop: 15
    },
    field: {
        paddingLeft: 5,
        fontSize: 12,
        fontFamily: 'roboto',
        color: "#fff",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15,
        borderWidth: 0.7,
        borderColor: '#fff'
    },
    button: {
        marginTop: 20,
        alignItems: 'center',
        fontSize: 20,
        fontFamily: 'roboto',
        color: "#fff",
    }
});