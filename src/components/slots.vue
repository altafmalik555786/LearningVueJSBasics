<template>

<div>
   
    
    <slot><h1>Default data</h1></slot>
    <slot><h1>Default data</h1></slot>
   
    <div class="cart">
    <header>
        <slot name="header"></slot>
    </header>
    
   
    <content>
        <slot name="main"></slot>
    </content> 
    
   
    <footer>
        <slot name="footer"><button type="button">Buy Now!</button></slot>
    </footer> 
    </div>




</div>
    
</template>

<script>
export default {
    name: 'Slots',
    props: {
       
    }
}
</script>

<style scoped>
    .cart {
            border: 1px solid;
    width: 200px;
    text-align: center;
    padding: 20px;
    margin: 10px;
    }
</style>








