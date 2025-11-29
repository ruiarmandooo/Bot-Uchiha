const fs = require('fs');
const votacao = JSON.parse(fs.readFileSync('./dados/duelo/votacao.json'));

const sleep = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const delVoto = (idGroup: string) => {
  let processo = votacao.indexOf(idGroup);
  while (processo >= 0) {
    votacao.splice(processo, 1);
    processo = votacao.indexOf(idGroup);
  }
  fs.writeFileSync(
    './database/grupos/votacao/votacaoduelo.json',
    JSON.stringify(votacao),
  );
  fs.unlinkSync(`./database/grupos/votacao/votos/${idGroup}.json`);
  fs.unlinkSync(`./database/grupos/votacao/p_votos/${idGroup}.json`);
};

const addVoto = async (
  ID: string,
  _valor1: string,
  _valor2: string,
  _valor3: string,
  _valor4: number,
  reply: (msg: string) => void,
) => {
  votacao.push(ID);
  fs.writeFileSync(`./database/grupos/votacao/p_votos/${ID}.json`, '[]');
  fs.writeFileSync(`./database/grupos/votacao/votos/${ID}.json`, '[]');
  fs.writeFileSync('./dados/duelo/votacaoduelo.json', JSON.stringify(votacao));
  await sleep(2000);
  let votos = JSON.parse(
    fs.readFileSync(`./database/grupos/votacao/votos/${ID}.json`),
  );
  votos.push({
    razao: _valor1 ? _valor1 : '-',
    votos: _valor2.trim() + '@s. whatsapp.net',
    votos2: _valor3.trim() + '@s.whatsapp.net',
    duracao: _valor4,
  });
  fs.writeFileSync(
    `./database/grupos/votacao/votos/${ID}. json`,
    JSON.stringify(votos),
  );
  setTimeout(
    async function () {
      let voto = JSON.parse(
        fs.readFileSync(`./database/grupos/votacao/p_votos/${ID}.json`),
      );
      let verdade = voto.filter((dds: any) => dds.votacao == '1');
      let falso = voto.filter((dds: any) => dds.votacao == '2');
      reply(
        `Votação encerrada.\n\nTotal de votos pro 1° Participante:  ${verdade.length}.\nTotal de votos pro 2° Participante:  ${falso.length}`,
      );
      fs.unlinkSync(`./database/grupos/votacao/votos/${ID}.json`);
      fs.unlinkSync(`./database/grupos/votacao/p_votos/${ID}.json`);
      fs.writeFileSync(
        `./database/grupos/votacao/votacao.json`,
        JSON.stringify(votacao),
      );
    },
    _valor4 * 60 * 1000,
  );
};

module.exports = {
  delVoto,
  addVoto,
};
