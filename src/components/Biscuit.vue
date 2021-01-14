<template>
    <div class="biscuit">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
            class="svg-cookie" viewBox="0 0 100 16">
            
            <ellipse v-if="state == 'raw'" fill="#D89F39" class="stroke"
                 cx="50" cy="8" rx="7" ry="7" />
            
            <ellipse v-else-if="state == 'stamped'" fill="#D89F39" class="stroke biscuit-stamped" 
                 cx="50" cy="10" rx="20" ry="5" />

            <ellipse v-else-if="state == 'formed'" fill="#D89F39" class="stroke"
                 cx="50" cy="10" rx="20" ry="5" />

            <ellipse v-else-if="state == 'enteredOven'" fill="#C78021" class="stroke"
                 cx="50" cy="10" rx="20" ry="5" />

            <ellipse v-else-if="state == 'cooking'" fill="#B9670C" class="stroke"
                 cx="50" cy="10" rx="20" ry="5" />

            <ellipse v-else-if="state == 'done'" fill="#B45F06" class="stroke"
                cx="50" cy="10" rx="20" ry="5" />
        </svg>
    </div>
</template>

<script>
export default {
    name: 'Biscuit',
    props: {
        state: String
    }
}
</script>

<style>
   .biscuit {
       position: absolute;
       display: inline-block;
       width: 100px;
       transition: all 1s linear;
   }

   .svg-cookie {
       display: block;
       height: 16px;
       width: 100px;
   }

   .svg-cookie ellipse {
        transition: fill 1s;
   }

   .biscuit-stamped {
       animation-name: example;
       animation-duration: 1s;
   }
   @keyframes example {
        0%   {cy: 8px;  rx: 10px; ry: 7px;}
        95%  {cy: 8px;  rx: 10px; ry: 7px;}
        100% {cy: 10px; rx: 20px; ry: 5px;}
    }
</style>