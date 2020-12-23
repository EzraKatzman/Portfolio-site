<template>
    <div class="bg-wgray-800 rounded-xl shadow-2xl">
        <div class="p-4">
            <h1 class="text-lg font-bold text-wgray-100 flex justify-between">
                {{ experience.name }} 
            </h1>
    
            <div class="flex justify-between text-rose-600 font-mono">
                <p>{{ experience.job }}</p>
                <p>{{ experience.date }}</p> 
            </div>

            <p v-for="(description, index) in experience.description" :key="index" class="pt-2 text-wgray-200 list-inside">
                <li>{{ description }}</li>
            </p>        
            
        </div>
    </div>
</template>

<script>
export default {
    props: {
        experience: {
            required: true,
            type: Object
        }
    }
}
</script>
