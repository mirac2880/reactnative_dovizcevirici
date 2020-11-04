import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default class Header extends Component {
    render() {
        const {header,headertext}=styles;
        return (
            <View style={header}>
                <Text style={headertext}>{this.props.headertext}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height:80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#788B91'
    },
    headertext: {
        textAlign: 'center',
        color: '#fff',
        fontSize:20
    }
});