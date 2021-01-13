<template>
    <div class="component-root">
        <svg class="svg-conveyor" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 700 70" xml:space="preserve">
            
            <rect x="1" y="1" width="599px" height="6" stroke="#666" fill="#999" stroke-width="2"/>

            <polygon points="601 31, 601 69, 699 69, 699 31, 694 31, 694 64, 606 64, 606 31" stroke="#666" fill="#CCC" stroke-width="2"/>

        </svg>
    </div>
</template>

<script>
export default {
    name: 'Conveyor',
    data: function() {
        return {
            biscuitStates: {
                3: "formed",
                4: "enteredOven",
                5: "cooking",
                6: "done"
            }
        }
    },
    created: function() {
        window.eventHub.$on("move-biscuits", this.processBiscuits);
    },
    props: {
        positions: Number
    },
    methods: {
        processBiscuits: function(biscuits) {
            this.moveBiscuits(biscuits);
            this.changeBiscuitsState(biscuits);
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
                .filter(b => this.biscuitStates[b.position])
                .forEach(b => b.state = this.biscuitStates[b.position]);
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
</style>