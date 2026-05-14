import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center p-4">
    <div class="text-center text-white">
      <h1 class="text-5xl md:text-7xl font-bold mb-4">Open Higgsfield AI</h1>
      <p class="text-xl md:text-2xl mb-8 opacity-90">Powered by Vite + Tailwind CSS v4 + Autoprefixer</p>
      <div class="flex gap-4 justify-center flex-wrap">
        <button class="px-8 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-opacity-90 transition">Get Started</button>
        <button class="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:bg-opacity-10 transition">Learn More</button>
      </div>
    </div>
  </div>
`