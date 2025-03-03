const getHello = async (): Promise<string> => {
    return 'Hello World!';
};

(async () => {
    const result = await getHello();
    console.log(result);
    const cwd = process.env.cwd;
    console.log(`Current working directory: ${cwd}`);
})();
