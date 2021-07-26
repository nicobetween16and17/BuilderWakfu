import React, { Component } from 'react';
import { Text, } from 'react-native';
 const API = API = 'https://wakfu.cdn.ankama.com/gamedata/'
export function APIitem(element){
    const url = API + '1.72.1.181678/'+element
    console.log(url)
    return fetch(url)
        .then((response)=>response.json())
        .catch((error)=>console.log((error)))
}