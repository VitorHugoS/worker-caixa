export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url)
    const target = `https://app.novosimulador.caixa.gov.br${url.pathname}${url.search}`

    const res = await fetch(target, {
      method: request.method,
      headers: {
        'Authorization': 'Bearer undefined',
        'accept': 'application/json',
        'accept-language': 'pt-BR,pt;q=0.9',
        'content-type': 'application/json',
        'origin': 'https://simuladorhabitacao.caixa.gov.br',
        'referer': 'https://simuladorhabitacao.caixa.gov.br/',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36',
      },
      body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : null,
    })

    return new Response(res.body, {
      status: res.status,
      headers: { 'content-type': 'application/json' },
    })
  },
}
