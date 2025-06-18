document.addEventListener('DOMContentLoaded', () => {
  const iframe = document.getElementById('molview-iframe');
  const title = document.getElementById('element-title');

  document.querySelectorAll('.element-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const simbolo = btn.dataset.simbolo;
      const cid = getCID(simbolo); // Função abaixo
      if (cid) {
        iframe.src = `https://embed.molview.org/v1/?mode=balls&cid=${cid}`;
        title.textContent = `Modelo 3D: ${simbolo}`;
      } else {
        title.textContent = `Modelo indisponível para ${simbolo}`;
        iframe.src = '';
      }
    });
  });
});

// Tabela CID para alguns elementos/compostos simples
function getCID(simbolo) {
  const mapa = {
    H: 783, He: 23987, Li: 3028194, Be: 5460467, B: 5462311, C: 5462310, N: 947, O: 962, F: 28179, Ne: 23935,
    Na: 5360545, Mg: 888, Al: 5359268, Si: 5461123, P: 5462309, S: 5362487, Cl: 313, Ar: 23968, K: 5462222,
    Ca: 5460341, Sc: 23952, Ti: 23991, V: 23990, Cr: 23976, Mn: 23930, Fe: 23925, Co: 104729, Ni: 934, Cu: 23978,
    Zn: 23994, Ga: 5360835, Ge: 6326956, As: 5359596, Se: 6326970, Br: 24408, Kr: 23989, Rb: 5357696, Sr: 5359327,
    Y: 23993, Zr: 23995, Nb: 23936, Mo: 23932, Tc: 6327182, Ru: 6327185, Rh: 23948, Pd: 23938, Ag: 23954, Cd: 23973,
    In: 5359967, Sn: 5352426, Sb: 5359586, Te: 6327184, I: 807, Xe: 23991, Cs: 5354618, Ba: 5355457, La: 23926,
    Ce: 23974, Pr: 23950, Nd: 23951, Pm: 6328209, Sm: 23960, Eu: 23965, Gd: 23982, Tb: 23961, Dy: 23962, Ho: 23958,
    Er: 23959, Tm: 23964, Yb: 23963, Lu: 23957, Hf: 23986, Ta: 23956, W: 23964, Re: 23955, Os: 23953, Ir: 23940,
    Pt: 23939, Au: 23985, Hg: 23931, Tl: 5359464, Pb: 5352425, Bi: 5359367, Po: 6328142, At: 5359597, Rn: 24816,
    Fr: 6328143, Ra: 6328144, Ac: 6328145, Th: 23960, Pa: 6328146, U: 23989, Np: 6328147, Pu: 23945, Am: 6328148,
    Cm: 6328149, Bk: 6328150, Cf: 6328151, Es: 6328152, Fm: 6328153, Md: 6328154, No: 6328155, Lr: 6328156,
    Rf: 6328157, Db: 6328158, Sg: 6328159, Bh: 6328160, Hs: 6328161, Mt: 6328162, Ds: 6328163, Rg: 6328164,
    Cn: 6328165, Nh: 6328166, Fl: 6328167, Mc: 6328168, Lv: 6328169, Ts: 6328170, Og: 6328171
  };
  return mapa[simbolo];
}
