<template>
    <div class="component-root">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
            class="svg-common" viewBox="0 0 100 100">

            <polygon class="extruder-part stroke fill" points="26 1, 74 1, 57 58, 44 58" />
            <polygon class="extruder-part stroke fill" points="26 1, 74 1, 63 48, 37 48" />
            <polygon class="extruder-liquid" points="30 4, 70 4, 60 45, 40 45"/>
            
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
            var newBiscuit = { 
                id: Math.random(), 
                state: "raw", 
                position: 0 
            };

            biscuits.push(newBiscuit);
        }
    }
}
</script>

<style>
    .extruder-liquid {
        fill: #D89F39;
    }
</style>