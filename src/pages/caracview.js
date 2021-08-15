import React, { Component, useState, useEffect } from 'react'
import { Text, View, Image, ImageBackground, ScrollView } from 'react-native'

const CaracView = () => {
    const Stat = ({ image, titre, value }) => {
        const length = value.toString().length
        return (
            <View style={{ flexDirection: 'row', borderColor: '#d47b6a',borderWidth:2,borderRadius:7,alignItems:'center' }}>

                <Image style={{}}source={image} />
                <Text style={{ color: 'white', paddingRight: 20 - (2 * length),fontSize:15  }}>{titre}</Text>
                <Text style={{ color: 'white', paddingRight: 10,fontSize:15 }}>{value}</Text>
            </View>
        )
    }
    const StatCombat = ({ image, titre, value }) => {
        return (
            <View style={{ flexDirection: 'row', borderColor: '#d47b6a',borderWidth:2,borderRadius:7, padding: 3,width:190,justifyContent:'space-between',alignItems:'center' }}>
                <View style={{flexDirection:'row'}}>
                <Image style={{marginRight:6,resizeMode:'contain',width:20}}source={image} />
                <Text style={{ color: 'white',textAlign:'left'}}>{titre}</Text></View>
                <Text style={{ color: 'white',textAlign:'right'}}>{value}</Text>
            </View>
        )
    }
    const Maitrise = ({élément,degat,resistance,value1,value2})=>{
        const resistanceP = (1-Math.pow(0.8,value2/100))*100-((1-Math.pow(0.8,value2/100))*100)%1
        return(
        <View style={{ flexDirection: 'row', borderColor: '#d47b6a',borderWidth:2,borderRadius:7, padding: 3, height:35,width:190,alignItems:'center',flexWrap:'nowrap'}}>
        <Image style={{resizeMode:'contain',width:25}} source={élément} />
        <Image style={{resizeMode:'contain',width:25}}source={degat}/>
        <Text style={{ color: 'white',}}>{value1}</Text>
        <Image style={{resizeMode:'contain',width:25}}source={resistance}/>
        <Text style={{ color: 'white', }}>{resistanceP}%({value2})</Text>
    </View>)
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#191b24' }}>
            <ImageBackground style={{ width: 420, height: 750, marginTop: 10, marginRight: 7,marginTop:5 }} source={require('../images/caracs/body2.png')}>
                <View style={{ width: 400, marginHorizontal: 3, marginTop: 34, flexDirection: 'row', justifyContent: 'space-around' }} >
                    <Stat image={require('../images/caracs/hp.webp')} titre='PV' value={18760} />
                    <Stat image={require('../images/caracs/pa.webp')} titre='PA' value={10} />
                    <Stat image={require('../images/caracs/pm.webp')} titre='PM' value={8} />
                    <Stat image={require('../images/caracs/pw.webp')} titre='PW' value={8} />
                </View>
                <View style={{flexWrap:'wrap',flexDirection:'row',width:390,marginLeft:8,marginTop:42,justifyContent:'space-around'}}>
                    <Maitrise élément={require('../images/caracs/water.png')} degat={require('../images/caracs/h-mastery.png')} resistance={require('../images/caracs/h-resistance.png')} value1={260} value2={650}/>
                    <Maitrise élément={require('../images/caracs/wind.png')} degat={require('../images/caracs/h-mastery.png')} resistance={require('../images/caracs/h-resistance.png')} value1={2252} value2={623}/>
                    <Maitrise élément={require('../images/caracs/fire.png')} degat={require('../images/caracs/h-mastery.png')} resistance={require('../images/caracs/h-resistance.png')} value1={2252} value2={680}/>
                    <Maitrise élément={require('../images/caracs/earth.png')} degat={require('../images/caracs/h-mastery.png')} resistance={require('../images/caracs/h-resistance.png')} value1={1760} value2={590}/>
                </View>
                <View style={{flexWrap:'wrap',flexDirection:'row',width:390,marginLeft:7,marginTop:35,justifyContent:'space-between'}}>
                <StatCombat image={require('../images/caracs/damage.webp')} titre='Dommages infligés' value={60} />
                <StatCombat image={require('../images/caracs/healing_done.webp')} titre='Soin réalisés' value={-20} />
                <StatCombat image={require('../images/caracs/criticalhit.webp')} titre='Coup critique' value={100} />
                <StatCombat image={require('../images/caracs/block.webp')} titre='Parade' value={40} />
                <StatCombat image={require('../images/caracs/initiative.webp')} titre='Initiative' value={10} />
                <StatCombat image={require('../images/caracs/range.webp')} titre='PO' value={-1} />
                <StatCombat image={require('../images/caracs/dodge.webp')} titre='Esquive' value={1250} />
                <StatCombat image={require('../images/caracs/tackle.webp')} titre='Tacle' value={501} />
                <StatCombat image={require('../images/caracs/wisdom.webp')} titre='Sagesse' value={50} />
                <StatCombat image={require('../images/caracs/prospection.webp')} titre='Prospection' value={40} />
                <StatCombat image={require('../images/caracs/control.webp')} titre='Controle' value={1} />
                <StatCombat image={require('../images/caracs/kit_skill.webp')} titre='Art du Barda' value={0} />
                
                </View >
                <View style={{marginLeft:7}}>
                <StatCombat image={require('../images/caracs/will.webp')} titre='Volonté' value={0} /></View>
                <View style={{flexWrap:'wrap',flexDirection:'row',width:390,marginLeft:7,marginTop:37,justifyContent:'space-between'}}>
                <StatCombat image={require('../images/caracs/critical_mastery.webp')} titre='Maitrise Critique' value={657} />
                <StatCombat image={require('../images/caracs/critical_resistance.webp')} titre='Resistance Critique' value={12} />
                <StatCombat image={require('../images/caracs/rear_mastery.webp')} titre='Maitrise Dos' value={40} />
                <StatCombat image={require('../images/caracs/rear_resistance.webp')} titre='Resistance Dos' value={12} />
                <StatCombat image={require('../images/caracs/melee_mastery.webp')} titre='Maitrise Melee' value={1446} />
                <StatCombat image={require('../images/caracs/range_mastery.webp')} titre='Maitrise Distance' value={40} />
                <StatCombat image={require('../images/caracs/singletarget_mastery.webp')} titre='Maitrise Monocible' value={1257} />
                <StatCombat image={require('../images/caracs/area_mastery.webp')} titre='Maitrise Zone' value={40} />
                <StatCombat image={require('../images/caracs/healing_done.webp')} titre='Maitrise Soin' value={40} />
                <StatCombat image={require('../images/caracs/berserk_mastery.webp')} titre='Maitrise Berserk' value={40} />
                <StatCombat image={require('../images/caracs/given_armor.webp')} titre='% Armure donnée' value={0} />
                <StatCombat image={require('../images/caracs/received_armor.webp')} titre='% Armure reçue' value={0} />
                </View>
            </ImageBackground>
        </ScrollView>
    )
}
export default CaracView