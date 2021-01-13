<template>
    <div class="component-root">
        <svg class="svg-common" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 100 100" xml:space="preserve">

            <ellipse  fill="#D89F39" stroke-width="2" stroke="#666" cx="50" cy="45" rx="7" ry="10" >
                <!-- <animate id="extrudeBiscuitAnimation"
                        begin="indefnite"
                        attributeName="cy"
                        dur="1s"
                        values="45; 94;"
                        repeatCount="1"
                        />
                <animate id="extrudeBiscuitAnimation2"
                        begin="indefnite"
                        attributeName="rx"
                        dur="1s"
                        values="7; 10;"
                        repeatCount="1"
                        />
                <animate id="extrudeBiscuitAnimation3"
                        begin="indefnite"
                        attributeName="ry"
                        dur="1s"
                        values="10; 7;"
                        repeatCount="1"
                        /> -->
            </ellipse>

            <polygon points="26 1, 74 1, 57 58, 44 58" stroke="#666" fill="#CCC" stroke-width="2"/>
            <polygon points="26 1, 74 1, 63 48, 37 48" stroke="#666" fill="#CCC" stroke-width="2"/>
            <polygon points="30 4, 70 4, 60 45, 40 45" fill="#D89F39"/>
                
            
        </svg>
    </div>
</template>

<script>
export default {
    name: 'Extruder',
    created: function() {
        window.eventHub.$on("extruder-pulse", this.pulse);
    },
    methods: {
        pulse: function(biscuits) {
            biscuits.push({ id: Math.random(), state: "raw", position: 0 });
            // var animationElement = document.getElementById("extrudeBiscuitAnimation");
            // var animationElement2 = document.getElementById("extrudeBiscuitAnimation2");
            // var animationElement3 = document.getElementById("extrudeBiscuitAnimation3");
            
            // animationElement.beginElement();
            // animationElement2.beginElement();
            // animationElement3.beginElement();

            // animationElement.removeEventListener("endEvent", this.pulsed)
            // animationElement.addEventListener("endEvent", this.pulsed);
        },
        pulsed: function() {
            // window.eventHub.$emit("extruder-pulsed");
        }
    }
}
</script>

<style>
</style>