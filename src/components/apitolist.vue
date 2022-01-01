<template>
<div>
   

    <ul v-for="item in list" :key="item" class="item">
        <li>{{item.id}}</li>
        <li>{{item.first_name}}</li>
        <li>{{item.email}}</li>
        <li><img :src="item.avatar" alt=""></li>
    </ul>

</div>
</template>

<script>
import axios from 'axios'

export default {

    name: 'App',
    components: {

    },
    data() {
        return {
            list: [],
        }
    },

    async mounted() {
        let result = await axios.get("https://reqres.in/api/users?page=1");
        console.warn("API is: ", result.data.data);
        this.list = result.data.data;
    }

}
</script>

<style scoped>
.item {
    display: flex;
}

.item img {
    width: 50px;
}
.item li {
    display: inline-block;
    width: 180px;
    border: 1px solid;
    text-align: center;
    
   
}

</style>
