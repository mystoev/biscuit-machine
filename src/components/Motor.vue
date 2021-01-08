<template>
    <div class="component-root">
        <img class="svg-motor" src="../assets/motor.svg"/>
    </div>
</template>

<script>
export default {
    name: 'ConveyorMotor',
    props: {
        title: String
    }
}
</script>

<style>
    .svg-motor {
        display: inline-block;
        width: 80px;
        height: 80px;
    }
</style>