import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

const getLatestCommitId = () => {
    const latestCommit = execSync('git rev-parse HEAD').toString().trim();
    return latestCommit;
};

const getLatestCommitName = () => {
    const commitName = execSync('git log -1 --pretty=%B').toString().trim();
    return commitName;
};

const updateJsonFile = (commitId, commitName) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, 'tdd_log.json');
    const commitTimestamp = Date.now();
    const data = { commitId, commitName, commitTimestamp };

    try {
        const fileData = fs.readFileSync(filePath, 'utf8');
        const existingData = JSON.parse(fileData);
        existingData.push(data);
        fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
    } catch (err) {
        if (err.code === 'ENOENT') {
            fs.writeFileSync(filePath, JSON.stringify([data], null, 2));
        } else {
            console.error('Error updating JSON file:', err);
        }
    }
};

const latestCommitId = getLatestCommitId();
const latestCommitName = getLatestCommitName();
updateJsonFile(latestCommitId, latestCommitName);