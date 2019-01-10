<template>
    <div id='BaseView'>
        <MapView v-on:panretMessage="messageLog" ref="map"/>
    </div>
</template>
<script>
import MapView from './MapView.vue'


export default {
    name: 'mapview',
    data: function () {
        return {
            selectLonLat: null
        }
    },
    components: {
        MapView,
    },
    methods: {
        messageLog() {
            console.log("parent");
            console.log(this.selectLonLat)
        }
    },
    mounted() {
        this.$refs.map.initialize()
    }
}
</script>

<style scoped>

#BaseView {
    width: 100vw;
    height: 100vh;
}
</style>