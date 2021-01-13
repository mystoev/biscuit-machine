<template>
    <div class="component-root">
        <svg class="svg-oven" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 200 50" enable-background="new 0 0 100 100" xml:space="preserve">

            <polygon points="1 1, 199 1, 199 49, 189, 49, 189, 19, 11 19, 11 49, 1 49" stroke="#666" fill="#fff" stroke-width="2"/>
            <polygon points="15 22, 185 22, 185 27, 15 27" stroke="#666" fill="#C16666" stroke-width="2"/>
            <text x="85" y="15" font-size="14px" fill="#333">{{temperature}}°C</text>
        
        </svg>
    </div>
</template>

<script>
export default {
    name: 'Oven',
    data: function() {
        return {
            temperature: 200,

            warmUpHook: new Function(),
            coolDownHook: new Function(),
            ovenReadyEmitted: false,
            index: 1
        }
    },
    created: function() {
        window.eventHub.$on("oven-start", this.on);
        window.eventHub.$on("oven-stop", this.off);

    },
    props: {
        sensorLowLimit: Number,
        sensorHighLimit: Number
    },
    // watch: {
    //     temperature: function(newTemperature, oldTemperature) {
    //         console.log(newTemperature);
    //         console.log(oldTemperature);
    //     }
    // },
    methods: {
        on: function() {

            var that = this;
            clearInterval(this.coolDownHook);
            this.warmUpHook = setInterval(function() {
                if (that.temperature >= 350) {
                    clearInterval(this.warmUpHook);
                    that.temprature = "broken"
                    return;
                }

                that.temperature += that.index;

                if (!that.ovenReadyEmitted && that.temperature >= 220 && that.temperature <= 240) {
                    that.ovenReadyEmitted = true;
                    window.eventHub.$emit("oven-ready")
                }

                if (that.sensorHighLimit == that.temperature) {
                    clearInterval(this.warmUpHook);
                    window.eventHub.$emit("oven-stop");
                }
            }, 100);
        },

        off: function(isManual) {

            var that = this;
            if (isManual) {
                that.ovenReadyEmitted = false;
                clearInterval(this.coolDownHook);
                clearInterval(this.warmUpHook);
                
                this.coolDownHook = setInterval(function() {
                    if (that.temperature <= 20) {
                        clearInterval(this.coolDownHook);
                        return;
                    }

                    that.temperature -= that.index;

                   
                }, 100);
                return;
            }

            clearInterval(this.warmUpHook);
            this.coolDownHook = setInterval(function() {
                if (that.temperature <= 20) {
                    clearInterval(this.coolDownHook);
                    return;
                }

                that.temperature -= that.index;

                    if (that.sensorLowLimit == that.temperature) {
                        clearInterval(this.coolDownHook);
                        window.eventHub.$emit("oven-start");
                    }
            }, 100);
        }
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