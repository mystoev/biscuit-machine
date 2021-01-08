<template>
    <div class="component-root">
        <svg class="svg-oven" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 200 50" enable-background="new 0 0 100 100" xml:space="preserve">

            <polygon points="1 1, 199 1, 199 49, 189, 49, 189, 19, 11 19, 11 49, 1 49" stroke="#666" fill="#fff" stroke-width="2"/>
            <polygon points="15 22, 185 22, 185 27, 15 27" stroke="#666" fill="#C16666" stroke-width="2"/>
        
        </svg>
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
        width: 200px;
        height: 50px;
    }
</style>