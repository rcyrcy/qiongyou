<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>  <!-- 接收数据cities -->
        <city-list 
        :cities="cities" 
        :hot="hotCities"
        :letter="letter"
        ></city-list>
        <city-alphabet :cities="cities" @change="handleLettercChange"></city-alphabet>
    </div>
</template>


<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import {getCity} from "@/api/city"
export default {
    name:'City',
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data(){
        return{
            cities:{},
            hotCities:[],
            letter:""
        }
    },
    mounted(){
        getCity().then(res => {
            if(res.ret == true){
                const data = res.data
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
        })
    },
    methods: {
        handleLettercChange(letter){
            this.letter=letter
        }
    },
}
</script>


<style lang="stylus" scoped>

</style>
