const menu = (
  prefix,
  NomeDoBot,
  numerodono_ofc,
  sender,
  NickDono,
  pushname,
  SoDono,
  isPremium,
  version,
  adivinha,
  time,
  date,
) => {
  return `╭⭑ * ☆『 𝐌𝐄𝐍𝐔 - 𝐒𝐇𝐈𝐙𝐔𝐊𝐔-𝐁𝐎𝐓 ☆ 』*⭑╮
│ *_Olá, @${sender.split('@')[0]}!_*
│ *_♡ Seja bem-vindo(a) ♡_*
│
│ ☆⤷ 🤖 𝐁𝐎𝐓: ${NomeDoBot} 
│ ☆⤷ 🆙 𝐕𝐄𝐑𝐒𝐀̃𝐎: ${version}
│ ☆⤷ ⚙️ 𝐏𝐑𝐄𝐅𝐈𝐗𝐎: ${prefix}
│ ☆⤷ ⏰ 𝐇𝐎𝐑𝐀: ${time}
│ ☆⤷ 📆 𝐃𝐀𝐓𝐀: ${date}
│ ☆⤷ 👑 𝐃𝐎𝐍𝐎: ${NickDono}
│ ☆⤷ 📞 𝐂𝐎𝐍𝐓𝐀𝐓𝐎: wa.me/${numerodono_ofc}
╰⭑───────────────────⭑╯

╭⭑ *☆ 𝐃𝐈𝐕𝐄𝐑𝐒𝐎𝐒 𝐌𝐄𝐍𝐔𝐒 ☆*⭑╮
├☆➤ ${prefix}Menuadm
├☆➤ ${prefix}Menudono 
├☆➤ ${prefix}Brincadeiras
├☆➤ ${prefix}Downloads
├☆➤ ${prefix}Menuvip
├☆➤ ${prefix}Alternadores
├☆➤ ${prefix}Menufig
├☆➤ ${prefix}Animes
├☆➤ ${prefix}Logos
├☆➤ ${prefix}Pesquisas
├☆➤ ${prefix}Menuadulto
├☆➤ ${prefix}SemPrefixo
├☆➤ ${prefix}Efeitos
╰⭑──────────────⭑╯

╭⭑ ☆ 𝐈𝐍𝐅𝐎 𝐒𝐇𝐈𝐙𝐔𝐊𝐔 ☆⭑╮
├☆➤ ${prefix}ping <...>
├☆➤ ${prefix}dono <...>
├☆➤ ${prefix}infodono <...>
├☆➤ ${prefix}canal <...>
├☆➤ ${prefix}criador <...>
├☆➤ ${prefix}suporte-dono <...>
├☆➤ ${prefix}jpzin <...>
├☆➤ ${prefix}idiomas <...>
├☆➤ ${prefix}saldo <usa pra saber>
├☆➤ ${prefix}carteira < usa pra saber>
├☆➤ ${prefix}bug <Erro ou bug>
├☆➤ ${prefix}sugestao <nova ideia>
├☆➤ ${prefix}avalie <sua nota>
╰⭑────────────⭑╯
`;
};

exports.menu = menu;

// MENU DE ADMINISTRADORES

const menuadm = (prefix, sender) => {
  return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭═══════════════════════ ┐ 
├➤ ☆ *𝐌𝐄𝐍𝐔 𝐀𝐃𝐌𝐈𝐍𝐒* ☆
╰═══════════════════════ ┘
╭═══════════════════ ┐
├☆➤ ${prefix}Antiimg <1/0>
├☆➤ ${prefix}Antiflood <5/10>
├☆➤ ${prefix}Antivideo <1/0>
├☆➤ ${prefix}Antiaudio <1/0>
├☆➤ ${prefix}Antisticker <1/0>
├☆➤ ${prefix}Antiloc <1/0>
├☆➤ ${prefix}Anticontato <1/0>
├☆➤ ${prefix}Antidoc <1/0>
├☆➤ ${prefix}Antilinkgp <1/0>
├☆➤ ${prefix}Antilinkhard <1/0>
├☆➤ ${prefix}Antifake <1/0>
├☆➤ ${prefix}Antinotas <1/0>
├☆➤ ${prefix}Anticatalogo <1/0>
├☆➤ ${prefix}Antipalavrao <1/0>
├☆➤ ${prefix}Limitecaracteres <1/0>
├☆➤ ${prefix}Bemvindo <1/0>
├☆➤ ${prefix}Bemvindo2 <1/0>
├☆➤ ${prefix}Simih <1/0>
├☆➤ ${prefix}Simih2 <1/0>
├☆➤ ${prefix}Autosticker <1/0>
├☆➤ ${prefix}Autorepo <1/0>
├☆➤ ${prefix}AutoDownload <1/0>
├☆➤ ${prefix}Leveling <1/0>
├☆➤ ${prefix}Modonsfw <1/0>
├☆➤ ${prefix}Odelete <1/0>
├☆➤ ${prefix}x9visuunica <1/0>
├☆➤ ${prefix}x9 <1/0>
├☆➤ ${prefix}Legenda_imagem <Texto>
├☆➤ ${prefix}Legenda_video <Texto>
├☆➤ ${prefix}Legenda_estrangeiro <Texto>
├☆➤ ${prefix}Legendabv <Texto>
├☆➤ ${prefix}Legendasaiu <Texto>
├☆➤ ${prefix}Legendabv2 <Texto>
├☆➤ ${prefix}Legendasaiu2 <Texto>
├☆➤ ${prefix}So_adm <1/0>
├☆➤ ${prefix}Fechargp <ex: 00:00:00>
├☆➤ ${prefix}Fechamento <ex: 00:00:00>
├☆➤ ${prefix}Abrirgp <ex: 00:00:00>
├☆➤ ${prefix}Abertura <ex: 00:00:00>
├☆➤ ${prefix}Removerhorario
├☆➤ ${prefix}Listanegra <Número>
├☆➤ ${prefix}Tirardalista <Número>
├☆➤ ${prefix}ListanegraG <Número>
├☆➤ ${prefix}TirardalistaG <Número>
├☆➤ ${prefix}Multiprefixo <1/0>
├☆➤ ${prefix}Add_prefixo
├☆➤ ${prefix}Tirar_prefixo
├☆➤ ${prefix}Banghost
├☆➤ ${prefix}Mute <@mencionar>
├☆➤ ${prefix}Desmute <@mencionar>
├☆➤ ${prefix}Reviver <Responder-mensagem>
├☆➤ ${prefix}Kick <@>
├☆➤ ${prefix}Ban <Responder-mensagem>
├☆➤ ${prefix}Promover <@>
├☆➤ ${prefix}Rebaixar <@>
├☆➤ ${prefix}Changegroup <all/adms>
├☆➤ ${prefix}Rmphotogp
├☆➤ ${prefix}Ephemeral <1/0>
├☆➤ ${prefix}Descgp <Texto>
├☆➤ ${prefix}Nomegp <Nome>
├☆➤ ${prefix}Totag <Mencionar algo>
├☆➤ ${prefix}Grupo <f/a>
├☆➤ ${prefix}Status
├☆➤ ${prefix}Limpar
├☆➤ ${prefix}Atividades
├☆➤ ${prefix}Linkgp
├☆➤ ${prefix}Grupoinfo
├☆➤ ${prefix}Hidetag <txt>
├☆➤ ${prefix}Marcar
├☆➤ ${prefix}Marcar2
├☆➤ ${prefix}Caiu
├☆➤ ${prefix}Trolar
├☆➤ ${prefix}Anagrama <1/0>
├☆➤ ${prefix}Antipalavra <1/0>
├☆➤ ${prefix}Criartabela
├☆➤ ${prefix}Tabelagp
├☆➤ ${prefix}Aceitar
├☆➤ ${prefix}Recusarsolis
├☆➤ ${prefix}Versolicitacoes
├☆➤ ${prefix}Adv <@>
├☆➤ ${prefix}Advertência <@>
├☆➤ ${prefix}Removeradv <@>
├☆➤ ${prefix}Removeradvertencia <@>
├☆➤ ${prefix}Listaadv
├☆➤ ${prefix}Listaadvertidos
├☆➤ ${prefix}Listafakes
├☆➤ ${prefix}Banfake
╰═══════════════════ ┘
`;
};

exports.menuadm = menuadm;

// MENU DE DONO

const menudn = (prefix, sender) => {
  return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭═══════════════════ ⪩
╰╮☆ *𝐌𝐄𝐍𝐔 𝐏𝐑𝐎𝐏𝐑𝐈𝐄𝐓𝐀́𝐑𝐈𝐎* ☆
╭┤➮ Usuário: @${sender.split('@')[0]}
┃╰══ ⪨
╰╦══════════════════ ⪨
├☆➤ ${prefix}Bangp
├☆➤ ${prefix}Unbangp
├☆➤ ${prefix}Fotomenu <Marcar-img>
├☆➤ ${prefix}Videomenu
├☆➤ ${prefix}Blockcmd <cmd>
├☆➤ ${prefix}Unblockcmd <cmd>
├☆➤ ${prefix}Cmdpremlist
├☆➤ ${prefix}Addcmdprem <cmd>
├☆➤ ${prefix}Delcmdprem <cmd>
├☆➤ ${prefix}Fundobemvindo <Marcar-img>
├☆➤ ${prefix}Fundosaiu <Marcar-img>
├☆➤ ${prefix}Serpremium
├☆➤ ${prefix}Listagp
├☆➤ ${prefix}Antipalavrão <1/0>
├☆➤ ${prefix}Antiligar <1/0>
├☆➤ ${prefix}Modoaluguel <1/0>
├☆➤ ${prefix}Aluguel <ex: 1 dia>
├☆➤ ${prefix}Ver_aluguel
├☆➤ ${prefix}Varaluguel
├☆➤ ${prefix}Removeraluguel
├☆➤ ${prefix}Remover_aluguel
├☆➤ ${prefix}Fazertm <Texto>
├☆➤ ${prefix}Rgtm
├☆➤ ${prefix}Tirardatm
├☆➤ ${prefix}Listatm
├☆➤ ${prefix}Infocmd_add <cmd/texto>
├☆➤ ${prefix}Infocmd_del <cmd>
├☆➤ ${prefix}Visualizarmsg
├☆➤ ${prefix}Console
├☆➤ ${prefix}Botoff
├☆➤ ${prefix}Boton
├☆➤ ${prefix}Verificado-global
├☆➤ ${prefix}Audio-menu
├☆➤ ${prefix}Addpalavra <palavrão>
├☆➤ ${prefix}Delpalavra <palavrão>
├☆➤ ${prefix}Ativo
├☆➤ ${prefix}Rmpalavra_forca <palavra>
├☆➤ ${prefix}Addpalavras_forca <titulo|tema|dica>
├☆➤ ${prefix}Ausente <fale-oq-faz>
├☆➤ ${prefix}Delpremium <@>
├☆➤ ${prefix}Addpremium <@>
├☆➤ ${prefix}Privphotobot <all/cntt/ngm>
├☆➤ ${prefix}Privaddgroup <all/cntt/ngm>
├☆➤ ${prefix}Descriçãogp <digite-algo>
├☆➤ ${prefix}Block <@>
├☆➤ ${prefix}Unblock <@>
├☆➤ ${prefix}Setprefix <prefixo-novo>
├☆➤ ${prefix}Bcgp <TM-PRA-PV-MEMBROS>
┃╰══ ⪨
╰═══════════════════ ⪨
`;
};

exports.menudn = menudn;

// MENU DE BRINCADEIRAS..

const menubn = (prefix, sender) => {
  return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭═══════════════════ ⪩
╰╮☆ *𝐌𝐄𝐍𝐔 𝐃𝐄 𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀𝐒* ☆
╭┤ ✧➤ Usuário: @${sender.split('@')[0]}
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤ *𝐉𝐎𝐆𝐎𝐒 𝐈𝐍𝐓𝐄𝐑𝐀𝐓𝐈𝐕𝐎𝐒*
┃├☆➤ ${prefix}Jogodavelha <@marca>
┃├☆➤ ${prefix}Anagrama <1/0>
┃├☆➤ ${prefix}Gartic <1/0>
┃├☆➤ ${prefix}Quizanimal <1/0>
┃├☆➤ ${prefix}Enigma <1/0>
┃├☆➤ ${prefix}R-forca <letra>
┃├☆➤ ${prefix}Resetforca
┃├☆➤ ${prefix}Jogodaforca
┃├☆➤ ${prefix}Vab
┃├☆➤ ${prefix}Eununca
┃├☆➤ ${prefix}Ppt
┃├☆➤ ${prefix}Cassino
┃├☆➤ ${prefix}Apostar <valor>
┃├☆➤ ${prefix}Pescar
┃├☆➤ ${prefix}Churrasco
┃├☆➤ ${prefix}Steal <@marca>
┃├☆➤ ${prefix}1xbcbets <valor>
┃├☆➤ ${prefix}Hackear <@marca>
┃├☆➤ ${prefix}Mina <coordenada>
┃├☆➤ ${prefix}Minado <dificuldade>
┃├☆➤ ${prefix}Minareset
┃├☆➤ ${prefix}Mineshelp
┃├☆➤ ${prefix}Minatips
┃├☆➤ ${prefix}Akinator
┃├☆➤ ${prefix}Respaki <0-4>
┃├☆➤ ${prefix}Finaki <sim/não>
┃├☆➤ ${prefix}Resetaki
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤ *𝐃𝐈𝐕𝐄𝐑𝐒𝐀̃𝐎*
┃├☆➤ ${prefix}Gay <@marca>
┃├☆➤ ${prefix}Feio <@marca>
┃├☆➤ ${prefix}Corno <@marca>
┃├☆➤ ${prefix}Vesgo <@marca>
┃├☆➤ ${prefix}Bebado <@marca>
┃├☆➤ ${prefix}Gostoso <@marca>
┃├☆➤ ${prefix}Gostosa <@marca>
┃├☆➤ ${prefix}Beijo <@marca>
┃├☆➤ ${prefix}Matar <@marca>
┃├☆➤ ${prefix}Tapa <@marca>
┃├☆➤ ${prefix}Soco <@marca>
┃├☆➤ ${prefix}Bater <@marca>
┃├☆➤ ${prefix}Chute <@marca>
┃├☆➤ ${prefix}Dogolpe <@marca>
┃├☆➤ ${prefix}Nazista <@marca>
┃├☆➤ ${prefix}Fuder <@marca>
┃├☆➤ ${prefix}Sexo <@marca>
┃├☆➤ ${prefix}Sex <@marca>
┃├☆➤ ${prefix}Comer <@marca>
┃├☆➤ ${prefix}Comer2 <@marca>
┃├☆➤ ${prefix}Comer3 <@marca>
┃├☆➤ ${prefix}Boquete <@marca>
┃├☆➤ ${prefix}Pgbunda <@marca>
┃├☆➤ ${prefix}Pgpeito <@marca>
┃├☆➤ ${prefix}Apolpar <@marca>
┃├☆➤ ${prefix}Sentar <@marca>
┃├☆➤ ${prefix}Gozar <@marca>
┃├☆➤ ${prefix}Goza <@marca>
┃├☆➤ ${prefix}Morder <@marca>
┃├☆➤ ${prefix}Carinho <@marca>
┃├☆➤ ${prefix}Cu <@marca>
┃├☆➤ ${prefix}Cagar <@marca>
┃├☆➤ ${prefix}Tirarft <@marca>
┃├☆➤ ${prefix}Louça <@marca>
┃├☆➤ ${prefix}LavarLouça <@marca>
┃├☆➤ ${prefix}Chance <algo>
┃├☆➤ ${prefix}Surubao <quantidade>
┃├☆➤ ${prefix}Casal
┃├☆➤ ${prefix}Casal2
┃├☆➤ ${prefix}Quando <pergunta>
┃├☆➤ ${prefix}Rankgay
┃├☆➤ ${prefix}Rankgado
┃├☆➤ ${prefix}Rankcorno
┃├☆➤ ${prefix}Rankgostoso
┃├☆➤ ${prefix}Rankgostosa
┃├☆➤ ${prefix}Ranknazista
┃├☆➤ ${prefix}Rankotakus
┃├☆➤ ${prefix}Rankpau
┃├☆➤ ${prefix}Rank <algo>
┃├☆➤ ${prefix}Mencionar <algo>
┃├☆➤ ${prefix}Death <nome>
┃╰══ ⪨
╰═══════════════════ ⪨
`;
};

exports.menubn = menubn;

//MENU DE DOWNLOADS

const menudl = (prefix, sender) => {
  return `╭═════════════════════ ⪩
╰╮ ☆ *𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒* ☆
╭┤ ✧➤ Usuário: @${sender.split('@')[0]}
┃╰════════════════════ ⪨
╰╦═══ 『 MP3 / Áudios 』 ═══════ ⪨
╭┤ ✧➤ ${prefix}Play <nome da música>
┃├☆➤ ${prefix}Play2 <nome da música>
┃├☆➤ ${prefix}Play3 <nome da música>
┃├☆➤ ${prefix}Playdl <nome da música/vídeo>
┃├☆➤ ${prefix}Deezer <nome da música>
┃├☆➤ ${prefix}Ytmp3 <link do YouTube>
┃├☆➤ ${prefix}Ytmp3-2 <link do YouTube>
┃├☆➤ ${prefix}Tiktokaudio <link>
┃├☆➤ ${prefix}Tiktok_audio <link>
┃├☆➤ ${prefix}Tiktokmp3 <link>
┃├☆➤ ${prefix}Tiktok_mp3 <link>
┃├☆➤ ${prefix}Instaaudio <link>
┃├☆➤ ${prefix}Insta_audio <link>
┃├☆➤ ${prefix}Instamp3 <link>
┃├☆➤ ${prefix}Insta_mp3 <link>
┃╰════════════════════ ⪨
╰╦══ 『 MP4 / Vídeos 』 ═══════ ⪨
╭┤ ✧➤ ${prefix}Playvideo <nome do vídeo>
┃├☆➤ ${prefix}Play_video <nome do vídeo>
┃├☆➤ ${prefix}Playvideo2 <nome do vídeo>
┃├☆➤ ${prefix}Play_video2 <nome do vídeo>
┃├☆➤ ${prefix}Playvideo3 <nome do vídeo>
┃├☆➤ ${prefix}Play_video3 <nome do vídeo>
┃├☆➤ ${prefix}Ytmp4 <link do YouTube>
┃├☆➤ ${prefix}Ytmp4-2 <link do YouTube>
┃├☆➤ ${prefix}Instagram <link>
┃├☆➤ ${prefix}Instagram2 <link>
┃├☆➤ ${prefix}Insta <link>
┃├☆➤ ${prefix}Insta2 <link>
┃├☆➤ ${prefix}Intavideo <link>
┃├☆➤ ${prefix}Inta_video <link>
┃├☆➤ ${prefix}Intamp4 <link>
┃├☆➤ ${prefix}Inta_mp4 <link>
┃├☆➤ ${prefix}Kwai <link>
┃├☆➤ ${prefix}Kwaivideo <link>
┃├☆➤ ${prefix}Kwai_video <link>
┃├☆➤ ${prefix}Tiktok <link>
┃├☆➤ ${prefix}Tiktokvideo <link>
┃├☆➤ ${prefix}Tiktok_video <link>
┃├☆➤ ${prefix}Tiktok2 <link>
┃├☆➤ ${prefix}Tiktokvideo2 <link>
┃├☆➤ ${prefix}Tiktok_video2 <link>
┃├☆➤ ${prefix}Tiktok3 <link>
┃├☆➤ ${prefix}Tiktokvideo3 <link>
┃├☆➤ ${prefix}Tiktok_video3 <link>
┃├☆➤ ${prefix}Tiktok4 <link>
┃├☆➤ ${prefix}Tiktokvideo4 <link>
┃├☆➤ ${prefix}Tiktok_video4 <link>
┃╰════════════════════ ⪨
╰╦══ 『 Imagens / Fotos 』 ════ ⪨
╭┤ ✧➤ ${prefix}Pinterest <nome>
┃├☆➤ ${prefix}Pinterest2 <pesquisa>
┃├☆➤ ${prefix}Gimage <ex: gato>
┃├☆➤ ${prefix}Gerarimg <nome>
┃├☆➤ ${prefix}Aiimage <prompt>
┃╰════════════════════ ⪨
`;
};

exports.menudl = menudl;
// MENU PREMIUM

const menuvip = (prefix, sender) => {
  return `╭═════════════════════ ⪩
╰╮ ☆ * 𝐌𝐄𝐍𝐔 𝐏𝐑𝐄𝐌𝐈𝐔𝐌* ☆
╭┤ ✧➤ Usuário: @${sender.split('@')[0]}
┃╰════════════════════ ⪨
╰╦═══════ 『 ☆ 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 ☆ 』 ═══════ ⪨
╭┤ ✧➤ ${prefix}Destrava
┃├☆➤ ${prefix}Destrava2
┃├☆➤ ${prefix}Ddd <DDD>
┃├☆➤ ${prefix}GerarCPF
┃├☆➤ ${prefix}PremiumList
┃├☆➤ ${prefix}Tinyurl <link>
┃├☆➤ ${prefix}Cuttly <link>
┃├☆➤ ${prefix}Bitly <link>
┃├☆➤ ${prefix}Celular <nome>
┃├☆➤ ${prefix}Scep <número>
┃├☆➤ ${prefix}Cotacao <moeda>
┃├☆➤ ${prefix}Sip <número>
┃├☆➤ ${prefix}Igstalk <@usuário>
┃╰════════════════════ ⪨
╰╦═══════ 『 ☆ 𝐂𝐎𝐍𝐒𝐔𝐋𝐓𝐀𝐒 ☆ 』 ═══════ ⪨
╭┤ ✧➤ ${prefix}Nome
┃├☆➤ ${prefix}Nome2
┃├☆➤ ${prefix}Cpf <número>
┃├☆➤ ${prefix}Cpf2 <número>
┃├☆➤ ${prefix}Cpf3 <número>
┃├☆➤ ${prefix}Cpf4 <número>
┃├☆➤ ${prefix}Tel <número>
┃├☆➤ ${prefix}Tel2 <número>
┃├☆➤ ${prefix}Tel3 <número>
┃├☆➤ ${prefix}Parentes <cpf>
┃├☆➤ ${prefix}Beneficios <cpf>
┃├☆➤ ${prefix}Score <cpf>
┃├☆➤ ${prefix}Placa <placa>
┃├☆➤ ${prefix}Placa2 <placa>
┃├☆➤ ${prefix}Cnpj <número>
┃├☆➤ ${prefix}Site <domínio>
┃├☆➤ ${prefix}Email <email>
┃├☆➤ ${prefix}Bin <número>
┃├☆➤ ${prefix}Rg <número>
┃╰════════════════════ ⪨
`;
};

exports.menuvip = menuvip;

const menual = (prefix, sender) => {
  return `╭═════════════════════ ⪩
╰╮ ☆ *𝐌𝐄𝐍𝐔 𝐀𝐋𝐓𝐄𝐑𝐀𝐃𝐎𝐑𝐄𝐒* ☆
╭┤ ✧➤ Seja bem-vindo(a) ao Menu de Efeitos em Áudio e Vídeo!
┃╰════════════════════ ⪨

╰╦══════ 『 Efeitos em Vídeo 』 ══════ ⪨
╭┤ ✧➤ ${prefix}videolento <mencionar vídeo>
┃├☆➤ ${prefix}videorapido <mencionar vídeo>
┃├☆➤ ${prefix}videocontrario <mencionar vídeo>
┃├☆➤ ${prefix}espelharvideo <mencionar vídeo>
┃├☆➤ ${prefix}pretoebranco <mencionar vídeo>
┃├☆➤ ${prefix}negativo <mencionar vídeo>
┃├☆➤ ${prefix}desfocar <mencionar vídeo>
┃├☆➤ ${prefix}saturar <mencionar vídeo>
┃├☆➤ ${prefix}tomp3 <mencionar vídeo>
┃╰════════════════════ ⪨

╰╦══════ 『 Efeitos em Áudio 』 ══════ ⪨
╭┤ ✧➤ ${prefix}audiolento <mencionar áudio>
┃├☆➤ ${prefix}audiorapido <mencionar áudio>
┃├☆➤ ${prefix}grave <mencionar áudio>
┃├☆➤ ${prefix}grave2 <mencionar áudio>
┃├☆➤ ${prefix}esquilo <mencionar áudio>
┃├☆➤ ${prefix}estourar <mencionar áudio>
┃├☆➤ ${prefix}bass <mencionar áudio>
┃├☆➤ ${prefix}bass2 <mencionar áudio>
┃├☆➤ ${prefix}vozmenino <mencionar áudio>
┃├☆➤ ${prefix}eco <mencionar áudio>
┃├☆➤ ${prefix}robo <mencionar áudio>
┃├☆➤ ${prefix}demonio <mencionar áudio>
┃╰════════════════════ ⪨
`;
};

exports.menual = menual;
/////////////

const menufig = (prefix, sender) => {
  return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭═════════════════════ ⪩
╰╮ ☆ *𝐌𝐄𝐍𝐔 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒* ☆
╭┤ ✧➤ Bem-vindo(a) ao mundo das figurinhas!
┃╰════════════════════ ⪨

╰╦══════ 『 Figurinhas 』 ══════ ⪨
╭┤ ✧➤ ${prefix}attp <texto>
┃├☆➤ ${prefix}attp2 <texto>
┃├☆➤ ${prefix}ttp <texto>
┃├☆➤ ${prefix}ttp2 <texto>
┃├☆➤ ${prefix}ttp3 <texto>
┃├☆➤ ${prefix}ttp4 <texto>
┃├☆➤ ${prefix}ttp5 <texto>
┃├☆➤ ${prefix}ttp6 <texto>
┃├☆➤ ${prefix}fsticker <marcar foto>
┃├☆➤ ${prefix}figurinhas <quantidade>
┃├☆➤ ${prefix}coreana <quantidade>
┃├☆➤ ${prefix}figflork <quantidade>
┃├☆➤ ${prefix}figanimes <quantidade>
┃├☆➤ ${prefix}figanimais <quantidade>
┃├☆➤ ${prefix}figemoji <quantidade>
┃├☆➤ ${prefix}figmemes <quantidade>
┃├☆➤ ${prefix}figbebe <quantidade>
┃├☆➤ ${prefix}figdesenho <quantidade>
┃├☆➤ ${prefix}qc <mensagem desejada>
┃├☆➤ ${prefix}figuale
┃├☆➤ ${prefix}sticker <marcar foto>
┃├☆➤ ${prefix}s <marcar foto>
┃├☆➤ ${prefix}f <marcar foto>
┃├☆➤ ${prefix}toimg <marcar sticker>
┃├☆➤ ${prefix}togif <marcar sticker>
┃├☆➤ ${prefix}emoji <😅+🥰>
┃├☆➤ ${prefix}semoji <😅+🥰>
┃├☆➤ ${prefix}emojimix <😏+😍>
┃╰════════════════════ ⪨
`;
};

exports.menufig = menufig;

const menuanimes = (prefix, sender) => {
  return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭═════════════════════ ⪩
╰╮ ☆ *𝐌𝐄𝐍𝐔 𝐀𝐍𝐈𝐌𝐄𝐒* ☆
╭┤ ✧➤ Bem-vindo(a) ao mundo dos animes!
┃╰════════════════════ ⪨

╰╦══════ 『 Personagens 』 ══════ ⪨
╭┤ ✧➤ ${prefix}gremory
┃├☆➤ ${prefix}loli
┃├☆➤ ${prefix}mikasa
┃├☆➤ ${prefix}cosplay
┃├☆➤ ${prefix}waifu
┃├☆➤ ${prefix}toukachan
┃├☆➤ ${prefix}megumin
┃├☆➤ ${prefix}keneki
┃├☆➤ ${prefix}onepiece
┃├☆➤ ${prefix}tsunade
┃├☆➤ ${prefix}sasuke
┃├☆➤ ${prefix}madara
┃├☆➤ ${prefix}itachi
┃├☆➤ ${prefix}inori
┃├☆➤ ${prefix}hestia
┃├☆➤ ${prefix}chitoge
┃├☆➤ ${prefix}emilia
┃├☆➤ ${prefix}avasawa
┃├☆➤ ${prefix}asuna
┃├☆➤ ${prefix}deidara
┃├☆➤ ${prefix}rize
┃├☆➤ ${prefix}nezuko
┃├☆➤ ${prefix}sagari
┃├☆➤ ${prefix}minato
┃├☆➤ ${prefix}naruto
┃├☆➤ ${prefix}hinata
┃├☆➤ ${prefix}elaina
┃├☆➤ ${prefix}erza
┃├☆➤ ${prefix}eba
┃├☆➤ ${prefix}shinka
┃├☆➤ ${prefix}kagura
┃├☆➤ ${prefix}shina
┃├☆➤ ${prefix}asuke
┃├☆➤ ${prefix}akiyama
┃├☆➤ ${prefix}kotori
┃├☆➤ ${prefix}kaga
┃├☆➤ ${prefix}shizuki
┃├☆➤ ${prefix}kaori
┃├☆➤ ${prefix}boruto
┃├☆➤ ${prefix}chiho
┃├☆➤ ${prefix}tejina
┃├☆➤ ${prefix}yomeko
┃├☆➤ ${prefix}shinomiya
┃├☆➤ ${prefix}yotsuba
┃├☆➤ ${prefix}shota

╰╦══════ 『 Animes em Edit 』 ══════ ⪨
╭┤ ✧➤ ${prefix}edit-naruto
┃├☆➤ ${prefix}edit-sakura
┃├☆➤ ${prefix}edit-ale
┃├☆➤ ${prefix}edit-slayer
┃├☆➤ ${prefix}edit-dragon
┃├☆➤ ${prefix}edit-dragonball
┃├☆➤ ${prefix}edit-chain
┃├☆➤ ${prefix}edit-hunters
┃├☆➤ ${prefix}edit-bleach
┃╰════════════════════ ⪨
`;
};

exports.menuanimes = menuanimes;

// MENU DE LOGOS

const menulg = (prefix, sender) => {
  return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭═════════════════════ ⪩
╰╮ ☆ *𝐌𝐄𝐍𝐔 𝐋𝐎𝐆𝐎𝐒* ☆
╭┤ ✧➤ bem vindo(a) ao menu de logos
┃╰════════════════════ ⪨

╰╦══════ 『 logos personalizadas 』 ══════ ⪨
╭┤ ✧➤ ${prefix}1917 <texto>
┃├☆➤ ${prefix}blackpink <texto>
┃├☆➤ ${prefix}cria <texto>
┃├☆➤ ${prefix}anime1 <texto>
┃├☆➤ ${prefix}anime2 <texto>
┃├☆➤ ${prefix}ff1 <texto>
┃├☆➤ ${prefix}ff2 <texto>
┃├☆➤ ${prefix}game <texto>
┃├☆➤ ${prefix}entardecer <texto>
┃├☆➤ ${prefix}indian <texto>
┃├☆➤ ${prefix}ffrose <texto>
┃├☆➤ ${prefix}ffgren <texto>
┃├☆➤ ${prefix}chufuyu <texto>
┃├☆➤ ${prefix}wolf <texto>
┃├☆➤ ${prefix}dragonred <texto>
┃├☆➤ ${prefix}hello <texto>
┃├☆➤ ${prefix}japan <texto>
┃├☆➤ ${prefix}recycle <texto>
┃├☆➤ ${prefix}retropixel <texto>
┃├☆➤ ${prefix}spaces <texto>
┃├☆➤ ${prefix}rugs <texto>
┃├☆➤ ${prefix}tribe <texto>
┃├☆➤ ${prefix}fx <texto>
┃├☆➤ ${prefix}silver <texto>
┃├☆➤ ${prefix}straypixels <texto>
┃├☆➤ ${prefix}scifi <texto>
┃├☆➤ ${prefix}marketplace <texto>
┃├☆➤ ${prefix}ribbon <texto>
┃├☆➤ ${prefix}lido <texto>
┃├☆➤ ${prefix}steampunk <texto>
┃├☆➤ ${prefix}battlebanzai <texto>
┃├☆➤ ${prefix}flame <texto>
┃├☆➤ ${prefix}glitch <texto>
┃├☆➤ ${prefix}write <texto>
┃├☆➤ ${prefix}advancedglow <texto>
┃├☆➤ ${prefix}typography <texto>
┃├☆➤ ${prefix}pixelglitch <texto>
┃├☆➤ ${prefix}neonglitch <texto>
┃├☆➤ ${prefix}flag <texto>
┃├☆➤ ${prefix}deleting <texto>
┃├☆➤ ${prefix}flag3d <texto>
┃├☆➤ ${prefix}clouds <texto>
┃├☆➤ ${prefix}joker <texto>
┃├☆➤ ${prefix}blood <texto>
┃├☆➤ ${prefix}horror <texto>
┃├☆➤ ${prefix}halloween <texto>
┃├☆➤ ${prefix}cemetery <texto>
┃├☆➤ ${prefix}sunset <texto>
┃├☆➤ ${prefix}3druby <texto>
┃├☆➤ ${prefix}ligatures <texto>
┃├☆➤ ${prefix}metal3d <texto>
┃├☆➤ ${prefix}wooden3d <texto>
┃├☆➤ ${prefix}frozen <texto>
┃├☆➤ ${prefix}neondevil <texto>
┃├☆➤ ${prefix}lighteffects <texto>
┃├☆➤ ${prefix}dragonball <texto>
┃├☆➤ ${prefix}galaxy <texto>
┃├☆➤ ${prefix}freecreate <texto>
┃├☆➤ ${prefix}makingneon <texto>
┃├☆➤ ${prefix}royal <texto>
┃├☆➤ ${prefix}galaxywallpaper <texto>
┃├☆➤ ${prefix}sandsummer <texto>
┃├☆➤ ${prefix}multicoloredneon <texto>
┃├☆➤ ${prefix}summerbeach <texto>
┃├☆➤ ${prefix}logomaker <texto>
┃├☆➤ ${prefix}effectclouds <texto>
┃├☆➤ ${prefix}cartoon <texto>
┃├☆➤ ${prefix}underwater <texto>
┃├☆➤ ${prefix}papercut <texto>
┃├☆➤ ${prefix}patercolor <texto>
┃├☆➤ ${prefix}blackpinklogo <texto>
┃├☆➤ ${prefix}gradient <texto>
┃├☆➤ ${prefix}glowing <texto>
┃├☆➤ ${prefix}logo <texto>
┃├☆➤ ${prefix}logo2 <texto>
┃├☆➤ ${prefix}logo3 <texto>
┃├☆➤ ${prefix}logo4 <texto>
┃├☆➤ ${prefix}logo5 <texto>
╰════════════════════ ⪨
`;
};

exports.menulg = menulg;

const menupq = (prefix, sender, pushname, SoDono) => {
  return `╭─〔 ☆ *𝐌𝐄𝐍𝐔 𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀𝐒*  ☆ 〕─✧
├☆➤ bem vindo(a) ao menu pesquisas
╰─────────────────────────────
╭➮ 
┃├☆➤ ${prefix}nerding <assunto escolar>
┃├☆➤ ${prefix}pensador <frase motivacional>
┃├☆➤ ${prefix}nasa <última missão>
┃├☆➤ ${prefix}clima <nome da cidade>
┃├☆➤ ${prefix}book <nome do livro>
┃├☆➤ ${prefix}movie <nome do filme>
┃├☆➤ ${prefix}movie2 <título do filme>
┃├☆➤ ${prefix}imdb <título do filme/série>
┃├☆➤ ${prefix}imdbinfo <nome do filme/série>
┃├☆➤ ${prefix}animetv <nome do anime>
┃├☆➤ ${prefix}serie <nome da série>
┃├☆➤ ${prefix}lyrics <nome da música>
┃├☆➤ ${prefix}amazon <nome do produto>
┃├☆➤ ${prefix}americanas <produto desejado>
┃├☆➤ ${prefix}submarino <produto>
┃├☆➤ ${prefix}playstore <nome do app>
┃├☆➤ ${prefix}aptoide <nome do jogo/app>
┃├☆➤ ${prefix}signo <nome do signo>
┃├☆➤ ${prefix}googlesrc <termo de busca>
┃├☆➤ ${prefix}wikipedia <assunto>
┃├☆➤ ${prefix}pinterest <imagem desejada>
┃├☆➤ ${prefix}gimage <tema da imagem>
┃├☆➤ ${prefix}ytsearch <nome do vídeo>
┃├☆➤ ${prefix}google <qualquer coisa>
┃├☆➤ ${prefix}games <gênero de jogo>
┃├☆➤ ${prefix}jogos <free fire>
┃╰══ ⪨
╰╦══════════════════ ⪨`;
};
exports.menupq = menupq;

const menuadl = (prefix, pushname, sender) => {
  return `╭───────〔 *𝐌𝐄𝐍𝐔 𝐀𝐃𝐔𝐋𝐓𝐎* 〕────────✧
│ ➮ Seja bem-vindo(a) ao *Menu de Conteúdos +18*!  
╰─────────────────────────

╭────〔 *🖼️ PLAQS PERSONALIZADAS* 〕─────✧
┃├☆➤ ${prefix}plaq1 <seu nome>
┃├☆➤ ${prefix}plaq2 <seu nome>
┃├☆➤ ${prefix}plaq3 <seu nome>
┃├☆➤ ${prefix}plaq4 <seu nome>
┃├☆➤ ${prefix}plaq5 <seu nome>
┃├☆➤ ${prefix}plaq6 <seu nome>
┃├☆➤ ${prefix}plaq7 <seu nome>
┃├☆➤ ${prefix}plaq8 <seu nome>
┃├☆➤ ${prefix}plaq9 <seu nome>
┃├☆➤ ${prefix}plaq10 <seu nome>
┃├☆➤ ${prefix}plaq11 <seu nome>
┃├☆➤ ${prefix}plaq12 <seu nome>
┃├☆➤ ${prefix}plaq13 <seu nome>
┃├☆➤ ${prefix}plaq14 <seu nome>
┃├☆➤ ${prefix}plaq15 <seu nome>
┃├☆➤ ${prefix}plaq16 <seu nome>
╰───────────────────────────

╭────〔 *🔞 IMAGENS +18* 〕─────✧
┃├☆➤ ${prefix}ass
┃├☆➤ ${prefix}bdsm
┃├☆➤ ${prefix}cum
┃├☆➤ ${prefix}ero
┃├☆➤ ${prefix}femdom
┃├☆➤ ${prefix}foot
┃├☆➤ ${prefix}gangbang
┃├☆➤ ${prefix}glasses
┃├☆➤ ${prefix}pussy
┃├☆➤ ${prefix}neko
┃├☆➤ ${prefix}neko2
┃├☆➤ ${prefix}tetas
╰───────────────────────────

╭─────〔 *🎥 VÍDEOS +18* 〕──────✧
┃├☆➤ ${prefix}hentai (envia no PV)
╰───────────────────────────
`;
};
exports.menuadl = menuadl;

const menusem = (prefix, sender) => {
  return `╭──────────────────╮
┆》𝐒𝐄𝐌 𝐏𝐑𝐄𝐅𝐈𝐗𝐎《
╰══════════════════╯
╭───────────────────╮
》 isAutorepo Ativo
╰═══════════════════╯
╭───────────────────╮
┆ ☆ Bot
┆ ☆ Bot Ruim
┆ ☆ Bot Corno
┆ ☆ Corno
┆ ☆ Bom Dia
┆ ☆ Boa Tarde
┆ ☆ Boa Noite
┆ ☆ Boa Madrugada
╰═══════════════════╯
`;
};
exports.menusem = menusem;

const menuef = (prefix, sender, pushname) => {
  return `╭─〔 *☆ 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐄𝐅𝐄𝐈𝐓𝐎𝐒 𝐄𝐌 𝐈𝐌𝐀𝐆𝐄𝐍𝐒 ☆* 〕─╮
│ Seja bem-vindo(a) ao Menu de efeitos Em imagens~  
╰────────────────────────────────

╭─〔 *☆ EFEITOS DE IMAGEM ☆* 〕─╮
┃│☆➤ ${prefix}Hd <mencionar imagem>
┃│☆➤ ${prefix}Hd2 <mencionar imagem>
┃│☆➤ ${prefix}Tohd <mencionar imagem>
┃│☆➤ ${prefix}Upscale <mencionar imagem>
┃│☆➤ ${prefix}Toghibli <mencionar imagem>
┃│☆➤ ${prefix}Legenda-Foto <mencionar imagem>
┃│☆➤ ${prefix}Legenda-Imagem <mencionar imagem>
┃│☆➤ ${prefix}Comunismo <mencionar imagem>
┃│☆➤ ${prefix}Mms <mencionar imagem>
┃│☆➤ ${prefix}Bobross <mencionar imagem>
┃│☆➤ ${prefix}Rmfundo <mencionar imagem>
┃│☆➤ ${prefix}Remover_fundo <mencionar imagem>
╰────────────────────────────────
`;
};
exports.menuef = menuef;

const menup = (prefix, NomeDoBot, sender) => {
  return `╭─❖【 🕯️ 𝙄𝙣𝙛𝙤-𝘽𝙤𝙩/𝙐𝙨𝙚𝙧 】❖─╮
│ ☠️ 𝘽𝙤𝙩: ${NomeDoBot}
│ 🩸 𝙐𝙨𝙪𝙖𝙧𝙞𝙤: @${sender.split('@')[0]}
╰───────────────⛧

╭─❖【 ⚰️ 𝘿𝙞𝙫𝙚𝙧𝙨𝙤𝙨-𝙈𝙚𝙣𝙪𝙨 】❖─╮
│ 🗝️ ${prefix}Menuadm
│ 🗝️ ${prefix}Menudono
│ 🗝️ ${prefix}Brincadeiras
│ 🗝️ ${prefix}Downloads
│ 🗝️ ${prefix}Menuvip
│ 🗝️ ${prefix}Alteradores
│ 🗝️ ${prefix}Figurinhas
│ 🗝️ ${prefix}Animes
│ 🗝️ ${prefix}Logos
│ 🗝️ ${prefix}Pesquisas
│ 🗝️ ${prefix}Menuadulto
│ 🗝️ ${prefix}Semprefixo
│ 🗝️ ${prefix}Efeitos
╰───────────────⛧

╭─❖【 🕸️ 𝘾𝙢𝙙𝙨-𝙈𝙚𝙢𝙗𝙧𝙤𝙨 】❖─╮
│ ☠️ ${prefix}Infobot
│ 🌒 ${prefix}Idiomas
│ 🩸 ${prefix}Carteira
│ 🪰 ${prefix}Bug
│ 👑 ${prefix}Infodono
│ 🕯️ ${prefix}Sugestao
│ ✨ ${prefix}Avalie
│ 📜 ${prefix}Infocmd
│ 🔮 ${prefix}Infowelcome
╰───────────────⛧

╭─❖【 ☠️ 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘̧𝙤̃𝙚𝙨 】❖─╮
│ 📶 ${prefix}Ping
│ 🧠 ${prefix}Atividade
│ 🏅 ${prefix}Rankativo
│ 🕯️ ${prefix}Checkativo
│ 🎖️ ${prefix}Ranklevel
╰───────────────⛧

╭─❖【 🕷️ 𝙋𝙚𝙨𝙦𝙪𝙞𝙨𝙖𝙨 】❖─╮
│ 📜 ${prefix}Nerding
│ 🧠 ${prefix}Pensador
│ 🚀 ${prefix}Nasa
│ 🌫️ ${prefix}Clima
│ 📖 ${prefix}Book
│ 🎬 ${prefix}Movie
│ 🎥 ${prefix}Movie2
│ 🎭 ${prefix}Imdb
│ 🎭 ${prefix}Imdbinfo
│ 📺 ${prefix}Animetv
│ 📺 ${prefix}Serie
│ 🎼 ${prefix}Lyrics
│ 🛒 ${prefix}Amazon
│ 🛍️ ${prefix}Americanas
│ 🎭 ${prefix}Submarino
│ 📲 ${prefix}Playstore
│ 📲 ${prefix}Aptoide
│ ♋ ${prefix}Signo
│ 🕷️ ${prefix}Googlesrc
│ 📘 ${prefix}Wikipedia
│ 🕸️ ${prefix}Pinterest
│ 🕸️ ${prefix}Gimage
│ 🎞️ ${prefix}Ytplaylist
│ 🔍 ${prefix}Ytsearch
│ 🕹️ ${prefix}Games
╰───────────────⛧

╭─❖【 🔮 𝙄𝙣𝙩𝙚𝙡𝙞𝙜𝙚̂𝙣𝙘𝙞𝙖-𝘼𝙧𝙩𝙞𝙛𝙞𝙘𝙞𝙖𝙡 】❖─╮
│ 🧠 ${prefix}Gpt
│ 🧠 ${prefix}Gpt2
│ 🧠 ${prefix}Gpt4
│ ✍️ ${prefix}Totext
╰───────────────⛧

╭─❖【 🕯️ 𝙁𝙞𝙜𝙪𝙧𝙞𝙣𝙝𝙖𝙨 】❖─╮
│ ✒️ ${prefix}Ttp
│ ✒️ ${prefix}Attp
│ 📄 ${prefix}Fsticker
│ 🖼️ ${prefix}Sticker
│ 🎭 ${prefix}Toimg
│ 🎞️ ${prefix}Togif
│ ✍️ ${prefix}Roubar
│ 🗨️ ${prefix}Qc
│ 🧸 ${prefix}Figurinhas
│ 👹 ${prefix}Figumemes
│ 😈 ${prefix}Figuemoji
│ 🧛 ${prefix}Figuanime
│ 👶 ${prefix}Figubebe
│ 🎎 ${prefix}Figucoreana
│ 🥀 ${prefix}Figuflork
│ 🐾 ${prefix}Figuanimais
│ 🎨 ${prefix}Figudesenho
│ 🧟 ${prefix}Figuraiva
│ 🕹️ ${prefix}Figuroblox
│ 🎲 ${prefix}Figaleatoria
╰───────────────⛧

╭─❖【 🎭 𝘾𝙤𝙢𝙖𝙣𝙙𝙤𝙨-𝘼𝙡𝙚𝙖𝙩𝙤𝙧𝙞𝙤𝙨 】❖─╮
│ 🔊 ${prefix}Gtts
│ 🕯️ ${prefix}Tagme
│ 🃏 ${prefix}Emoji
│ 🌀 ${prefix}Emojimix
│ 🅰️ ${prefix}Tabela
│ 📖 ${prefix}Conselhobiblico
│ 💔 ${prefix}Cantadas
│ 🧸 ${prefix}Simi
│ 📷 ${prefix}Perfil
│ 🔢 ${prefix}Calcular
│ ☎️ ${prefix}Ringtone
│ 🧛 ${prefix}Fazernick
│ ✉️ ${prefix}Ptvmsg
│ 🌐 ${prefix}Traduzir
╰───────────────⛧
╰───❖【 ☠️ shizuku-Bot ☠️ 】❖───
`;
};
exports.menup = menup;

const termuxTxt = (prefix, pushname, sender) => {
  return `‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎╭┈┈ ❨ ⚙️ ❩ • *INSTALAÇÃO TERMUX* • ❨ ⚙️ ❩ ┈┈╮
│ Olá, ${pushname}... 🔮 
│ Veja abaixo os comandos essenciais
│ para configurar seu *Termux* e rodar seu bot!
╰┬──────────────────────────────┈┈┈⟢

┆ 🕸️ ➤ *[1]* termux-setup-storage
┆ ╰ (Permite acesso às suas pastas)

┆ 🕸️ ➤ *[2]* apt-get update -y
┆ 🕸️ ➤ *[3]* apt-get upgrade -y
┆ ╰ (Atualiza os repositórios do sistema)

┆ 🕸️ ➤ *[4]* pkg update -y
┆ 🕸️ ➤ *[5]* pkg upgrade -y
┆ ╰ (Atualiza pacotes do Termux)

┆ 🕸️ ➤ *[6]* pkg install nodejs -y
┆ 🕸️ ➤ *[7]* pkg install nodejs-lts -y
┆ ╰ (Instala o *NodeJS*, necessário pro bot)

┆ 🕸️ ➤ *[8]* pkg install ffmpeg -y
┆ ╰ (Necessário para processar mídias)

┆ 🕸️ ➤ *[9]* pkg install wget -y
┆ ╰ (Para baixar arquivos da internet)

┆ 🕸️ ➤ *[10]* pkg install tesseract -y
┆ ╰ (Reconhecimento de texto em imagens)

┆ 🕸️ ➤ *[11]* pkg install git -y
┆ ╰ (Para clonar projetos do Github)

┆ 🕸️ ➤ *[12]* termux-setup-storage
┆ ╰ (Repete para garantir acesso às pastas)

╭┈ ❨ 📂 ❩ • *ACESSANDO SUA PASTA* • ❨ 📂 ❩ ┈╮
┆ 🕸️ ➤ cd /storage/emulated/0/*nomedapasta*
┆ ┇ ou
┆ 🕸️ ➤ cd /storage/downloads/*nomedapasta*
┆ ╰ (Acesse onde você colocou os arquivos do bot)

╭┈ ❨ 🔥 ❩ • *LIGANDO O BOT* • ❨ 🔥 ❩ ┈╮
┆ 🕸️ ➤ npm start
┆ ┇ ou
┆ 🕸️ ➤ sh start.sh
┆ ╰ (Inicia o bot, escolha qualquer um)

╰┬──────────────────────────────┈┈┈⟢
 │ ✔️ *Pronto! Seu bot está rodando!*
 │ 🚀 Agora é só escanear o QR Code e usar!
 │ 
 │ 💀 Qualquer dúvida, fale com meu criador:
 │ ☠️ https://wa.me/559391103822
 │ 🔥 Ou digite: *${prefix}criador*
 │ 
 │ 🔗 *By: jpzinh*
╰──────────────────────────────────────⟢`;
};
exports.termuxTxt = termuxTxt;
