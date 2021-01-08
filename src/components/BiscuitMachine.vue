<template>
    <div class="machine-root">
        <div class="conveyor-top">
            <Extruder />
            <Stamper />
            <Oven class="oven-position"/>
        </div>
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
        width: 700px;
        padding: 20px;
        font-size: 0px;
    }

    .conveyor-top {
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
</style>