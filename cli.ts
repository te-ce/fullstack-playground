import prompts from 'prompts';
import { exec } from 'child_process';

const backends = ['hono'];
const frontends = ['next', 'vue3', 'react'];

async function main() {
  const { backend } = await prompts({
    type: 'select',
    name: 'backend',
    message: 'Choose a backend',
    choices: backends.map((b) => ({ title: b, value: b })),
  });

  const { frontend } = await prompts({
    type: 'select',
    name: 'frontend',
    message: 'Choose a frontend',
    choices: frontends.map((f) => ({ title: f, value: f })),
  });

  if (!backend || !frontend) {
    console.log('Selection cancelled.');
    return;
  }

  const command = `pnpm concurrently -n "${backend},${frontend}" -c "auto" "pnpm run be:${backend} dev" "pnpm run fe:${frontend} dev"`;
  console.log(`Running: ${command}`);

  const child = exec(command);
  child.stdout?.pipe(process.stdout);
  child.stderr?.pipe(process.stderr);
}

main();
