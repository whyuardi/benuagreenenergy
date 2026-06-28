// BGE Product Catalog — sourced from benuagreenenergy.com (WordPress WooCommerce)
// All 96 products synced from original BGE website
// Last synced: 2026-06-27

export interface ProductItem {
  name: string
  desc?: string
  img?: string
  specs?: string[]
  slug?: string
}

export interface ProductCategory {
  name: string
  slug: string
  items: ProductItem[]
}

export const productCatalog: ProductCategory[] = [
  // ─── TAB 1: MINI CHILLER YCAE ───
  {
    name: 'Mini Chiller YCAE',
    slug: 'mini-chiller-ycae',
    items: [
      { name: 'Chiller YCAE 18,5TR', img: '/images/products/Chiller-YCAE-185TR-300x300.jpg', specs: ['18,5 TR', 'Air-Cooled', 'Scroll Compressor'] },
      { name: 'Chiller YCAE 28,5TR', img: '/images/products/Chiller-YCAE-285TR-300x300.png', specs: ['28,5 TR', 'Air-Cooled', 'Scroll Compressor'] },
      { name: 'Chiller YCAE 37TR', img: '/images/products/Chiller-YCAE-37TR-300x300.png', specs: ['37 TR', 'Air-Cooled', 'Scroll Compressor'] },
      { name: 'YCAE-X Air-Cooled Modular Chiller & Heat Pump', img: '/images/products/YCAE-X-Air-Cooled-Modular-Chiller-Heat-Pump-300x300.png', specs: ['Air-Cooled', 'Modular', 'Heat Pump'] },
    ],
  },
  // ─── TAB 2: MINI CHILLER YCWE ───
  {
    name: 'Mini Chiller YCWE',
    slug: 'mini-chiller-ycwe',
    items: [
      { name: 'Chiller YCWE 21TR', img: '/images/products/Chiller-YCWE-21TR-300x300.png', specs: ['21 TR', 'Water-Cooled', 'Scroll Compressor'] },
      { name: 'Chiller YCWE 32TR', img: '/images/products/Chiller-YCWE-32TR-300x300.png', specs: ['32 TR', 'Water-Cooled', 'Scroll Compressor'] },
      { name: 'Chiller YCWE 42TR', img: '/images/products/Chiller-YCWE-42TR-300x300.png', specs: ['42 TR', 'Water-Cooled', 'Scroll Compressor'] },
      { name: 'YCWE-E Water Cooled Chiller', img: '/images/products/YCWE-E-Water-Cooled-Chiller-1-300x300.png', specs: ['Water-Cooled', 'Scroll Compressor', 'Modular'] },
    ],
  },
  // ─── TAB 3: MAGNETIC CENTRIFUGAL CHILLER ───
  {
    name: 'Magnetic Centrifugal Chiller',
    slug: 'magnetic-centrifugal-chiller',
    items: [
      { name: 'YMS Magnetic Centrifugal Chiller', img: '/images/products/YMS-Magnetic-Centrifugal-Chiller-300x300.png', specs: ['Magnetic Centrifugal', 'High Efficiency', 'Oil-Free'] },
    ],
  },
  // ─── TAB 4: ABSORPTION CHILLER ───
  {
    name: 'Absorption Chiller',
    slug: 'absorption-chiller',
    items: [
      { name: 'Double Effect Direct Fired Chiller – 150TR', img: '/images/products/Double-Effect-Direct-Fired-Chiller-150TR-300x300.png', specs: ['150 TR', 'Direct Fired', 'Double Effect'] },
      { name: 'Double Effect Direct Fired Chiller – 300TR', img: '/images/products/Double-Effect-Direct-Fired-Chiller-300TR-300x300.png', specs: ['300 TR', 'Direct Fired', 'Double Effect'] },
      { name: 'Double Effect Direct Fired Chiller – 600TR', img: '/images/products/Double-Effect-Direct-Fired-Chiller-600TR-300x300.png', specs: ['600 TR', 'Direct Fired', 'Double Effect'] },
      { name: 'Double Effect Direct Fired Chiller – 900TR', img: '/images/products/Double-Effect-Direct-Fired-Chiller-900TR-300x300.png', specs: ['900 TR', 'Direct Fired', 'Double Effect'] },
      { name: 'Double Effect Steam Fired Chiller – 150TR', img: '/images/products/Double-Effect-Steam-Fired-Chiller-%E2%80%93-150TR-300x300.png', specs: ['150 TR', 'Steam Fired', 'Double Effect'] },
      { name: 'Double Effect Steam Fired Chiller – 300TR', img: '/images/products/Double-Effect-Steam-Fired-Chiller-%E2%80%93-900T-300x300.png', specs: ['300 TR', 'Steam Fired', 'Double Effect'] },
      { name: 'Double Effect Steam Fired Chiller – 600TR', img: '/images/products/Double-Effect-Steam-Fired-Chiller-%E2%80%93-900T-300x300.png', specs: ['600 TR', 'Steam Fired', 'Double Effect'] },
      { name: 'Double Effect Steam Fired Chiller – 900TR', img: '/images/products/Double-Effect-Steam-Fired-Chiller-%E2%80%93-900T-300x300.png', specs: ['900 TR', 'Steam Fired', 'Double Effect'] },
      { name: 'Steam Absorption Chiller', img: '/images/products/Steam-Absorption-Chiller-300x300.png', specs: ['Steam', 'Absorption', 'LiBr'] },
    ],
  },
  // ─── TAB 5: SOLAR PANEL ───
  {
    name: 'Solar Panel',
    slug: 'solar-panel',
    items: [
      { name: 'Tiger Neo 78HC-BDV', img: '/images/products/Tiger-Neo-78HC-BDV-300x300.png', specs: ['High Performance', 'N-Type', 'Bifacial'] },
      { name: 'Tiger Neo 72HC-BDV', img: '/images/products/Tiger-Neo-72HC-BDV-300x300.png', specs: ['High Performance', 'N-Type', 'Bifacial'] },
      { name: 'Universal Solar Pump Controller', img: '/images/products/32-Universal-Solar-Pump-Controller-300x300.png', specs: ['Solar Pump', 'Controller', 'MPPT'] },
    ],
  },
  // ─── TAB 6: COOLING TOWER ───
  {
    name: 'Cooling Tower',
    slug: 'cooling-tower',
    items: [
      { name: 'Counter-Flow Closed Cooling Tower', img: '/images/products/COUNTERCURRENT-600x420.jpg', specs: ['Counter-Flow', 'Closed Circuit', 'Industrial'] },
      { name: 'Cross-Flow Closed Cooling Tower', img: '/images/products/COUNTERCURRENT-600x420.jpg', specs: ['Cross-Flow', 'Closed Circuit', 'Industrial'] },
    ],
  },
  // ─── TAB 7: BMS ───
  {
    name: 'BMS (Building Management System)',
    slug: 'bms',
    items: [
      { name: 'E1000 BLDC FCU Thermostat YORK', img: '/images/products/EasyIO-FS-32-Controller-Utama.png', specs: ['BLDC', 'FCU', 'YORK'] },
      { name: 'EasyIO FC-20 Controller', img: '/images/products/EasyIO-FC-20-Controller-ok.png', specs: ['IO Expansion', 'Controller'] },
      { name: 'EasyIO FD-20i Input Modbus', img: '/images/products/EasyIO-FD-20i-Input-ModbusBacnet-Module-Utama.png', specs: ['IO Expansion', 'Modbus', 'BACnet'] },
      { name: 'EasyIO FS-32 Controller IP Controller', img: '/images/products/EasyIO-FS-32-Controller-Utama.png', specs: ['Controller', 'IP-Based'] },
      { name: 'EasyIO FW-8V WiFi VAV Controller', img: '/images/products/EasyIO-FW-8V-WiFi-VAV-Controller-ok.png', specs: ['WiFi', 'VAV', 'Controller'] },
      { name: 'EasyIO FW-8 WiFi Controller', img: '/images/products/EasyIO-FW-8-WiFi-Controller-ok.png', specs: ['WiFi', 'Controller'] },
    ],
  },
  // ─── TAB 8: GREEN SOLUTION ───
  {
    name: 'Green Solution',
    slug: 'green-solution',
    items: [
      { name: 'LOTUS Universal Drive', img: '/images/products/28-Lotus-Universal-Drive.png', specs: ['Universal Drive', 'VFD'] },
      { name: 'NANDI Universal Drive', img: '/images/products/27-Nandi-Universal-Drive.png', specs: ['Universal Drive', 'VFD'] },
      { name: 'Commercial Storage System CSS-OD 102.4', img: '/images/products/28-Lotus-Universal-Drive.png', specs: ['Commercial Storage', 'Battery'] },
      { name: 'Hot Water Controller', img: '/images/products/28-Lotus-Universal-Drive.png', specs: ['Hot Water', 'Controller'] },
      { name: 'Solar Drive (SIMHA)', img: '/images/products/28-Lotus-Universal-Drive.png', specs: ['Solar Drive', 'SIMHA', 'VFD'] },
      { name: 'ONE Controller', img: '/images/products/28-Lotus-Universal-Drive.png', specs: ['ONE Controller', 'Smart', 'Control'] },
      { name: 'ONE Ev Charger', img: '/images/products/28-Lotus-Universal-Drive.png', specs: ['ONE Ev Charger', 'EV', 'Charger'] },
      { name: 'Ev Charger', img: '/images/products/28-Lotus-Universal-Drive.png', specs: ['Ev Charger', 'Electric Vehicle', 'Charging'] },
    ],
  },
  // ─── TAB 9: HIGH EFFICIENCY PUMP ───
  {
    name: 'High Efficiency Pump',
    slug: 'high-efficiency-pump',
    items: [
      { name: 'Pressure Booster (SCM Series)', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['Pressure Booster', 'SCM Series', 'Water Supply'] },
      { name: 'Pressure Booster Pumps (SH, SHI, & SHN Series)', img: '/images/products/17-Vertical-Multi-Stage-Centrrifugal-Pumps-300x300.png', specs: ['Pressure Booster', 'SH/SHI/SHN Series', 'Water Supply'] },
      { name: 'High Head Pressure Booster (SCR & SCRN Series)', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['High Head', 'SCR/SCRN Series', 'Pressure'] },
      { name: 'Domestic Water Pressure Booster (SJP Series)', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['Domestic', 'SJP Series', 'Water Supply'] },
      { name: 'Hydropneumatic Booster System (HYPN Series)', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['Hydropneumatic', 'HYPN Series', 'Booster'] },
      { name: 'End-Suction Single Shaft Pumps (SMB Series)', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['End-Suction', 'SMB Series', 'Single Shaft'] },
      { name: 'End-Suction Long Coupled Pumps (SNK Series)', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['End-Suction', 'SNK Series', 'Long Coupled'] },
      { name: 'End-Suction Closed Coupled Pumps (SNB Series)', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['End-Suction', 'SNB Series', 'Closed Coupled'] },
      { name: 'Horizontal Split Case Pump (SHS Series)', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['Horizontal', 'SHS Series', 'Split Case'] },
      { name: 'Immersible Pumps (SMTR Series)', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['Immersible', 'SMTR Series', 'Pump'] },
      { name: 'OpenWell SHOS CA/SA Series', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['OpenWell', 'SHOS CA/SA Series', 'Submersible'] },
      { name: 'OpenWell Pumps (SOMB Series)', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['OpenWell', 'SOMB Series', 'Submersible'] },
      { name: 'OpenWell Pumps (JALPARI Series)', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['OpenWell', 'JALPARI Series', 'Submersible'] },
      { name: 'Sero Vertical Multi-Stage Pumps', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['Sero', 'Vertical Multi-Stage', 'Pumps'] },
      { name: 'Vertical Multi-Stage Centrifugal Pumps (SCR, SCRI, SCRN Series)', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['Vertical Multi-Stage', 'SCR/SCRI/SCRN Series', 'Pump'] },
      { name: 'Slow Speed Pump (SSS Series)', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['Slow Speed', 'SSS Series', 'Pump'] },
      { name: 'Shallow Well Pump (SSW Series)', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['Shallow Well', 'SSW Series', 'Pump'] },
      { name: 'Self-Priming Pumps (MEGH Series)', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['Self-Priming', 'MEGH Series', 'Pump'] },
      { name: 'Self-Priming Pumps (CRP Series)', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['Self-Priming', 'CRP Series', 'Pump'] },
      { name: 'Non Self-Priming Pumps (NSP Series)', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['Non Self-Priming', 'NSP Series', 'Pump'] },
      { name: 'Positive Displacement Pumps', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['Positive Displacement', 'Pump', 'Industrial'] },
      { name: 'Micro Surface Pumpset (DCSSUP Series)', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['Micro Surface', 'DCSSUP Series', 'Pumpset'] },
      { name: '4″ Premium Plug & Play Pump (DCSOP Series)', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['4-inch', 'Plug & Play', 'DCSOP Series'] },
      { name: 'Solar Open Well Pumps (DCSOP Series)', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['Solar', 'Open Well', 'DCSOP Series'] },
      { name: 'Solar DC Submersible & Surface Pumps', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['Solar', 'DC', 'Submersible/Surface'] },
      { name: 'Submersible Pumps & Motors (QF Series)', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['Submersible', 'QF Series', 'Motors'] },
      { name: 'SVX Waste Water Pump', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['SVX', 'Waste Water', 'Pump'] },
      { name: 'SSEG Waste Water Pump', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['SSEG', 'Waste Water', 'Pump'] },
      { name: 'SDW Waste Water Pump', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['SDW', 'Waste Water', 'Pump'] },
      { name: 'Fire Pumps', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['Fire', 'Pumps', 'Fire Fighting'] },
      { name: 'RO Pumps', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['RO', 'Reverse Osmosis'] },
      { name: 'Pipes', img: '/images/products/13-Pipes.png', specs: ['PPR', 'Piping System'] },
      { name: 'Elite Soft Starter', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['Elite', 'Soft Starter', 'Motor'] },
      { name: 'A1 Smart Starter', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['A1', 'Smart Starter', 'Motor'] },
      { name: 'Round Drip Irrigation', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['Round', 'Drip', 'Irrigation'] },
      { name: 'Plain Drip Irrigation', img: '/images/products/17-Vertical-Multi-Stage-Centrrifugal-Pumps-300x300.png', specs: ['Plain', 'Drip', 'Irrigation'] },
      { name: 'Flat Drip Irrigation', img: '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png', specs: ['Flat', 'Drip', 'Irrigation'] },
    ],
  },
  // ─── TAB 10: PPR PIPE & FITTINGS ───
  {
    name: 'PPR Pipe & Fittings',
    slug: 'ppr-pipe',
    items: [
      { name: 'Cable', img: '/images/products/13-Pipes.png', specs: ['Cable', 'Electrical', 'Accessories'] },
      { name: 'DU DT Filter', img: '/images/products/13-Pipes.png', specs: ['DU DT', 'Filter', 'Accessories'] },
    ],
  },
  // ─── TAB 11: ALKALINE WATER IONIZER ───
  {
    name: 'Alkaline Water Ionizer',
    slug: 'alkaline-water-ionizer',
    items: [],
  },
  // ─── TAB 12: SOLAR INVERTER OPTIMIZER ───
  {
    name: 'Solar Inverter Optimizer',
    slug: 'solar-inverter-optimizer',
    items: [
      { name: 'S1500 Commercial Power Optimizers', img: '/images/products/Tiger-Neo-78HC-BDV-300x300.png', specs: ['Commercial', 'S1500', 'Power Optimizer'] },
      { name: 'S1000 & S1200 Commercial Power Optimizers', img: '/images/products/Tiger-Neo-78HC-BDV-300x300.png', specs: ['Commercial', 'S1000/S1200', 'Power Optimizer'] },
      { name: 'H1300 Power Optimizers', img: '/images/products/Tiger-Neo-78HC-BDV-300x300.png', specs: ['H1300', 'Power Optimizer', 'Commercial'] },
      { name: 'Three Phase Inverters with Synergy Technology', img: '/images/products/Tiger-Neo-78HC-BDV-300x300.png', specs: ['Three Phase', 'Synergy', 'Commercial'] },
      { name: 'TerraMax™ Inverter', img: '/images/products/Tiger-Neo-78HC-BDV-300x300.png', specs: ['TerraMax', 'Inverter', 'High Performance'] },
      { name: 'Hybrid Inverter', img: '/images/products/Tiger-Neo-78HC-BDV-300x300.png', specs: ['Hybrid', 'Inverter', 'Solar'] },
      { name: 'Grid Tie Inverter', img: '/images/products/Tiger-Neo-78HC-BDV-300x300.png', specs: ['Grid Tie', 'Inverter', 'Solar'] },
      { name: 'Home Battery 48v', img: '/images/products/Tiger-Neo-78HC-BDV-300x300.png', specs: ['Home Battery', '48V', 'Storage'] },
      { name: 'Home Battery 400v', img: '/images/products/Tiger-Neo-78HC-BDV-300x300.png', specs: ['Home Battery', '400V', 'Storage'] },
      { name: 'Home Backup Interface', img: '/images/products/Tiger-Neo-78HC-BDV-300x300.png', specs: ['Home Backup', 'Interface', 'Storage'] },
      { name: 'Home Power Optimizers', img: '/images/products/Tiger-Neo-78HC-BDV-300x300.png', specs: ['Power Optimizers', 'Home', 'Residential'] },
      { name: 'Home Load Controller', img: '/images/products/Tiger-Neo-78HC-BDV-300x300.png', specs: ['Load Controller', 'Home', 'Smart'] },
      { name: 'Home Hub Inverters', img: '/images/products/Tiger-Neo-78HC-BDV-300x300.png', specs: ['Hub Inverter', 'Home', 'Smart'] },
      { name: 'Home Wave Inverters', img: '/images/products/Tiger-Neo-78HC-BDV-300x300.png', specs: ['Wave Inverter', 'Home', 'Residential'] },
      { name: 'Home Short String Inverter', img: '/images/products/Tiger-Neo-78HC-BDV-300x300.png', specs: ['Short String', 'Home', 'Inverter'] },
      { name: 'Home Smart Switch', img: '/images/products/Tiger-Neo-78HC-BDV-300x300.png', specs: ['Smart Switch', 'Home', 'Automation'] },
      { name: 'RMS Dongle', img: '/images/products/Tiger-Neo-78HC-BDV-300x300.png', specs: ['RMS Dongle', 'Monitoring', 'Remote'] },
    ],
  },
  // ─── TAB 13: STEAM ACCESSORIES ───
  {
    name: 'Steam Accessories',
    slug: 'steam-accessories',
    items: [
    ],
  },
  // ─── TAB 14: YORK AIR HANDLING & FCU ───
  {
    name: 'YORK Air Handling & FCU',
    slug: 'york-ahu-fcu',
    items: [
      { name: 'YBAH-G Ceiling Air Handling Unit', img: '/images/products/YBAH-G-Ceiling-Air-Handling-Unit-300x300.png', specs: ['Ceiling', 'Air Handling', 'YORK'] },
      { name: 'YBAH-F ECM Ceiling Fan Coil Unit', img: '/images/products/YBAH-F-ECM-Ceiling-Fan-Coil-Unit-300x300.png', specs: ['Ceiling', 'Fan Coil', 'ECM'] },
      { name: 'YGWH Water Cooled Screw Chiller (Style A)', img: '/images/products/YGWH-Water-Cooled-Screw-Chiller-Style-A-300x300.png', specs: ['Water Cooled', 'Screw Chiller', 'YORK'] },
    ],
  },
]

export const categoryDefaultImages: Record<string, string> = {
  'mini-chiller-ycae': '/images/products/Chiller-YCAE-185TR-300x300.jpg',
  'mini-chiller-ycwe': '/images/products/Chiller-YCWE-21TR-300x300.png',
  'magnetic-centrifugal-chiller': '/images/products/YMS-Magnetic-Centrifugal-Chiller-300x300.png',
  'absorption-chiller': '/images/products/Steam-Absorption-Chiller-300x300.png',
  'solar-panel': '/images/products/Tiger-Neo-78HC-BDV-300x300.png',
  'cooling-tower': '/images/products/COUNTERCURRENT-600x420.jpg',
  'bms': '/images/products/EasyIO-FS-32-Controller-Utama.png',
  'green-solution': '/images/products/28-Lotus-Universal-Drive.png',
  'high-efficiency-pump': '/images/products/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png',
  'ppr-pipe': '/images/products/13-Pipes.png',
  'alkaline-water-ionizer': '/images/products/water.jpg',
  'solar-inverter-optimizer': '/images/products/Tiger-Neo-78HC-BDV-300x300.png',
  'steam-accessories': '/images/hero/steam.jpg',
  'york-ahu-fcu': '/images/products/YBAH-G-Ceiling-Air-Handling-Unit-300x300.png',
}

export function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export function getProductBySlug(slug: string): { category: ProductCategory; item: ProductItem } | null {
  for (const cat of productCatalog) {
    for (const item of cat.items) {
      if (slugify(item.name) === slug) return { category: cat, item }
    }
  }
  return null
}
