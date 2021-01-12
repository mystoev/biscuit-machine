<template>
    <div class="biscuit">
        <svg class="svg-cookie" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 100 12" xml:space="preserve">
            <ellipse v-if="state == 'raw'" cx="50" cy="6" rx="5" ry="5" stroke-width="2" stroke="#666"
                v-bind:fill="'#D89F39'" />
            <ellipse v-else-if="state == 'formed'" cx="50" cy="6" rx="20" ry="5" stroke-width="2" stroke="#666"
                v-bind:fill="'#D89F39'" />
            <ellipse v-else-if="state == 'enteredOven'" cx="50" cy="6" rx="20" ry="5" stroke-width="2" stroke="#666"
                v-bind:fill="'#C78021'" />
            <ellipse v-else-if="state == 'cooking'" cx="50" cy="6" rx="20" ry="5" stroke-width="2" stroke="#666"
                v-bind:fill="'#B9670C'" />
            <ellipse v-else-if="state == 'done'" cx="50" cy="6" rx="20" ry="5" stroke-width="2" stroke="#666"
                v-bind:fill="'#B45F06'" />
        </svg>
    </div>
</template>

<script>
export default {
    name: 'Biscuit',
    props: {
        state: String
    },
    methods: {
        
    }
}
</script>

<style>
   .biscuit {
       position: absolute;
       display: inline-block;
       width: 100px;
       transition: all 1s;
   }

   .svg-cookie {
       display: block;
       height: 12px;
       width: 100px;
   }

   ellipse {
       transition: fill 1s ease;
   }
</style>