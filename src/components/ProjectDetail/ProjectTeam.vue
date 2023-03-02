<!-- Project Portfolio -->

<template>
    <!-- title -->
    <h1>
        <span class="text-primary">integrantes equipo</span>
    </h1>
    
    
    <!-- carousel -->
    
    <!-- make a 3x3 grid carousel of items -->
    
    <v-row class="mx-0">
        <v-col cols="4" v-for="(item, id) in three_groups" :key="id">
          {{ item.title }}
    
          <ProjectMember
            img-src="src/assets/patata.jpg"
            :title="item.title"
            description="item.description"
            :id="item.id"
            />
        </v-col>
    </v-row>

    <!-- remaining items, less than 3, centered with spacers -->
    <v-row class="mx-0">
        <v-spacer></v-spacer>
        <v-col class=".v-col-auto" cols="4" v-for="(item, id) in remaining" :key="id">
            
          {{ item.title }}
    
          <ProjectMember
            img-src="src/assets/patata.jpg"
            :title="item.title"
            description="item.description"
            :id="item.id"
            />
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
    


    </template>
    
<script setup>

import ProjectMember from '@/components/ProjectDetail/ProjectMember.vue';
import {reactive, computed} from 'vue'

defineProps(['id'])

const itemsPerRow = 3

function clicked () {
    console.log('clicked')
    // log page number
    console.log(page.val)
}

const items = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
    { id: 4, title: 'Item 4' },
    { id: 5, title: 'Item 5' },
    { id: 6, title: 'Item 6' },
    { id: 7, title: 'Item 7' },
    { id: 8, title: 'Item 8' },
    { id: 9, title: 'Item 9' },
    { id: 10, title: 'Item 10' },
    { id: 11, title: 'Item 11' },
    { id: 12, title: 'Item 12' },
    { id: 13, title: 'Item 13' },
    { id: 14, title: 'Item 14' },
    { id: 15, title: 'Item 15' },
    { id: 16, title: 'Item 16' },
    { id: 17, title: 'Item 17' },
    { id: 18, title: 'Item 18' },
    {id:19, title: 'Item 19'},
    {id:20, title: 'Item 20'}
]

const module = computed(() => {
    return Math.floor(items.length / itemsPerRow)
})

const three_groups = computed(() => {
    // truncate items up to the max 3 multiple number

    return items.slice(0, module.value * itemsPerRow)
})

const remaining = computed(() => {
    // the rest of items that don't fit in the 3 multiple number
    return items.slice(module.value * itemsPerRow, items.length)
})

</script>

<style scoped>

</style>
    

