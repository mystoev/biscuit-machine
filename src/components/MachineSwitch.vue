<template>
    <div class="component-root">
        <svg class="svg-common" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 100 100" xml:space="preserve">

            <g>
                <rect x="48" y="10" width="4" height="75" fill="#CCC" stroke-width="2" stroke="#666"/>
                <polygon points="22 42, 78 42, 78 98, 22 98" fill="#CCC" stroke-width="2" stroke="#666"/>
                <circle cx="50" cy="8" r="7" fill="#CCC" stroke-width="2" stroke="#666"/>
            </g>
            <g>
                <text v-on:click="switching('on')" x="60" y="85" font-size="11px" fill="#333">On</text>
                <text v-on:click="switching('off')" x="25" y="85" font-size="11px" fill="#333">Off</text>
                <text v-on:click="switching('pause')" x="35" y="56" font-size="11px" fill="#333">Paused</text>
            </g>
        
        </svg>
    </div>
</template>

<script>
export default {
    name: 'MachineSwitch',
    data: function() {
        return {
            state: "off"
        }
    },
    props: {
        stateProp: String
    },
    methods: {
        switching: function(newState) {
            if (this.state == newState) {
                return;
            }

            if (newState == "pause" && this.state == "off") {
                return;
            }

            this.state = newState;
            window.eventHub.$emit("switch-changed", this.state);
        }
    }
}

</script>

<style>

</style>