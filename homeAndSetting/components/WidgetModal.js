import React from 'react';
import {
    Animated,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Image,
    Easing,
    StyleSheet,
    Text,
    View,
    Modal,
    Button,
    Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';

export class WidgetModalScreen extends React.Component {

    state = {
        modalVisible: false,
        idxCarousel: 0,
        serviceLogo: ''
    }

    constructor(props) {
        super(props);
        this.rotateValue = new Animated.Value(0);
    }


    suscribeToWidget(id) {
        console.log("Widget ID: ", id);
    }

    renderCarouselItem(item, inde) {
        return (
            <View style={styles.carouselCont}>
                <Text style={styles.titleCar}>{item.item.name}</Text>
                <Text style={styles.descCar} >{item.item.desc}</Text>
                <Button style={styles.titleCar} title="ADD TO HOME" color="#f2c975" onPress={() => this.suscribeToWidget(item.item.id)} />
            </View>
        );
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        var dataS = [
            {
                key: 0,
                name: 'Twitter',
                logo: 'https://blog.internet-formation.fr/wp-content/uploads/2015/09/logo-twitter-design-600x112.png',
                id: 123,
                widgets: [
                    {
                        id: 0,
                        name: 'Twitter post',
                        desc: 'Ce widget permet de poster sur une page donnée blablabla ...'
                    },
                    {
                        id: 1,
                        name: 'Twitter actu',
                        desc: 'Ce widget permet voir le file d\'actu d\'une page donnée ...'
                    }
                ]
            },
            {
                key: 1,
                name: 'Intra Epitech',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Epitech.png',
                id: 124,
                widgets: [
                    {
                        id: 23,
                        name: 'Intra Register',
                        desc: 'Ce widget permet de s\'inscrire au activitée qui vont arrivée ...'
                    },
                    {
                        id: 43,
                        name: 'Intra notif',
                        desc: 'Ce widget permet voir les derniére notification de l\'intranet Epitech...'
                    }
                ]
            },
            {
                key: 2,
                name: 'Gmail',
                logo: 'http://casaveneziausa.com/wp-content/uploads/parser/gmail-logo-1.png',
                id: 126,
                widgets: [
                    {
                        id: 46,
                        name: 'Send Mail',
                        desc: 'Ce widget permet d\'envoyer un mail'
                    },
                    {
                        id: 34,
                        name: 'Sync New Mail',
                        desc: 'Permet d\'envoyer de synchroniser les mail et de regarder les mails non lu ...'
                    }
                ]
            }
        ]
        var carouselElement = [];

        for (var i in dataS) {
            for (var j in dataS[i].widgets) {
                carouselElement.push({
                    id: dataS[i].widgets[j].id,
                    name: dataS[i].widgets[j].name,
                    desc: dataS[i].widgets[j].desc,
                    logo: dataS[i].logo,
                    serviceId: dataS[i].id
                })
            }
        }
        let rotation = this.rotateValue.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "90deg"] // degree of rotation
        });

        let transformStyle = { transform: [{ rotate: rotation }] };
        return (
            <View>
                <TouchableWithoutFeedback
                    onPressIn={() => {
                        Animated.timing(this.rotateValue, {
                            toValue: 1,
                            duration: 150,
                            easing: Easing.linear
                        }).start();
                        this.setModalVisible(true);
                    }}
                    onPressOut={() => {
                        Animated.timing(this.rotateValue, {
                            toValue: 0,
                            duration: 150,
                            easing: Easing.linear
                        }).start();
                    }}>
                    <Animated.View style={transformStyle}>
                        <Image source={require('../assets/images/addButon.png')} style={styles.imageButton} />
                    </Animated.View>
                </TouchableWithoutFeedback>
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(false);
                    }}
                >
                    <Text style={styles.closeButton} onPress={() => this.setModalVisible(false)}>X</Text>
                    <Text style={styles.title}>Widgets</Text>
                    <View style={styles.pageContainer}>
                        <View style={styles.logoContainer}>
                            <View style={styles.logobord}>
                                <Image style={styles.logoService} source={{ uri: carouselElement[this.state.idxCarousel].logo }} />
                            </View>
                        </View>
                        <View style={styles.widgetContainer}>
                            <Carousel
                                ref={(c) => { this.carousel = c; }}
                                data={carouselElement}
                                renderItem={this.renderCarouselItem.bind(this)}
                                sliderWidth={(Dimensions.get('window').width / 3) * 2}
                                itemWidth={(Dimensions.get('window').width / 3) * 2}
                                onBeforeSnapToItem={(index) => {
                                    this.setState({idxCarousel: index});
                                }}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    closeButton: {
        position: 'absolute',
        fontSize: 30,
        textAlign: 'right',
        padding: 8,
        fontFamily: 'roboto',
        color: '#1C3341',
    },
    pageContainer: {
        marginTop: 22,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    logoService: {
        flex: 1,
        alignSelf: 'center',
        aspectRatio: 0.9,
        resizeMode: 'contain'
    },
    logobord: {
        width: '90%',
        height: '90%',
        borderWidth: 0.5,
        borderColor: '#c7ccd1',
        alignSelf: 'center',
        backgroundColor: '#f5f5f5',
        opacity: 0.8
    },
    logoContainer: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        // backgroundColor: 'yellow'
    },
    widgetContainer: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        // backgroundColor: 'blue'
    },
    imageButton: {
        aspectRatio: 0.7,
        resizeMode: 'contain'
    },
    title: {
        marginTop: 20,
        fontSize: 30,
        fontFamily: 'roboto',
        color: "#008773",
        alignSelf: 'center'
    },
    carouselCont: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '90%'
    },
    titleCar: {
        fontSize: 25,
        fontFamily: 'roboto',
        color: "#98cea8",
        alignSelf: 'center'
    },
    descCar: {
        fontSize: 15,
        fontFamily: 'roboto',
        color: "#bcc1c5",
        alignSelf: 'center',
    },
    buttonCar: {
        marginTop: 20,
        alignItems: 'center',
        fontSize: 25,
        fontFamily: 'roboto',
        color: "#fff",
    }
});
