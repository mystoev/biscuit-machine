<template>
    <div>
        <img class="svg-motor" src="../assets/motor.svg"/>
        <p>{{title}}</p>
    </div>
</template>

<script>
export default {
    name: 'Motor',
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