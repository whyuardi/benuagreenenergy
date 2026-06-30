// BGE Product Catalog — sourced from benuagreenenergy.com (WooCommerce)
// All 96 products synced from original BGE website
// Last synced: 2026-06-28

export interface ProductItem {
  name: string
  nameClean?: string
  slug?: string
  img?: string
  specs?: string[]
  desc?: string
  featured?: boolean
}

export interface ProductCategory {
  name: string
  slug: string
  items: ProductItem[]
}

const img: Record<string, string> = {
  '4-premium-plug-play-pump-dcsop-series': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/3-4-inch-Premium-Plug-Play-Pumps-600x600.png',
  'a1-smart-starter': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/34-A1-Smart-Starter-600x600.png',
  'cable': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/11-Cable-600x600.png',
  'chiller-ycwe-21tr': 'https://benuagreenenergy.com/wp-content/uploads/2025/05/Chiller-YCWE-21TR-600x600.png',
  'chiller-ycwe-32tr': 'https://benuagreenenergy.com/wp-content/uploads/2025/05/Chiller-YCWE-32TR-600x600.png',
  'chiller-ycwe-42tr': 'https://benuagreenenergy.com/wp-content/uploads/2025/05/Chiller-YCWE-42TR-600x600.png',
  'commercial-storage-system-css-od-102-4': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/Commercial-Storage-System-CSS-OD-600x600.png',
  'counter-flow-closed-cooling-tower': 'https://benuagreenenergy.com/wp-content/uploads/2025/06/COUNTERCURRENT-600x420.jpg',
  'cross-flow-closed-cooling-tower': 'https://benuagreenenergy.com/wp-content/uploads/2025/06/cross-flow-600x474.jpg',
  'domestic-water-pressure-booster-sjp-series': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/21-Domestic-Water-Pressure-Booster-Pumps-600x600.png',
  'double-effect-direct-fired-chiller-150tr': 'https://benuagreenenergy.com/wp-content/uploads/2025/06/Double-Effect-Direct-Fired-Chiller-150TR-600x600.png',
  'double-effect-direct-fired-chiller-300tr': 'https://benuagreenenergy.com/wp-content/uploads/2025/06/Double-Effect-Direct-Fired-Chiller-300TR-600x600.png',
  'double-effect-direct-fired-chiller-600tr': 'https://benuagreenenergy.com/wp-content/uploads/2025/06/Double-Effect-Direct-Fired-Chiller-600TR-600x600.png',
  'double-effect-direct-fired-chiller-900tr': 'https://benuagreenenergy.com/wp-content/uploads/2025/06/Double-Effect-Direct-Fired-Chiller-900TR-600x600.png',
  'double-effect-steam-fired-chiller-150tr': 'https://benuagreenenergy.com/wp-content/uploads/2025/06/Double-Effect-Steam-Fired-Chiller-%E2%80%93-150TR-600x600.png',
  'double-effect-steam-fired-chiller-300tr': 'https://benuagreenenergy.com/wp-content/uploads/2025/06/Double-Effect-Steam-Fired-Chiller-%E2%80%93-150TR-600x600.png',
  'double-effect-steam-fired-chiller-600tr': 'https://benuagreenenergy.com/wp-content/uploads/2025/06/Double-Effect-Steam-Fired-Chiller-%E2%80%93-150TR-600x600.png',
  'double-effect-steam-fired-chiller-900tr': 'https://benuagreenenergy.com/wp-content/uploads/2025/06/Double-Effect-Steam-Fired-Chiller-%E2%80%93-900T-600x600.png',
  'du-dt-filter': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/29-DU_DT-Filter-600x600.png',
  'e1000-bldc-fcu-thermostat': 'https://benuagreenenergy.com/wp-content/uploads/2025/10/E1000-BLDC-FCU-Thermostat--600x600.png',
  'easyio-fc-20-controller-20-point-io-expansion-controller': 'https://benuagreenenergy.com/wp-content/uploads/2025/10/EasyIO-FC-20-Controller-ok.png',
  'easyio-fd-20i-input-modbus-bacnet-module': 'https://benuagreenenergy.com/wp-content/uploads/2025/10/EasyIO-FD-20i-Input-ModbusBacnet-Module-Utama.png',
  'easyio-fs-32-controller-32-point-ip-controller': 'https://benuagreenenergy.com/wp-content/uploads/2025/10/EasyIO-FS-32-Controller-Utama.png',
  'easyio-fw-8-wifi-controller': 'https://benuagreenenergy.com/wp-content/uploads/2025/10/EasyIO-FW-8-WiFi-Controller-ok.png',
  'easyio-fw-8v-wifi-vav-controller': 'https://benuagreenenergy.com/wp-content/uploads/2025/10/EasyIO-FW-8V-WiFi-VAV-Controller-ok.png',
  'elite-soft-starter': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/35-Elite-Soft-Starter-600x600.png',
  'end-suction-closed-coupled-pumps-snb-series': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/10-End-Section-Closed-Couple-Pumps-600x600.png',
  'end-suction-long-coupled-pumps-snk-series': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/7-End-Suction-Lon-Coupled-Pumps-600x600.png',
  'end-suction-single-shaft-pumps-smb-series': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/8-End-Suction-Single-Shaft-Pumps-600x600.png',
  'ev-charger': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/photo_2025-11-25_12-15-22-600x570.jpg',
  'fire-pumps': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/36-Fire-Pumps-600x600.png',
  'flat-drip-irrigation': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/16-Flat-Drip-Irrigation-600x600.png',
  'grid-tie-inverter': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/33-Grid-Tie-Inverter-600x600.png',
  'h1300-power-optimizers': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/H1300-Power-Optimizers-600x600.png',
  'high-head-pressure-booster-scr-scrn-series': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/20-SCR-SCRN-High-Head-Pressure-Booster-600x600.png',
  'home-backup-interface': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/Home-Backup-Interface-600x600.png',
  'home-battery-400v': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/Home-Battery-400V-600x600.png',
  'home-battery-48v': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/Home-Battery-48V-600x600.png',
  'home-hub-inverters': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/Home-Hub-Inverter-600x600.png',
  'home-load-controller': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/Home-Load-Controller-600x600.png',
  'home-power-optimizers': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/S1000-S1200-Commercial-Power-Optimizers-600x600.png',
  'home-short-string-inverter': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/Home-Short-String-Inverter-600x600.png',
  'home-smart-switch': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/Home-Load-Controller-600x600.png',
  'home-wave-inverters': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/Home-Wave-Inverter-1-600x600.png',
  'horizontal-split-case-pump-shs-series': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/43-Horizontal-Split-Case-Pumps-600x600.png',
  'hot-water-controller': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/Hot-Water-Controller-1-600x600.png',
  'hybrid-inverter': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/31-Hybrid-Inverter-600x600.png',
  'hydropneumatic-booster-system-hypn-series': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/23-Hydropneumatic-Booster-Systems-600x600.png',
  'immersible-pumps-smtr-series': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/22-Immersible-Pumps-SMTR-600x600.png',
  'lotus-universal-drive': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/28-Lotus-Universal-Drive-600x600.png',
  'micro-surface-pumpset-dcssup-series': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/4-Micro-Surface-Pumpset-600x600.png',
  'nandi-universal-drive': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/27-Nandi-Universal-Drive-600x600.png',
  'non-self-priming-pumps-nsp-series': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/40-NSP-Non-Self-Priming-Pumps-600x600.png',
  'one-controller': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/ONE-Controller-1-600x600.png',
  'one-ev-charger': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/ONE-Ev-Charger-1-600x600.png',
  'openwell-pumps-jalpari-series': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/9-Openwell-Pumps-600x600.png',
  'openwell-pumps-somb-series': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/6-Openwell-Pumps-SOMB-series-600x600.png',
  'openwell-shos-ca-sa-series': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/12-Openwell-SHOS-CA_SA-Series-600x600.png',
  'pipes': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/13-Pipes-600x600.png',
  'plain-drip-irrigation': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/14-Plain-Drip-Irrigation-600x600.png',
  'positive-displacement-pumps': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/2-Positive-Displacement-Pumps-600x600.png',
  'pressure-booster-pumps-sh-shi-shn-series': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/24-Pressure-Booster-Pumps-SH_SHI_SHIN-600x600.png',
  'pressure-booster-scm-series': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/19-Pressure-Booster-600x600.png',
  'rms-dongle': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/30-RMS-Dongle-600x600.png',
  'ro-pumps': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/25-RO-Pumps-600x600.png',
  'round-drip-irrigation': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/15-Round-Drip-Irrigation-600x600.png',
  's1000-s1200-commercial-power-optimizers': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/S1000-S1200-Commercial-Power-Optimizers-600x600.png',
  's1500-commercial-power-optimizers': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/S1000-S1200-Commercial-Power-Optimizers-600x600.png',
  'sdw-waste-water-pump': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/38-SDW-Waste-Water-Pumps-600x600.png',
  'self-priming-pumps-crp-series': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/41-CRP-Self-Priming-Pumps-600x600.png',
  'self-priming-pumps-megh-series': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/42-Megh-Self-Priming-Pumps-600x600.png',
  'sero-vertical-multi-stage-pumps': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/18-Sero-vertical-Multistage-Pumps-600x600.png',
  'shallow-well-pump-ssw-series': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/44-Shallow-Well-Pumps-600x600.png',
  'slow-speed-pump-sss-series': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/45-Slow-Speed-Pumps-600x600.png',
  'solar-drive': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/1-Solar-Open-Well-pumps-600x600.png',
  'sseg-waste-water-pump': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/39-SSEG-Waste-Water-Pumps-600x600.png',
  'steam-absorption-chiller': 'https://benuagreenenergy.com/wp-content/uploads/2025/02/Steam-Absorption-Chiller-600x600.png',
  'submersible-pumps-motors-qf-series': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/5-Submersile-Pumps-Motors-600x600.png',
  'svx-waste-water-pump': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/37-SVX-Waste-Water-Pumps-600x600.png',
  'terramax-inverter': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/TerraMax™-Inverter-600x600.png',
  'three-phase-inverters-with-synergy-technology': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/Three-Phase-Inverter-600x600.png',
  'tiger-neo-72hc-bdv': 'https://benuagreenenergy.com/wp-content/uploads/2025/02/Tiger-Neo-72HC-BDV-600x600.png',
  'tiger-neo-78hc-bdv': 'https://benuagreenenergy.com/wp-content/uploads/2025/02/Tiger-Neo-78HC-BDV-600x600.png',
  'universal-solar-pump-controller': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/32-Universal-Solar-Pump-Controller-600x600.png',
  'vertical-multi-stage-centrifugal-pumps-scr-scri-scrn-series': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/17-Vertical-Multi-Stage-Centrifugal-Pumps-600x600.png',
  'ybah-f-ecm-ceiling-fan-coil-unit': 'https://benuagreenenergy.com/wp-content/uploads/2025/10/YBAH-F-ECM-Ceiling-Fan-Coil-Unit-600x600.png',
  'ybah-g-ceiling-air-handling-unit': 'https://benuagreenenergy.com/wp-content/uploads/2025/10/YBAH-G-Ceiling-Air-Handling-Unit-600x600.png',
  'ycae-185tr': 'https://benuagreenenergy.com/wp-content/uploads/2025/05/Chiller-YCAE-185TR-600x600.jpg',
  'ycae-285tr': 'https://benuagreenenergy.com/wp-content/uploads/2025/05/Chiller-YCAE-285TR-600x600.png',
  'ycae-37tr': 'https://benuagreenenergy.com/wp-content/uploads/2025/05/Chiller-YCAE-37TR-600x600.png',
  'ycae-x-air-cooled-modular-chiller-heat-pump': 'https://benuagreenenergy.com/wp-content/uploads/2025/10/YCAE-X-Air-Cooled-Modular-Chiller-Heat-Pump-600x600.png',
  'ycwe-e-water-cooled-chiller': 'https://benuagreenenergy.com/wp-content/uploads/2025/10/YCWE-E-Water-Cooled-Chiller-1-600x600.png',
  'ygwh-water-cooled-screw-chiller-style-a': 'https://benuagreenenergy.com/wp-content/uploads/2025/10/YGWH-Water-Cooled-Screw-Chiller-Style-A-600x600.png',
  'yms-magnetic-centrifugal-chiller': 'https://benuagreenenergy.com/wp-content/uploads/2025/10/YMS-Magnetic-Centrifugal-Chiller-600x600.png',
}

function P(slug: string) { return `/product/${slug}/` }
function I(slug: string) { return img[slug] || '' }

// ── ALL 96 PRODUCTS ──
export const productCatalog: ProductCategory[] = [

  // ── 1. MINI CHILLER YCAE ──
  {
    name: 'Mini Chiller YCAE',
    slug: 'mini-chiller-ycae',
    items: [
      { name: 'Chiller YCAE 18,5TR', nameClean: 'Chiller YCAE 18,5TR', slug: 'ycae-185tr', img: I('ycae-185tr'), specs: ['18,5 TR', 'Air-Cooled', 'Scroll Compressor'], featured: true },
      { name: 'Chiller YCAE 28,5TR', nameClean: 'Chiller YCAE 28,5TR', slug: 'ycae-285tr', img: I('ycae-285tr'), specs: ['28,5 TR', 'Air-Cooled', 'Scroll Compressor'], featured: true },
      { name: 'Chiller YCAE 37TR',  nameClean: 'Chiller YCAE 37TR',  slug: 'ycae-37tr',  img: I('ycae-37tr'),  specs: ['37 TR', 'Air-Cooled', 'Scroll Compressor'], featured: true },
    ],
  },

  // ── 2. MINI CHILLER YCWE ──
  {
    name: 'Mini Chiller YCWE',
    slug: 'mini-chiller-ycwe',
    items: [
      { name: 'Chiller YCWE 21TR', slug: 'chiller-ycwe-21tr', img: I('chiller-ycwe-21tr'), specs: ['21 TR', 'Water-Cooled', 'Scroll Compressor'] },
      { name: 'Chiller YCWE 32TR', slug: 'chiller-ycwe-32tr', img: I('chiller-ycwe-32tr'), specs: ['32 TR', 'Water-Cooled', 'Scroll Compressor'] },
      { name: 'Chiller YCWE 42TR', slug: 'chiller-ycwe-42tr', img: I('chiller-ycwe-42tr'), specs: ['42 TR', 'Water-Cooled', 'Scroll Compressor'] },
      { name: 'YCWE-E Water Cooled Chiller', slug: 'ycwe-e-water-cooled-chiller', img: I('ycwe-e-water-cooled-chiller'), specs: ['Modular', 'Water-Cooled', 'High Efficiency'] },
    ],
  },

  // ── 3. WATER COOLED SCREW / MAGNETIC CHILLER ──
  {
    name: 'Water Cooled Screw Chiller & Magnetic Chiller',
    slug: 'water-cooled-screw-magnetic-chiller',
    items: [
      { name: 'YMS Magnetic Centrifugal Chiller', slug: 'yms-magnetic-centrifugal-chiller', img: I('yms-magnetic-centrifugal-chiller'), specs: ['Oil-Free', 'Magnetic Bearing', 'IPLV > 10', '200-500 TR'], featured: true },
      { name: 'YGWH Water Cooled Screw Chiller (Style A)', slug: 'ygwh-water-cooled-screw-chiller-style-a', img: I('ygwh-water-cooled-screw-chiller-style-a'), specs: ['Screw Compressor', 'Water-Cooled', 'Large Capacity'] },
      { name: 'YCAE-X Air-Cooled Modular Chiller & Heat Pump', slug: 'ycae-x-air-cooled-modular-chiller-heat-pump', img: I('ycae-x-air-cooled-modular-chiller-heat-pump'), specs: ['Modular', 'Heat Pump', 'X-Power Series'] },
    ],
  },

  // ── 4. ABSORPTION CHILLER ──
  {
    name: 'Absorption Chiller',
    slug: 'absorption-chiller',
    items: [
      { name: 'Steam Absorption Chiller', slug: 'steam-absorption-chiller', img: I('steam-absorption-chiller'), specs: ['Steam-Fired', 'LiBr Technology', 'Industrial Scale'], featured: true },
      { name: 'Double Effect Direct Fired Chiller – 150TR', slug: 'double-effect-direct-fired-chiller-150tr', img: I('double-effect-direct-fired-chiller-150tr'), specs: ['150 TR', 'Direct Fired', 'Double Effect'] },
      { name: 'Double Effect Direct Fired Chiller – 300TR', slug: 'double-effect-direct-fired-chiller-300tr', img: I('double-effect-direct-fired-chiller-300tr'), specs: ['300 TR', 'Direct Fired', 'Double Effect'] },
      { name: 'Double Effect Direct Fired Chiller – 600TR', slug: 'double-effect-direct-fired-chiller-600tr', img: I('double-effect-direct-fired-chiller-600tr'), specs: ['600 TR', 'Direct Fired', 'Double Effect'] },
      { name: 'Double Effect Direct Fired Chiller – 900TR', slug: 'double-effect-direct-fired-chiller-900tr', img: I('double-effect-direct-fired-chiller-900tr'), specs: ['900 TR', 'Direct Fired', 'Double Effect'] },
      { name: 'Double Effect Steam Fired Chiller – 150TR', slug: 'double-effect-steam-fired-chiller-150tr', img: I('double-effect-steam-fired-chiller-150tr'), specs: ['150 TR', 'Steam Fired', 'Double Effect'] },
      { name: 'Double Effect Steam Fired Chiller – 300TR', slug: 'double-effect-steam-fired-chiller-300tr', img: I('double-effect-steam-fired-chiller-300tr'), specs: ['300 TR', 'Steam Fired', 'Double Effect'] },
      { name: 'Double Effect Steam Fired Chiller – 600TR', slug: 'double-effect-steam-fired-chiller-600tr', img: I('double-effect-steam-fired-chiller-600tr'), specs: ['600 TR', 'Steam Fired', 'Double Effect'] },
      { name: 'Double Effect Steam Fired Chiller – 900TR', slug: 'double-effect-steam-fired-chiller-900tr', img: I('double-effect-steam-fired-chiller-900tr'), specs: ['900 TR', 'Steam Fired', 'Double Effect'] },
    ],
  },

  // ── 5. COOLING TOWER ──
  {
    name: 'Cooling Tower',
    slug: 'cooling-tower',
    items: [
      { name: 'Cross-Flow Closed Cooling Tower', slug: 'cross-flow-closed-cooling-tower', img: I('cross-flow-closed-cooling-tower'), specs: ['Cross-Flow', 'Closed Circuit', 'Low Maintenance'] },
      { name: 'Counter-Flow Closed Cooling Tower', slug: 'counter-flow-closed-cooling-tower', img: I('counter-flow-closed-cooling-tower'), specs: ['Counter-Flow', 'Closed Circuit', 'High Efficiency'] },
    ],
  },

  // ── 6. AIR HANDLING & FCU ──
  {
    name: 'Air Handling & FCU',
    slug: 'air-handling-fcu',
    items: [
      { name: 'YBAH-F ECM Ceiling Fan Coil Unit', slug: 'ybah-f-ecm-ceiling-fan-coil-unit', img: I('ybah-f-ecm-ceiling-fan-coil-unit'), specs: ['ECM Motor', 'Ceiling FCU', 'YORK'], featured: true },
      { name: 'YBAH-G Ceiling Air Handling Unit', slug: 'ybah-g-ceiling-air-handling-unit', img: I('ybah-g-ceiling-air-handling-unit'), specs: ['Ceiling Type', 'Air Handling', 'YORK'] },
      { name: 'E1000 BLDC FCU Thermostat YORK', slug: 'e1000-bldc-fcu-thermostat', specs: ['BLDC', 'FCU Thermostat', 'YORK', 'Programmable'] },
    ],
  },

  // ── 7. SOLAR PANEL ──
  {
    name: 'Solar Panel',
    slug: 'solar-panel',
    items: [
      { name: 'Tiger Neo 78HC-BDV', slug: 'tiger-neo-78hc-bdv', img: I('tiger-neo-78hc-bdv'), specs: ['78HC', 'Bifacial', 'N-Type', '> 600Wp'], featured: true },
      { name: 'Tiger Neo 72HC-BDV', slug: 'tiger-neo-72hc-bdv', img: I('tiger-neo-72hc-bdv'), specs: ['72HC', 'Bifacial', 'N-Type', '> 550Wp'], featured: true },
      { name: 'Solar Drive (SIMHA)', slug: 'solar-drive', specs: ['SIMHA', 'Solar Drive', 'Variable Speed'] },
    ],
  },

  // ── 8. INVERTER ──
  {
    name: 'Inverter',
    slug: 'inverter',
    items: [
      { name: 'TerraMax™ Inverter', slug: 'terramax-inverter', specs: ['TerraMax', 'Inverter', 'Grid-Tie', 'High Efficiency'] },
      { name: 'Three Phase Inverters with Synergy Technology', slug: 'three-phase-inverters-with-synergy-technology', specs: ['Three Phase', 'Synergy Technology', 'Commercial'] },
      { name: 'Hybrid Inverter', slug: 'hybrid-inverter', specs: ['Hybrid', 'Solar + Grid', 'Battery Ready'] },
      { name: 'Grid Tie Inverter', slug: 'grid-tie-inverter', specs: ['Grid Tie', 'On-Grid'] },
      { name: 'Home Hub Inverters', slug: 'home-hub-inverters', specs: ['Hub Inverter', 'Residential'] },
      { name: 'Home Wave Inverters', slug: 'home-wave-inverters', specs: ['Wave Inverter', 'Residential'] },
      { name: 'Home Short String Inverter', slug: 'home-short-string-inverter', specs: ['Short String', 'Inverter', 'Residential'] },
    ],
  },

  // ── 9. POWER OPTIMIZER ──
  {
    name: 'Power Optimizer',
    slug: 'power-optimizer',
    items: [
      { name: 'S1000 & S1200 Commercial Power Optimizers', slug: 's1000-s1200-commercial-power-optimizers', specs: ['S1000', 'S1200', 'Commercial Optimizer'] },
      { name: 'S1500 Commercial Power Optimizers', slug: 's1500-commercial-power-optimizers', specs: ['S1500', 'Commercial', 'Power Optimizer'] },
      { name: 'H1300 Power Optimizers', slug: 'h1300-power-optimizers', specs: ['H1300', 'Power Optimizer'] },
      { name: 'Home Power Optimizers', slug: 'home-power-optimizers', specs: ['Power Optimizer', 'Residential'] },
    ],
  },

  // ── 10. HOME ENERGY & STORAGE ──
  {
    name: 'Home Energy & Storage',
    slug: 'home-energy-storage',
    items: [
      { name: 'Home Battery 400v', slug: 'home-battery-400v', specs: ['400V', 'Home Battery', 'Storage'] },
      { name: 'Home Battery 48v', slug: 'home-battery-48v', specs: ['48V', 'Home Battery', 'Storage'] },
      { name: 'Home Backup Interface', slug: 'home-backup-interface', specs: ['Backup', 'Home Energy'] },
      { name: 'Commercial Storage System CSS-OD 102.4', slug: 'commercial-storage-system-css-od-102-4', specs: ['102.4 kWh', 'Commercial Storage', 'Outdoor'] },
      { name: 'Home Load Controller', slug: 'home-load-controller', specs: ['Load Controller', 'Energy Management'] },
      { name: 'Home Smart Switch', slug: 'home-smart-switch', specs: ['Smart Switch', 'Home Automation'] },
      { name: 'ONE Controller', slug: 'one-controller', specs: ['ONE', 'Controller', 'Monitoring'] },
      { name: 'Hot Water Controller', slug: 'hot-water-controller', specs: ['Hot Water', 'Controller', 'Solar Thermal'] },
    ],
  },

  // ── 11. EV CHARGER ──
  {
    name: 'EV Charger',
    slug: 'ev-charger',
    items: [
      { name: 'ONE Ev Charger', slug: 'one-ev-charger', specs: ['ONE EV', 'Charging Station', 'Smart'] },
      { name: 'Ev Charger', slug: 'ev-charger', specs: ['EV Charging', 'AC', 'Fast Charge'] },
    ],
  },

  // ── 12. BMS ──
  {
    name: 'BMS',
    slug: 'bms',
    items: [
      { name: 'EasyIO FC-20 Controller IO EXPANSION CONTROLLER', slug: 'easyio-fc-20-controller-20-point-io-expansion-controller', specs: ['IO Expansion', 'Controller', '20-Point'] },
      { name: 'EasyIO FS-32 Controller IP Controller', slug: 'easyio-fs-32-controller-32-point-ip-controller', specs: ['FS-32', 'IP Controller', '32-Point', 'Building Management'] },
      { name: 'EasyIO FW-8V WiFi VAV Controller', slug: 'easyio-fw-8v-wifi-vav-controller', specs: ['FW-8V', 'WiFi', 'VAV Controller'] },
      { name: 'EasyIO FW-8 WiFi Controller', slug: 'easyio-fw-8-wifi-controller', specs: ['FW-8', 'WiFi Controller', 'EasyIO'] },
      { name: 'EasyIO FD-20i Input Modbus IO EXPANSION MODULE', slug: 'easyio-fd-20i-input-modbus-bacnet-module', specs: ['FD-20i', 'Modbus', 'BACnet', 'IO Module'] },
      { name: 'A1 Smart Starter', slug: 'a1-smart-starter', specs: ['Smart Starter', 'Motor Control'] },
      { name: 'Elite Soft Starter', slug: 'elite-soft-starter', specs: ['Soft Starter', 'Motor Protection'] },
      { name: 'RMS Dongle', slug: 'rms-dongle', specs: ['RMS', 'Dongle', 'Monitoring'] },
    ],
  },

  // ── 13. GREEN SOLUTION ──
  {
    name: 'Green Solution',
    slug: 'green-solution',
    items: [
      { name: 'NANDI Universal Drive', slug: 'nandi-universal-drive', specs: ['Universal Drive', 'VFD', 'Pump Control'] },
      { name: 'LOTUS Universal Drive', slug: 'lotus-universal-drive', specs: ['Universal Drive', 'VFD', 'Energy Saving'] },
      { name: 'DU DT Filter', slug: 'du-dt-filter', specs: ['DU Filter', 'DT Filter', 'Harmonic Filtering'] },
    ],
  },

  // ── 14. HIGH EFFICIENCY PUMP ──
  {
    name: 'High Efficiency Pump',
    slug: 'high-efficiency-pump',
    items: [
      { name: 'Vertical Multi-Stage Centrifugal Pumps (SCR, SCRI, SCRN Series)', slug: 'vertical-multi-stage-centrifugal-pumps-scr-scri-scrn-series', img: I('vertical-multi-stage-centrifugal-pumps-scr-scri-scrn-series'), specs: ['SCR/SCRI/SCRN', 'Multi-Stage', 'Vertical', 'High Pressure'] },
      { name: 'Sero Vertical Multi-Stage Pumps', slug: 'sero-vertical-multi-stage-pumps', specs: ['Sero', 'Vertical', 'Multi-Stage'] },
      { name: 'Pressure Booster (SCM Series)', slug: 'pressure-booster-scm-series', specs: ['SCM Series', 'Compact Booster'] },
      { name: 'High Head Pressure Booster (SCR & SCRN Series)', slug: 'high-head-pressure-booster-scr-scrn-series', specs: ['High Head', 'Booster', 'SCR/SCRN'] },
      { name: 'Pressure Booster Pumps (SH, SHI, & SHN Series)', slug: 'pressure-booster-pumps-sh-shi-shn-series', specs: ['SH Series', 'SHI Series', 'SHN Series', 'Booster'] },
      { name: 'Domestic Water Pressure Booster (SJP Series)', slug: 'domestic-water-pressure-booster-sjp-series', specs: ['SJP Series', 'Domestic Booster'] },
      { name: 'Hydropneumatic Booster System (HYPN Series)', slug: 'hydropneumatic-booster-system-hypn-series', specs: ['HYPN Series', 'Hydropneumatic', 'Booster'] },
      { name: 'End-Suction Long Coupled Pumps (SNK Series)', slug: 'end-suction-long-coupled-pumps-snk-series', specs: ['SNK Series', 'Long Coupled', 'End-Suction'] },
      { name: 'End-Suction Single Shaft Pumps (SMB Series)', slug: 'end-suction-single-shaft-pumps-smb-series', specs: ['SMB Series', 'Single Shaft', 'End-Suction'] },
      { name: 'End-Suction Closed Coupled Pumps (SNB Series)', slug: 'end-suction-closed-coupled-pumps-snb-series', specs: ['SNB Series', 'Closed Coupled', 'End-Suction'] },
      { name: 'OpenWell Pumps (SOMB Series)', slug: 'openwell-pumps-somb-series', specs: ['SOMB', 'Open Well'] },
      { name: 'OpenWell Pumps (JALPARI Series)', slug: 'openwell-pumps-jalpari-series', specs: ['JALPARI', 'Open Well'] },
      { name: 'OpenWell SHOS CA/SA Series', slug: 'openwell-shos-ca-sa-series', specs: ['SHOS', 'CA/SA', 'Open Well'] },
      { name: 'Submersible Pumps & Motors (QF Series)', slug: 'submersible-pumps-motors-qf-series', specs: ['QF Series', 'Submersible', 'Motors Included'] },
      { name: 'Immersible Pumps (SMTR Series)', slug: 'immersible-pumps-smtr-series', specs: ['SMTR Series', 'Immersible'] },
      { name: 'Self-Priming Pumps (MEGH Series)', slug: 'self-priming-pumps-megh-series', specs: ['MEGH Series', 'Self-Priming'] },
      { name: 'Self-Priming Pumps (CRP Series)', slug: 'self-priming-pumps-crp-series', specs: ['CRP Series', 'Self-Priming'] },
      { name: 'Non Self-Priming Pumps (NSP Series)', slug: 'non-self-priming-pumps-nsp-series', specs: ['NSP Series', 'Non Self-Priming'] },
      { name: 'Positive Displacement Pumps', slug: 'positive-displacement-pumps', specs: ['Positive Displacement', 'High Viscosity'] },
      { name: 'RO Pumps', slug: 'ro-pumps', specs: ['RO', 'Reverse Osmosis'] },
      { name: 'Fire Pumps', slug: 'fire-pumps', specs: ['Fire Pump', 'Jockey Pump', 'Diesel/Electric'] },
      { name: 'SVX Waste Water Pump', slug: 'svx-waste-water-pump', specs: ['SVX', 'Waste Water', 'Submersible'] },
      { name: 'SDW Waste Water Pump', slug: 'sdw-waste-water-pump', specs: ['SDW', 'Waste Water', 'Submersible'] },
      { name: 'SSEG Waste Water Pump', slug: 'sseg-waste-water-pump', specs: ['SSEG', 'Waste Water', 'Submersible'] },
      { name: 'Horizontal Split Case Pump (SHS Series)', slug: 'horizontal-split-case-pump-shs-series', specs: ['SHS Series', 'Split Case'] },
      { name: 'Shallow Well Pump (SSW Series)', slug: 'shallow-well-pump-ssw-series', specs: ['SSW Series', 'Shallow Well'] },
      { name: 'Slow Speed Pump (SSS Series)', slug: 'slow-speed-pump-sss-series', specs: ['SSS Series', 'Slow Speed'] },
      { name: '4" Premium Plug & Play Pump (DCSOP Series)', slug: '4-premium-plug-play-pump-dcsop-series', specs: ['4-inch', 'Plug & Play', 'Solar Ready'] },
      { name: 'Micro Surface Pumpset (DCSSUP Series)', slug: 'micro-surface-pumpset-dcssup-series', specs: ['DCSSUP', 'Surface Pump', 'Compact'] },
    ],
  },

  // ── 15. PPR PIPE & FITTINGS ──
  {
    name: 'PPR Pipe & Fittings',
    slug: 'ppr-pipe',
    items: [
      { name: 'Pipes', slug: 'pipes', specs: ['PPR', 'PN10/PN16/PN20', '20mm-110mm'] },
      { name: 'Cable', slug: 'cable', specs: ['Solar Cable', 'Power Cable'] },
      { name: 'Plain Drip Irrigation', slug: 'plain-drip-irrigation', specs: ['Drip Irrigation', 'Plain', 'Agricultural'] },
      { name: 'Round Drip Irrigation', slug: 'round-drip-irrigation', specs: ['Drip Irrigation', 'Round', 'Agricultural'] },
      { name: 'Flat Drip Irrigation', slug: 'flat-drip-irrigation', specs: ['Drip Irrigation', 'Flat', 'Agricultural'] },
    ],
  },

  // ── 16. SOLAR DC SUBMERSIBLE PUMP (Shakti) ──
  {
    name: 'Solar DC Submersible Pump',
    slug: 'solar-dc-submersible-pump',
    items: [
      { name: 'SOLAR 1.5 DCSSP 1800', slug: 'solar-1-5-dcssp-1800', specs: ['DC Submersible', '1800Wp', 'Shakti'] },
      { name: 'SOLAR 10 DCSSP 1200', slug: 'solar-10-dcssp-1200', specs: ['DC Submersible', '1200Wp', 'Shakti'] },
      { name: 'SOLAR 10 DCSSP 4800', slug: 'solar-10-dcssp-4800', specs: ['DC Submersible', '4800Wp', 'Shakti'] },
      { name: 'SOLAR 10 DCSSP 6750', slug: 'solar-10-dcssp-6750', specs: ['DC Submersible', '6750Wp', 'Shakti'] },
      { name: 'SOLAR 103 DCSSP 4800', slug: 'solar-103-dcssp-4800', specs: ['DC Submersible', '4800Wp', 'Shakti'] },
      { name: 'SOLAR 103 DCSSP 9000', slug: 'solar-103-dcssp-9000', specs: ['DC Submersible', '9000Wp', 'Shakti'] },
      { name: 'SOLAR 11 DCSSP 13500', slug: 'solar-11-dcssp-13500', specs: ['DC Submersible', '13500Wp', 'Shakti'] },
      { name: 'SOLAR 11 DCSSP 6750', slug: 'solar-11-dcssp-6750', specs: ['DC Submersible', '6750Wp', 'Shakti'] },
      { name: 'SOLAR 110 DCSSP 45000', slug: 'solar-110-dcssp-45000', specs: ['DC Submersible', '45000Wp', 'Shakti'] },
      { name: 'SOLAR 113 DCSSP 54000', slug: 'solar-113-dcssp-54000', specs: ['DC Submersible', '54000Wp', 'Shakti'] },
      { name: 'SOLAR 119 DCSSP 36000', slug: 'solar-119-dcssp-36000', specs: ['DC Submersible', '36000Wp', 'Shakti'] },
      { name: 'SOLAR 12 DCSSP 11250', slug: 'solar-12-dcssp-11250', specs: ['DC Submersible', '11250Wp', 'Shakti'] },
      { name: 'SOLAR 12 DCSSP 13500', slug: 'solar-12-dcssp-13500', specs: ['DC Submersible', '13500Wp', 'Shakti'] },
      { name: 'SOLAR 12 DCSSP 1800', slug: 'solar-12-dcssp-1800', specs: ['DC Submersible', '1800Wp', 'Shakti'] },
      { name: 'SOLAR 12 DCSSP 3000', slug: 'solar-12-dcssp-3000', specs: ['DC Submersible', '3000Wp', 'Shakti'] },
      { name: 'SOLAR 12 DCSSP 9000', slug: 'solar-12-dcssp-9000', specs: ['DC Submersible', '9000Wp', 'Shakti'] },
      { name: 'SOLAR 121 DCSSP 27000', slug: 'solar-121-dcssp-27000', specs: ['DC Submersible', '27000Wp', 'Shakti'] },
      { name: 'SOLAR 126 DCSSP 54000', slug: 'solar-126-dcssp-54000', specs: ['DC Submersible', '54000Wp', 'Shakti'] },
      { name: 'SOLAR 129 DCSSP 18000', slug: 'solar-129-dcssp-18000', specs: ['DC Submersible', '18000Wp', 'Shakti'] },
      { name: 'SOLAR 13 DCSSP 18000', slug: 'solar-13-dcssp-18000', specs: ['DC Submersible', '18000Wp', 'Shakti'] },
      { name: 'SOLAR 13 DCSSP 4800', slug: 'solar-13-dcssp-4800', specs: ['DC Submersible', '4800Wp', 'Shakti'] },
      { name: 'SOLAR 135 DCSSP 45000', slug: 'solar-135-dcssp-45000', specs: ['DC Submersible', '45000Wp', 'Shakti'] },
      { name: 'SOLAR 137 DCSSP 6750', slug: 'solar-137-dcssp-6750', specs: ['DC Submersible', '6750Wp', 'Shakti'] },
      { name: 'SOLAR 139 DCSSP 13500', slug: 'solar-139-dcssp-13500', specs: ['DC Submersible', '13500Wp', 'Shakti'] },
      { name: 'SOLAR 139 DCSSP 36000', slug: 'solar-139-dcssp-36000', specs: ['DC Submersible', '36000Wp', 'Shakti'] },
      { name: 'SOLAR 14 DCSSP 27000', slug: 'solar-14-dcssp-27000', specs: ['DC Submersible', '27000Wp', 'Shakti'] },
      { name: 'SOLAR 14 DCSSP 6750', slug: 'solar-14-dcssp-6750', specs: ['DC Submersible', '6750Wp', 'Shakti'] },
      { name: 'SOLAR 140 DCSSP 22500', slug: 'solar-140-dcssp-22500', specs: ['DC Submersible', '22500Wp', 'Shakti'] },
      { name: 'SOLAR 148 DCSSP 18000', slug: 'solar-148-dcssp-18000', specs: ['DC Submersible', '18000Wp', 'Shakti'] },
      { name: 'SOLAR 148 DCSSP 54000', slug: 'solar-148-dcssp-54000', specs: ['DC Submersible', '54000Wp', 'Shakti'] },
      { name: 'SOLAR 150 DCSSP 45000', slug: 'solar-150-dcssp-45000', specs: ['DC Submersible', '45000Wp', 'Shakti'] },
      { name: 'SOLAR 156 DCSSP 22500', slug: 'solar-156-dcssp-22500', specs: ['DC Submersible', '22500Wp', 'Shakti'] },
      { name: 'SOLAR 16 DCSSP 11250', slug: 'solar-16-dcssp-11250', specs: ['DC Submersible', '11250Wp', 'Shakti'] },
      { name: 'SOLAR 16 DCSSP 18000', slug: 'solar-16-dcssp-18000', specs: ['DC Submersible', '18000Wp', 'Shakti'] },
      { name: 'SOLAR 16 DCSSP 22500', slug: 'solar-16-dcssp-22500', specs: ['DC Submersible', '22500Wp', 'Shakti'] },
      { name: 'SOLAR 16 DCSSP 9000', slug: 'solar-16-dcssp-9000', specs: ['DC Submersible', '9000Wp', 'Shakti'] },
      { name: 'SOLAR 16.5 DCSSP 900', slug: 'solar-16-5-dcssp-900', specs: ['DC Submersible', '900Wp', 'Shakti'] },
      { name: 'SOLAR 188 DCSSP 9000', slug: 'solar-188-dcssp-9000', specs: ['DC Submersible', '9000Wp', 'Shakti'] },
      { name: 'SOLAR 19 DCSSP 13500', slug: 'solar-19-dcssp-13500', specs: ['DC Submersible', '13500Wp', 'Shakti'] },
      { name: 'SOLAR 19 DCSSP 1800', slug: 'solar-19-dcssp-1800', specs: ['DC Submersible', '1800Wp', 'Shakti'] },
      { name: 'SOLAR 19 DCSSP 22500', slug: 'solar-19-dcssp-22500', specs: ['DC Submersible', '22500Wp', 'Shakti'] },
      { name: 'SOLAR 19 DCSSP 36000', slug: 'solar-19-dcssp-36000', specs: ['DC Submersible', '36000Wp', 'Shakti'] },
      { name: 'SOLAR 19 DCSSP 6750', slug: 'solar-19-dcssp-6750', specs: ['DC Submersible', '6750Wp', 'Shakti'] },
      { name: 'SOLAR 19 DCSSP 9000', slug: 'solar-19-dcssp-9000', specs: ['DC Submersible', '9000Wp', 'Shakti'] },
      { name: 'SOLAR 2 DCSSP 1800', slug: 'solar-2-dcssp-1800', specs: ['DC Submersible', '1800Wp', 'Shakti'] },
      { name: 'SOLAR 2 DCSSP 3000', slug: 'solar-2-dcssp-3000', specs: ['DC Submersible', '3000Wp', 'Shakti'] },
      { name: 'SOLAR 2.0 DCSSP 900', slug: 'solar-2-0-dcssp-900', specs: ['DC Submersible', '900Wp', 'Shakti'] },
      { name: 'SOLAR 2.5 DCSSP 4800', slug: 'solar-2-5-dcssp-4800', specs: ['DC Submersible', '4800Wp', 'Shakti'] },
      { name: 'SOLAR 20 DCSSP 11250', slug: 'solar-20-dcssp-11250', specs: ['DC Submersible', '11250Wp', 'Shakti'] },
      { name: 'SOLAR 20 DCSSP 27000', slug: 'solar-20-dcssp-27000', specs: ['DC Submersible', '27000Wp', 'Shakti'] },
      { name: 'SOLAR 20 DCSSP 3000', slug: 'solar-20-dcssp-3000', specs: ['DC Submersible', '3000Wp', 'Shakti'] },
      { name: 'SOLAR 20 DCSSP 4800', slug: 'solar-20-dcssp-4800', specs: ['DC Submersible', '4800Wp', 'Shakti'] },
      { name: 'SOLAR 20.5 DCSSP 1200', slug: 'solar-20-5-dcssp-1200', specs: ['DC Submersible', '1200Wp', 'Shakti'] },
      { name: 'SOLAR 23 DCSSP 27000', slug: 'solar-23-dcssp-27000', specs: ['DC Submersible', '27000Wp', 'Shakti'] },
      { name: 'SOLAR 24 DCSSP 11250', slug: 'solar-24-dcssp-11250', specs: ['DC Submersible', '11250Wp', 'Shakti'] },
      { name: 'SOLAR 240 DCSSP 18000', slug: 'solar-240-dcssp-18000', specs: ['DC Submersible', '18000Wp', 'Shakti'] },
      { name: 'SOLAR 25 DCSSP 13500', slug: 'solar-25-dcssp-13500', specs: ['DC Submersible', '13500Wp', 'Shakti'] },
      { name: 'SOLAR 25 DCSSP 22500', slug: 'solar-25-dcssp-22500', specs: ['DC Submersible', '22500Wp', 'Shakti'] },
      { name: 'SOLAR 25 DCSSP 36000', slug: 'solar-25-dcssp-36000', specs: ['DC Submersible', '36000Wp', 'Shakti'] },
      { name: 'SOLAR 26 DCSSP 27000', slug: 'solar-26-dcssp-27000', specs: ['DC Submersible', '27000Wp', 'Shakti'] },
      { name: 'SOLAR 27 DCSSP 18000', slug: 'solar-27-dcssp-18000', specs: ['DC Submersible', '18000Wp', 'Shakti'] },
      { name: 'SOLAR 27 DCSSP 36000', slug: 'solar-27-dcssp-36000', specs: ['DC Submersible', '36000Wp', 'Shakti'] },
      { name: 'SOLAR 27 DCSSP 9000', slug: 'solar-27-dcssp-9000', specs: ['DC Submersible', '9000Wp', 'Shakti'] },
      { name: 'SOLAR 28 DCSSP 6750', slug: 'solar-28-dcssp-6750', specs: ['DC Submersible', '6750Wp', 'Shakti'] },
      { name: 'SOLAR 3 DCSSP 1200', slug: 'solar-3-dcssp-1200', specs: ['DC Submersible', '1200Wp', 'Shakti'] },
      { name: 'SOLAR 3 DCSSP 3000', slug: 'solar-3-dcssp-3000', specs: ['DC Submersible', '3000Wp', 'Shakti'] },
      { name: 'SOLAR 3 DCSSP 4800', slug: 'solar-3-dcssp-4800', specs: ['DC Submersible', '4800Wp', 'Shakti'] },
      { name: 'SOLAR 3.0 DCSSP 900', slug: 'solar-3-0-dcssp-900', specs: ['DC Submersible', '900Wp', 'Shakti'] },
      { name: 'SOLAR 30 DCSSP 13500', slug: 'solar-30-dcssp-13500', specs: ['DC Submersible', '13500Wp', 'Shakti'] },
      { name: 'SOLAR 30 DCSSP 3000', slug: 'solar-30-dcssp-3000', specs: ['DC Submersible', '3000Wp', 'Shakti'] },
      { name: 'SOLAR 32 DCSSP 18000', slug: 'solar-32-dcssp-18000', specs: ['DC Submersible', '18000Wp', 'Shakti'] },
      { name: 'SOLAR 33 DCSSP 4800', slug: 'solar-33-dcssp-4800', specs: ['DC Submersible', '4800Wp', 'Shakti'] },
      { name: 'SOLAR 34 DCSSP 11250', slug: 'solar-34-dcssp-11250', specs: ['DC Submersible', '11250Wp', 'Shakti'] },
      { name: 'SOLAR 35 DCSSP 22500', slug: 'solar-35-dcssp-22500', specs: ['DC Submersible', '22500Wp', 'Shakti'] },
      { name: 'SOLAR 39 DCSSP 1800', slug: 'solar-39-dcssp-1800', specs: ['DC Submersible', '1800Wp', 'Shakti'] },
      { name: 'SOLAR 4.5 DCSSP 4800', slug: 'solar-4-5-dcssp-4800', specs: ['DC Submersible', '4800Wp', 'Shakti'] },
      { name: 'SOLAR 41 DCSSP 9000', slug: 'solar-41-dcssp-9000', specs: ['DC Submersible', '9000Wp', 'Shakti'] },
      { name: 'SOLAR 42 DCSSP 22500', slug: 'solar-42-dcssp-22500', specs: ['DC Submersible', '22500Wp', 'Shakti'] },
      { name: 'SOLAR 42 DCSSP 45000', slug: 'solar-42-dcssp-45000', specs: ['DC Submersible', '45000Wp', 'Shakti'] },
      { name: 'SOLAR 42 DCSSP 54000', slug: 'solar-42-dcssp-54000', specs: ['DC Submersible', '54000Wp', 'Shakti'] },
      { name: 'SOLAR 43 DCSSP 13500', slug: 'solar-43-dcssp-13500', specs: ['DC Submersible', '13500Wp', 'Shakti'] },
      { name: 'SOLAR 43 DCSSP 27000', slug: 'solar-43-dcssp-27000', specs: ['DC Submersible', '27000Wp', 'Shakti'] },
      { name: 'SOLAR 44 DCSSP 36000', slug: 'solar-44-dcssp-36000', specs: ['DC Submersible', '36000Wp', 'Shakti'] },
      { name: 'SOLAR 48 DCSSP 11250', slug: 'solar-48-dcssp-11250', specs: ['DC Submersible', '11250Wp', 'Shakti'] },
      { name: 'SOLAR 48 DCSSP 22500', slug: 'solar-48-dcssp-22500', specs: ['DC Submersible', '22500Wp', 'Shakti'] },
      { name: 'SOLAR 5 DCSSP 3000', slug: 'solar-5-dcssp-3000', specs: ['DC Submersible', '3000Wp', 'Shakti'] },
      { name: 'SOLAR 5 DCSSP 4800', slug: 'solar-5-dcssp-4800', specs: ['DC Submersible', '4800Wp', 'Shakti'] },
      { name: 'SOLAR 5 DCSSP 6750', slug: 'solar-5-dcssp-6750', specs: ['DC Submersible', '6750Wp', 'Shakti'] },
      { name: 'SOLAR 50 DCSSP 6750', slug: 'solar-50-dcssp-6750', specs: ['DC Submersible', '6750Wp', 'Shakti'] },
      { name: 'SOLAR 53 DCSSP 18000', slug: 'solar-53-dcssp-18000', specs: ['DC Submersible', '18000Wp', 'Shakti'] },
      { name: 'SOLAR 53 DCSSP 45000', slug: 'solar-53-dcssp-45000', specs: ['DC Submersible', '45000Wp', 'Shakti'] },
      { name: 'SOLAR 53 DCSSP 54000', slug: 'solar-53-dcssp-54000', specs: ['DC Submersible', '54000Wp', 'Shakti'] },
      { name: 'SOLAR 55 DCSSP 4800', slug: 'solar-55-dcssp-4800', specs: ['DC Submersible', '4800Wp', 'Shakti'] },
      { name: 'SOLAR 57 DCSSP 36000', slug: 'solar-57-dcssp-36000', specs: ['DC Submersible', '36000Wp', 'Shakti'] },
      { name: 'SOLAR 58 DCSSP 13500', slug: 'solar-58-dcssp-13500', specs: ['DC Submersible', '13500Wp', 'Shakti'] },
      { name: 'SOLAR 6 DCSSP 1800', slug: 'solar-6-dcssp-1800', specs: ['DC Submersible', '1800Wp', 'Shakti'] },
      { name: 'SOLAR 6 DCSSP 4800', slug: 'solar-6-dcssp-4800', specs: ['DC Submersible', '4800Wp', 'Shakti'] },
      { name: 'SOLAR 60 DCSSP 27000', slug: 'solar-60-dcssp-27000', specs: ['DC Submersible', '27000Wp', 'Shakti'] },
      { name: 'SOLAR 63 DCSSP 3000', slug: 'solar-63-dcssp-3000', specs: ['DC Submersible', '3000Wp', 'Shakti'] },
      { name: 'SOLAR 64 DCSSP 54000', slug: 'solar-64-dcssp-54000', specs: ['DC Submersible', '54000Wp', 'Shakti'] },
      { name: 'SOLAR 64 DCSSP 9000', slug: 'solar-64-dcssp-9000', specs: ['DC Submersible', '9000Wp', 'Shakti'] },
      { name: 'SOLAR 64.5 DCSSP 27000', slug: 'solar-64-5-dcssp-27000', specs: ['DC Submersible', '27000Wp', 'Shakti'] },
      { name: 'SOLAR 69 DCSSP 36000', slug: 'solar-69-dcssp-36000', specs: ['DC Submersible', '36000Wp', 'Shakti'] },
      { name: 'SOLAR 70 DCSSP 45000', slug: 'solar-70-dcssp-45000', specs: ['DC Submersible', '45000Wp', 'Shakti'] },
      { name: 'SOLAR 71 DCSSP 6750', slug: 'solar-71-dcssp-6750', specs: ['DC Submersible', '6750Wp', 'Shakti'] },
      { name: 'SOLAR 72 DCSSP 22500', slug: 'solar-72-dcssp-22500', specs: ['DC Submersible', '22500Wp', 'Shakti'] },
      { name: 'SOLAR 78 DCSSP 18000', slug: 'solar-78-dcssp-18000', specs: ['DC Submersible', '18000Wp', 'Shakti'] },
      { name: 'SOLAR 8 DCSSP 1200', slug: 'solar-8-dcssp-1200', specs: ['DC Submersible', '1200Wp', 'Shakti'] },
      { name: 'SOLAR 8 DCSSP 18000', slug: 'solar-8-dcssp-18000', specs: ['DC Submersible', '18000Wp', 'Shakti'] },
      { name: 'SOLAR 8 DCSSP 3000', slug: 'solar-8-dcssp-3000', specs: ['DC Submersible', '3000Wp', 'Shakti'] },
      { name: 'SOLAR 84 DCSSP 27000', slug: 'solar-84-dcssp-27000', specs: ['DC Submersible', '27000Wp', 'Shakti'] },
      { name: 'SOLAR 84 DCSSP 36000', slug: 'solar-84-dcssp-36000', specs: ['DC Submersible', '36000Wp', 'Shakti'] },
      { name: 'SOLAR 86 DCSSP 13500', slug: 'solar-86-dcssp-13500', specs: ['DC Submersible', '13500Wp', 'Shakti'] },
      { name: 'SOLAR 87 DCSSP 45000', slug: 'solar-87-dcssp-45000', specs: ['DC Submersible', '45000Wp', 'Shakti'] },
      { name: 'SOLAR 9 DCSSP 9000', slug: 'solar-9-dcssp-9000', specs: ['DC Submersible', '9000Wp', 'Shakti'] },
      { name: 'SOLAR 93 DCSSP 22500', slug: 'solar-93-dcssp-22500', specs: ['DC Submersible', '22500Wp', 'Shakti'] },
    ],
  },

  // ── 17. SOLAR SURFACE PUMP (Shakti) ──
  {
    name: 'Solar Surface Pump',
    slug: 'solar-surface-pump',
    items: [
      { name: 'SOLAR 101 DCSMP 9000', slug: 'solar-101-dcsmp-9000', specs: ['DC Surface', '9000Wp', 'Shakti'] },
      { name: 'SOLAR 104 DCSMP 4800', slug: 'solar-104-dcsmp-4800', specs: ['DC Surface', '4800Wp', 'Shakti'] },
      { name: 'SOLAR 124 DCSMP 11250', slug: 'solar-124-dcsmp-11250', specs: ['DC Surface', '11250Wp', 'Shakti'] },
      { name: 'SOLAR 144 DCSMP 13500', slug: 'solar-144-dcsmp-13500', specs: ['DC Surface', '13500Wp', 'Shakti'] },
      { name: 'SOLAR 150 DCSMP 6750', slug: 'solar-150-dcsmp-6750', specs: ['DC Surface', '6750Wp', 'Shakti'] },
      { name: 'SOLAR 17 DCSMP 1800', slug: 'solar-17-dcsmp-1800', specs: ['DC Surface', '1800Wp', 'Shakti'] },
      { name: 'SOLAR 179 DCSMP 9000', slug: 'solar-179-dcsmp-9000', specs: ['DC Surface', '9000Wp', 'Shakti'] },
      { name: 'SOLAR 18 DCSMP 900', slug: 'solar-18-dcsmp-900', specs: ['DC Surface', '900Wp', 'Shakti'] },
      { name: 'SOLAR 21 DCSMP 1000', slug: 'solar-21-dcsmp-1000', specs: ['DC Surface', '1000Wp', 'Shakti'] },
      { name: 'SOLAR 28 DCSMP 2700', slug: 'solar-28-dcsmp-2700', specs: ['DC Surface', '2700Wp', 'Shakti'] },
      { name: 'SOLAR 33 DCSMP 4800', slug: 'solar-33-dcsmp-4800', specs: ['DC Surface', '4800Wp', 'Shakti'] },
      { name: 'SOLAR 38 DCSMP 1800', slug: 'solar-38-dcsmp-1800', specs: ['DC Surface', '1800Wp', 'Shakti'] },
      { name: 'SOLAR 4 DCSMP 500', slug: 'solar-4-dcsmp-500', specs: ['DC Surface', '500Wp', 'Shakti'] },
      { name: 'SOLAR 48 DCSMP 6750', slug: 'solar-48-dcsmp-6750', specs: ['DC Surface', '6750Wp', 'Shakti'] },
      { name: 'SOLAR 50 DCSMP 4800', slug: 'solar-50-dcsmp-4800', specs: ['DC Surface', '4800Wp', 'Shakti'] },
      { name: 'SOLAR 58 DCSMP 11250', slug: 'solar-58-dcsmp-11250', specs: ['DC Surface', '11250Wp', 'Shakti'] },
      { name: 'SOLAR 58 DCSMP 2700', slug: 'solar-58-dcsmp-2700', specs: ['DC Surface', '2700Wp', 'Shakti'] },
      { name: 'SOLAR 6 DCSMP 1000', slug: 'solar-6-dcsmp-1000', specs: ['DC Surface', '1000Wp', 'Shakti'] },
      { name: 'SOLAR 67 DCSMP 6750', slug: 'solar-67-dcsmp-6750', specs: ['DC Surface', '6750Wp', 'Shakti'] },
      { name: 'SOLAR 70 DCSMP 9000', slug: 'solar-70-dcsmp-9000', specs: ['DC Surface', '9000Wp', 'Shakti'] },
      { name: 'SOLAR 85 DCSMP 11250', slug: 'solar-85-dcsmp-11250', specs: ['DC Surface', '11250Wp', 'Shakti'] },
      { name: 'SOLAR 9 DCSMP 1000', slug: 'solar-9-dcsmp-1000', specs: ['DC Surface', '1000Wp', 'Shakti'] },
      { name: 'SOLAR 9 DCSMP 500', slug: 'solar-9-dcsmp-500', specs: ['DC Surface', '500Wp', 'Shakti'] },
      { name: 'SOLAR 94 DCSMP 13500', slug: 'solar-94-dcsmp-13500', specs: ['DC Surface', '13500Wp', 'Shakti'] },
    ],
  },

  // ── 18. SOLAR ACCESSORIES ──
  {
    name: 'Solar Accessories',
    slug: 'solar-accessories',
    items: [
      { name: 'Universal Solar Pump Controller', slug: 'universal-solar-pump-controller', img: I('universal-solar-pump-controller'), specs: ['Universal', 'Solar Pump', 'MPPT Controller'], featured: true },
      { name: 'Change Over Switch', slug: 'change-over-switch', specs: ['Dual Input', 'Single Output', 'Solar/Grid'] },
      { name: 'Shakti DU DT Filter', slug: 'shakti-du-dt-filter', specs: ['DU/DT Filter', 'Harmonic Filter', 'Motor Protection'] },
    ],
  },

]

export const categoryDefaultImages: Record<string, string> = {
  'mini-chiller-ycae': 'https://benuagreenenergy.com/wp-content/uploads/2025/05/Chiller-YCAE-185TR-300x300.jpg',
  'mini-chiller-ycwe': 'https://benuagreenenergy.com/wp-content/uploads/2025/05/Chiller-YCWE-21TR-300x300.png',
  'water-cooled-screw-magnetic-chiller': 'https://benuagreenenergy.com/wp-content/uploads/2025/10/YMS-Magnetic-Centrifugal-Chiller-300x300.png',
  'absorption-chiller': 'https://benuagreenenergy.com/wp-content/uploads/2025/05/Steam-Absorption-Chiller-300x300.png',
  'solar-panel': 'https://benuagreenenergy.com/wp-content/uploads/2025/02/Tiger-Neo-78HC-BDV-300x300.png',
  'cooling-tower': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/counter-flow-closed-cooling-tower-300x300.png',
  'air-handling-fcu': 'https://benuagreenenergy.com/wp-content/uploads/2025/10/YBAH-F-ECM-Ceiling-Fan-Coil-Unit-300x300.png',
  'inverter': 'https://benuagreenenergy.com/wp-content/uploads/2025/02/Tiger-Neo-78HC-BDV-300x300.png',
  'power-optimizer': 'https://benuagreenenergy.com/wp-content/uploads/2025/02/Tiger-Neo-78HC-BDV-300x300.png',
  'home-energy-storage': 'https://benuagreenenergy.com/wp-content/uploads/2025/02/Tiger-Neo-78HC-BDV-300x300.png',
  'ev-charger': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/photo_2025-11-25_12-15-22-600x570.jpg',
  'bms': 'https://benuagreenenergy.com/wp-content/uploads/2025/10/YBAH-G-Ceiling-Air-Handling-Unit-300x300.png',
  'green-solution': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/32-Universal-Solar-Pump-Controller-300x300.png',
  'high-efficiency-pump': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png',
  'ppr-pipe': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/17-Vertical-Multi-Stage-Centrifugal-Pumps-300x300.png',
  'solar-dc-submersible-pump': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/1-Solar-Open-Well-pumps-300x300.png',
  'solar-surface-pump': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/1-Solar-Open-Well-pumps-300x300.png',
  'solar-accessories': 'https://benuagreenenergy.com/wp-content/uploads/2025/11/32-Universal-Solar-Pump-Controller-300x300.png',
}

export function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export function getProductBySlug(slug: string): { category: ProductCategory; item: ProductItem } | null {
  for (const cat of productCatalog) {
    for (const item of cat.items) {
      const itemSlug = item.slug || slugify(item.name)
      if (itemSlug === slug) return { category: cat, item }
    }
  }
  return null
}

export const TOTAL_PRODUCTS = productCatalog.reduce((acc, cat) => acc + cat.items.length, 0)
export const TOTAL_CATEGORIES = productCatalog.length