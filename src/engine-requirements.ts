#!/usr/bin/env node
// engine-requirements.js
// Faz uma verificação robusta da versão mínima do Node.js requerida.
// Lê "engines.node" de package.json quando disponível; caso contrário, usa um fallback.
// Saída é clara para CI e exit code 1 em caso de falha.

'use strict';

const fs = require('fs');
const path = require('path');

function exitWithMessage(msg, code = 1) {
  console.error('\n[engine-requirements] ' + msg + '\n');
  process.exit(code);
}

function detectPackageJsonStartDir() {
  // Tenta encontrar package.json em cwd e subidas até a raiz
  let dir = process.cwd();
  const root = path.parse(dir).root;
  while (true) {
    const candidate = path.join(dir, 'package.json');
    if (fs.existsSync(candidate)) return candidate;
    if (dir === root) break;
    dir = path.dirname(dir);
  }
  return null;
}

function parseMajorFromRange(range) {
  if (!range || typeof range !== 'string') return null;
  // tenta extrair o primeiro número que representa major (ex: ">=16.0.0", "^18.0.0", ">=14 <20")
  const m = range.match(/(\d+)(?:\.\d+)?/);
  if (!m) return null;
  const major = parseInt(m[1], 10);
  return Number.isNaN(major) ? null : major;
}

try {
  const nodeVersion = process.versions && process.versions.node;
  if (!nodeVersion) {
    exitWithMessage('Não foi possível detectar a versão do Node.js.');
  }
  const [currentMajorStr] = nodeVersion.split('.');
  const currentMajor = parseInt(currentMajorStr, 10);
  if (Number.isNaN(currentMajor)) {
    exitWithMessage(`Versão do Node inválida: ${nodeVersion}`);
  }

  // Primeiro, tenta pegar o engines.node de package.json
  let minMajor = null;
  const pkgPath = detectPackageJsonStartDir();
  if (pkgPath) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
      if (pkg && pkg.engines && pkg.engines.node) {
        minMajor = parseMajorFromRange(String(pkg.engines.node));
        if (minMajor) {
          // Ok, temos uma versão mínima vinda do package.json
        }
      }
    } catch (err) {
      // não fatal — apenas loga e continua com fallback
      console.error(
        '[engine-requirements] aviso ao ler package.json:',
        err && err.message ? err.message : String(err),
      );
    }
  }

  // Fallback: se não encontrou, usa este mínimo seguro
  const FALLBACK_MIN_MAJOR = 16;
  if (!minMajor) minMajor = FALLBACK_MIN_MAJOR;

  if (currentMajor < minMajor) {
    exitWithMessage(
      `Versão do Node.js insuficiente. Requerido: >=${minMajor}.x (detectado: ${nodeVersion}).\n` +
        'Em GitHub Actions atualize a ação setup-node para usar uma versão compatível (ex: 16 ou 18):\n' +
        '  uses: actions/setup-node@v3\n' +
        '  with:\n' +
        "    node-version: '18'\n" +
        '\nSe você precisar de compatibilidade diferente, ajuste "engines.node" em package.json ou o pipeline.',
    );
  }

  // Tudo OK
  process.exit(0);
} catch (err) {
  exitWithMessage(
    'Erro durante a verificação de requisitos do Node: ' +
      (err && err.message ? err.message : String(err)),
  );
}
