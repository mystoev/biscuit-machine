<template>
    <div class="component-root">
        <svg class="svg-common" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
            
            <rect x="47" y="25" width="6" height="40" fill="#CCC" stroke="#666" stroke-width="2">
                <animate id="stamperAnimationElement1"
                        begin="indefnite"
                        attributeName="y"
                        dur="1s"
                        values="25; 25; 25; 25; 45;"
                        repeatCount="1"
                        />
            </rect>
            <rect x="40" y="65" width="20" height="5" fill="#CCC" stroke="#666" stroke-width="2">
                <animate id="stamperAnimationElement2"
                        begin="indefnite"
                        attributeName="y"
                        dur="1s"
                        values="65; 65; 65; 65; 85;"
                        repeatCount="1"
                        />
            </rect>
            
            <polygon points="27 2, 73 2, 57 58, 43 58" fill="#CCC" stroke="#666" stroke-width="2"/>
            <polygon points="27 2, 73 2, 63 48, 37 48" fill="#CCC" stroke="#666" stroke-width="2"/>

        </svg>
    </div>
</template>

<script>
export default {
    name: 'Stamper',
    created: function() {
        window.eventHub.$on("stamper-pulse", this.pulse);
    },
    methods: {
        pulse: function(biscuits) {
            if(biscuits == null || biscuits.length == 0) {
                return;
            }

            var animationElement1 = document.getElementById("stamperAnimationElement1");
            var animationElement2 = document.getElementById("stamperAnimationElement2");

            animationElement1.beginElement();
            animationElement2.beginElement();
        }
    }
}
</script>

<style>

</style>