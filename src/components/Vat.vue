<template>
    <div>
        <h1>{{ msg }}</h1>
        <div class="jumbotron">
            <div class="row col input-group mb-4">
                <input v-model.number="valeurHT" type="text" class="form-control w-25" />
                <span class="">€ HT</span>
            </div>
            <div class="row col mb-4">
                Taux : &nbsp;
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        value="0.2"
                        type="radio"
                        name="vat"
                        id="20"
                        checked
                        v-model.number="taux"
                    />
                    <label class="form-check-label" for="20">20 %</label>
                </div>
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        value="0.1"
                        name="vat"
                        id="10"
                        v-model.number="taux"
                    />
                    <label class="form-check-label" for="10">10 %</label>
                </div>
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        value="0.055"
                        name="vat"
                        id="55"
                        v-model.number="taux"
                    />
                    <label class="form-check-label" for="55">55 %</label>
                </div>
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        value="0.021"
                        name="vat"
                        id="21"
                        v-model.number="taux"
                    />
                    <label class="form-check-label" for="21">21 %</label>
                </div>
            </div>
            <div class="row col">
                Montant TTC : &nbsp; <strong>{{ valeurTTC | twoDecimals}} €</strong>
            </div>
            <div class="row col">
                Montant de la TVA : &nbsp; <strong>{{valeurTVA | twoDecimals}} €</strong>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Vat",
    props: {
        msg: String,
    },
    data: function () {
        return {
            valeurHT: 0,
            taux: '0.2'
        };
    },
    computed: {
        valeurTTC: function() {
            return this.valeurHT + this.valeurTVA;
        },
        valeurTVA: function() {
            return this.valeurHT * this.taux;
        }
    },
    filters: {
        twoDecimals: function(value) {
            return parseFloat(value).toFixed(2)
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {
    background-color: rgb(180, 171, 171);
    padding: 2rem;
    margin-top: 2rem;
    margin-bottom: 0px;
    max-width: 100%;
    min-height: 100%;

    background-size: 100%;
    box-shadow: 0px 0px 10px #000;
}
</style>
