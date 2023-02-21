<template>
    <v-row class="mx-0">
        <v-col cols="4" v-for="item in visible" :key="item.id">
          {{ item.title }}
        </v-col>
    </v-row>

    <v-row class="my-5">
        <v-col class="text-center" cols="12">
            <!-- a pagination linked to "page" -->
            <v-pagination v-model="page.val" :length="pages" circle></v-pagination>
        </v-col>
    </v-row>
</template>

<script setup>

</script>
