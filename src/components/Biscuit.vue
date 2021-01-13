<template>
    <div class="biscuit">
        <svg class="svg-cookie" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 100 16" xml:space="preserve">
            
            <ellipse v-if="state == 'raw'" fill="#D89F39" stroke-width="2" stroke="#666"
                 cx="50" cy="8" rx="10" ry="7" />

            <ellipse v-else-if="state == 'formed'" fill="#D89F39" stroke-width="2" stroke="#666"
                 cx="50" cy="10" rx="20" ry="5" />

            <ellipse v-else-if="state == 'enteredOven'" fill="#C78021" stroke-width="2" stroke="#666"
                 cx="50" cy="10" rx="20" ry="5" />

            <ellipse v-else-if="state == 'cooking'" fill="#B9670C" stroke-width="2" stroke="#666"
                 cx="50" cy="10" rx="20" ry="5" />

            <ellipse v-else-if="state == 'done'" fill="#B45F06" stroke-width="2" stroke="#666"
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

   ellipse {
       transition: fill 1s;
   }
</style>