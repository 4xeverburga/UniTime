<template>
    <v-card>
    <v-card-title>
        <h2>AREAS</h2>
    </v-card-title>
    <v-list>
        <v-list-item
        v-for="(name, i) in areas" :key="i" link>
        <v-list-item-content>
            <v-list-item-title>{{ name }}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>  
    </v-list>
</v-card>
</template>

<script setup>

const areas = ref([
    {id: 1, name: 'Academica'},
    {id: 2, name: 'IDI'},
    {id: 3, name: 'Logistica'},
    {id: 4, name: 'Tec. Informacion'},
    {id: 5, name: 'GTH'},
])
</script>