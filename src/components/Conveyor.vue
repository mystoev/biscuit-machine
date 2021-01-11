<template>
    <div class="component-root">
        <svg class="svg-conveyor" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 700 70" xml:space="preserve">
            
            <rect x="1" y="1" width="599px" height="6" stroke="#666" fill="#999" stroke-width="2"/>

            <polygon points="621 31, 621 69, 699 69, 699 31, 694 31, 694 64, 626 64, 626 31" stroke="#666" fill="#CCC" stroke-width="2"/>
        </svg>
        <div class="conveyor-controls">
            <ConveyorMotor v-on:rotated="motorRotated" />
            <ConveyorSwitch v-on:switched="switchHandler" />
        </div>
    </div>
</template>

<script>
import ConveyorMotor from './Motor'
import ConveyorSwitch from './Switch'
export default {
    name: 'Conveyor',
    data: function() {
        return {
            
        }
    },
    created: function() {
        console.log("Conveyor created");
    },
    props: {
        motorFrequency: Number
    },
    components: {
        ConveyorMotor,
        ConveyorSwitch
    },
    methods: {
        switchHandler: function(evt) {
            if (evt == "on") {
                ConveyorMotor.methods.on(this, this.motorFrequency);
                this.$emit("conveyorStarted");
            } else {
                ConveyorMotor.methods.off();
                this.$emit("conveyorStopped");
            }
        },
        motorRotated: function() {
            this.$emit("motorRotated");
        }
    }
}
</script>

<style>
    .svg-conveyor {
        display: inline-block;
        width: 700px;
        height: 70px;
    }

    .conveyor-controls {
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
    }
</style>