/**
 * Fonte única dos dados da escola.
 *
 * O rodapé, a página de contato e os dados estruturados leem daqui. Endereço
 * e telefone precisam bater exatamente com o perfil do Google — divergência
 * entre as duas fontes enfraquece as duas na busca local. Corrigir aqui
 * corrige em todos os lugares.
 *
 * Endereço, horário e Plus Code conferidos no perfil do Google em 18/09/2026.
 */
export const school = {
  name: 'Colégio Jean Jacques Rousseau',
  shortName: 'Colégio JJR',
  tagline: 'Educação por princípios',
  taxId: '08.977.830/0001-08',
  legalName: 'Colégio Jean Jacques Rousseau Ltda ME',

  phone: { label: '(11) 3714-4206', href: 'tel:+551137144206', e164: '+55 11 3714-4206' },
  whatsapp: { label: '(11) 95735-3241', href: 'https://wa.me/5511957353241' },
  email: 'colegiojeanjr@yahoo.com.br',
  instagram: 'https://www.instagram.com/colegiojjr/',

  address: {
    street: 'Rua Professor Gilio Sattin, 210',
    district: 'Rio Pequeno',
    city: 'São Paulo',
    region: 'SP',
    postalCode: '05379-150',
    country: 'BR',
  },

  // Derivadas do Plus Code 588MC6PW+8W, com precisão de cerca de 14 metros.
  geo: { latitude: -23.564188, longitude: -46.752688 },

  // Horário da secretaria, que é o exibido na busca.
  officeHours: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '18:00' },
} as const;

export const fullStreet = `${school.address.street} — ${school.address.district}`;
export const mapsQuery = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${school.name}, ${school.address.street}, ${school.address.district}, ${school.address.city} - ${school.address.region}`,
)}`;
