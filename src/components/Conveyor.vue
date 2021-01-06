<template>
    <div>
        <img class="svg-common" src="../assets/conveyor.svg"/>
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

</style>