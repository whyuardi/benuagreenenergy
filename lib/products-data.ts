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
      { name: 'Steam Absorption Chiller', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/02/Steam-Absorption-Chiller-300x300.png', desc: 'Pemanfaatan steam untuk sistem pendingin absorpsi skala industri.', specs: ['Steam-Fired', 'LiBr Technology'] },
      { name: 'Double Effect Direct Fired Chiller - 150TR', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/06/Double-Effect-Direct-Fired-Chiller-150TR-300x300.png', specs: ['150 TR', 'Direct Fired', 'Double Effect'] },
      { name: 'Double Effect Direct Fired Chiller - 300TR', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/06/Double-Effect-Direct-Fired-Chiller-300TR-300x300.png', specs: ['300 TR', 'Direct Fired', 'Double Effect'] },
      { name: 'Double Effect Direct Fired Chiller - 600TR', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/06/Double-Effect-Direct-Fired-Chiller-600TR-300x300.png', specs: ['600 TR', 'Direct Fired', 'Double Effect'] },
      { name: 'Double Effect Direct Fired Chiller - 900TR', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/06/Double-Effect-Direct-Fired-Chiller-900TR-300x300.png', specs: ['900 TR', 'Direct Fired', 'Double Effect'] },
      { name: 'Double Effect Steam Fired Chiller – 150TR', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/06/Double-Effect-Steam-Fired-Chiller-%E2%80%93-150TR-300x300.png', specs: ['150 TR', 'Steam Fired', 'Double Effect'] },
      { name: 'Double Effect Steam Fired Chiller – 300TR', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/06/Double-Effect-Direct-Fired-Chiller-300TR-300x300.png', desc: '300TR efficient absorption chiller, using waste steam to deliver chilled water at 7°C.', specs: [
        'Model: YHAU-CWL 495EX-B',
        'Cooling Capacity: 1,055 kW / 300 USRT',
        'COP: 1.43',
        'Chilled Water In/Out: 10.6°C / 7.0°C',
        'Flow Rate (Chilled): 250 m³/h (1,102 GPM)',
        'Cooling Water In/Out: 32.0°C / 37.1°C',
        'Flow Rate (Cooling): 302 m³/h (1,332 GPM)',
        'Steam Consumption: 1,076 kg/h (2,366 lb/h)',
        'Steam In/Out Pressure: 3.5 bar / 0.5 bar',
        'Power Consumption: 9.85 kW',
        'Dimensions (L×W×H): 4,735 × 2,140 × 2,925 mm',
        'Operating Weight: 16.9 tons',
        'Shipping Weight: 14.4 tons'
      ] },
      { name: 'Double Effect Steam Fired Chiller – 600TR', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/06/Double-Effect-Direct-Fired-Chiller-600TR-300x300.png', desc: 'High-capacity 600TR steam absorption chiller for large-scale cooling systems.', specs: [
        'Model: YHAU-CWL 992EX-B',
        'Cooling Capacity: 2,110 kW / 600 USRT',
        'COP: 1.43',
        'Chilled Water In/Out: 10.6°C / 7.0°C',
        'Flow Rate (Chilled): 499.8 m³/h (2,201 GPM)',
        'Cooling Water In/Out: 32.0°C / 37.1°C',
        'Flow Rate (Cooling): 604.2 m³/h (2,660 GPM)',
        'Steam Consumption: 2,151 kg/h (4,732 lb/h)',
        'Steam In/Out Pressure: 3.5 bar / 0.5 bar',
        'Power Consumption: 19.7 kW',
        'Dimensions (L×W×H): 6,310 × 2,850 × 3,850 mm',
        'Operating Weight: 33.8 tons',
        'Shipping Weight: 28.8 tons'
      ] },
      { name: 'Double Effect Steam Fired Chiller – 900TR', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/06/Double-Effect-Steam-Fired-Chiller-%E2%80%93-900T-300x300.png', specs: ['900 TR', 'Steam Fired', 'Double Effect'] },
    ],
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
      { name: 'Solar Inverter Optimizer', specs: ['Solar Inverter', 'Optimizer', 'Grid-Tie', 'High Efficiency'] },
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
      { name: 'Counter-Flow Closed Cooling Tower', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/06/COUNTERCURRENT-600x420.jpg', specs: ['Counter-Flow', 'Closed Circuit', 'High Efficiency'] },
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
      { name: 'E1000 BLDC FCU Thermostat YORK', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800', specs: ['BLDC', 'FCU Thermostat', 'YORK'] },
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

  // ─── TAB 13: ADDITIONAL YORK PRODUCTS ───
  {
    name: 'YORK Air Handling & FCU',
    slug: 'york-ahu-fcu',
    items: [
      { name: 'YBAH-G Ceiling Air Handling Unit', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/10/YBAH-G-Ceiling-Air-Handling-Unit-300x300.png', specs: ['Ceiling Type', 'Air Handling', 'YORK'] },
      { name: 'YBAH-F ECM Ceiling Fan Coil Unit', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/10/YBAH-F-ECM-Ceiling-Fan-Coil-Unit-300x300.png', specs: ['ECM Motor', 'Ceiling FCU', 'YORK'] },
      { name: 'YGWH Water Cooled Screw Chiller (Style A)', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/10/YGWH-Water-Cooled-Screw-Chiller-Style-A-300x300.png', specs: ['Screw Compressor', 'Water-Cooled', 'Large Capacity'] },
      { name: 'YCAE-X Air-Cooled Modular Chiller & Heat Pump', img: 'https://benuagreenenergy.com/wp-content/uploads/2025/10/YCAE-X-Air-Cooled-Modular-Chiller-Heat-Pump-300x300.png', specs: ['Modular', 'Heat Pump', 'X-Power Series'] },
    ]
  },

  // ─── TAB 14: SHAKTI SOLAR DC SUBMERSIBLE (DCSSP) ───
  {
    name: 'Shakti Solar DC Submersible',
    slug: 'shakti-solar-dc-submersible',
    items: [
      { name: 'SOLAR 2 DCSSP 900', specs: ['2 HP', 'DC Submersible', '900 Wp Solar'] },
      { name: 'SOLAR 3 DCSSP 900', specs: ['3 HP', 'DC Submersible', '900 Wp Solar'] },
      { name: 'SOLAR 16.5 DCSSP 900', specs: ['16.5 HP', 'DC Submersible', '900 Wp Solar'] },
      { name: 'SOLAR 3 DCSSP 1200', specs: ['3 HP', 'DC Submersible', '1200 Wp Solar'] },
      { name: 'SOLAR 8 DCSSP 1200', specs: ['8 HP', 'DC Submersible', '1200 Wp Solar'] },
      { name: 'SOLAR 10 DCSSP 1200', specs: ['10 HP', 'DC Submersible', '1200 Wp Solar'] },
      { name: 'SOLAR 20.5 DCSSP 1200', specs: ['20.5 HP', 'DC Submersible', '1200 Wp Solar'] },
      { name: 'SOLAR 1.5 DCSSP 1800', specs: ['1.5 HP', 'DC Submersible', '1800 Wp Solar'] },
      { name: 'SOLAR 2 DCSSP 1800', specs: ['2 HP', 'DC Submersible', '1800 Wp Solar'] },
      { name: 'SOLAR 6 DCSSP 1800', specs: ['6 HP', 'DC Submersible', '1800 Wp Solar'] },
      { name: 'SOLAR 12 DCSSP 1800', specs: ['12 HP', 'DC Submersible', '1800 Wp Solar'] },
      { name: 'SOLAR 19 DCSSP 1800', specs: ['19 HP', 'DC Submersible', '1800 Wp Solar'] },
      { name: 'SOLAR 39 DCSSP 1800', specs: ['39 HP', 'DC Submersible', '1800 Wp Solar'] },
      { name: 'SOLAR 2 DCSSP 3000', specs: ['2 HP', 'DC Submersible', '3000 Wp Solar'] },
      { name: 'SOLAR 3 DCSSP 3000', specs: ['3 HP', 'DC Submersible', '3000 Wp Solar'] },
      { name: 'SOLAR 5 DCSSP 3000', specs: ['5 HP', 'DC Submersible', '3000 Wp Solar'] },
      { name: 'SOLAR 8 DCSSP 3000', specs: ['8 HP', 'DC Submersible', '3000 Wp Solar'] },
      { name: 'SOLAR 12 DCSSP 3000', specs: ['12 HP', 'DC Submersible', '3000 Wp Solar'] },
      { name: 'SOLAR 20 DCSSP 3000', specs: ['20 HP', 'DC Submersible', '3000 Wp Solar'] },
      { name: 'SOLAR 30 DCSSP 3000', specs: ['30 HP', 'DC Submersible', '3000 Wp Solar'] },
      { name: 'SOLAR 63 DCSSP 3000', specs: ['63 HP', 'DC Submersible', '3000 Wp Solar'] },
      { name: 'SOLAR 2.5 DCSSP 4800', specs: ['2.5 HP', 'DC Submersible', '4800 Wp Solar'] },
      { name: 'SOLAR 3 DCSSP 4800', specs: ['3 HP', 'DC Submersible', '4800 Wp Solar'] },
      { name: 'SOLAR 4.5 DCSSP 4800', specs: ['4.5 HP', 'DC Submersible', '4800 Wp Solar'] },
      { name: 'SOLAR 5 DCSSP 4800', specs: ['5 HP', 'DC Submersible', '4800 Wp Solar'] },
      { name: 'SOLAR 6 DCSSP 4800', specs: ['6 HP', 'DC Submersible', '4800 Wp Solar'] },
      { name: 'SOLAR 10 DCSSP 4800', specs: ['10 HP', 'DC Submersible', '4800 Wp Solar'] },
      { name: 'SOLAR 13 DCSSP 4800', specs: ['13 HP', 'DC Submersible', '4800 Wp Solar'] },
      { name: 'SOLAR 20 DCSSP 4800', specs: ['20 HP', 'DC Submersible', '4800 Wp Solar'] },
      { name: 'SOLAR 33 DCSSP 4800', specs: ['33 HP', 'DC Submersible', '4800 Wp Solar'] },
      { name: 'SOLAR 55 DCSSP 4800', specs: ['55 HP', 'DC Submersible', '4800 Wp Solar'] },
      { name: 'SOLAR 103 DCSSP 4800', specs: ['103 HP', 'DC Submersible', '4800 Wp Solar'] },
      { name: 'SOLAR 5 DCSSP 6750', specs: ['5 HP', 'DC Submersible', '6750 Wp Solar'] },
      { name: 'SOLAR 10 DCSSP 6750', specs: ['10 HP', 'DC Submersible', '6750 Wp Solar'] },
      { name: 'SOLAR 11 DCSSP 6750', specs: ['11 HP', 'DC Submersible', '6750 Wp Solar'] },
      { name: 'SOLAR 14 DCSSP 6750', specs: ['14 HP', 'DC Submersible', '6750 Wp Solar'] },
      { name: 'SOLAR 19 DCSSP 6750', specs: ['19 HP', 'DC Submersible', '6750 Wp Solar'] },
      { name: 'SOLAR 28 DCSSP 6750', specs: ['28 HP', 'DC Submersible', '6750 Wp Solar'] },
      { name: 'SOLAR 50 DCSSP 6750', specs: ['50 HP', 'DC Submersible', '6750 Wp Solar'] },
      { name: 'SOLAR 71 DCSSP 6750', specs: ['71 HP', 'DC Submersible', '6750 Wp Solar'] },
      { name: 'SOLAR 137 DCSSP 6750', specs: ['137 HP', 'DC Submersible', '6750 Wp Solar'] },
      { name: 'SOLAR 9 DCSSP 9000', specs: ['9 HP', 'DC Submersible', '9000 Wp Solar'] },
      { name: 'SOLAR 12 DCSSP 9000', specs: ['12 HP', 'DC Submersible', '9000 Wp Solar'] },
      { name: 'SOLAR 16 DCSSP 9000', specs: ['16 HP', 'DC Submersible', '9000 Wp Solar'] },
      { name: 'SOLAR 19 DCSSP 9000', specs: ['19 HP', 'DC Submersible', '9000 Wp Solar'] },
      { name: 'SOLAR 27 DCSSP 9000', specs: ['27 HP', 'DC Submersible', '9000 Wp Solar'] },
      { name: 'SOLAR 41 DCSSP 9000', specs: ['41 HP', 'DC Submersible', '9000 Wp Solar'] },
      { name: 'SOLAR 64 DCSSP 9000', specs: ['64 HP', 'DC Submersible', '9000 Wp Solar'] },
      { name: 'SOLAR 103 DCSSP 9000', specs: ['103 HP', 'DC Submersible', '9000 Wp Solar'] },
      { name: 'SOLAR 188 DCSSP 9000', specs: ['188 HP', 'DC Submersible', '9000 Wp Solar'] },
      { name: 'SOLAR 12 DCSSP 11250', specs: ['12 HP', 'DC Submersible', '11250 Wp Solar'] },
      { name: 'SOLAR 16 DCSSP 11250', specs: ['16 HP', 'DC Submersible', '11250 Wp Solar'] },
      { name: 'SOLAR 20 DCSSP 11250', specs: ['20 HP', 'DC Submersible', '11250 Wp Solar'] },
      { name: 'SOLAR 24 DCSSP 11250', specs: ['24 HP', 'DC Submersible', '11250 Wp Solar'] },
      { name: 'SOLAR 34 DCSSP 11250', specs: ['34 HP', 'DC Submersible', '11250 Wp Solar'] },
      { name: 'SOLAR 48 DCSSP 11250', specs: ['48 HP', 'DC Submersible', '11250 Wp Solar'] },
      { name: 'SOLAR 11 DCSSP 13500', specs: ['11 HP', 'DC Submersible', '13500 Wp Solar'] },
      { name: 'SOLAR 12 DCSSP 13500', specs: ['12 HP', 'DC Submersible', '13500 Wp Solar'] },
      { name: 'SOLAR 19 DCSSP 13500', specs: ['19 HP', 'DC Submersible', '13500 Wp Solar'] },
      { name: 'SOLAR 25 DCSSP 13500', specs: ['25 HP', 'DC Submersible', '13500 Wp Solar'] },
      { name: 'SOLAR 30 DCSSP 13500', specs: ['30 HP', 'DC Submersible', '13500 Wp Solar'] },
      { name: 'SOLAR 43 DCSSP 13500', specs: ['43 HP', 'DC Submersible', '13500 Wp Solar'] },
      { name: 'SOLAR 58 DCSSP 13500', specs: ['58 HP', 'DC Submersible', '13500 Wp Solar'] },
      { name: 'SOLAR 86 DCSSP 13500', specs: ['86 HP', 'DC Submersible', '13500 Wp Solar'] },
      { name: 'SOLAR 139 DCSSP 13500', specs: ['139 HP', 'DC Submersible', '13500 Wp Solar'] },
      { name: 'SOLAR 8 DCSSP 18000', specs: ['8 HP', 'DC Submersible', '18000 Wp Solar'] },
      { name: 'SOLAR 13 DCSSP 18000', specs: ['13 HP', 'DC Submersible', '18000 Wp Solar'] },
      { name: 'SOLAR 16 DCSSP 18000', specs: ['16 HP', 'DC Submersible', '18000 Wp Solar'] },
      { name: 'SOLAR 27 DCSSP 18000', specs: ['27 HP', 'DC Submersible', '18000 Wp Solar'] },
      { name: 'SOLAR 32 DCSSP 18000', specs: ['32 HP', 'DC Submersible', '18000 Wp Solar'] },
      { name: 'SOLAR 53 DCSSP 18000', specs: ['53 HP', 'DC Submersible', '18000 Wp Solar'] },
      { name: 'SOLAR 78 DCSSP 18000', specs: ['78 HP', 'DC Submersible', '18000 Wp Solar'] },
      { name: 'SOLAR 129 DCSSP 18000', specs: ['129 HP', 'DC Submersible', '18000 Wp Solar'] },
      { name: 'SOLAR 148 DCSSP 18000', specs: ['148 HP', 'DC Submersible', '18000 Wp Solar'] },
      { name: 'SOLAR 240 DCSSP 18000', specs: ['240 HP', 'DC Submersible', '18000 Wp Solar'] },
      { name: 'SOLAR 16 DCSSP 22500', specs: ['16 HP', 'DC Submersible', '22500 Wp Solar'] },
      { name: 'SOLAR 19 DCSSP 22500', specs: ['19 HP', 'DC Submersible', '22500 Wp Solar'] },
      { name: 'SOLAR 25 DCSSP 22500', specs: ['25 HP', 'DC Submersible', '22500 Wp Solar'] },
      { name: 'SOLAR 35 DCSSP 22500', specs: ['35 HP', 'DC Submersible', '22500 Wp Solar'] },
      { name: 'SOLAR 42 DCSSP 22500', specs: ['42 HP', 'DC Submersible', '22500 Wp Solar'] },
      { name: 'SOLAR 48 DCSSP 22500', specs: ['48 HP', 'DC Submersible', '22500 Wp Solar'] },
      { name: 'SOLAR 72 DCSSP 22500', specs: ['72 HP', 'DC Submersible', '22500 Wp Solar'] },
      { name: 'SOLAR 93 DCSSP 22500', specs: ['93 HP', 'DC Submersible', '22500 Wp Solar'] },
      { name: 'SOLAR 140 DCSSP 22500', specs: ['140 HP', 'DC Submersible', '22500 Wp Solar'] },
      { name: 'SOLAR 156 DCSSP 22500', specs: ['156 HP', 'DC Submersible', '22500 Wp Solar'] },
      { name: 'SOLAR 14 DCSSP 27000', specs: ['14 HP', 'DC Submersible', '27000 Wp Solar'] },
      { name: 'SOLAR 20 DCSSP 27000', specs: ['20 HP', 'DC Submersible', '27000 Wp Solar'] },
      { name: 'SOLAR 23 DCSSP 27000', specs: ['23 HP', 'DC Submersible', '27000 Wp Solar'] },
      { name: 'SOLAR 26 DCSSP 27000', specs: ['26 HP', 'DC Submersible', '27000 Wp Solar'] },
      { name: 'SOLAR 43 DCSSP 27000', specs: ['43 HP', 'DC Submersible', '27000 Wp Solar'] },
      { name: 'SOLAR 60 DCSSP 27000', specs: ['60 HP', 'DC Submersible', '27000 Wp Solar'] },
      { name: 'SOLAR 64.5 DCSSP 27000', specs: ['64.5 HP', 'DC Submersible', '27000 Wp Solar'] },
      { name: 'SOLAR 84 DCSSP 27000', specs: ['84 HP', 'DC Submersible', '27000 Wp Solar'] },
      { name: 'SOLAR 121 DCSSP 27000', specs: ['121 HP', 'DC Submersible', '27000 Wp Solar'] },
      { name: 'SOLAR 19 DCSSP 36000', specs: ['19 HP', 'DC Submersible', '36000 Wp Solar'] },
      { name: 'SOLAR 25 DCSSP 36000', specs: ['25 HP', 'DC Submersible', '36000 Wp Solar'] },
      { name: 'SOLAR 27 DCSSP 36000', specs: ['27 HP', 'DC Submersible', '36000 Wp Solar'] },
      { name: 'SOLAR 44 DCSSP 36000', specs: ['44 HP', 'DC Submersible', '36000 Wp Solar'] },
      { name: 'SOLAR 57 DCSSP 36000', specs: ['57 HP', 'DC Submersible', '36000 Wp Solar'] },
      { name: 'SOLAR 69 DCSSP 36000', specs: ['69 HP', 'DC Submersible', '36000 Wp Solar'] },
      { name: 'SOLAR 84 DCSSP 36000', specs: ['84 HP', 'DC Submersible', '36000 Wp Solar'] },
      { name: 'SOLAR 119 DCSSP 36000', specs: ['119 HP', 'DC Submersible', '36000 Wp Solar'] },
      { name: 'SOLAR 139 DCSSP 36000', specs: ['139 HP', 'DC Submersible', '36000 Wp Solar'] },
      { name: 'SOLAR 42 DCSSP 45000', specs: ['42 HP', 'DC Submersible', '45000 Wp Solar'] },
      { name: 'SOLAR 53 DCSSP 45000', specs: ['53 HP', 'DC Submersible', '45000 Wp Solar'] },
      { name: 'SOLAR 70 DCSSP 45000', specs: ['70 HP', 'DC Submersible', '45000 Wp Solar'] },
      { name: 'SOLAR 87 DCSSP 45000', specs: ['87 HP', 'DC Submersible', '45000 Wp Solar'] },
      { name: 'SOLAR 110 DCSSP 45000', specs: ['110 HP', 'DC Submersible', '45000 Wp Solar'] },
      { name: 'SOLAR 135 DCSSP 45000', specs: ['135 HP', 'DC Submersible', '45000 Wp Solar'] },
      { name: 'SOLAR 150 DCSSP 45000', specs: ['150 HP', 'DC Submersible', '45000 Wp Solar'] },
      { name: 'SOLAR 42 DCSSP 54000', specs: ['42 HP', 'DC Submersible', '54000 Wp Solar'] },
      { name: 'SOLAR 53 DCSSP 54000', specs: ['53 HP', 'DC Submersible', '54000 Wp Solar'] },
      { name: 'SOLAR 64 DCSSP 54000', specs: ['64 HP', 'DC Submersible', '54000 Wp Solar'] },
      { name: 'SOLAR 113 DCSSP 54000', specs: ['113 HP', 'DC Submersible', '54000 Wp Solar'] },
      { name: 'SOLAR 126 DCSSP 54000', specs: ['126 HP', 'DC Submersible', '54000 Wp Solar'] },
      { name: 'SOLAR 148 DCSSP 54000', specs: ['148 HP', 'DC Submersible', '54000 Wp Solar'] },
    ]
  },

  // ─── TAB 15: SHAKTI SOLAR DC SURFACE (DCSMP) ───
  {
    name: 'Shakti Solar DC Surface',
    slug: 'shakti-solar-dc-surface',
    items: [
      { name: 'SOLAR 4 DCSMP-500', specs: ['4 HP', 'DC Surface', '500 Wp Solar'] },
      { name: 'SOLAR 9 DCSMP-500', specs: ['9 HP', 'DC Surface', '500 Wp Solar'] },
      { name: 'SOLAR 18 DCSMP-900', specs: ['18 HP', 'DC Surface', '900 Wp Solar'] },
      { name: 'SOLAR 6 DCSMP-1000', specs: ['6 HP', 'DC Surface', '1000 Wp Solar'] },
      { name: 'SOLAR 9 DCSMP-1000', specs: ['9 HP', 'DC Surface', '1000 Wp Solar'] },
      { name: 'SOLAR 21 DCSMP-1000', specs: ['21 HP', 'DC Surface', '1000 Wp Solar'] },
      { name: 'SOLAR 17 DCSMP-1800', specs: ['17 HP', 'DC Surface', '1800 Wp Solar'] },
      { name: 'SOLAR 38 DCSMP-1800', specs: ['38 HP', 'DC Surface', '1800 Wp Solar'] },
      { name: 'SOLAR 28 DCSMP-2700', specs: ['28 HP', 'DC Surface', '2700 Wp Solar'] },
      { name: 'SOLAR 58 DCSMP-2700', specs: ['58 HP', 'DC Surface', '2700 Wp Solar'] },
      { name: 'SOLAR 33 DCSMP-4800', specs: ['33 HP', 'DC Surface', '4800 Wp Solar'] },
      { name: 'SOLAR 50 DCSMP-4800', specs: ['50 HP', 'DC Surface', '4800 Wp Solar'] },
      { name: 'SOLAR 104 DCSMP-4800', specs: ['104 HP', 'DC Surface', '4800 Wp Solar'] },
      { name: 'SOLAR 48 DCSMP-6750', specs: ['48 HP', 'DC Surface', '6750 Wp Solar'] },
      { name: 'SOLAR 67 DCSMP-6750', specs: ['67 HP', 'DC Surface', '6750 Wp Solar'] },
      { name: 'SOLAR 150 DCSMP-6750', specs: ['150 HP', 'DC Surface', '6750 Wp Solar'] },
      { name: 'SOLAR 70 DCSMP-9000', specs: ['70 HP', 'DC Surface', '9000 Wp Solar'] },
      { name: 'SOLAR 101 DCSMP-9000', specs: ['101 HP', 'DC Surface', '9000 Wp Solar'] },
      { name: 'SOLAR 179 DCSMP-9000', specs: ['179 HP', 'DC Surface', '9000 Wp Solar'] },
      { name: 'SOLAR 58 DCSMP-11250', specs: ['58 HP', 'DC Surface', '11250 Wp Solar'] },
      { name: 'SOLAR 85 DCSMP-11250', specs: ['85 HP', 'DC Surface', '11250 Wp Solar'] },
      { name: 'SOLAR 124 DCSMP-11250', specs: ['124 HP', 'DC Surface', '11250 Wp Solar'] },
      { name: 'SOLAR 94 DCSMP-13500', specs: ['94 HP', 'DC Surface', '13500 Wp Solar'] },
      { name: 'SOLAR 144 DCSMP-13500', specs: ['144 HP', 'DC Surface', '13500 Wp Solar'] },
    ]
  },

  // ─── TAB 16: SHAKTI SOLAR DCSCRI ───
  {
    name: 'Shakti Solar DCSCRI',
    slug: 'shakti-solar-dcscri',
    items: [
      { name: 'SOLAR 2.5 DCSCRI-500', specs: ['2.5 HP', 'DC Surface', '500 Wp Solar'] },
    ]
  }
]

export const categoryDefaultImages: Record<string, string> = {
  'mini-chiller-ycae': 'https://benuagreenenergy.com/wp-content/uploads/2025/05/Chiller-YCAE-185TR-300x300.jpg',
  'mini-chiller-ycwe': 'https://benuagreenenergy.com/wp-content/uploads/2025/05/Chiller-YCWE-21TR-300x300.png',
  'magnetic-centrifugal-chiller': 'https://benuagreenenergy.com/wp-content/uploads/2025/10/YMS-Magnetic-Centrifugal-Chiller-300x300.png',
  'absorption-chiller': 'https://benuagreenenergy.com/wp-content/uploads/2025/02/Steam-Absorption-Chiller-300x300.png',
  'solar-panel': 'https://benuagreenenergy.com/wp-content/uploads/2025/02/Tiger-Neo-78HC-BDV-300x300.png',
  'cooling-tower': 'https://benuagreenenergy.com/wp-content/uploads/2025/06/COUNTERCURRENT-600x420.jpg',
  'steam-accessories': 'https://benuagreenenergy.com/wp-content/uploads/2025/05/Chiller-YCAE-185TR-300x300.jpg',
  'bms': 'https://benuagreenenergy.com/wp-content/uploads/2025/10/YBAH-G-Ceiling-Air-Handling-Unit-300x300.png',
  'green-solution': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png',
  'high-efficiency-pump': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png',
  'ppr-pipe': 'https://benuagreenenergy.com/wp-content/uploads/2025/05/Chiller-YCAE-185TR-300x300.jpg',
  'alkaline-water-ionizer': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png',
  'york-ahu-fcu': 'https://benuagreenenergy.com/wp-content/uploads/2025/10/YBAH-G-Ceiling-Air-Handling-Unit-300x300.png',
  'shakti-solar-dc-submersible': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/32-Universal-Solar-Pump-Controller-300x300.png',
  'shakti-solar-dc-surface': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/32-Universal-Solar-Pump-Controller-300x300.png',
  'shakti-solar-dcscri': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/32-Universal-Solar-Pump-Controller-300x300.png',
}

export function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

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
