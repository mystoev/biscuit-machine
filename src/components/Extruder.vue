<template>
    <div class="component-root">
        <svg class="svg-common" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 100 100" xml:space="preserve">

            <polygon points="26 1, 74 1, 57 58, 44 58" stroke="#666" fill="#CCC" stroke-width="2"/>
            <polygon points="26 1, 74 1, 63 48, 37 48" stroke="#666" fill="#CCC" stroke-width="2"/>
            <polygon points="30 4, 70 4, 60 45, 40 45" fill="#D89F39"/>
                
        </svg>
    </div>
</template>

<script>
export default {
    name: 'Extruder',
    created: function() {
        window.eventHub.$on("extruder-pulse", this.pulse);
    },
    methods: {
        pulse: function(biscuits) {
            console.log("extruder pulse - TODO: display animation");
            biscuits.push({ id: Math.random(), isCooking: false, isDone: false, state: "raw", position: 1 });
        }
    }
}
</script>

<style>

</style>