<template>
<div >
   

    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
        </tr>
        <tr v-for="(item) in list" :key="item">
            <td>{{ item.id }}</td>
            <td>{{ item.first_name}}</td>
            <td>{{item.email}} </td>
        </tr>
    </table>

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
h1 {
    color: orange;
}
</style>
