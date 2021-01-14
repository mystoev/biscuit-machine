<template>
    <div class="component-root">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
            class="svg-common" viewBox="0 0 100 100">

            <rect v-if="state == 'pause'" class="switch-handle-bar stroke fill" x="48" y="25" width="4" height="75" />
            <circle v-if="state == 'pause'" class="switch-handle stroke fill" cx="50" cy="25" r="7"/>

            <rect v-if="state == 'on'" class="switch-handle-bar stroke fill" x="48" y="80" width="40" height="4" />
            <circle v-if="state == 'on'" class="switch-handle stroke fill" cx="92" cy="82" r="7"/>

            <rect v-if="state == 'off'" class="switch-handle-bar stroke fill" x="6" y="80" width="40" height="4" />
            <circle v-if="state == 'off'" class="switch-handle stroke fill" cx="8" cy="82" r="7"/>
            
            <path class="switch-body stroke fill" d="M50,39 h20 a10,10 0 0 1 10,10 v50 h-60 v-50 a10,10 0 0 1 10,-10 z" />

            <text class="switch-text" v-bind:fill="fillText('on')" v-on:click="switching('on')" x="58" y="86">On</text>
            <text class="switch-text" v-bind:fill="fillText('off')" v-on:click="switching('off')" x="25" y="86">Off</text>
            <text class="switch-text" v-bind:fill="fillText('pause')" v-on:click="switching('pause')" x="31" y="56">Paused</text>
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
        fillText: function(state) {
            if (this.state == state) {
                return "white";
            }

            return "#333";
        },
        switching: function(newState) {
            if (this.state == newState) {
                return;
            }

            this.state = newState;
            window.eventHub.$emit("switch-changed", this.state);
        }
    }
}

</script>

<style>
    .switch-text {
        font-size: 11px;
    }

    .switch-text:hover {
        fill: #6D9EEB;
    }
</style>