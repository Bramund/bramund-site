# Copia de respaldo de bramund.com

Espejo del sitio publico tal como estaba online el **14/09/2026**.
Descargado con `curl` desde https://www.bramund.com (HTML ya compilado, no el codigo fuente).

## Que es esto y que NO es

- **Es** una copia funcional y navegable del sitio: se puede publicar tal cual en
  cualquier hosting estatico y el sitio queda igual que hoy.
- **No es** el codigo fuente. El sitio original esta hecho con **Hugo 0.96.0**, que
  compila archivos Markdown a HTML. Ese proyecto Hugo vive en algun repositorio Git
  (GitHub/GitLab) al que todavia no tenemos acceso. Con esta copia se puede publicar
  y editar el HTML a mano, pero no reconstruir el flujo original de Hugo.
- Falta el idioma que no estuviera enlazado desde la home y cualquier pagina huerfana.

## Contenido

- `index.html`, `sobre/`, `contacto/` (espanol)
- `en/`, `en/about/`, `en/contact/` (ingles)
- `css/`, `js/`, `_home/`, `partners/` (assets, logos de clientes y partners)

## Infraestructura de bramund.com (relevado el 14/09/2026)

| Capa | Proveedor | Evidencia |
|---|---|---|
| Hosting web | **Netlify** | header `Server: Netlify`, IP `75.2.60.5` |
| Dominio + DNS | **GoDaddy** | nameservers `ns53/ns54.domaincontrol.com` |
| Email corporativo | **Google Workspace** | MX `aspmx.l.google.com` |

## AVISO al migrar el hosting

El email de la empresa corre por Google Workspace sobre **este mismo dominio**.
Al apuntar el sitio a otro hosting hay que cambiar **unicamente** los registros
`A` / `CNAME`. Si se tocan o borran los registros **MX**, se cae el mail de toda
la empresa.

## Como verlo localmente

    cd bramund-site-backup
    python -m http.server 8000
    # abrir http://localhost:8000
