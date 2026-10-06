# coleta-campo-offline

MVP Expo/React Native para coleta de dados em campo com formulário, GPS opcional, armazenamento offline e exportação GeoJSON. Foi pensado para levantamentos de geografia em locais sem conexão confiável.

## Executar

```bash
npm install
npx expo start
```

A localização e a câmera são opcionais: o registro continua válido mesmo quando a pessoa nega permissões. Os registros são guardados no AsyncStorage. A função `exportGeoJSON` gera um `FeatureCollection` compatível com ferramentas GIS.

## Testes

```bash
npm test
```

## Limitações

Este é um MVP: ainda não possui sincronização remota, autenticação ou criptografia de dados sensíveis. Avalie consentimento e política de retenção antes de uso em campo real.

MIT — Mateus Florido Pena
