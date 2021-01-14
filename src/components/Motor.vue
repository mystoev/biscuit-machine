<template>
    <div class="component-root">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
            class="svg-motor" viewBox="0 0 80 80">
            <circle class="motorRotor stroke" cx="35" cy="35" r="30">
                <animateTransform id="motorRotator"
                    begin="indefnite"
                    attributeName="transform" 
                    attributeType="XML" 
                    type="rotate"
                    dur="1s" 
                    from="0 35 35"
                    to="360 35 35" 
                    repeatCount="indefinite" />
            </circle>
            <circle class="motorStator stroke" cx="35" cy="35" r="14" />
        </svg>
    </div>
</template>

<script>
export default {
    name: 'Motor',
    data: function() {
        return {
            intervalHook: new Function(),
            state: "off"
        }
    },
    created: function() {
        window.eventHub.$on("motor-start", this.on);
        window.eventHub.$on("motor-stop", this.off);
    },
    methods: {
        on: function() {
            if (this.state == "on") {
                return;
            }

            this.state = "on";
            document.getElementById("motorRotator").beginElement();

            this.intervalHook = setInterval(function() {
                window.eventHub.$emit("motor-pulse");
            }, 1000);
        },
        off: function() {
            if (this.state == "off") {
                return;
            }

            this.state = "off";
            document.getElementById("motorRotator").endElement();
            clearInterval(this.intervalHook);
        }
    }
}
</script>

<style>
    .svg-motor {
        display: inline-block;
        width: 80px;
        height: 80px;
    }

    .motorRotor {
        stroke-dasharray: 16 4;
        fill: #6D9EEB;
    }

    .motorStator {
        stroke-dasharray: 5 2;
        fill: #A4C2F4;
    }
</style>