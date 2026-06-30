// Produk API — 96+ produk sesuai web asli benuagreenenergy.com
// Sumber: WooCommerce product catalog, diambil 5 June 2026

export interface ProductItem {
  name: string
  desc?: string
  img?: string
  specs?: string[]
  slug?: string
}

export interface ProductCategory {
  name: string  // nama tab — persis web asli
  slug: string
  items: ProductItem[]
}

export const productCatalog: ProductCategory[] = [
  // ─── TAB 1: MINI CHILLER YCAE ───
  {
    name: 'Mini Chiller YCAE',
    slug: 'mini-chiller-ycae',
    items: [
      { name: 'Chiller YCAE 18,5TR', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/05/Chiller-YCAE-185TR-300x300.jpg', specs: ['18,5 TR', 'Air-Cooled', 'Scroll Compressor'] },
      { name: 'Chiller YCAE 28,5TR', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/05/Chiller-YCAE-285TR-300x300.png', specs: ['28,5 TR', 'Air-Cooled', 'Scroll Compressor'] },
      { name: 'Chiller YCAE 37TR', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/05/Chiller-YCAE-37TR-300x300.png', specs: ['37 TR', 'Air-Cooled', 'Scroll Compressor'] },
    ]
  },

  // ─── TAB 2: MINI CHILLER YCWE ───
  {
    name: 'Mini Chiller YCWE',
    slug: 'mini-chiller-ycwe',
    items: [
      { name: 'Chiller YCWE 21TR', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/05/Chiller-YCWE-21TR-300x300.png', specs: ['21 TR', 'Water-Cooled', 'Scroll Compressor'] },
      { name: 'Chiller YCWE 32TR', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/05/Chiller-YCWE-32TR-300x300.png', specs: ['32 TR', 'Water-Cooled', 'Scroll Compressor'] },
      { name: 'Chiller YCWE 42TR', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/05/Chiller-YCWE-42TR-300x300.png', specs: ['42 TR', 'Water-Cooled', 'Scroll Compressor'] },
      { name: 'YCWE-E Water Cooled Chiller', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/10/YCWE-E-Water-Cooled-Chiller-1-300x300.png', specs: ['Modular', 'Water-Cooled', 'High Efficiency'] },
    ]
  },

  // ─── TAB 3: MAGNETIC CENTRIFUGAL CHILLER ───
  {
    name: 'Magnetic Centrifugal Chiller',
    slug: 'magnetic-centrifugal-chiller',
    items: [
      { name: 'YMS Magnetic Centrifugal Chiller', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/10/YMS-Magnetic-Centrifugal-Chiller-300x300.png', specs: ['Oil-Free', 'Magnetic Bearing', 'IPLV > 10', '200-500 TR'] },
    ]
  },

  // ─── TAB 4: ABSORPTION CHILLER ───
  {
    name: 'Absorption Chiller',
    slug: 'absorption-chiller',
    items: [
      { name: 'Steam Absorption Chiller', desc: 'Pemanfaatan steam untuk sistem pendingin absorpsi skala industri.', specs: ['Steam-Fired', 'LiBr Technology'] },
      { name: 'Double Effect Direct Fired Chiller - 150TR', specs: ['150 TR', 'Direct Fired', 'Double Effect'] },
      { name: 'Double Effect Direct Fired Chiller - 300TR', specs: ['300 TR', 'Direct Fired', 'Double Effect'] },
      { name: 'Double Effect Direct Fired Chiller - 600TR', specs: ['600 TR', 'Direct Fired', 'Double Effect'] },
      { name: 'Double Effect Direct Fired Chiller - 900TR', specs: ['900 TR', 'Direct Fired', 'Double Effect'] },
      { name: 'Double Effect Steam Fired Chiller – 150TR', specs: ['150 TR', 'Steam Fired', 'Double Effect'] },
      { name: 'Double Effect Steam Fired Chiller – 900TR', specs: ['900 TR', 'Steam Fired', 'Double Effect'] },
    ]
  },

  // ─── TAB 5: SOLAR PANEL ───
  {
    name: 'Solar Panel',
    slug: 'solar-panel',
    items: [
      { name: 'Tiger Neo 78HC-BDV', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/02/Tiger-Neo-78HC-BDV-300x300.png', specs: ['78HC', 'Bifacial', 'N-Type', '> 600Wp'] },
      { name: 'Tiger Neo 72HC-BDV', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/02/Tiger-Neo-72HC-BDV-300x300.png', specs: ['72HC', 'Bifacial', 'N-Type', '> 550Wp'] },
      { name: 'Universal Solar Pump Controller', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/11/32-Universal-Solar-Pump-Controller-300x300.png' },
      { name: 'Solar DC Submersible & Surface Pumps', specs: ['DC Powered', 'Submersible', 'Surface'] },
      { name: 'Solar Open Well Pumps (DCSOP Series)', specs: ['DCSOP Series', 'DC', 'Open Well'] },
      { name: 'Solar Drive (SIMHA)', specs: ['SIMHA', 'Solar Drive', 'Variable Speed'] },
      { name: 'TerraMax™ Inverter', specs: ['TerraMax', 'Inverter', 'Grid-Tie'] },
      { name: 'Three Phase Inverters with Synergy Technology', specs: ['Three Phase', 'Synergy Technology', 'Commercial'] },
      { name: 'S1500 Commercial Power Optimizers', specs: ['S1500', 'Commercial', 'Power Optimizer'] },
      { name: 'S1000 & S1200 Commercial Power Optimizers', specs: ['S1000', 'S1200', 'Commercial Optimizer'] },
      { name: 'Home Backup Interface', specs: ['Backup', 'Home Energy'] },
      { name: 'Home Battery 400v', specs: ['400V', 'Home Battery', 'Storage'] },
      { name: 'Home Battery 48v', specs: ['48V', 'Home Battery', 'Storage'] },
      { name: 'Home Hub Inverters', specs: ['Hub Inverter', 'Home'] },
      { name: 'Home Load Controller', specs: ['Load Controller', 'Energy Management'] },
      { name: 'Home Power Optimizers', specs: ['Power Optimizer', 'Residential'] },
      { name: 'Home Short String Inverter', specs: ['Short String', 'Inverter', 'Residential'] },
      { name: 'Home Smart Switch', specs: ['Smart Switch', 'Home Automation'] },
      { name: 'Home Wave Inverters', specs: ['Wave Inverter', 'Residential'] },
      { name: 'Hybrid Inverter', specs: ['Hybrid', 'Solar + Grid', 'Battery Ready'] },
      { name: 'Grid Tie Inverter', specs: ['Grid Tie', 'On-Grid'] },
      { name: 'H1300 Power Optimizers', specs: ['H1300', 'Power Optimizer'] },
      { name: 'Ev Charger', specs: ['EV Charging', 'AC'] },
      { name: 'ONE Ev Charger', specs: ['ONE EV', 'Charging Station'] },
      { name: 'ONE Controller', specs: ['ONE', 'Controller', 'Monitoring'] },
      { name: 'RMS Dongle', specs: ['RMS', 'Dongle', 'Monitoring'] },
    ]
  },

  // ─── TAB 6: COOLING TOWER ───
  {
    name: 'Cooling Tower',
    slug: 'cooling-tower',
    items: [
      { name: 'Counter-Flow Closed Cooling Tower', img: '/images/hero/bg.jpg', specs: ['Counter-Flow', 'Closed Circuit', 'High Efficiency'] },
      { name: 'Cross-Flow Closed Cooling Tower', specs: ['Cross-Flow', 'Closed Circuit', 'Low Maintenance'] },
    ]
  },

  // ─── TAB 7: STEAM ACCESSORIES ───
  {
    name: 'Steam Accessories',
    slug: 'steam-accessories',
    items: [
      { name: 'Steam Trap', desc: 'Steam trap untuk sistem distribusi uap industri.', specs: ['Mechanical', 'Thermostatic'] },
      { name: 'Pressure Reducing Valve', specs: ['PRV', 'Steam'] },
      { name: 'Steam Separator', specs: ['Separator', 'Steam Purity'] },
      { name: 'Condensate Recovery System', specs: ['Recovery', 'Energy Saving'] },
      { name: 'Steam Flow Meter', specs: ['Flow Meter', 'Monitoring'] },
      { name: 'Pipe Fittings & Valves', specs: ['Carbon Steel', 'Stainless'] },
    ]
  },

  // ─── TAB 8: BMS ───
  {
    name: 'BMS (Building Management System)',
    slug: 'bms',
    items: [
      { name: 'E1000 BLDC FCU Thermostat YORK', img: '/images/hero/tech-bg.jpg', specs: ['BLDC', 'FCU Thermostat', 'YORK'] },
      { name: 'EasyIO FC-20 Controller', specs: ['IO Expansion', 'Controller'] },
      { name: 'EasyIO FD-20i Input Modbus', specs: ['FD-20i', 'Modbus', 'IO Module'] },
      { name: 'EasyIO FS-32 Controller IP', specs: ['FS-32', 'IP Controller', 'Building Management System'] },
      { name: 'EasyIO FW-8V WiFi VAV Controller', specs: ['FW-8V', 'WiFi', 'VAV'] },
      { name: 'EasyIO FW-8 WiFi Controller', specs: ['FW-8', 'WiFi Controller'] },
      { name: 'A1 Smart Starter', specs: ['Smart Starter', 'Motor Control'] },
      { name: 'Elite Soft Starter', specs: ['Soft Starter', 'Motor Protection'] },
    ]
  },

  // ─── TAB 9: GREEN SOLUTION ───
  {
    name: 'Green Solution',
    slug: 'green-solution',
    items: [
      { name: 'LOTUS Universal Drive', specs: ['Universal Drive', 'VFD', 'Energy Saving'] },
      { name: 'NANDI Universal Drive', specs: ['Universal Drive', 'VFD', 'Pump Control'] },
      { name: 'Commercial Storage System CSS-OD 102.4', specs: ['102.4 kWh', 'Commercial Storage', 'Outdoor'] },
      { name: 'Hot Water Controller', specs: ['Hot Water', 'Controller', 'Solar Thermal'] },
    ]
  },

  // ─── TAB 10: HIGH EFFICIENCY PUMP ───
  {
    name: 'High Efficiency Pump',
    slug: 'high-efficiency-pump',
    items: [
      { name: 'Vertical Multi-Stage Centrifugal Pumps (SCR, SCRI, SCRN Series)', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/11/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['SCR', 'SCRI', 'SCRN', 'Multi-Stage', 'Vertical'] },
      { name: 'SDW Waste Water Pump', specs: ['Waste Water', 'Submersible'] },
      { name: 'Self-Priming Pumps (CRP Series)', specs: ['CRP Series', 'Self-Priming'] },
      { name: 'Self-Priming Pumps (MEGH Series)', specs: ['MEGH Series', 'Self-Priming'] },
      { name: 'Sero Vertical Multi-Stage Pumps', specs: ['Sero', 'Vertical', 'Multi-Stage'] },
      { name: 'Shallow Well Pump (SSW Series)', specs: ['SSW Series', 'Shallow Well'] },
      { name: 'Slow Speed Pump (SSS Series)', specs: ['SSS Series', 'Slow Speed'] },
      { name: 'SSEG Waste Water Pump', specs: ['SSEG', 'Waste Water'] },
      { name: 'Submersible Pumps & Motors (QF Series)', specs: ['QF Series', 'Submersible'] },
      { name: 'SVX Waste Water Pump', specs: ['SVX', 'Waste Water'] },
      { name: 'Horizontal Split Case Pump (SHS Series)', specs: ['SHS Series', 'Split Case'] },
      { name: 'Hydropneumatic Booster System (HYPN Series)', specs: ['HYPN Series', 'Booster'] },
      { name: 'Immersible Pumps (SMTR Series)', specs: ['SMTR Series', 'Immersible'] },
      { name: 'Micro Surface Pumpset (DCSSUP Series)', specs: ['DCSSUP', 'Surface Pump'] },
      { name: 'End-Suction Closed Coupled Pumps (SNB Series)', specs: ['SNB Series', 'End-Suction'] },
      { name: 'End-Suction Long Coupled Pumps (SNK Series)', specs: ['SNK Series', 'Long Coupled'] },
      { name: 'End-Suction Single Shaft Pumps (SMB Series)', specs: ['SMB Series', 'Single Shaft'] },
      { name: 'Fire Pumps', specs: ['Fire Pump', 'Jockey Pump', 'Diesel/Electric'] },
      { name: 'High Head Pressure Booster (SCR & SCRN Series)', specs: ['High Head', 'Booster', 'SCR/SCRN'] },
      { name: "4\" Premium Plug & Play Pump (DCSOP Series)", specs: ['4-inch', 'Plug & Play', 'Solar'] },
      { name: 'Domestic Water Pressure Booster (SJP Series)', specs: ['SJP Series', 'Domestic Booster'] },
      { name: 'Pressure Booster Pumps (SH, SHI, & SHN Series)', specs: ['SH Series', 'SHI Series', 'SHN Series', 'Booster'] },
      { name: 'Pressure Booster (SCM Series)', specs: ['SCM Series', 'Compact Booster'] },
      { name: 'OpenWell Pumps (JALPARI Series)', specs: ['JALPARI', 'Open Well'] },
      { name: 'OpenWell Pumps (SOMB Series)', specs: ['SOMB', 'Open Well'] },
      { name: 'OpenWell SHOS CA/SA Series', specs: ['SHOS', 'CA/SA', 'Open Well'] },
      { name: 'Positive Displacement Pumps', specs: ['Positive Displacement'] },
      { name: 'RO Pumps', specs: ['RO', 'Reverse Osmosis'] },
      { name: 'Non Self-Priming Pumps (NSP Series)', specs: ['NSP Series', 'Non Self-Priming'] },
    ]
  },

  // ─── TAB 11: PPR PIPE & FITTINGS ───
  {
    name: 'PPR Pipe & Fittings',
    slug: 'ppr-pipe',
    items: [
      { name: 'Pipes', specs: ['PPR', 'PN10/PN16/PN20', '20mm-110mm'] },
      { name: 'Cable', specs: ['Solar Cable', 'Power Cable'] },
      { name: 'DU DT Filter', specs: ['DU Filter', 'DT Filter'] },
      { name: 'Plain Drip Irrigation', specs: ['Drip Irrigation', 'Plain'] },
      { name: 'Round Drip Irrigation', specs: ['Drip Irrigation', 'Round'] },
      { name: 'Flat Drip Irrigation', specs: ['Drip Irrigation', 'Flat'] },
    ]
  },

  // ─── TAB 12: ALKALINE WATER IONIZER ───
  {
    name: 'Alkaline Water Ionizer',
    slug: 'alkaline-water-ionizer',
    items: [
      { name: 'Alkaline Water Ionizer - 7 Plates', specs: ['7 Plates', 'pH 3.5-10.5', 'ORP -400mV'] },
      { name: 'Alkaline Water Ionizer - 9 Plates', specs: ['9 Plates', 'pH 3.5-11.0', 'ORP -600mV'] },
      { name: 'Alkaline Water Ionizer - 11 Plates', specs: ['11 Plates', 'pH 3.0-11.5', 'ORP -800mV'] },
    ]
  },

  // ─── TAB 13: Additional YORK Products ───
  {
    name: 'YORK Air Handling & FCU',
    slug: 'york-ahu-fcu',
    items: [
      { name: 'YBAH-G Ceiling Air Handling Unit', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/10/YBAH-G-Ceiling-Air-Handling-Unit-300x300.png', specs: ['Ceiling Type', 'Air Handling', 'YORK'] },
      { name: 'YBAH-F ECM Ceiling Fan Coil Unit', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/10/YBAH-F-ECM-Ceiling-Fan-Coil-Unit-300x300.png', specs: ['ECM Motor', 'Ceiling FCU', 'YORK'] },
      { name: 'YGWH Water Cooled Screw Chiller (Style A)', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/10/YGWH-Water-Cooled-Screw-Chiller-Style-A-300x300.png', specs: ['Screw Compressor', 'Water-Cooled', 'Large Capacity'] },
      { name: 'YCAE-X Air-Cooled Modular Chiller & Heat Pump', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/10/YCAE-X-Air-Cooled-Modular-Chiller-Heat-Pump-300x300.png', specs: ['Modular', 'Heat Pump', 'X-Power Series'] },
    ]
  }
]

export function getProductBySlug(slug: string): { product: ProductItem; category: ProductCategory } | null {
  for (const cat of productCatalog) {
    for (const item of cat.items) {
      const itemSlug = item.slug || item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      if (itemSlug === slug) return { product: item, category: cat }
    }
  }
  return null
}

export function getAllProducts(): { product: ProductItem; category: ProductCategory }[] {
  const result: { product: ProductItem; category: ProductCategory }[] = []
  for (const cat of productCatalog) {
    for (const item of cat.items) {
      result.push({ product: item, category: cat })
    }
  }
  return result
}

export function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}