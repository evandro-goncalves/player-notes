Hooks.once('init', () => {
    console.log('My Custom Module is initializing.');
});

// Example of a ready hook
Hooks.once('ready', () => {
    console.log('My Custom Module is ready.');
});