<template>
    <div class="container" id="app">
        <div class="row justify-content-center text-center">
            <div class="col-6">
                <img alt="Vue logo" src="./assets/tva.png" class="w-50 mb-4" />
                <Vat msg="Caculate VAT" />
            </div>
        </div>
    </div>
</template>

<script>
import Vat from "./components/Vat.vue";

export default {
    name: "App",
    components: {
        Vat,
    },
};
</script>

<style>
body {
    padding-top: 2rem;
}
</style>
