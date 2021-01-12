<template>
    <div class="component-root">
        <svg class="svg-motor" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 80 80" xml:space="preserve">
            <circle cx="35" cy="35" r="30" stroke="#666" fill="#6D9EEB" stroke-width="2" stroke-dasharray="8 2"/>
            <circle cx="35" cy="35" r="14" stroke="#666" fill="#A4C2F4" stroke-width="2" stroke-dasharray="5 2"/>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'Motor',
    data: function() {
        return {
            intervalHook: new Function()
        }
    },
    created: function() {
        window.eventHub.$on("motor-start", this.on);
        window.eventHub.$on("motor-stop", this.off);
    },
    methods: {
        on: function(frequency) {
            console.log("motor on");

            this.intervalHook = setInterval(function() {
                window.eventHub.$emit("motor-pulse");
            }, 1000 / frequency);
        },
        off: function() {
            console.log("motor off");

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
</style>