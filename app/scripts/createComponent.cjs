const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const name = args[0];

if (!name) {
  console.error('\x1b[31mError: Please provide a component name.\x1b[0m');
  console.log('Usage: npm run createComponent -- <Name>');
  process.exit(1);
}

const scriptDir = __dirname;
const componentsDir = path.join(scriptDir, '../src/components');
const folderName = `${name}Component`;
const targetFolder = path.join(componentsDir, folderName);

// Create the component directory if it doesn't exist
if (!fs.existsSync(targetFolder)) {
  fs.mkdirSync(targetFolder, { recursive: true });
  console.log(`\x1b[32mCreated directory: components/${folderName}\x1b[0m`);
} else {
  console.log(`\x1b[33mDirectory already exists: components/${folderName}\x1b[0m`);
}

// Define file names
const tsxFileName = `${name}Component.tsx`;
const scssFileName = `${name}Component.module.scss`;

const tsxPath = path.join(targetFolder, tsxFileName);
const scssPath = path.join(targetFolder, scssFileName);

// Create TSX file with boilerplate
if (!fs.existsSync(tsxPath)) {
  const tsxContent = `import React from 'react';
import styles from './${name}Component.module.scss';


export const ${name}Component: React.FC<${name}ComponentProps> = () => {
  return (
    <div className={styles.container}>
      {/* ${name}Component */}
    </div>
  );
};
`;
  fs.writeFileSync(tsxPath, tsxContent, 'utf8');
  console.log(`\x1b[32mCreated file: ${folderName}/${tsxFileName}\x1b[0m`);
} else {
  console.log(`\x1b[33mFile already exists: ${tsxFileName}\x1b[0m`);
}

// Create SCSS module file with boilerplate
if (!fs.existsSync(scssPath)) {
  const scssContent = `.container {
  // Add styles here
}
`;
  fs.writeFileSync(scssPath, scssContent, 'utf8');
  console.log(`\x1b[32mCreated file: ${folderName}/${scssFileName}\x1b[0m`);
} else {
  console.log(`\x1b[33mFile already exists: ${scssFileName}\x1b[0m`);
}

console.log(`\x1b[36mSuccessfully generated ${name}Component!\x1b[0m`);