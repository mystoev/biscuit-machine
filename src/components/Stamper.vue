<template>
    <div class="component-root">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
            class="svg-common" viewBox="0 0 100 100">
            <rect class="stamper-moving-part" x="47" y="25">
                <animate id="stamperAnimationElement1"
                        begin="indefnite"
                        attributeName="y"
                        dur="1s"
                        values="25; 25; 25; 25; 45;"
                        repeatCount="1"
                        />
            </rect>
            <rect class="stamper-stamp" x="40" y="65">
                <animate id="stamperAnimationElement2"
                        begin="indefnite"
                        attributeName="y"
                        dur="1s"
                        values="65; 65; 65; 65; 85;"
                        repeatCount="1"
                        />
            </rect>
            
            <polygon class="stamper-body" points="27 2, 73 2, 57 58, 43 58" />
            <polygon class="stamper-body" points="27 2, 73 2, 63 48, 37 48" />
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
    .stamper-body {
        stroke-width: 2px;
        fill: #CCC;
        stroke: #666;
    }

    .stamper-moving-part {
        width: 6px;
        height: 40px;
        stroke-width: 2px;
        fill: #CCC;
        stroke: #666;
    }

    .stamper-stamp {
        width: 20px;
        height: 5px;
        stroke-width: 2px;
        fill: #CCC;
        stroke: #666;
    }
</style>