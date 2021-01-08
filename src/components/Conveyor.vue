<template>
    <div class="component-root">
        <svg class="svg-conveyor" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 700 70" xml:space="preserve">
            
            <rect v-on:click="log" x="1" y="1" width="599px" height="6" stroke="#666" fill="#999" stroke-width="2"/>

            <polygon points="621 31, 621 69, 699 69, 699 31, 694 31, 694 64, 626 64, 626 31" stroke="#666" fill="#CCC" stroke-width="2"/>
        </svg>
        <div class="conveyor-controls">
            <ConveyorMotor />
            <ConveyorSwitch v-on:switched="log" />
        </div>
    </div>
</template>

<script>
import ConveyorMotor from './Motor'
import ConveyorSwitch from './Switch'
export default {
    name: 'Conveyor',
    props: {
        title: String
    },
    components: {
        ConveyorMotor,
        ConveyorSwitch
    },
    methods: {
        log: function(evt) {
            console.log(evt);
            if (evt == "on") {
                //motor start
            } else {
                //motor stop
            }
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