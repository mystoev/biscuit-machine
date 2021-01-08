<template>
    <div class="component-root">
        <svg class="svg-common" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
            
            <rect x="22" y="45" width="6" height="40" fill="#CCC" stroke="#666" stroke-width="2"/>
            <rect x="15" y="85" width="20" height="5" fill="#CCC" stroke="#666" stroke-width="2"/>
            
            <polygon points="2 2, 48 2, 32 58, 18 58" fill="#CCC" stroke="#666" stroke-width="2"/>
            <polygon points="2 2, 48 2, 38 48, 12 48" fill="#CCC" stroke="#666" stroke-width="2"/>

        </svg>
    </div>
</template>

<script>
export default {
    name: 'Stamper',
    props: {
        title: String
    }
}
</script>

<style>

</style>