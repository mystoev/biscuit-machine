<template>
    <div class="component-root">
        <svg class="svg-common" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
            
            <rect x="47" y="45" width="6" height="40" fill="#CCC" stroke="#666" stroke-width="2"/>
            <rect x="40" y="85" width="20" height="5" fill="#CCC" stroke="#666" stroke-width="2"/>
            
            <polygon points="27 2, 73 2, 57 58, 43 58" fill="#CCC" stroke="#666" stroke-width="2"/>
            <polygon points="27 2, 73 2, 63 48, 37 48" fill="#CCC" stroke="#666" stroke-width="2"/>

        </svg>
    </div>
</template>

<script>
export default {
    name: 'Stamper',
    methods: {
        pulse: function() {
            console.log("stamper pulse TODO: display animation");
        }
    }
}
</script>

<style>

</style>