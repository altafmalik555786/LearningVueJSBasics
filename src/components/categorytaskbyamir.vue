<template>
<div>
    <h1>Here Enter Your Record</h1>

    <form ref="resetform">
        <label for="id">ID: </label>
        <input type="number" placeholder="   Enter Your ID" id="id" v-model="id">
        <br><br>
        <label for="name">Name: </label>
        <input type="text" placeholder="  Enter Your Name" id="name" v-model="name">
        <br><br>
        <button @click.prevent="getFormValues()">Submit</button>
    </form>

    <br><br>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
        </tr>
        <tr v-for="(item, index) in arr" :key="item">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td><button v-on:click="deleteRow(index)">x</button></td>
        </tr>
    </table>

</div>
</template>

<script>
export default {

    name: "Home",
    components: {

    },

    data() {
        return {
            id: '',
            name: '',
            arr: [],
        }
    },

    methods: {
        getFormValues() {
            if (this.name !== "" && this.id !== "") {
                this.arr.push({
                    id: this.id,
                    name: this.name,

                });
            }

            this.clearForm()
        },
        clearForm() {
            this.id = ""
            this.name = ""
        },
        deleteRow(idx) {
            
            this.arr.splice(idx, 1);
        }
    }

}
</script>

<style scoped>
table,
tr,
th,
td {
    border: 1px solid black;
    padding: 2px;
    margin: 2px;
}
</style>
