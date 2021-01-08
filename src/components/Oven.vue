<template>
    <div class="component-root">
        <img class="svg-oven" src="../assets/oven.svg"/>
    </div>
</template>

<script>
export default {
    name: 'Oven',
    props: {
        title: String
    }
}
</script>

<style>
    .svg-oven {
        display: inline-block;
        width: 160px;
        height: 50px;
    }
</style>