<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import { supabase } from './lib/supabaseClient'

const countries = ref([] as any[] | null)
const value = ref('')
async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

async function deleteRow(id: number) {
  const { error } = await supabase.from('countries').delete().match({ id: id })
  if (error) {
    console.error('Error inserting data:', error)
  } else {
    getCountries()
  }
}

async function addRow(id: number) {
  const index = id + 1
  const { error } = await supabase.from('countries').insert([
    {
      id: index,
      name: value.value
    }
  ])
  if (error) {
    console.error('Error inserting data:', error)
  } else {
    getCountries()
    value.value = ''
  }
}

onMounted(() => {
  getCountries()
})
</script>

<template>
  <h2 class="mb">出击吧，少年！</h2>
  <var-table>
    <thead>
      <tr>
        <th>序号</th>
        <th>Country</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="country in countries" :key="country">
        <th>{{ country.id }}</th>
        <th>{{ country.name }}</th>
        <var-button type="danger" @click="deleteRow(country.id)">删除</var-button>
        <th></th>
      </tr>
    </tbody>
  </var-table>
  <var-input placeholder="请输入国家名称" v-model="value" />
  <div class="flex justify-end">
    <var-button @click="addRow(countries?.length || 0)" class="mt ">增加</var-button>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
