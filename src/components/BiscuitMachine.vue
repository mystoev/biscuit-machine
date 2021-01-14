<template>
    <div class="machine-root">
        <div class="conveyor-components">
            <Extruder />
            <Stamper />
            <Oven v-bind:heaterSensor="{ low: 220, high: 240 }" class="oven-position"/>
        </div>

        <div class="biscuits-container">
            <Biscuit v-for="item of biscuits" :key="item.id" 
                v-bind:class="'initial-biscuit biscuit-position-' + item.position"
                v-bind:state="item.state" 
                />
        </div>

        <Conveyor v-bind:positions="8" />

        <div class="conveyor-controls">
            <Motor />
            <MachineSwitch />
        </div>
        <p style="font-size: 14px;">Biscuits done: {{biscuitsDone}}</p>
    </div>
</template>

<script>
import Conveyor from './Conveyor'
import Extruder from './Extruder'
import Stamper from './Stamper'
import Oven from './Oven'
import Biscuit from './Biscuit'
import Motor from './Motor'
import MachineSwitch from './MachineSwitch'

export default {
    name: 'BiscuitMachine',
    components: {
        Extruder,
        Stamper,
        Oven,
        Biscuit,
        Conveyor,
        Motor,
        MachineSwitch
    },
    created: function() {
        window.eventHub.$on("switch-changed", (state) => { this.machineState = state; });
        window.eventHub.$on("oven-start", () => { this.ovenState = "on"; });
        window.eventHub.$on("oven-not-ready", () => { this.ovenState = "off" });
        window.eventHub.$on("oven-ready", () => { this.ovenState = "ready"; });
        window.eventHub.$on("biscuit-done", () => { this.biscuitsDone++; });

        window.eventHub.$on("motor-pulse", this.motorPulse);
    },
    data: function() {
        return {
            biscuitsDone: 0,
            biscuits: [],
            machineState: "off", //on, pause
            ovenState: "off", //on, ready
        }
    },
    watch: {
        machineState: function(newState, oldState) {
            if (newState == "on") {
                this.startMachine();
                return;
            }

            if (newState == "pause") {
                this.pauseMachine();
                return;
            }

            if (newState == "off") {
                this.stopMachine(oldState);
                return;
            }
        },
        ovenState: function(newState) {
            if (newState == "ready" && this.machineState != "pause") {
                window.eventHub.$emit("motor-start");
            }
        }
    },
    methods: {
        startMachine: function() {
            if (this.ovenState == "ready") {
                window.eventHub.$emit("motor-start");

            } else if (this.ovenState == "off") {
                window.eventHub.$emit("oven-start");
            }
        },
        pauseMachine: function() {
            window.eventHub.$emit("motor-stop");
        },
        stopMachine: function(oldState) {
            if (oldState == "pause" && this.ovenState == "ready") {
                window.eventHub.$emit("motor-start");
            }
        },
        motorPulse: function() {
            
            window.eventHub.$emit("process-biscuits", this.biscuits);
            window.eventHub.$emit("stamper-pulse", this.biscuits.filter(b => b.position == 2));

            if (this.machineState != "off") {
                window.eventHub.$emit("extruder-pulse", this.biscuits);

            } else if (this.biscuits.length == this.biscuits.filter(b => b.position == 8).length) {
                window.eventHub.$emit("motor-stop");
                window.eventHub.$emit("oven-stop");
            }
        }
    }
}
</script>

<style>
    .machine-root {
        position: relative;
        margin: auto;
        width: 700px;
        font-size: 0px;
    }

    .conveyor-components {
        display: flex;
        align-items: baseline;
    }

    .oven-position {
        margin-left: 100px;
    }

    .biscuits-container {
        z-index: -1;
        position:absolute; 
        top: 106px;
    }

    .biscuit-position-0 {
        left: 0px;
        top: -75px;
    }

    .biscuit-position-1 {
        left: 0px;
        top: -20px;
    }

    .biscuit-position-2 {
        left: 100px;
        top: -20px;
    }

    .biscuit-position-3 {
        left: 200px;
        top: -20px;
    }

    .biscuit-position-4 {
        left: 300px;
        top: -20px;
    }

    .biscuit-position-5 {
        left: 400px;
        top: -20px;
    }

    .biscuit-position-6 {
        left: 500px;
        top: -20px;
    }

    .biscuit-position-7 {
        left: 600px;
        top: -20px;
    }

    .biscuit-position-8 {
        left: 600px;
        top: 42px;
    }

    .conveyor-controls {
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
    }
    
</style>