<template>
    <v-app-bar color="deep-purple accent-4" dense light>
        <v-toolbar-title>
            <router-link to="/" tag="v-btn"><a class="title-link">Stock Trader</a></router-link>
        </v-toolbar-title>
        <div class="ml-4">
            <router-link to="/portfolio" tag="v-btn" class="mx-3"><a class="v-link">Portfolio</a></router-link>
            <router-link to="/stocks" tag="v-btn" class="mx-3"><a class="v-link">Stocks</a></router-link>
        </div>
      
        <v-spacer></v-spacer>
        <router-link to="/" tag="v-btn" class="mx-3"><a class="v-link" @click="endDay">End Day</a></router-link>
        
        <router-link to="/" tag="v-btn" class="mx-3"><a class="v-link" @click="saveData">Save Data</a></router-link>
        <router-link to="/" tag="v-btn" class="mx-3"><a class="v-link" @click="loadData">Load Data</a></router-link>
        
        <router-link to="/" tag="v-btn" class="v-link mx-3"><span>Funds: {{ funds | currency }}</span></router-link>
    </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    },
    methods: {
        ...mapActions({
            randomizeStocks: 'randomizeStocks',
            fetchData: 'loadData'
        }),
        endDay() {
            this.randomizeStocks();
        },
        saveData() {
            const data = {
                funds: this.$store.getters.funds,
                stockPortfolio: this.$store.getters.stockPortfolio,
                stocks: this.$store.getters.stocks
            };
            this.$http.put('data.json', data);
        },
        loadData() {
            this.fetchData(); 
        }
    }
}
</script>

<style scoped>
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
    box-shadow: none;
    border: 1px solid #E9E9E9;
    border-radius: 3px;
}

.title-link {
    color: #868388;
}

.v-link {
    color: #96989D;
}

.title-link:hover, .v-link:hover {
    text-decoration: none;
    color: #868388fa;
}
</style>