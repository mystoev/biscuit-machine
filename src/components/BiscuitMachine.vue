<template>
    <div class="machine-root">
        <div class="conveyor-components">
            <Extruder />
            <Stamper />
            <Oven v-bind:sensorLowLimit="220" v-bind:sensorHighLimit="240" class="oven-position"/>
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
    created: function() {
        window.eventHub.$on("switch-changed", this.switchChanged);
        window.eventHub.$on("oven-ready", this.ovenReady);
        window.eventHub.$on("motor-pulse", this.motorPulse);
        window.eventHub.$on("biscuit-done", this.biscuitDone);
        window.eventHub.$on("oven-start", () => { this.isOvenStopped = false; });
        window.eventHub.$on("oven-stop", () => { this.isOvenStopped = true; });

        this.biscuits.push({ id: Math.random(), state: "raw", position: 0 });
    },
    data: function() {
        return {
            biscuitsDone: 0,
            motorFrequency: 1,
            biscuits: [],
            isStopped: false,
            isPaused: false,
            isOvenStopped: true
        }
    },
    components: {
        Extruder,
        Stamper,
        Oven,
        Biscuit,
        Conveyor,
        Motor,
        MachineSwitch
    },
    methods: {
        startMachine: function() {
            if (this.isStopped) {
                this.isStopped = false;

                if (this.isOvenStopped) {
                    window.eventHub.$emit("oven-start");
                }
                
                return;
            }

            if (this.isPaused) {
                this.isPaused = false;
                window.eventHub.$emit("motor-start", this.motorFrequency);
                return;
            }

            this.isStopped = false;
            window.eventHub.$emit("oven-start");
        },
        pauseMachine: function() {
            this.isPaused = true;
            this.isStopped = false;
            window.eventHub.$emit("motor-stop");
        },
        stopMachine: function() {
            if (this.isPaused) {
                this.isPaused = false;
                window.eventHub.$emit("motor-start", this.motorFrequency);
            }
            
            this.isStopped = true;
        },
        switchChanged: function(evt) {
            if (evt == "on") {
                this.startMachine();
                return;
            }

            if (evt == "pause") {
                this.pauseMachine();
                return;
            }

            if (evt == "off") {
                this.stopMachine();
                return;
            }
        },
        ovenReady: function() {
            window.eventHub.$emit("motor-start", this.motorFrequency);
        },
        motorPulse: function() {
            window.eventHub.$emit("move-biscuits", this.biscuits);
            

            if (!this.isStopped) {
                window.eventHub.$emit("extruder-pulse", this.biscuits);
            } else {
                if(this.biscuits.length == this.biscuits.filter(b => b.position == 8).length) {
                    window.eventHub.$emit("motor-stop");
                    window.eventHub.$emit("oven-stop", true);
                }
            }

            window.eventHub.$emit("stamper-pulse", this.biscuits.filter(b => b.position == 2));
        },
        biscuitDone: function() {
            this.biscuitsDone++;
        }
    }
}
</script>

<style>
    .machine-root {
        position: relative;
        margin: auto;
        width: 700px;
        padding: 20px;
        font-size: 0px;
    }

    .conveyor-components {
        display: flex;
        align-items: baseline;
    }

    .oven-position {
        margin-left: 100px;
    }

    .svg-common {
        display: inline-block;
        width: 100px;
        height: 100px;
    }

    .biscuits-container {
        position:absolute; 
        top: 106px;
    }

    .biscuit-position-0 {
        left: 0px;
        top: -50px;
    }

    .biscuit-position-1 {
        left: 0px;
        top: 0px;
    }

    .biscuit-position-2 {
        left: 100px;
    }

    .biscuit-position-3 {
        left: 200px;
    }

    .biscuit-position-4 {
        left: 300px;
        top: 0px;
    }

    .biscuit-position-5 {
        left: 400px;
    }

    .biscuit-position-6 {
        left: 500px;
    }

    .biscuit-position-7 {
        left: 600px;
        top: 0px;
    }

    .biscuit-position-8 {
        left: 600px;
        top: 62px;
    }

    .conveyor-controls {
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
    }
    
</style>