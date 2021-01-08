<template>
    <div class="component-root">
        <img class="svg-conveyor" src="../assets/conveyor.svg"/>
        <div class="conveyor-controls">
            <ConveyorMotor />
            <ConveyorSwitch />
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
    }
}
</script>

<style>
    .svg-conveyor {
        display: inline-block;
        width: 500px;
        height: 8px;
    }

    .conveyor-controls {
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
    }
</style>