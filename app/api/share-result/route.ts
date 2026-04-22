export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const platform = searchParams.get('platform') || 'share';
  const test = searchParams.get('test') || 'Mock Test';
  const score = searchParams.get('score') || '0-0';

  const svg = `
  <svg width="1080" height="1920" viewBox="0 0 1080 1920" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1080" height="1920" fill="#071512"/>
    <rect x="80" y="80" width="920" height="1760" rx="48" fill="#0C1F1A" stroke="#049F82" stroke-width="4"/>
    <rect x="140" y="160" width="160" height="160" rx="36" fill="#049F82"/>
    <text x="190" y="260" fill="white" font-size="96" font-family="Arial" font-weight="700">E</text>
    <text x="140" y="410" fill="white" font-size="72" font-family="Arial" font-weight="700">Expansion.pk</text>
    <text x="140" y="540" fill="#F4CA44" font-size="42" font-family="Arial">${platform.toUpperCase()} RESULT</text>
    <text x="140" y="650" fill="white" font-size="64" font-family="Arial" font-weight="700">${test}</text>
    <text x="140" y="850" fill="#9AE6D7" font-size="40" font-family="Arial">Score</text>
    <text x="140" y="980" fill="white" font-size="180" font-family="Arial" font-weight="700">${score.replace('-', '/')}</text>
    <text x="140" y="1180" fill="#A7F3D0" font-size="44" font-family="Arial">Practice smarter. Rank higher.</text>
    <rect x="140" y="1320" width="800" height="120" rx="28" fill="#049F82"/>
    <text x="200" y="1397" fill="white" font-size="44" font-family="Arial">PPSC • FPSC • NTS • KPPSC • SPSC</text>
  </svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'no-store'
    }
  });
}
