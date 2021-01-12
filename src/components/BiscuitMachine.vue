<template>
    <div class="machine-root">
        <div class="conveyor-components">
            <Extruder />
            <Stamper />
            <Oven v-bind:sensorLowLimit="220" v-bind:sensorHighLimit="240" class="oven-position"/>
        </div>

        <div class="biscuits-container">
            <Biscuit v-for="item of biscuits" :key="item.id" 
                v-bind:class="'biscuit-position-' + item.position"
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
    },
    data: function() {
        return {
            biscuitsDone: 0,
            motorFrequency: 1,
            biscuits: [],
            isStopped: false
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
        switchChanged: function(evt) {
            if (evt == "on") {
                this.isStopped = false;
                window.eventHub.$emit("oven-start");
                return;
            }

            if (evt == "pause") {
                window.eventHub.$emit("motor-stop");
                return;
            }

            if (evt == "off") {
                this.isStopped = true;
                //don't do this - see last requirement
                // window.eventHub.$emit("motor-stop");
                window.eventHub.$emit("oven-stop", true);
                return;
            }
        },
        ovenReady: function() {
            window.eventHub.$emit("motor-start", this.motorFrequency);
        },
        motorPulse: function() {

            if (this.isStopped) {
                window.eventHub.$emit("move-biscuits", this.biscuits);

                this.biscuits.forEach(b => {
                    if (b.position == 2) {
                        b.state = "formed";
                    }

                    if (b.position == 4) {
                        b.state = "cooking";
                    }

                    if (b.position == 6) {
                        b.state = "done";
                    }
                });

                if(this.biscuits.length == this.biscuits.filter(b => b.position == 8).length) {
                    window.eventHub.$emit("motor-stop");
                }

                return;
            }

            if (this.biscuits.length == 0) {
                window.eventHub.$emit("extruder-pulse", this.biscuits);
                return;
            }
            
            window.eventHub.$emit("move-biscuits", this.biscuits);
            window.eventHub.$emit("extruder-pulse", this.biscuits);

            this.biscuits.forEach(b => {
                if (b.position == 2) {
                    b.state = "formed";
                }

                if (b.position == 4) {
                    b.state = "enteredOven";
                }

                if (b.position == 5) {
                    b.state = "cooking";
                }

                if (b.position == 6) {
                    b.state = "done";
                }
            });
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
        top: 110px;
    }

    .biscuit-position-0 {

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

    /* .fade-in {
        opacity: 1;
        animation-name: fadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: 0.5s;
    }

    @keyframes fadeInOpacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    } */
</style>