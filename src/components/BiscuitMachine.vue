<template>
    <div class="machine-root">
        <Extruder />
        <Stamper />
        <Oven />
        <Conveyor />
    </div>
</template>

<script>
import Conveyor from './Conveyor'
import Extruder from './Extruder'
import Stamper from './Stamper'
import Oven from './Oven'

export default {
    name: 'BiscuitMachine',
    props: {
        title: String
    },
    components: {
        Conveyor,
        Extruder,
        Stamper,
        Oven
    }
}
</script>

<style>
    .machine-root {
        margin: auto;
        width: 500px;
        padding: 20px;
        font-size: 0px;
    }

    .svg-common {
        display: inline-block;
        width: 100px;
        height: 100px;
    }
</style>