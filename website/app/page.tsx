export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gradient-to-b from-zinc-50 to-white font-sans dark:from-black dark:to-zinc-900">
      <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-center py-32 px-8 sm:px-16">
        <div className="flex flex-col items-center gap-8 text-center max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="text-6xl">🧠</span>
            <h1 className="text-6xl font-bold tracking-tight text-black dark:text-zinc-50">
              NeuralForge
            </h1>
          </div>
          <p className="text-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            A cutting-edge toolkit for neural network experimentation and deployment
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-4">
            <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 text-sm font-medium">
              Python
            </span>
            <span className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-300 text-sm font-medium">
              JavaScript
            </span>
            <span className="px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-300 text-sm font-medium">
              TypeScript
            </span>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-zinc-50">High Performance</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Optimized neural network implementations with GPU acceleration support
            </p>
          </div>
          
          <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-zinc-50">Modular Design</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Mix and match components to build exactly what you need
            </p>
          </div>
          
          <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-zinc-50">Visualization</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Built-in tools for model insights and training metrics
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-16">
          <a
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-black dark:bg-white px-8 text-white dark:text-black font-medium transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
            href="https://github.com/leandro4979-hub/neuralforge"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
          <a
            className="flex h-12 items-center justify-center rounded-full border border-solid border-zinc-300 dark:border-zinc-700 px-8 font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
            href="https://github.com/leandro4979-hub/neuralforge#readme"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>

        <div className="mt-16 p-6 rounded-xl bg-zinc-100 dark:bg-zinc-900 max-w-2xl w-full">
          <h3 className="text-lg font-semibold mb-3 text-black dark:text-zinc-50">Quick Install</h3>
          <div className="bg-white dark:bg-black rounded-lg p-4 font-mono text-sm">
            <code className="text-zinc-800 dark:text-zinc-300">
              # Python<br />
              pip install neuralforge<br />
              <br />
              # JavaScript<br />
              npm install neuralforge-js
            </code>
          </div>
        </div>
      </main>
    </div>
  );
}
