import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Curated architectural & construction photography matching the specifications exactly
const imageList = [
  {
    name: 'hero-1.jpg',
    url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f15f7?auto=format&fit=crop&w=1920&q=80',
    title: 'Modern UAE Architecture & Structural Concrete'
  },
  {
    name: 'hero-2.jpg',
    url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80',
    title: 'Civil Engineering & Infrastructure Structure'
  },
  {
    name: 'hero-3.jpg',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80',
    title: 'High-Quality Modern Development Project'
  },
  {
    name: 'about-main.jpg',
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    title: 'Mamourah Construction & Technical Leadership'
  },
  {
    name: 'about-secondary.jpg',
    url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
    title: 'Engineering Review and Architectural Planning'
  },
  {
    name: 'service-general.jpg',
    url: 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&q=80',
    title: 'General Construction'
  },
  {
    name: 'service-development.jpg',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    title: 'Development Solutions'
  },
  {
    name: 'service-management.jpg',
    url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    title: 'Project Management'
  },
  {
    name: 'service-fitout.jpg',
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    title: 'Fit-Out & Finishing'
  },
  {
    name: 'service-renovation.jpg',
    url: 'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?auto=format&fit=crop&w=1200&q=80',
    title: 'Renovation & Maintenance'
  },
  {
    name: 'service-infrastructure.jpg',
    url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    title: 'Infrastructure Works'
  },
  {
    name: 'quality-inspection.jpg',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    title: 'Quality Assurance & Site Supervision'
  },
  {
    name: 'hse-safety.jpg',
    url: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200&q=80',
    title: 'Health, Safety & Environmental Management'
  },
  {
    name: 'process-planning.jpg',
    url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    title: 'Consultation & Planning'
  },
  {
    name: 'process-materials.jpg',
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    title: 'Material Procurement'
  },
  {
    name: 'process-handover.jpg',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    title: 'Final Handover & Delivery'
  },
  {
    name: 'project-qasimi.jpg',
    url: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
    title: 'Maintenance of Al Qasimi Publications Building, Sharjah'
  },
  {
    name: 'project-kalba-paint.jpg',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    title: 'Government Buildings Exterior Paintwork Maintenance, Kalba'
  },
  {
    name: 'project-university-city.jpg',
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    title: 'University City Hall Building Maintenance Works, Sharjah'
  },
  {
    name: 'project-kalba-port.jpg',
    url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    title: 'Fishermens Association Building & Kalba Port Development'
  },
  {
    name: 'project-kalba-municipality.jpg',
    url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    title: 'Kalba Municipal Facilities Maintenance & Upgrades'
  },
  {
    name: 'project-coastal-infra.jpg',
    url: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=1200&q=80',
    title: 'Coastal Infrastructure & Civil Engineering Works'
  },
  {
    name: 'project-commercial-rehab.jpg',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    title: 'Commercial Complex Structural Rehabilitation'
  },
  {
    name: 'project-residential-villa.jpg',
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    title: 'Residential Villa Modernization & Fit-Out'
  },
  {
    name: 'project-industrial-facility.jpg',
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    title: 'Industrial Facility Civil Expansion'
  },
  {
    name: 'cta-bg.jpg',
    url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f15f7?auto=format&fit=crop&w=1920&q=80',
    title: 'Architectural Perspective Call To Action'
  },
  {
    name: 'og-image.jpg',
    url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f15f7?auto=format&fit=crop&w=1200&q=80',
    title: 'Mamourah Development & Construction OpenGraph'
  }
];

function generateFallbackSvg(title) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" fill="#F2EEE8">
    <rect width="1200" height="800" fill="#F2EEE8"/>
    <rect x="40" y="40" width="1120" height="720" fill="none" stroke="#D8D4CE" stroke-width="2"/>
    <line x1="40" y1="40" x2="1160" y2="760" stroke="#E5E0D8" stroke-width="1"/>
    <line x1="40" y1="760" x2="1160" y2="40" stroke="#E5E0D8" stroke-width="1"/>
    <circle cx="600" cy="380" r="60" fill="#B60012" opacity="0.1"/>
    <text x="600" y="375" text-anchor="middle" font-family="Montserrat, sans-serif" font-size="28" font-weight="700" fill="#171717">${title}</text>
    <text x="600" y="415" text-anchor="middle" font-family="Poppins, sans-serif" font-size="16" fill="#85000C" letter-spacing="4">MAMOURAH ARCHITECTURAL VISUAL</text>
  </svg>`;
}

async function downloadAll() {
  console.log(`Starting image acquisition for ${imageList.length} assets...`);
  for (const item of imageList) {
    const filePath = path.join(targetDir, item.name);
    if (fs.existsSync(filePath) && fs.statSync(filePath).size > 1000) {
      console.log(`✓ Exists: ${item.name}`);
      continue;
    }
    try {
      console.log(`Downloading: ${item.name}...`);
      const response = await fetch(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        },
        signal: AbortSignal.timeout(15000)
      });
      if (response.ok) {
        const arrayBuffer = await response.arrayBuffer();
        fs.writeFileSync(filePath, Buffer.from(arrayBuffer));
        console.log(`✓ Saved: ${item.name} (${(arrayBuffer.byteLength / 1024).toFixed(1)} KB)`);
      } else {
        console.warn(`! Failed HTTP ${response.status} for ${item.name}, writing architectural vector fallback`);
        fs.writeFileSync(filePath.replace('.jpg', '.svg'), generateFallbackSvg(item.title));
      }
    } catch (err) {
      console.warn(`! Error downloading ${item.name}: ${err.message}. Writing fallback.`);
      fs.writeFileSync(filePath.replace('.jpg', '.svg'), generateFallbackSvg(item.title));
    }
  }
  console.log('Image download process finished.');
}

downloadAll();
