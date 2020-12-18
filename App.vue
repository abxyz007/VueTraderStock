<template>
    <div id="wrap">
        <v-container>
            <v-row>
                <app-header></app-header>
            </v-row>
        </v-container>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
    components: {
        appHeader: Header,
    },
    created() {
        this.$store.dispatch('initStocks');
    }
}
</script>

<style scoped>

</style>