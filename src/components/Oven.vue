<template>
    <div class="component-root">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
            class="svg-oven" viewBox="0 0 200 50">

            <polygon class="oven-body" points="1 1, 199 1, 199 49, 189, 49, 189, 19, 11 19, 11 49, 1 49" />
            <polygon class="oven-header" points="15 22, 185 22, 185 27, 15 27"/>
            <text class="oven-display" x="85" y="15">{{temperature}}°C</text>
        
        </svg>
    </div>
</template>

<script>
export default {
    name: 'Oven',
    data: function() {
        return {
            temperature: 200,
            temperatureDelta: 1,

            warmUpHook: new Function(),
            coolDownHook: new Function(),
            ovenReadyEmitted: false
        }
    },
    created: function() {
        window.eventHub.$on("oven-start", this.on);
        window.eventHub.$on("oven-stop", this.stop);

        window.eventHub.$on("oven-heat", this.on);
        window.eventHub.$on("oven-cool", this.off);

    },
    props: {
        sensorLowLimit: Number,
        sensorHighLimit: Number,
        heaterSensor: Object
    },
    methods: {
        on: function() {
            var that = this;
            clearInterval(this.coolDownHook);
            this.warmUpHook = setInterval(function() {
                if (that.temperature >= 350) {
                    clearInterval(this.warmUpHook);
                    return;
                }

                that.temperature += that.temperatureDelta;

                if (!that.ovenReadyEmitted && that.temperature >= that.heaterSensor.low && that.temperature <= that.heaterSensor.high) {
                    that.ovenReadyEmitted = true;
                    window.eventHub.$emit("oven-ready")
                }

                if (that.heaterSensor.high == that.temperature) {
                    clearInterval(this.warmUpHook);
                    window.eventHub.$emit("oven-cool");
                }
            }, 100);
        },
        off: function() {
            var that = this;
            clearInterval(this.warmUpHook);
            this.coolDownHook = setInterval(function() {
                if (that.temperature <= 20) {
                    clearInterval(this.coolDownHook);
                    return;
                }

                that.temperature -= that.temperatureDelta;

                if (that.heaterSensor.low == that.temperature) {
                    clearInterval(this.coolDownHook);
                    window.eventHub.$emit("oven-heat");
                }
            }, 100);
        },
        stop: function() {
            var that = this;
            that.ovenReadyEmitted = false;
            clearInterval(this.coolDownHook);
            clearInterval(this.warmUpHook);
            
            this.coolDownHook = setInterval(function() {
                if (that.temperature <= 20) {
                    clearInterval(this.coolDownHook);
                    return;
                }

                that.temperature -= that.temperatureDelta;
                if (that.temperature < that.heaterSensor.low) {
                    window.eventHub.$emit("oven-not-ready");
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

    .oven-body {
        stroke-width: 2px;
        stroke: #666;
        fill: #fff;
    }

    .oven-header {
        stroke-width: 2px;
        stroke: #666;
        fill: #C16666;
    }

    .oven-display {
        font-size: 14px;
        fill: #333;
    }
</style>