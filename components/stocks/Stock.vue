<template>
    <v-card class="card">
        <v-card-text class="d-flex">
            <div class="stock-name">{{ stock.name }}</div>
            <div class="ml-1">(Price: {{ stock.price }})</div>
        </v-card-text>
        <v-card-actions>
            <div class="card-actions">
                <v-text-field 
                    type="number" 
                    placeholder="Quantity"  
                    required
                    v-model="quantity" 
                    :class="{danger: insufficientFunds}"
                    ></v-text-field>
                <v-btn class="ml-2 mt-4" 
                    outlined 
                    rounded
                    small
                    @click="buyStock"
                    :disabled="insufficientFunds || quantity < 0"
                    >{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}</v-btn>
            </div>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0 
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds;
        },
        insufficientFunds() {
            return this.quantity * this.stock.price > this.funds;
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            this.$store.dispatch('buyStock', order);
            this.quantity = 0;
        }
    }
}
</script>

<style scoped>
.danger {
    border: 1px solid red;
}

.card {
    width: 400px;
}

.v-card__text {
    border-bottom: 1px solid #000;
    background: #28a7455c;
    color: #4E7643;
}

.v-card__subtitle, .v-card__text, .v-card__title {
    padding: 12px;
}

.card-actions {   
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.stock-name {
    font-weight: 700;
    font-size: 16px;
}
</style>