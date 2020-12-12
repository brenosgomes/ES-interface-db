module.exports = app => {
    //Verifica se valor recebido está vazio
    function existsOrError(value, msg) {
        if (!value) throw msg;
        if (Array.isArray(value) && value.length === 0) throw msg;
        if (typeof value === "string" && !value.trim()) throw msg;
    }

    //Retorna mensagem para quem chamou a função
    return { existsOrError };
};
