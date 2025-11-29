const menub = (prefix, NickDono, NomeDoBot, sender, packname) => {
  return `
╭━━⪩ 愛 Informações 愛 ⪨━━
│◦ Bot: ${NomeDoBot}
│◦ Dono: ${NickDono}
│◦ Biblioteca: Baileys MD
│◦ Prefixo: ${prefix}
╰━━━━━─「愛」─━━━━━
╭━━━⪩ *Menus* ⪨━━━
│◦ ${prefix}Lojinha
│◦ ${prefix}Menubasico
│◦ ${prefix}Menudono
│◦ ${prefix}Menuadm
│◦ ${prefix}Menupremium
│◦ ${prefix}Efeitosimg
│◦ ${prefix}Logos 
│◦ ${prefix}Brincadeiras
│◦ ${prefix}Animes 
│◦ ${prefix}Menufig 
│◦ ${prefix}Downloads
│◦ ${prefix}Menucity
│◦ ${prefix}Menu18
│◦ ${prefix}Infodono
│◦ ${prefix}Menusemprefixo
╰━━━━━─「愛」─━━━━━
╭━━━⪩ *LOGOS* ⪨━━━
│◦ ${prefix}hackneon [TXT]
│◦ ${prefix}fpsmascote [TXT]
│◦ ${prefix}equipemascote [TXT]
│◦ ${prefix}txtquadrinhos [TXT]
│◦ ${prefix}ffavatar [TXT]
│◦ ${prefix}mascotegame [TXT]
│◦ ${prefix}angelglx [TXT]
│◦ ${prefix}gizquadro [TXT]
│◦ ${prefix}wingeffect [TXT]
│◦ ${prefix}blackpink [TXT]
│◦ ${prefix}girlmascote [TXT]
│◦ ${prefix}logogame [TXT]
│◦ ${prefix}cria [TXT] 
│◦ ${prefix}anime1 [TXT]
│◦ ${prefix}game [TXT]
│◦ ${prefix}ff2 [TXT]
│◦ ${prefix}anime2 [TXT]
│◦ ${prefix}entardecer [TXT]
│◦ ${prefix}dragonredn [TXT]
│◦ ${prefix}wolf [TXT]
│◦ ${prefix}anime2 [TXT]
│◦ ${prefix}cria anime1 [TXT]
│◦ ${prefix}game [TXT]
│◦ ${prefix}ff1 [TXT]
│◦ ${prefix}chufuyu [TXT]
│◦ ${prefix}ffgren [TXT]
│◦ ${prefix}ffrose [TXT]
│◦ ${prefix}entardecer [TXT]
│◦ ${prefix}indian [TXT]
╰━━━━━─「愛」─━━━━━
╭━━━⪩ *FIGURINHAS* ⪨━━━
│◦ ${prefix}Attp (Seu texto)
│◦ ${prefix}Attp1 (Seu texto)
│◦ ${prefix}Attp2 (Seu texto)
│◦ ${prefix}Attp3 (Seu texto)
│◦ ${prefix}Attp4 (Seu texto)
│◦ ${prefix}Attp5 (Seu texto)
│◦ ${prefix}Attp6 (Seu texto)
│◦ ${prefix}Attp7 (Seu texto)
│◦ ${prefix}Fsticker (Marcar-foto)
│◦ ${prefix}Sticker (Marcar-foto)
│◦ ${prefix}Toimg (Marcar-sticker)
│◦ ${prefix}Togif (Marcar-sticker)
│◦ ${prefix}Figaleatoria
╰━━━━━─「愛」─━━━━━
╭━━━⪩ *Download etc* ⪨━━━
│◦ ${prefix}print (xvideos.com)
│◦ ${prefix}pesquisa (mc Kevin)
│◦ ${prefix}soundcloud (link)
│◦ ${prefix}play (nome)
│◦ ${prefix}play2 (nome)
│◦ ${prefix}play3 (nome)
│◦ ${prefix}playvideo (nome)
│◦ ${prefix}tiktokaudio (link)
│◦ ${prefix}tiktok (link)
│◦ ${prefix}ytmp3 (link)
│◦ ${prefix}ytmp4 (link)
│◦ ${prefix}ytdoc (link)
│◦ ${prefix}ytsearch (nome)
│◦ ${prefix}spotify (link)
│◦ ${prefix}twitteraudio (link)
│◦ ${prefix}twittervideo (link)
│◦ ${prefix}Instagram (link)
│◦ ${prefix}Instagramaudio (link)
╰━━━━━─「愛」─━━━━━`;
};

exports.menub = menub;

// MENU DE ADMINISTRADORES

const adms = (prefix, sender) => {
  return `​
╭═══════════════════ ⪨
┃👤Usuário: @${sender.split('@')[0]}
╰╦══════════════════ ⪨
╭┤𝐌𝐄𝐍𝐔 𝐀𝐃𝐌
│◦ ${prefix}Antiimg (1/0)
│◦ ${prefix}Antivideo (1/0)
│◦ ${prefix}Antiaudio (1/0)
│◦ ${prefix}Antisticker (1/0)
│◦ ${prefix}Antiloc (1/0)
│◦ ${prefix}Anticontato (1/0)
│◦ ${prefix}Antidoc (1/0)
│◦ ${prefix}Antilinkgp (1/0)
│◦ ${prefix}Antilinkhard (1/0)
│◦ ${prefix}Antifake (1/0)
│◦ ${prefix}Antinotas (1/0)
│◦ ${prefix}Anticatalogo (1/0)
│◦ ${prefix}Antipalavrao (1/0)
│◦ ${prefix}Limitecaracteres (1/0)
│◦ ${prefix}Bemvindo (1/0)
│◦ ${prefix}Bemvindo2 (1/0)
│◦ ${prefix}Simih (1/0)
│◦ ${prefix}Simih2 (1/0)
│◦ ${prefix}Autosticker (1/0)
│◦ ${prefix}Autorepo (1/0)
│◦ ${prefix}Leveling (1/0)
│◦ ${prefix}Modonsfw (1/0)
│◦ ${prefix}Odelete (1/0)
│◦ ${prefix}x9visuunica (1/0)
│◦ ${prefix}x9 (1/0)
│◦ ${prefix}Limitecomandos
│◦ ${prefix}Tempocmd (segundos)
│◦ ${prefix}Legenda_imagem (Texto)
│◦ ${prefix}Legenda_video (Texto)
│◦ ${prefix}Legenda_estrangeiro (Texto)
│◦ ${prefix}Legendabv (Texto)
│◦ ${prefix}Legendasaiu (Texto)
│◦ ${prefix}Legendabv2 (Texto)
│◦ ${prefix}Legendasaiu2 (Texto)
│◦ ${prefix}So_adm
│◦ ${prefix}Requestgp -list
│◦ ${prefix}Requestgp -a numero
│◦ ${prefix}Requestgp -r numero
│◦ ${prefix}Fechar-gp
│◦ ${prefix}Listanegra (Número)
│◦ ${prefix}Tirardalista (Número)
│◦ ${prefix}ListanegraG (Número)
│◦ ${prefix}TirardalistaG (Número)
│◦ ${prefix}Multiprefixo (1/0)
│◦ ${prefix}Add_prefixo
│◦ ${prefix}Tirar_prefixo
│◦ ${prefix}Banghost
│◦ ${prefix}Mute (@mencionar)
│◦ ${prefix}Desmute (@mencionar)
│◦ ${prefix}Add 5511.. (Para-adicionar) 
│◦ ${prefix}Reviver (Responder-mensagem)
│◦ ${prefix}Kick [@] (Para-remover) 
│◦ ${prefix}Ban (Responder-mensagem)
│◦ ${prefix}Promover [@] (Ser-admin)
│◦ ${prefix}Rebaixar [@] (Rebaixar-adm)
│◦ ${prefix}Changegroup (all/adms)
│◦ ${prefix}Rmphotogp (Remover ft do gp)
│◦ ${prefix}Ephemeral (Desativar ou ativar as  mds temp)
│◦ ${prefix}Descgp (Texto)
│◦ ${prefix}Nomegp (Nome)
│◦ ${prefix}Totag (Mencionar algo)
│◦ ${prefix}Grupo (f/a)
│◦ ${prefix}Status
│◦ ${prefix}Limpar (texto-invisível-gp)
│◦ ${prefix}Atividades (DO-GRUPO)
│◦ ${prefix}Linkgp
│◦ ${prefix}Grupoinfo
│◦ ${prefix}Blockcmdgp (cmd)
│◦ ${prefix}Unblockcmdgp (cmd)
│◦ ${prefix}Listbcmdgp
│◦ ${prefix}Hidetag (txt) (marcação)
│◦ ${prefix}Marcar (marca tds do gp)
│◦ ${prefix}Marcar2 (Marca-tds-wa.me)
│◦ ${prefix}Anagrama (1/0)
│◦ ${prefix}Antipalavra (1/0)
╰═══════════════════ ⪨
`;
};

exports.adms = adms;

// MENU DE DONO

const menudono = (prefix, sender) => {
  return `​
╭══════════════ ⪩
┃👤 Usuário: @${sender.split('@')[0]}
┃⚙️ Config: ${prefix}Configurar-bot
╰╦═════════════ ⪨
╭┤𝐌𝐄𝐍𝐔 𝐃𝐎𝐍𝐎
│◦ ${prefix}Bangp
│◦ ${prefix}totalcmd
│◦ ${prefix}Unbangp
│◦ ${prefix}Fotomenu (Marcar-img) 
│◦ ${prefix}Cmdpremlist
│◦ ${prefix}Addcmdprem (cmd)
│◦ ${prefix}Delcmdprem (cmd)
│◦ ${prefix}Fundobemvindo (marcar-img)
│◦ ${prefix}Fundosaiu (marcar-img)
│◦ ${prefix}Serpremium
│◦ ${prefix}Listagp
│◦ ${prefix}Antipalavrão (1/0)
│◦ ${prefix}Antiligar (1/0)
│◦ ${prefix}antipv3 (1/0)
│◦ ${prefix}Modoaluguel (1/0)
│◦ ${prefix}Fazertm (Texto)
│◦ ${prefix}Rgtm
│◦ ${prefix}Tirardatm
│◦ ${prefix}Listatm
│◦ ${prefix}Infocmd_add (cmd/texto) 
│◦ ${prefix}Infocmd_del (cmd) 
│◦ ${prefix}Visualizarmsg
│◦ ${prefix}Botoff (Funcionalidade do bot)
│◦ ${prefix}Boton (Funcionalidade do bot)
│◦ ${prefix}Verificado-global (Selos)
│◦ ${prefix}Audio-menu (Audio do menu)
│◦ ${prefix}Addpalavra (palavrão)
│◦ ${prefix}Delpalavra (palavrão)
│◦ ${prefix}Ativo
│◦ ${prefix}Rmpalavra_forca (palavra)
│◦ ${prefix}Addpalavras_forca (titulo|tema|dica)
│◦ ${prefix}Listbcmdglobal - Lista de cmd block global.
│◦ ${prefix}Blockcmdg (comando) - Bloquear comando.
│◦ ${prefix}Unblockcmdg (comando) - Desbloquear comando.
│◦ ${prefix}Buscarsbcity (@marcar)
│◦ ${prefix}Addpix (numero/valor)
│◦ ${prefix}Setpix (numero/valor)
│◦ ${prefix}Delpix (numero/valor)
│◦ ${prefix}Zerarsc (numero)
│◦ ${prefix}Gerargf (code)
│◦ ${prefix}Delgf (code)
│◦ ${prefix}Addrent (558298.../dias)
│◦ ${prefix}Tirarrent (dias)
│◦ ${prefix}Delrent
│◦ ${prefix}Cortesia24
│◦ ${prefix}Listrent
│◦ ${prefix}Lastrent
│◦ ${prefix}Codelistrent
│◦ ${prefix}Gerarcoderent (556596.../dias)
│◦ ${prefix}Delcoderent (código)
│◦ ${prefix}Gerarcodecort
│◦ ${prefix}Ausente (fale-oq-faz)
│◦ ${prefix}Delpremium (@marcar/dias)
│◦ ${prefix}Addpremium (@marcar/dias)
│◦ ${prefix}Privphotobot (all/cntt/ngm)
│◦ ${prefix}Privaddgroup (all/cntt/ngm)
│◦ ${prefix}Descriçãogp (digite-algo)
│◦ ${prefix}Block [@] (bloq de usar cmds) 
│◦ ${prefix}Unblock [@] (desbloquear) 
│◦ ${prefix}Setprefix (prefixo-novo)
│◦ ${prefix}Bcgp (TM-PRA-PV-MEMBROS)
│◦ ${prefix}Addlevel (quantidade)
│◦ ${prefix}Tirarlevel (quantidade)
│◦ ${prefix}Addxp (quantidade)
│◦ ${prefix}Tirarxp (quantidade)
│◦ ${prefix}Blocklevellist
│◦ ${prefix}Blocklevel (@marcar)
│◦ ${prefix}Unblocklevel (@marcar)
│◦ ${prefix}Rmlevel (@marcar)
╰═══════════════════ ⪨
`;
};

exports.menudono = menudono;

// MENU DE LOGOS

const menulogos = (prefix, sender) => {
  return `​
╭═══════════════════ ⪨
┃👤Usuário: @${sender.split('@')[0]}
╰╦══════════════════ ⪨
╭┤𝐋𝐎𝐆𝐎 1 𝐓𝐄𝐗𝐓𝐎
│◦ ${prefix}hackneon [TXT]
│◦ ${prefix}fpsmascote [TXT]
│◦ ${prefix}equipemascote [TXT]
│◦ ${prefix}txtquadrinhos [TXT]
│◦ ${prefix}ffavatar [TXT]
│◦ ${prefix}mascotegame [TXT]
│◦ ${prefix}angelglx [TXT]
│◦ ${prefix}gizquadro [TXT]
│◦ ${prefix}wingeffect [TXT]
│◦ ${prefix}blackpink [TXT]
│◦ ${prefix}girlmascote [TXT]
│◦ ${prefix}logogame [TXT]
│◦ ${prefix}cria [TXT] 
│◦ ${prefix}anime1 [TXT]
│◦ ${prefix}game [TXT]
│◦ ${prefix}ff2 [TXT]
│◦ ${prefix}anime2 [TXT]
│◦ ${prefix}entardecer [TXT]
│◦ ${prefix}dragonredn [TXT]
│◦ ${prefix}wolf [TXT]
│◦ ${prefix}anime2 [TXT]
│◦ ${prefix}cria anime1 [TXT]
│◦ ${prefix}game [TXT]
│◦ ${prefix}ff1 [TXT]
│◦ ${prefix}chufuyu [TXT]
│◦ ${prefix}ffgren [TXT]
│◦ ${prefix}ffrose [TXT]
│◦ ${prefix}entardecer [TXT]
│◦ ${prefix}indian [TXT]
╰═══════════════════ ⪨
`;
};

exports.menulogos = menulogos;

// MENU DE ALTERAR ÁUDIOS E VÍDEOS

const alteradores = (prefix, sender) => {
  return `​
╭══════════════ ⪩
┃👤Usuário: @${sender.split('@')[0]}
╰╦═════════════ ⪨
╭┤𝐀𝐋𝐓𝐄𝐑𝐀𝐑-𝐕𝐈𝐃𝐄𝐎
│◦ ${prefix}Videolento (marca)
│◦ ${prefix}Videorapido (marca)
│◦ ${prefix}Videocontrario (marca)
╰╦══════════════════ ⪨
╭┤𝐀𝐋𝐓𝐄𝐑𝐀𝐑-𝐀𝐔𝐃𝐈𝐎
│◦ ${prefix}Audiolento (marca)
│◦ ${prefix}Audiorapido (marca)
│◦ ${prefix}Grave (marca)
│◦ ${prefix}Grave2 (marca)
│◦ ${prefix}Esquilo (marca)
│◦ ${prefix}Estourar (marca)
│◦ ${prefix}Bass (marca)
│◦ ${prefix}Bass2 (marca)
│◦ ${prefix}Vozmenino (marca)
╰═══════════════════ ⪨
`;
};

exports.alteradores = alteradores;

// MENU PREMIUM

const menuprem = (prefix, sender) => {
  return `​
╭══════════════ ⪩
┃👤Usuário: @${sender.split('@')[0]}
╰╦═════════════ ⪨
╭┤𝐌𝐄𝐍𝐔-𝐏𝐑𝐄𝐌𝐈𝐔𝐌
│◦ ${prefix}ddd (31)
│◦ ${prefix}Destrava
│◦ ${prefix}Destrava2
│◦ ${prefix}Listaddd (Número)
│◦ ${prefix}Gerarcpf
│◦ ${prefix}Premiumlist
│◦ ${prefix}Tinyurl (Link)
│◦ ${prefix}Cuttly (Link)
│◦ ${prefix}Bitly (Link)
│◦ ${prefix}Celular (Nome)
│◦ ${prefix}Scep (Número)
│◦ ${prefix}Cotacao (Moeda)
│◦ ${prefix}Dinextenso (Valor)
│◦ ${prefix}Sip (Número)
│◦ ${prefix}Validarcnpj (número)
│◦ ${prefix}Igstalk (@usuário)
│◦ ${prefix}Validarcpf (número)
╰╦═════════════ ⪨
╭┤ 𝐏𝐔𝐗𝐀𝐑 𝐃𝐀𝐃𝐎𝐒
│◦ ${prefix}placa (nome)
│◦ ${prefix}placa2 (nome)
│◦ ${prefix}cpf (número)
│◦ ${prefix}cpf2 (número)
│◦ ${prefix}cpf3 (numero)
│◦ ${prefix}impostos (nome)
│◦ ${prefix}cns (nome)
│◦ ${prefix}score (numero)
│◦ ${prefix}beneficios (numero)
│◦ ${prefix}ip (numero)
│◦ ${prefix}parentes (nome)
│◦ ${prefix}site (site)
│◦ ${prefix}chassi (número)
│◦ ${prefix}vacina (nome)
│◦ ${prefix}vizinhos (nome)
│◦ ${prefix}rg (numero)
│◦ ${prefix}bin (nome)
│◦ ${prefix}compras (nome)
│◦ ${prefix}nome (nome)
│◦ ${prefix}nome2 (nome)
│◦ ${prefix}cep (número)
│◦ ${prefix}telefone (número)
│◦ ${prefix}telefone2 (número)
│◦ ${prefix}motor (número)
│◦ ${prefix}cnpj (número)
╰═══════════════════ ⪨
`;
};

exports.menuprem = menuprem;

// MENU DE BRINCADEIRAS..

const brincadeiras = (prefix, sender) => {
  return `​
╭══════════════ ⪩
┃👤Usuário: @${sender.split('@')[0]}
╰╦═════════════ ⪨
╭┤𝐉𝐎𝐆𝐎𝐒
│◦ ${prefix}Jogodavelha (@Marcar) 
│◦ ${prefix}Anagrama (1/0)
│◦ ${prefix}Gartic (1/0)
│◦ ${prefix}Whatmusic (1/0)
│◦ ${prefix}Quizanimal (1/0)
│◦ ${prefix}Enigma (1/0)
│◦ ${prefix}R-forca (Letra)
│◦ ${prefix}Resetforca (Resetar)
│◦ ${prefix}Jogodaforca (Iniciar)
│◦ ${prefix}Vab (Você prefere?)
│◦ ${prefix}Eununca (Eu nunca, eu já)
│◦ ${prefix}Ppt (Pedra/Papel/Tesoura) 
│◦ ${prefix}Cassino
│◦ ${prefix}meme
│◦ ${prefix}Mina (coordenada(s))
│◦ ${prefix}Minado (dificuldade)
│◦ ${prefix}Minareset (resetar)
│◦ ${prefix}Mineshelp (info)
│◦ ${prefix}Minatips (dicas)
│◦ ${prefix}Akinator (iniciar jogo)
│◦ ${prefix}Resetaki (resetar akinator)
╰╦══════════════════ ⪨
╭┤𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀𝐒
│◦ ${prefix}Gay (marca (@))
│◦ ${prefix}Feio (marca (@))
│◦ ${prefix}Corno (marca (@))
│◦ ${prefix}Vesgo (marca (@))
│◦ ${prefix}Bebado (marca (@))
│◦ ${prefix}Gostoso (marca (@))
│◦ ${prefix}Gostosa (marca (@))
│◦ ${prefix}Beijo (marca (@))
│◦ ${prefix}Matar (marca (@))
│◦ ${prefix}Tapa (marca (@))
│◦ ${prefix}Chute (marca (@))
│◦ ${prefix}Dogolpe (marca (@))   
│◦ ${prefix}Nazista (marca (@))
│◦ ${prefix}personalidade (marca (@))
│◦ ${prefix}Chance (fale algo) 
│◦ ${prefix}Surubao (Quantidade) 
│◦ ${prefix}Casal (Casal do grupo)
│◦ ${prefix}Quando (Perguntar)
│◦ ${prefix}Mencionar (fale algo)
│◦ ${prefix}Death (Nome)
╰╦══════════════════ ⪨
╭┤𝐑𝐀𝐍𝐊
│◦ ${prefix}Rankzueiros
│◦ ${prefix}Rankgay (5 gays)
│◦ ${prefix}Rankgado (5 gados)
│◦ ${prefix}Rankcorno (5 cornos)
│◦ ${prefix}Rankgostoso (5 gostosos)
│◦ ${prefix}Rankgostosa (5 gostosas)
│◦ ${prefix}Ranknazista (5 nazistas)
│◦ ${prefix}Rankotakus (5 otakus)
│◦ ${prefix}ranklixo (5 otakus)
│◦ ${prefix}Rankpau (5 pauzudos)
╰═══════════════════ ⪨
╭══════════════ ⪩
│◦ ${prefix}saude_geral
│◦ ${prefix}saude_exercicios_diarios
│◦ ${prefix}saude_alimentacao_saudavel
│◦ ${prefix}saude_rotina_sono
│◦ ${prefix}saude_hidratacao
│◦ ${prefix}saude_mental
│◦ ${prefix}saude_condicionamento_fisico
│◦ ${prefix}saude_cardiovascular
│◦ ${prefix}saude_respiratoria
│◦ ${prefix}saude_relaxamento
│◦ ${prefix}saude_flexibilidade
│◦ ${prefix}saude_ossea
│◦ ${prefix}saude_equilibrio_emocional
│◦ ${prefix}saude_digestiva
│◦ ${prefix}saude_muscular
│◦ ${prefix}saude_mental_trabalho
│◦ ${prefix}saude_imunologica
│◦ ${prefix}saude_energia_fisica
│◦ ${prefix}saude_relacionamentos
│◦ ${prefix}interesses_casa
│◦ ${prefix}interesses_escola
│◦ ${prefix}interesses_curso
│◦ ${prefix}interesses_rua
│◦ ${prefix}interesses_shopping
│◦ ${prefix}interesses_parque
│◦ ${prefix}interesses_praia
│◦ ${prefix}interesses_academia
│◦ ${prefix}interesses_trabalho
│◦ ${prefix}interesses_cinema
│◦ ${prefix}interesses_supermercado
│◦ ${prefix}interesses_livraria
│◦ ${prefix}interesses_biblioteca
│◦ ${prefix}interesses_museu
│◦ ${prefix}interesses_restaurante
│◦ ${prefix}interesses_festa
│◦ ${prefix}interesses_estadio
│◦ ${prefix}interesses_aeroporto
│◦ ${prefix}interesses_onibus
│◦ ${prefix}interesses_hospital
│◦ ${prefix}euamor_cachorro
│◦ ${prefix}euamor_mae
│◦ ${prefix}euamor_pai
│◦ ${prefix}euamor_gato
│◦ ${prefix}euamor_cavalo
│◦ ${prefix}euamor_carro
│◦ ${prefix}euamor_natureza
│◦ ${prefix}euamor_comida
│◦ ${prefix}euamor_viagens
│◦ ${prefix}euamor_musica
│◦ ${prefix}euamor_futebol
│◦ ${prefix}euamor_tecnologia
│◦ ${prefix}euamor_esporte
│◦ ${prefix}euamor_ciencia
│◦ ${prefix}euamor_filmes
│◦ ${prefix}euamor_series
│◦ ${prefix}euamor_amigos
│◦ ${prefix}euamor_livros
│◦ ${prefix}euamor_chocolate
│◦ ${prefix}euamor_pizza
│◦ ${prefix}euamor_sol
│◦ ${prefix}euamor_chuva
│◦ ${prefix}euamor_festas
│◦ ${prefix}euamor_artes
│◦ ${prefix}euamor_novelas
│◦ ${prefix}euamor_aventura
│◦ ${prefix}euamor_teatro
│◦ ${prefix}euamor_cozinhar
│◦ ${prefix}euamor_animais
│◦ ${prefix}euamor_familia
│◦ ${prefix}euamor_flor
╰═══════════════════ ⪨
`;
};

exports.brincadeiras = brincadeiras;

// MENU RPG DA CITY

const rpgmenu = (prefix, sender) => {
  return `​
╭══════════════ ⪩
┃👤Usuário: @${sender.split('@')[0]}
╰╦═════════════ ⪨
╭┤き⃟🏙️ 𝐂𝐈𝐓𝐘 𝐎𝐅𝐈𝐂𝐈𝐀𝐋 🏙️⃟⃟き
│◦ ${prefix}Lojadecavalos (Loja de cavalos)
│◦ ${prefix}Estabulo (Info sobre seus cavalos)
│◦ ${prefix}Lojadegalos (Loja de galos)
│◦ ${prefix}Galos (Info sobre seus galos)
│◦ ${prefix}Galinheiro (Info sobre suas galinhas)
│◦ ${prefix}Cruzargg (Cruzar)
│◦ ${prefix}Dadoapostado (dado/valor da aposta)
│◦ ${prefix}Caracoroa (lado/valor da aposta)
│◦ ${prefix}Modorpg (1/0)
│◦ ${prefix}Rgcity (Nome)
│◦ ${prefix}Saircity (Apagar seus registros) 
│◦ ${prefix}Rpglistgp (Lista de registrados)
│◦ ${prefix}Meucity (Suas informações)
│◦ ${prefix}Minhacarteira (Informações Bancárias)
│◦ ${prefix}Rankcity (Os 10 mais ricos da City)
│◦ ${prefix}Codelist (Lista de Códigos GiftCards)
│◦ ${prefix}Resgatargf (code)
│◦ ${prefix}Fazerpix (número/valor)
│◦ ${prefix}Chavepix (@marcar o usuário)
│◦ ${prefix}Meupix (Sua chave pix na City)
│◦ ${prefix}Cassino (valor da aposta)
│◦ ${prefix}1xbcbets (valor da aposta)
│◦ ${prefix}Assaltar (@marcar)
│◦ ${prefix}Minerar
│◦ ${prefix}Retirar (Caso você seja preso)
│◦ ${prefix}Pescaria
│◦ ${prefix}Itenspesca (Comprar os itens)
│◦ ${prefix}Trocarbanco 
╰═══════════════════ ⪨
`;
};

exports.rpgmenu = rpgmenu;

// MENU DE EFEITOS DE IMAGEM

const efeitos = (prefix, sender) => {
  return `​
╭══════════════ ⪩
┃👤Usuário: @${sender.split('@')[0]}
╰╦═════════════ ⪨
╭┤𝐌𝐄𝐍𝐔-𝐃𝐄-𝐄𝐅𝐄𝐈𝐓𝐎𝐒
│◦ ${prefix}lixo (marca uma imagem) 
│◦ ${prefix}lgbt (marca uma imagem) 
│◦ ${prefix}morto (marca uma imagem) 
│◦ ${prefix}preso (marca uma imagem) 
│◦ ${prefix}deletem (marca uma imagem)
│◦ ${prefix}procurado (marca uma imagem) 
│◦ ${prefix}hitler (marca uma imagem) 
│◦ ${prefix}borrar (marca uma imagem) 
│◦ ${prefix}merda (marca uma imagem)
╰══════════════ ⪨
`;
};

exports.efeitos = efeitos;

// MENU ANIMES

const animes = (prefix, sender) => {
  return `​
╭══════════════ ⪩
┃👤Usuário: @${sender.split('@')[0]}
╰╦═════════════ ⪨
╭┤𝐀𝐍𝐈𝐌𝐄𝐒-𝐄𝐃𝐈𝐓𝐒
│◦ ${prefix}Editanime random
│◦ ${prefix}Editanime bleach
│◦ ${prefix}Editanime chainsaw
│◦ ${prefix}Editanime dragonball
│◦ ${prefix}Editanime kimetsu
│◦ ${prefix}Editanime jujutsu
│◦ ${prefix}Editanime naruto
╰╦═════════════ ⪨
╭┤𝐀𝐍𝐈𝐌𝐄𝐒-𝐈𝐌𝐀𝐆𝐄𝐌
│◦ ${prefix}wallpapers4k
│◦ ${prefix}wallpaperanimes
│◦ ${prefix}wallpaperdark
│◦ ${prefix}wallpapervermelho
╰══════════════ ⪨
`;
};

exports.animes = animes;

// INFORMAÇÕES DO PROPRIETÁRIO

const infodono = (prefix, NickDono, numerodn, NomeDoBot, sender) => {
  return `​
╭═══════════════════ ⪩
╰╮𝐈𝐍𝐅𝐎 𝐁𝐎𝐓
╭┤➥ Bot: *${NomeDoBot}*
│◦ Usuário: *@${sender.split('@')[0]}*
│◦ Dono: *${NickDono}*
│◦ Biblioteca: Baileys MD
│◦ Prefixo: ${prefix}
╰╦══════════════════ ⪨
╭┤𝐂𝐌𝐃𝐒-𝐃𝐄-𝐌𝐄𝐌𝐁𝐑O
│◦ ${prefix}Idiomas (Gtts)
│◦ ${prefix}Bug (Questione/Erros) 
│◦ ${prefix}Infodono (Info do dono)
│◦ ${prefix}Sugestao (Dica/Sugestão)
│◦ ${prefix}Avalie (O quanto é bom) 
│◦ ${prefix}Infocmd (Comando) 
│◦ ${prefix}Infowelcome
╰╦══════════════════ ⪨
╭┤𝐂𝐌𝐃𝐒-𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐕𝐎𝐒
│◦ ${prefix}Ping (Velocidade/Up) 
│◦ ${prefix}Atividade (do Grupo)
│◦ ${prefix}Rankativo
│◦ ${prefix}Checkativo (@Marcar)
│◦ ${prefix}Ranklevel (do Grupo) 
│◦ ${prefix}Dados
╰╦══════════════════ ⪨
╭┤𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀𝐒
│◦ ${prefix}Nerding (Nome) 
│◦ ${prefix}Pensador (Nome) 
│◦ ${prefix}Nasa (Ex: 19-10-2007)
│◦ ${prefix}Clima (Cidade)
│◦ ${prefix}Book (Nome do Livro)
│◦ ${prefix}Movie (Nome do Filme)
│◦ ${prefix}Movie2 (Nome do Filme)
│◦ ${prefix}Imdb (Nome do Filme)
│◦ ${prefix}Imdbinfo (Link do Filme)
│◦ ${prefix}Animetv (Nome do Anime)
│◦ ${prefix}Serie (Nome da Série)
│◦ ${prefix}Lyrics (Música) 
│◦ ${prefix}Lyrics2 (Música) 
│◦ ${prefix}Playstore (Nome) 
│◦ ${prefix}Aptoide (Nome)
│◦ ${prefix}Uptodown (Nome)
│◦ ${prefix}Receita (Nome)
│◦ ${prefix}Signo (Signo) 
│◦ ${prefix}Amazon (Nome) 
│◦ ${prefix}Googlesrc (Nome)
│◦ ${prefix}Memedroid
│◦ ${prefix}iFunnyvideo
│◦ ${prefix}Wikipedia (Nome) 
│◦ ${prefix}Pinterest (Nome) 
│◦ ${prefix}Gimage (Nome) 
│◦ ${prefix}Dicionario (Palavra) 
│◦ ${prefix}Ytplaylist (Link)
│◦ ${prefix}Ytsearch (Nome)
│◦ ${prefix}Games (Nome)
╰╦══════════════════ ⪨
╭┤𝐈𝐍𝐓𝐄𝐋𝐈𝐆𝐄𝐍𝐂𝐈𝐀 (𝐈𝐀)
│◦ ${prefix}Corretor (Texto)
│◦ ${prefix}Gpt (Texto)
│◦ ${prefix}Redacao (Tema)
│◦ ${prefix}Totext (Audio)
╰╦══════════════════ ⪨
╭┤𝐍𝐎𝐓𝐈𝐂𝐈𝐀𝐒/𝐉𝐎𝐑𝐍𝐀𝐋
│◦ ${prefix}Getnoticias (Tema)
│◦ ${prefix}Esportenews (Notícias)
│◦ ${prefix}Gamenews (Notícias)
╰╦══════════════════ ⪨
╭┤𝐂𝐌𝐃𝐒-𝐀𝐋𝐄𝐀𝐓𝐎𝐑𝐈𝐎𝐒
│◦ ${prefix}Gtts (Idioma + Texto)
│◦ ${prefix}Tagme 
│◦ ${prefix}Emoji (😏/Whatsapp)
│◦ ${prefix}Emojimix (Emoji+Emoji)
│◦ ${prefix}Tabela (Letras/Simbolos) 
│◦ ${prefix}Conselhobiblico
│◦ ${prefix}Cantadas
│◦ ${prefix}Simi (Hable com ela)  
│◦ ${prefix}Perfil
│◦ ${prefix}Calcular (10 + 10)
│◦ ${prefix}Fakechat (@user/msg1/msg2)
│◦ ${prefix}Morechat (msg1/msg2)
│◦ ${prefix}Obesidade (peso/altura)
│◦ ${prefix}Contardias (DD/MM/YYYY)
│◦ ${prefix}Ringtone (Toque)
│◦ ${prefix}Fazernick (Oq deseja)
│◦ ${prefix}Ptvmsg (Mencione-V)
│◦ ${prefix}Traduzir (Palavra)
│◦ ${prefix}Listaddd (Código do Estado)
│◦ ${prefix}Listabr (Números brasileiros)
│◦ ${prefix}Listaddi (Código do País)
╰═══════════════════ ⪨
`;
};

exports.infodono = infodono;

const menu = (prefix, NickDono, numerodn, NomeDoBot, packname, sender) => {
  return `
╭═══════════════════ ⪩
╰╮き⃟🩸𝐈𝐍𝐅𝐎 𝐁𝐎𝐓🩸⃟き
╭┤➥ Bot: *${NomeDoBot}*
│◦ Usuário: *@${sender.split('@')[0]}*
│◦ Minha Versão: *${packname.version}*
│◦ Dono: *${NickDono}*
│◦ Biblioteca: Baileys MD
│◦ Prefixo: ${prefix}
╰╦══════════════════ ⪨
╭┤𝐂𝐌𝐃𝐒-𝐃𝐄-𝐌𝐄𝐌𝐁𝐑𝐎
│◦ ${prefix}Idiomas (Gtts)
│◦ ${prefix}Bug (Questione/Erros) 
│◦ ${prefix}Infodono (Info do dono)
│◦ ${prefix}Sugestao (Dica/Sugestão)
│◦ ${prefix}Avalie (O quanto é bom) 
│◦ ${prefix}Infocmd (Comando) 
│◦ ${prefix}Infowelcome
╰╦══════════════════ ⪨
╭┤𝐂𝐌𝐃𝐒-𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐕𝐎𝐒
│◦ ${prefix}Ping (Velocidade/Up) 
│◦ ${prefix}Atividade (do Grupo)
│◦ ${prefix}Rankativo
│◦ ${prefix}Checkativo (@Marcar)
│◦ ${prefix}Ranklevel (do Grupo) 
│◦ ${prefix}Dados
╰╦══════════════════ ⪨
╭┤𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀𝐒
│◦ ${prefix}Nerding (Nome) 
│◦ ${prefix}Pensador (Nome) 
│◦ ${prefix}Nasa (Ex: 19-10-2007)
│◦ ${prefix}Clima (Cidade)
│◦ ${prefix}Book (Nome do Livro)
│◦ ${prefix}Movie (Nome do Filme)
│◦ ${prefix}Movie2 (Nome do Filme)
│◦ ${prefix}Imdb (Nome do Filme)
│◦ ${prefix}Imdbinfo (Link do Filme)
│◦ ${prefix}Animetv (Nome do Anime)
│◦ ${prefix}Serie (Nome da Série)
│◦ ${prefix}Lyrics (Música) 
│◦ ${prefix}Lyrics2 (Música) 
│◦ ${prefix}Playstore (Nome) 
│◦ ${prefix}Aptoide (Nome)
│◦ ${prefix}Uptodown (Nome)
│◦ ${prefix}Receita (Nome)
│◦ ${prefix}Signo (Signo) 
│◦ ${prefix}Amazon (Nome) 
│◦ ${prefix}Googlesrc (Nome)
│◦ ${prefix}Memedroid
│◦ ${prefix}iFunnyvideo
│◦ ${prefix}Wikipedia (Nome) 
│◦ ${prefix}Pinterest (Nome) 
│◦ ${prefix}Gimage (Nome) 
│◦ ${prefix}Dicionario (Palavra) 
│◦ ${prefix}Ytplaylist (Link)
│◦ ${prefix}Ytsearch (Nome)
│◦ ${prefix}Games (Nome)
╰╦══════════════════ ⪨
╭┤𝐈𝐍𝐓𝐄𝐋𝐈𝐆𝐄𝐍𝐂𝐈𝐀 (𝐈𝐀)
│◦ ${prefix}Corretor (Texto)
│◦ ${prefix}Gpt (Texto)
│◦ ${prefix}Redacao (Tema)
│◦ ${prefix}Totext (Audio)
╰╦══════════════════ ⪨
╭┤𝐍𝐎𝐓𝐈𝐂𝐈𝐀𝐒/𝐉𝐎𝐑𝐍𝐀𝐋
│◦ ${prefix}Getnoticias (Tema)
│◦ ${prefix}Esportenews (Notícias)
│◦ ${prefix}Gamenews (Notícias)=<
╰╦══════════════════ ⪨
╭┤C𝐌𝐃𝐒-𝐀𝐋𝐄𝐀𝐓𝐎𝐑𝐈𝐎𝐒
│◦ ${prefix}Gtts (Idioma + Texto)
│◦ ${prefix}Tagme 
│◦ ${prefix}Emoji (😏/Whatsapp)
│◦ ${prefix}Emojimix (Emoji+Emoji)
│◦ ${prefix}Tabela (Letras/Simbolos) 
│◦ ${prefix}Conselhobiblico
│◦ ${prefix}Cantadas
│◦ ${prefix}Simi (Hable com ela)  
│◦ ${prefix}Perfil
│◦ ${prefix}Calcular (10 + 10)
│◦ ${prefix}Fakechat (@user/msg1/msg2)
│◦ ${prefix}Morechat (msg1/msg2)
│◦ ${prefix}Obesidade (peso/altura)
│◦ ${prefix}Contardias (DD/MM/YYYY)
│◦ ${prefix}Ringtone (Toque)
│◦ ${prefix}Fazernick (Oq deseja)
│◦ ${prefix}Ptvmsg (Mencione-V)
│◦ ${prefix}Traduzir (Palavra)
│◦ ${prefix}Listaddd (Código do Estado)
│◦ ${prefix}Listabr (Números brasileiros)
│◦ ${prefix}Listaddi (Código do País)
╰═══════════════════ ⪨
`;
};

exports.menu = menu;

// MENU FIGURINHAS

const figurinhas = (prefix, sender) => {
  return `​
╭══════════════ ⪩
┃👤Usuário: @${sender.split('@')[0]}
╰╦═════════════ ⪨
╭┤𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒
│◦ ${prefix}Attp (Seu texto)
│◦ ${prefix}Attp1 (Seu texto)
│◦ ${prefix}Attp2 (Seu texto)
│◦ ${prefix}Attp3 (Seu texto)
│◦ ${prefix}Attp4 (Seu texto)
│◦ ${prefix}Attp5 (Seu texto)
│◦ ${prefix}Attp6 (Seu texto)
│◦ ${prefix}Attp7 (Seu texto)
│◦ ${prefix}Fsticker (Marcar-foto)
│◦ ${prefix}Sticker (Marcar-foto)
│◦ ${prefix}Toimg (Marcar-sticker)
│◦ ${prefix}Togif (Marcar-sticker)
│◦ ${prefix}Roubar (Texto/Texto)
│◦ ${prefix}Figaleatoria
╰══════════════ ⪨
`;
};

exports.figurinhas = figurinhas;

// MENU DOWNLOADS

const downloads = (prefix, sender) => {
  return `​╭━━━⪩ *Download etc* ⪨━━━
│◦ ${prefix}print (xvideos.com)
│◦ ${prefix}pesquisa (mc Kevin)
│◦ ${prefix}soundcloud (link)
│◦ ${prefix}play (nome)
│◦ ${prefix}play2 (nome)
│◦ ${prefix}play3 (nome)
│◦ ${prefix}playvideo (nome)
│◦ ${prefix}tiktokaudio (link)
│◦ ${prefix}tiktok (link)
│◦ ${prefix}ytmp3 (link)
│◦ ${prefix}ytmp4 (link)
│◦ ${prefix}ytdoc (link)
│◦ ${prefix}ytsearch (nome)
│◦ ${prefix}spotify (link)
│◦ ${prefix}twitteraudio (link)
│◦ ${prefix}twittervideo (link)
│◦ ${prefix}Instagram (link)
│◦ ${prefix}Instagramaudio (link)
╰━━━━━─「愛」─━━━━━`;
};

exports.downloads = downloads;

// MENU PORNO

const nsfw = (prefix, sender) => {
  return `​
╭═══════════════════ ⪨
┃👤Usuário: @${sender.split('@')[0]}
╰╦══════════════════ ⪨
╭┤𝐌𝐄𝐍𝐔 +𝟏𝟖 (IMAGEM)
│◦${prefix}gangbang
│◦${prefix}hentai
│◦${prefix}ass
│◦${prefix}bdsm
│◦${prefix}cuckold
│◦${prefix}blowjob
│◦${prefix}cum
╰╦══════════════════ ⪨
╭┤𝐏𝐋𝐀𝐐𝐔𝐈𝐍𝐇𝐀𝐒
│◦ ${prefix}Plaq (Plaquinha)
│◦ ${prefix}Plaq1 (Plaquinha)
│◦ ${prefix}Plaq2 (Plaquinha)
│◦ ${prefix}Plaq3 (Plaquinha)
│◦ ${prefix}Plaq4 (Plaquinha)
│◦ ${prefix}Plaq5 (Plaquinha)
│◦ ${prefix}Plaq6 (Plaquinha)
│◦ ${prefix}Plaq7 (Plaquinha)
│◦ ${prefix}Plaq8 (Plaquinha)
│◦ ${prefix}Plaq9 (Plaquinha)
╰═══════════════════ ⪨
`;
};

exports.nsfw = nsfw;

// MENU SEM PREFIXO

const semprefixo = (prefix, sender) => {
  return `​
╭══════════════ ⪩
┃👤 Usuário: @${sender.split('@')[0]}
┃ _para os comando funcionar é_
┃ _necessário estar com o resposta ativada_
┃➥ ${prefix}Autorepo (1/0)
╰╦═════════════ ⪨
╭┤き⃟🎠 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐒𝐄𝐌 𝐏𝐑𝐄𝐅𝐈𝐗𝐎  🎠⃟ き
│◦ Bot corno
│◦ Bom dia 
│◦ Boa tarde 
│◦ Boa noite 
│◦ Vamos namorar
│◦ Te amo 
│◦ Meu amor 
│◦ Tudo bem
│◦ Pica 
│◦ Gostosa 
│◦ Estou triste 
│◦ Corno 
│◦ Dono da akame
│◦ Nada nao 
│◦ Porra
│◦ Hentai
│◦ Vadia
│◦ Au au
│◦ Bot chato
│◦ BUGADA
│◦ Puta
│◦ Fofa
╰══════════════ ⪨ 
`;
};

exports.semprefixo = semprefixo;
