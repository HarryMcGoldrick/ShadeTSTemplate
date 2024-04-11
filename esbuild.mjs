import * as esbuild from 'esbuild'

const watch = process.argv.includes('--watch');

const ctx = await esbuild.context({
    entryPoints: ['./src/handlers/hello-world.ts'],
    bundle: true,
    outdir: 'dist',
    platform: 'node',
    sourcemap: 'inline',
    logLevel: 'info'
})

if (watch) {
    // Watching allows for near instant updates, use this when developing for light speed builds!
    await ctx.watch();
} else {
    await ctx.rebuild();
    await ctx.dispose();
}