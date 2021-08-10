import { Text, View, Image, StyleSheet, ScrollView, Animated, Button } from 'react-native'
import React, { Component, useState, useEffect } from 'react'
import { SliderPicker } from 'react-native-slider-picker';
import Buildoverview from './buildoverview';
import { setLevel, setClasse } from '../redux/actions/actions';
import { useDispatch } from 'react-redux';


const styles = StyleSheet.create(() => {
    image = {
        width: 150, height: 100, marginTop: 20, opacity: 0.5, zIndex: 2, position: 'absolute', top: 10, right: 10
    }
})
const BuildView = () => {
    const dispatch = useDispatch()
    const [display, setdisplay] = useState(false)
    const [Img, setImg] = useState('https://static.ankama.com/wakfu/ng/modules/mmorpg/encyclopedia/breeds/assets/illu/1.jpg')
    const [Imgminus, setImgminus] = useState('https://static.ankama.com/wakfu/ng/modules/mmorpg/encyclopedia/breeds/assets/illu/19.jpg')
    const [Imgplus, setImgplus] = useState('https://static.ankama.com/wakfu/ng/modules/mmorpg/encyclopedia/breeds/assets/illu/2.jpg')
    const [ref, setref] = useState(null)
    const [level, setlevel] = useState(0)
    const ImgList = [
        'https://static.ankama.com/wakfu/ng/modules/mmorpg/encyclopedia/breeds/assets/illu/1.jpg',//0
        'https://static.ankama.com/wakfu/ng/modules/mmorpg/encyclopedia/breeds/assets/illu/2.jpg',//1
        'https://static.ankama.com/wakfu/ng/modules/mmorpg/encyclopedia/breeds/assets/illu/3.jpg',//2
        'https://static.ankama.com/wakfu/ng/modules/mmorpg/encyclopedia/breeds/assets/illu/4.jpg',//3
        'https://static.ankama.com/wakfu/ng/modules/mmorpg/encyclopedia/breeds/assets/illu/5.jpg',//4
        'https://static.ankama.com/wakfu/ng/modules/mmorpg/encyclopedia/breeds/assets/illu/6.jpg',//5
        'https://static.ankama.com/wakfu/ng/modules/mmorpg/encyclopedia/breeds/assets/illu/7.jpg',//6
        'https://static.ankama.com/wakfu/ng/modules/mmorpg/encyclopedia/breeds/assets/illu/8.jpg',//7
        'https://static.ankama.com/wakfu/ng/modules/mmorpg/encyclopedia/breeds/assets/illu/9.jpg',//8
        'https://static.ankama.com/wakfu/ng/modules/mmorpg/encyclopedia/breeds/assets/illu/10.jpg',//9
        'https://static.ankama.com/wakfu/ng/modules/mmorpg/encyclopedia/breeds/assets/illu/11.jpg',//10
        'https://static.ankama.com/wakfu/ng/modules/mmorpg/encyclopedia/breeds/assets/illu/12.jpg',//11
        'https://static.ankama.com/wakfu/ng/modules/mmorpg/encyclopedia/breeds/assets/illu/13.jpg',//12
        'https://static.ankama.com/wakfu/ng/modules/mmorpg/encyclopedia/breeds/assets/illu/14.jpg',//13
        'https://static.ankama.com/wakfu/ng/modules/mmorpg/encyclopedia/breeds/assets/illu/15.jpg',//14
        'https://static.ankama.com/wakfu/ng/modules/mmorpg/encyclopedia/breeds/assets/illu/16.jpg',//15
        'https://static.ankama.com/wakfu/ng/modules/mmorpg/encyclopedia/breeds/assets/illu/18.jpg',//16
        'https://static.ankama.com/wakfu/ng/modules/mmorpg/encyclopedia/breeds/assets/illu/19.jpg'//17
    ]
    const [classeName, setclasseName] = useState('Feca')
    const [position, setposition] = useState(1)
    const [ListClasse, setListClasse] = useState(['Feca', 'Osamodas', 'Enutrof', 'Sram', 'Xelor', 'Ecaflip', 'Eniripsa', 'Iop', 'Cra', 'Sadida', 'Sacrieur', 'Pandawa', 'Roublard', 'Zobal', 'Ouginak', 'Steamer', 'Eliotrope', 'Huppermage',])
    function minus(position, scale) {
        let result = position > 0 ? position - scale : 17
        return result
    }
    function plus(position, scale) {

        let result = position === 17 - (scale - 1) ? 0 : position + scale

        return result
    }
    const classe = [
        '../images/modèles/feca',
        '../images/modèles/osa',
        '../images/modèles/enu',
        '../images/modèles/sram',
        '../images/modèles/xel',
        '../images/modèles/eca',
        '../images/modèles/eni',
        '../images/modèles/iop',
        '../images/modèles/cra',
        '../images/modèles/sadida',
        '../images/modèles/sacrieur',
        '../images/modèles/panda',
        '../images/modèles/roub',
        '../images/modèles/zob',
        '../images/modèles/ougi',
        '../images/modèles/steamer',
        '../images/modèles/elio',
        '../images/modèles/hupper']

useEffect(() => {
    console.log('Position: ', position)
    if (ref !== null) {
        setTimeout(() => {
            ref.scrollTo({ x: 50, y: 0, animated: false })
        }, 250);
    }

}, [Img])
return (
    <View >
        {display ? <Buildoverview /> :
            <View style={{ flex: 1, backgroundColor: '#191b24', paddingTop: 20, alignItems: 'center' }}>
                <View style={{ height: 200 }}>
                    <Animated.ScrollView contentContainerStyle={{ alignItems: 'center' }} ref={(ref) => setref(ref)} onScroll={(event) => {
                        console.log('Test', event.nativeEvent.contentOffset.x)
                        if (event.nativeEvent.contentOffset.x < 20) {
                            if (position === 0) {
                                setposition(17)
                            } else {
                                setposition(position - 1)
                            }
                            let nbrminus = minus(position, 1)
                            let nbrplus = plus(position, 1)
                            setclasseName(ListClasse[position])
                            setImg(ImgList[position])
                            setImgplus(ImgList[nbrplus])
                            setImgminus(ImgList[nbrminus])
             
                        } else if (event.nativeEvent.contentOffset.x > 80) {
                            if (position === 17) {
                                setposition(0)
                            } else {
                                setposition(position + 1)
                            }
                            let nbrminus = minus(position, 1)
                            let nbrplus = plus(position, 1)
                            setclasseName(ListClasse[position])
                            setImg(ImgList[position])
                            setImgplus(ImgList[nbrplus])
                            setImgminus(ImgList[nbrminus])
                
                        }
                    }} decelerationRate='fast' horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Image style={{ width: 150, height: 100, opacity: 0.7, zIndex: 2, borderRadius: 20, marginRight: -20 }} source={{ uri: Imgminus }} />
                        <Image style={{ width: 250, height: 150, zIndex: 3, borderWidth: 2, borderColor: 'white', borderRadius: 20, marginTop: 15 }} source={{ uri: Img }} />
                        <Image style={{ width: 150, height: 100, opacity: 0.7, zIndex: 2, borderRadius: 20, marginLeft: -20 }} source={{ uri: Imgplus }} />
                    </Animated.ScrollView></View>
                <Text style={{ color: 'white', fontSize: 40 }}> {classeName}</Text>
                <SliderPicker minLabel={''} midLabel={''} maxLabel={''} maxValue={215}
                    callback={position => {
                        let tranchelevel = 0
                        switch (true) {
                            case position < 20: tranchelevel = position
                                break;
                            case position < 35: tranchelevel = 20
                                break;
                            case position < 50: tranchelevel = 35
                                break;
                            case position < 65: tranchelevel = 50
                                break;
                            case position < 80: tranchelevel = 65
                                break;
                            case position < 95: tranchelevel = 80
                                break;
                            case position < 110: tranchelevel = 95
                                break;
                            case position < 125: tranchelevel = 110
                                break;
                            case position < 140: tranchelevel = 125
                                break;
                            case position < 155: tranchelevel = 140
                                break;
                            case position < 170: tranchelevel = 155
                                break;

                            case position < 185: tranchelevel = 170
                                break;
                            case position < 200: tranchelevel = 185
                                break;
                            case position < 215: tranchelevel = 200
                                break;
                            case position === 215: tranchelevel = 215
                                break;
                        }
                        setlevel((tranchelevel))
                    }}
                    defaultValue={0}
                    labelFontColor={"white"}
                    labelFontWeight={'600'}
                    showFill={true}
                    fillColor={'green'}
                    labelFontWeight={'bold'}
                    showNumberScale={true}
                    showSeparatorScale={true}
                    buttonBackgroundColor={'#fff'}
                    buttonBorderColor={"#6c7682"}
                    buttonBorderWidth={1}
                    scaleNumberFontWeight={'300'}
                    buttonDimensionsPercentage={6}
                    heightPercentage={1}
                    widthPercentage={80}
                />
                <Text style={{ color: 'white', fontSize: 40 }}>{level}</Text>
                <View style={{ height: 50, width: 200 }}>
                    <Button color='#d47b6a' title='Start' onPress={() => {
                        dispatch(setLevel(level))
                        dispatch(setClasse(classeName))
                        setdisplay(true)
                    }} />
                </View>
            </View>}


    </View>
)

}
export default BuildView
