const UCHIHA_CONSTANTS = {
    BOT_NAME: '𝐔𝐜𝐡𝐢𝐡𝐚 𝐁𝐨𝐭 🤖',
    EMOJIS: {
        SHARINGAN: '👁️',
        PODER: '⚡'
    },
    MENSAGENS: {
        WELCOME: 'Bem-vindo ao Uchiha Bot! Use seus poderes sabiamente.'
    },
    NIVEIS_ACESSO: [
        'Usuário',
        'Moderador',
        'Administrador'
    ],
    LIMITES: {
        MENSAGENS_DIARIAS: 100,
        COMANDOS_ESPECIAIS: 10
    },
    SEGURANCA: {
        ATIVAR_CONFIRMCAO: true,
        NIVEIS_DE_VERIFICACAO: ['Baixo', 'Médio', 'Alto']
    },
    PERMISSOES: {
        USUARIO: 'Pode usar comandos básicos',
        MODERADOR: 'Pode moderar chats e banir usuários',
        ADMINISTRADOR: 'Acesso total ao bot e suas configurações'
    }
};

module.exports = UCHIHA_CONSTANTS;