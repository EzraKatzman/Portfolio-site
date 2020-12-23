<template>
    <div class="w-96 bg-wgray-800 rounded-xl shadow-xl transform hover:-translate-y-5 motion-reduce:transform-none hover:shadow-xl">
        <a 
            :href="project.links" target="_blank"
            class=""
        >
        <div class="p-4">
            <h1 class="text-lg font-semibold text-white flex justify-between">
                {{ project.name }} 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </h1>
    
            <p v-for="(stack, index) in project.stack" :key="index" class="inline-block px-2 mr-1 text-wgray-50 rounded-full bg-gradient-to-r from-rose-600 to-rose-800 font-mono">
                {{ stack }}
            </p>
            
            <p class="text-wgray-300 pt-4">
                {{ project.description }}
            </p>
        </div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        project: {
            required: true,
            type: Object
        }
    }
}
</script>
