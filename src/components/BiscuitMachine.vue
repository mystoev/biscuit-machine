<template>
    <div>
        <MachineSwitch title="Switch"/>
        <Extruder title="Extruder"/>
        <Stamper title="Stamper"/>
        <Oven title="Oven"/>
        <Conveyor title="Conveyor"/>
    </div>
</template>

<script>
import Conveyor from './Conveyor'
import MachineSwitch from './Switch'
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
        MachineSwitch,
        Extruder,
        Stamper,
        Oven
    }
}
</script>

<style>
    .svg-common {
        width: 100px;
        height: 100px;
    }
</style>