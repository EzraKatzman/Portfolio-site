<template>
    <header class="fixed inset-x-0 top-0 z-10 w-full bg-wgray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
        <div class="flex items-center justify-between px-4 py-3 sm:p-0">
          <div>
            <router-link to="/" class="font-semibold text-wgray-100">
                Home
            </router-link>
          </div>
          <div class="sm:hidden">
            <button @click="isOpen = !isOpen" type="button" class="block text-wgray-100 hover:text-white focus:text-white focus:outline-none">
                <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                    <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                </svg>
            </button>
          </div>
        </div>
        <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
            <router-link to="/myprojects" class="block px-2 py-1 text-wgray-100 font-semibold rounded hover:text-amber-400 
                transition duration-500 ease-in-out transform lg:hover:-translate-y-1 lg:hover:scale-110">
                Projects
            </router-link>
            <router-link to="/experience" class="mt-1 block px-2 py-1 text-wgray-100 font-semibold rounded hover:text-rose-600 
                transition duration-500 ease-in-out transform lg:hover:-translate-y-1 lg:hover:scale-110 sm:mt-0 sm:ml-2">
                Experience
            </router-link>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
        }
    },
}
</script>
