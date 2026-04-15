const fs = require('fs');

function replaceIcons(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [oldIcon, newIcon] of Object.entries(replacements)) {
    // Replace import
    content = content.replace(new RegExp(`\\b${oldIcon}\\b`, 'g'), newIcon);
  }
  fs.writeFileSync(filePath, content);
}

const freteReplacements = {
  'Truck': 'Rocket',
  'ShieldCheck': 'BadgeCheck',
  'MessageCircle': 'Headset',
  'Package': 'Archive',
  'MapPin': 'Navigation',
  'ArrowRight': 'MoveRight',
  'CheckCircle2': 'CheckCircle',
  'Clock': 'Timer',
  'RefreshCcw': 'RotateCcw',
  'Calendar': 'CalendarDays',
  'ShieldAlert': 'TriangleAlert',
  'Smartphone': 'TabletSmartphone',
  'CreditCard': 'Wallet'
};

replaceIcons('/app/politica-de-frete-e-entrega/page.tsx', freteReplacements);

const trocaReplacements = {
  'RefreshCcw': 'RotateCcw',
  'Calendar': 'CalendarDays',
  'ShieldAlert': 'TriangleAlert',
  'Smartphone': 'TabletSmartphone',
  'CreditCard': 'Wallet',
  'Package': 'Archive',
  'MessageCircle': 'Headset',
  'ArrowRight': 'MoveRight',
  'Truck': 'Rocket',
  'CheckCircle2': 'CheckCircle',
  'HeartPulse': 'Activity',
  'ClipboardCheck': 'FileCheck2'
};

replaceIcons('/app/politica-de-troca-e-devolucoes/page.tsx', trocaReplacements);

const privReplacements = {
  'ShieldCheck': 'BadgeCheck',
  'Database': 'HardDrive',
  'UserCheck': 'UserRoundCheck',
  'Cookie': 'Bite',
  'Mail': 'Mails',
  'Lock': 'KeyRound',
  'Heart': 'HeartHandshake',
  'LinkIcon': 'Unlink',
  'MessageCircle': 'Headset',
  'Clock': 'Timer'
};

replaceIcons('/app/politica-de-privacidade/page.tsx', privReplacements);

const termosReplacements = {
  'AlertTriangle': 'TriangleAlert',
  'Shield': 'ShieldHalf',
  'Copyright': 'BookCopy',
  'Store': 'Storefront',
  'UserPlus': 'UserRoundPlus',
  'Heart': 'HeartHandshake',
  'Gavel': 'Scale',
  'Lock': 'KeyRound'
};

replaceIcons('/app/termos-de-servico/page.tsx', termosReplacements);

const notFoundReplacements = {
  'Home': 'House',
  'Droplet': 'Droplets',
  'Search': 'Telescope',
  'ShoppingCart': 'ShoppingBasket',
  'User': 'UserRound',
  'Menu': 'AlignJustify',
  'Heart': 'HeartHandshake',
  'Award': 'Medal',
  'Scissors': 'ScissorsLineDashed',
  'Truck': 'Rocket'
};

replaceIcons('/app/not-found.tsx', notFoundReplacements);

console.log('Done replacing icons');
