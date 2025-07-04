<template>

    <motion.div class="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950 text-gray-100 relative overflow-hidden"
    :initial="{ opacity: 0, y: -100 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 1, ease: 'easeInOut' }"
    >
        <!-- Stars Container -->
        <div class="stars-container absolute inset-0 overflow-hidden pointer-events-none">
            <div v-for="n in 120" :key="n" 
                class="star"
                :style="{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                }">
            </div>
        </div>

        <!-- Main Content -->
        <div class="container mx-auto px-4 py-16 relative z-10">
            <div class="text-center mb-16 animate-fade-in">
                <h1 class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Vue Template
                </h1>
                <p class="mt-4 text-xl text-gray-400">Start your project in seconds, not hours</p>
                <div class="mt-8 flex justify-center gap-4">
                    <a 
                        href="https://github.com/ls047/vue-ts-soa" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        class="px-6 py-3 bg-purple-800 rounded-lg hover:bg-purple-700 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 border border-purple-600/30"
                    >
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        View on GitHub
                    </a>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div class="bg-gray-900/30 rounded-xl p-6 hover:bg-gray-800/40 transition-all duration-300 border border-purple-700/20 hover:scale-105 animate-slide-up backdrop-blur-sm" style="animation-delay: 100ms;">
                    <div class="text-3xl mb-4">⚡️</div>
                    <h3 class="text-xl font-semibold mb-2 text-purple-400">Lightning Fast</h3>
                    <p class="text-gray-400">Built with Vite for instant server start and blazing fast HMR</p>
                </div>
                <div class="bg-gray-900/30 rounded-xl p-6 hover:bg-gray-800/40 transition-all duration-300 border border-purple-700/20 hover:scale-105 animate-slide-up backdrop-blur-sm" style="animation-delay: 200ms;">
                    <div class="text-3xl mb-4">🔒</div>
                    <h3 class="text-xl font-semibold mb-2 text-purple-400">Type Safe</h3>
                    <p class="text-gray-400">Full TypeScript support with strict type checking</p>
                </div>
                <div class="bg-gray-900/30 rounded-xl p-6 hover:bg-gray-800/40 transition-all duration-300 border border-purple-700/20 hover:scale-105 animate-slide-up backdrop-blur-sm" style="animation-delay: 300ms;">
                    <div class="text-3xl mb-4">🎨</div>
                    <h3 class="text-xl font-semibold mb-2 text-purple-400">Modern UI</h3>
                    <p class="text-gray-400">Integrated with Tailwind CSS and Ant Design Vue</p>
                </div>
            </div>

            <div class="text-center mb-12 animate-fade-in" style="animation-delay: 400ms;">
                <h2 class="text-3xl font-bold text-purple-300">Tech Stack</h2>
                <p class="mt-2 text-gray-400">Built with the latest and most powerful technologies</p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                <div v-for="tech in techStack" 
                    :key="tech.name"
                    class="tech-card bg-gray-900/30 rounded-lg p-4 text-center hover:bg-gray-800/40 transition-all duration-300 border border-purple-700/20 hover:scale-105 animate-slide-up backdrop-blur-sm relative group"
                    :style="{ 'animation-delay': `${tech.delay}ms` }">
                    <h4 class="font-semibold text-purple-300">{{ tech.name }}</h4>
                    <p class="text-sm text-gray-400">{{ tech.description }}</p>
                    <a :href="tech.docLink" target="_blank" rel="noopener noreferrer" class="doc-link">
                        <span class="bg-purple-600/80 text-white px-4 py-2 rounded-md absolute left-1/2 -translate-x-1/2 bottom-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-purple-500">Documentation</span>
                    </a>
                </div>
            </div>

            <div class="bg-gray-900/30 rounded-xl p-8 animate-fade-in backdrop-blur-sm" style="animation-delay: 900ms;">
                <h2 class="text-2xl font-bold mb-4 text-purple-300">Quick Start</h2>
                <div class="bg-gray-950/50 rounded-lg p-4 font-mono text-sm">
                    <p class="text-gray-400"># Clone the repository</p>
                    <p class="text-purple-400">git clone https://github.com/ls047/vue-ts-soa.git</p>
                    <p class="text-gray-400 mt-2"># Navigate to project directory</p>
                    <p class="text-purple-400">cd vue-template</p>
                    <p class="text-gray-400 mt-2"># Install dependencies</p>
                    <p class="text-purple-400">npm install</p>
                    <p class="text-gray-400 mt-2"># Start development server</p>
                    <p class="text-purple-400">npm run dev</p>
                </div>
            </div>
        </div>
    </motion.div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v';


interface TechCard {
    name: string;
    description: string;
    docLink: string;
    delay: number;
}

const techStack: TechCard[] = [
    {
        name: 'Vue 3',
        description: 'Latest Vue with Composition API',
        docLink: 'https://vuejs.org/guide/introduction.html',
        delay: 500
    },
    {
        name: 'TypeScript',
        description: 'Enhanced Developer Experience',
        docLink: 'https://www.typescriptlang.org/docs/',
        delay: 550
    },
    {
        name: 'Vite',
        description: 'Lightning Fast Build Tool',
        docLink: 'https://vitejs.dev/guide/',
        delay: 600
    },
    {
        name: 'Pinia',
        description: 'Modern State Management',
        docLink: 'https://pinia.vuejs.org/introduction.html',
        delay: 650
    },
    {
        name: 'Ant Design Vue',
        description: 'Enterprise UI Components',
        docLink: 'https://antdv.com/components/overview',
        delay: 700
    },
    {
        name: 'PrimeVue',
        description: 'Rich UI Component Library',
        docLink: 'https://primevue.org/introduction',
        delay: 750
    },
    {
        name: 'Tailwind CSS',
        description: 'Utility-First Styling',
        docLink: 'https://tailwindcss.com/docs',
        delay: 800
    },
    {
        name: 'Vue Router',
        description: 'Official Routing Solution',
        docLink: 'https://router.vuejs.org/guide/',
        delay: 850
    },
    {
        name: 'Leaflet',
        description: 'Interactive Maps Library',
        docLink: 'https://leafletjs.com/reference.html',
        delay: 900
    },
    {
        name: 'Motion-v',
        description: 'Vue Animation Library',
        docLink: 'https://motion.dev/docs/vue',
        delay: 950
    },
    {
        name: 'ESLint',
        description: 'Code Quality Tools',
        docLink: 'https://eslint.org/docs/latest/',
        delay: 1000
    },
    {
        name: 'JWT Auth',
        description: 'Authentication Support',
        docLink: 'https://jwt.io/introduction',
        delay: 1050
    }
];
</script>

<style scoped>
.animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
    opacity: 0;
}

.animate-slide-up {
    animation: slideUp 0.8s ease-out forwards;
    opacity: 0;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Optimized star styles */
.star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    border-radius: 50%;
    opacity: 0;
    animation: starTwinkle 3s ease-in-out infinite;
}

@keyframes starTwinkle {
    0%, 100% { opacity: 0; }
    50% { opacity: 0.8; }
}

/* Interactive element styles */
a:hover, button:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease;
}
</style>

