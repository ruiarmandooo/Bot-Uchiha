#!/bin/bash
# Script para gerar QR no Termux a partir da string do WhatsApp Bot

echo "Cole aqui a string do QR do seu bot e pressione Enter:"
read QRSTRING

# Gerar QR no terminal
qrencode -t ansiutf8 "$QRSTRING"
