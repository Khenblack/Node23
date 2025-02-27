const getHello = async (): Promise<string> => {
    return 'Hello World!';
};

(async () => {
    const result = await getHello();
    console.log(result);
})();
