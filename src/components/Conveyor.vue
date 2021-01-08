<template>
    <div>
        <img class="svg-conveyor" src="../assets/conveyor.svg"/>
        <p>{{title}}</p>

        <Motor title="Motor"/>
    </div>
</template>

<script>
import Motor from './Motor'
export default {
    name: 'Conveyor',
    props: {
        title: String
    },
    components: {
        Motor
    }
}
</script>

<style>
    .svg-conveyor {
        display: inline-block;
        width: 500px;
        height: 10px;
    }
</style>