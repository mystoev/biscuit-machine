<template>
    <div class="component-root">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
            class="svg-conveyor" viewBox="0 0 700 70">
            
            <rect class="conveyor-line stroke" x="1" y="1" />
            <polygon class="stroke fill" points="601 31, 601 69, 699 69, 699 31, 694 31, 694 64, 606 64, 606 31"/>

        </svg>
    </div>
</template>

<script>
export default {
    name: 'Conveyor',
    data: function() {
        return {
            biscuitStates: {
                2: "stamped",
                3: "formed",
                4: "enteredOven",
                5: "cooking",
                6: "done"
            }
        }
    },
    created: function() {
        window.eventHub.$on("process-biscuits", this.processBiscuits);
    },
    props: {
        positions: Number
    },
    methods: {
        processBiscuits: function(biscuits) {
            this.moveBiscuits(biscuits);
            this.changeBiscuitsState(biscuits);
            this.removeOldBiscuits();
        },
        moveBiscuits: function(biscuits) {
            biscuits.forEach(b => {
                if (b.position < this.positions) {
                    b.position += 1;
                }

                if (b.position == this.positions - 1) {
                    window.eventHub.$emit("biscuit-done");
                }
            });
        },
        changeBiscuitsState: function(biscuits) {
            biscuits
                .filter(b => b.state != "burned")
                .filter(b => this.biscuitStates[b.position])
                .forEach(b => b.state = this.biscuitStates[b.position]);
        },
        removeOldBiscuits: function() {
            var els = document.getElementsByClassName("biscuit");
            if (els.length > 10) {
                var parentNode = els[0].parentNode;
                parentNode.removeChild(els[0]);
            }
        }
    }
}
</script>

<style>
    .svg-conveyor {
        display: inline-block;
        width: 700px;
        height: 70px;
    }

    .conveyor-line {
        width: 599px;
        height: 6px;
        fill: #999; 
    }
</style>