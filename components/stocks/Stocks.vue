<template>
    <v-container>
        <v-row>
            <v-col class="stock" cols='12' xs='12' sm='12' md='6' lg='4'>
                <app-stock class="mb-3" v-for="stock in stocks" :key="stock" :stock="stock"></app-stock>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Stock from './Stock.vue'

export default {
    components: {
        appStock: Stock
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    }
}
</script>

<style scoped>
.stock {
    padding: 0 30px;
}
</style>